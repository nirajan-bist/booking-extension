/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
function updateBadge(count) {
    chrome.action.setBadgeText({ text: count });
}
function generateId() {
    return Math.random().toString(36).substring(2, 12);
}
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "addItemList",
        title: "Send to Side Panel",
        contexts: ["selection"],
    });
    // @ts-ignore
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
    chrome.storage.sync.get("tasks", (obj) => {
        const tasks = obj.tasks;
        updateBadge(tasks.length.toString());
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
            chrome.storage.sync.set({ tasks: tasks }, function () {
                // console.log('added', tasks);
                updateBadge(tasks.length.toString());
            });
        });
    }
}
function handleAddTask(text, websiteUrl) {
    addTask(text, websiteUrl);
    chrome.runtime.sendMessage({ action: "updatePanel" });
}
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "addItemList" && clickData.selectionText) {
        const selectedText = clickData.selectionText.trim();
        const websiteUrl = clickData.pageUrl;
        // console.log({ selectedText, websiteUrl });
        addTask(selectedText, websiteUrl);
        chrome.runtime.sendMessage({ action: "updatePanel" });
    }
});
chrome.commands.onCommand.addListener((command) => {
    if (command === "add-text-to-side-panel") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "addToSidePanel" });
        });
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendUpdated") {
        chrome.runtime.sendMessage({ action: "updatePanel" });
    }
    if (message.action === "sendToContent") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "highlightMatches" });
        });
    }
    if (message.action === "addToSidePanelByDrag") {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, ([currentTab]) => {
            handleAddTask(message.selectedText, currentTab.url);
        });
    }
});


/******/ })()
;
//# sourceMappingURL=background.js.map