/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentScript/index.ts":
/*!************************************!*\
  !*** ./src/contentScript/index.ts ***!
  \************************************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const key = "Shift"; // Change to whatever Control, Alt etc
let isKeyPressed = false;
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("mouseup", handleMouseUp);
function generateId() {
    return Math.random().toString(36).substring(2, 12);
}
const getTasks = () => new Promise((res, rej) => {
    chrome.storage.sync.get("tasks", (data) => {
        const tasks = data.tasks || [];
        res(tasks);
    });
});
function addTask(taskText, websiteUrl) {
    if (taskText.trim() !== "") {
        chrome.storage.sync.get("tasks", function (data) {
            const tasks = data.tasks || [];
            const timeAdded = Date.now();
            const id = generateId();
            const type = "confirmed"; // or 'booked'
            const isDuplicate = tasks.find((t) => t.text === taskText);
            if (isDuplicate)
                return;
            tasks.unshift({
                text: taskText,
                website: websiteUrl,
                timeAdded: timeAdded,
                id,
                type,
            });
            chrome.storage.sync.set({ tasks: tasks });
        });
    }
}
function runScript(message, sender, sendResponse) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = message.action;
        console.log(message);
        if (action === "addToSidePanel") {
            const selectedText = message.value || window.getSelection().toString();
            const websiteUrl = location.href;
            console.log("got it");
            addTask(selectedText, websiteUrl);
            chrome.runtime.sendMessage({ action: "sendUpdated" });
        }
        if (action === "highlightMatches") {
            const host = location.host;
            if (host === "mail.google.com")
                highlightMatches();
        }
    });
}
chrome.runtime.onMessage.addListener(runScript);
const regexPattern = /[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/g; // Update pattern as per requirement
function extractMatches(data) {
    const matchList = [];
    data.forEach((item) => {
        const matches = item.text.match(regexPattern);
        if (matches) {
            matchList.push(...matches);
        }
    });
    return matchList;
}
function highlightMatches() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = yield getTasks();
        const matches = extractMatches(tasks);
        // console.log('matches', matches);
        const subjectElements = document.querySelectorAll(".bog");
        subjectElements.forEach((subjectElement) => {
            let hasHighlight = false;
            matches.forEach((email) => {
                if (subjectElement.textContent.includes(email)) {
                    hasHighlight = true;
                    subjectElement.style.backgroundColor = "yellow";
                    subjectElement.style.fontWeight = "bold";
                }
            });
            if (!hasHighlight) {
                subjectElement.style.backgroundColor = "";
                subjectElement.style.fontWeight = "";
            }
        });
    });
}
const observer = new MutationObserver(highlightMatches);
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(highlightMatches, 3000); // Delay to ensure Gmail's dynamic content has
    document.addEventListener("dragstart", (event) => {
        const selection = window.getSelection().toString();
        if (selection.length > 0) {
            // event.dataTransfer.setData("text/plain", selection + "sdf");
        }
    });
});
function sendItemToSidePanel() {
    var _a;
    if (window.getSelection && ((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.type) === "Range") {
        const selectedText = window.getSelection().toString();
        const websiteUrl = location.href;
        addTask(selectedText, websiteUrl);
        chrome.runtime.sendMessage({ action: "sendUpdated" });
    }
}
function handleKeyDown(event) {
    if (event.key === key) {
        isKeyPressed = true;
        checkTextSelection();
    }
}
function handleMouseUp() {
    checkTextSelection();
}
function checkTextSelection() {
    const selectedText = window.getSelection().toString().trim();
    if (isKeyPressed && selectedText.length > 0) {
        const websiteUrl = location.href;
        addTask(selectedText, websiteUrl);
        chrome.runtime.sendMessage({ action: "sendUpdated" });
    }
}
// Reset key status on keyup
document.addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
        isKeyPressed = false;
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/contentScript/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=contentScript.js.map