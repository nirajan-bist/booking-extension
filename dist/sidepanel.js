(()=>{"use strict";var e,n,t,a={7739:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(1601),o=t.n(a),r=t(6314),i=t.n(r)()(o());i.push([e.id,"/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.sticky {\n  position: sticky;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-3\\.5 {\n  width: 0.875rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-3\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.875rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.875rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-dotted {\n  border-style: dotted;\n}\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(187 247 208 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.text-gray-50 {\n  --tw-text-opacity: 1;\n  color: rgb(249 250 251 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n/* \nbody {\n    height: 400px;\n    width: 400px;\n} */\n\n.last\\:mb-0:last-child {\n  margin-bottom: 0px;\n}\n",""]);const s=i},2232:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(1601),o=t.n(a),r=t(6314),i=t.n(r)()(o());i.push([e.id,"body {\n  height: 400px;\n  width: auto;\n}\n\n.status-tab {\n  height: calc(100vh - 80px);\n}\n",""]);const s=i},73:(e,n,t)=>{var a=t(6540),o=t(5338),r=t(5072),i=t.n(r),s=t(7825),l=t.n(s),c=t(7659),d=t.n(c),u=t(5056),b=t.n(u),m=t(540),h=t.n(m),p=t(1113),g=t.n(p),f=t(7739),w={};w.styleTagTransform=g(),w.setAttributes=b(),w.insert=d().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=h(),i()(f.A,w),f.A&&f.A.locals&&f.A.locals;var y=t(5497);function v(){return(0,y.VB)(),a.createElement("div",{className:"pb-1"},a.createElement("div",{onDrop:e=>{e.preventDefault();const n=e.dataTransfer.getData("text/plain");chrome.runtime.sendMessage({action:"addToSidePanelByDrag",selectedText:n})},className:"border-2 text-center text-md border-dotted border-gray-400 p-4 w-full bg-gray-300 "},"Drag the text here..."))}const x=e=>{const[n,t]=(0,a.useState)(e),[o,r]=(0,a.useState)(n[0]);return{tabs:n,activeTab:o,activateTab:e=>{const t=n.find((n=>n.id===e));t&&r(t)}}};var _=t(2232),k={};k.styleTagTransform=g(),k.setAttributes=b(),k.insert=d().bind(null,"head"),k.domAPI=l(),k.insertStyleElement=h(),i()(_.A,k),_.A&&_.A.locals&&_.A.locals;var E=t(4353),S=t.n(E),C=t(6279),z=t.n(C),A=t(8027),T=t(2169),j=t(4164);function N(e){chrome.action.setBadgeText({text:e})}S().extend(z());const O=({activateTab:e})=>{const[n,t]=(0,a.useState)([]),[o,r]=(0,a.useState)("");return(0,a.useEffect)((()=>{chrome.runtime.onMessage.addListener((n=>{"updatePanel"===n.action&&chrome.storage.sync.get("tasks",(n=>{const a=n.tasks;a&&(t(a),N(a.length.toString()),e("items"),chrome.runtime.sendMessage({action:"sendToContent"}))}))})),chrome.storage.sync.get("tasks",(e=>{const n=e.tasks;n&&(t(n),N(n.length.toString()))}))}),[]),a.createElement("div",{className:"bg-gray-700 p-4 rounded-md max-w-2xl"},n.map((e=>a.createElement("div",{className:(0,j.A)(" rounded-md p-4 mb-4 last:mb-0 w-full",{"bg-white":"confirmed"===e.type,"bg-green-200":"booked"===e.type}),key:e.id},a.createElement("div",{className:"flex justify-between items-start mb-2"},a.createElement("div",{className:"text-green-600 text-sm"},S()(e.timeAdded).fromNow()),a.createElement("div",{className:"flex items-center space-x-3.5"},a.createElement("button",{onClick:()=>{return n=e.text,t=e.id,void navigator.clipboard.writeText(n).then((()=>{r(t),setTimeout((()=>r("")),2e3)})).catch((e=>console.log("Failed Copy")));var n,t},disabled:o===e.id},o===e.id?a.createElement(A.CMH,{className:"text-green-500 w-3.5 h-3.5"}):a.createElement(A.O6N,{className:"text-gray-700 w-4 h-4"})),a.createElement("button",{onClick:()=>(e=>{const t=n.findIndex((n=>n.id===e));if(-1===t)return;const a=n[t].text,o=a.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/),r=a.match(/\#[a-zA-Z_]\w*/),i=[];o&&i.push(o[0]),r&&i.push(r[0]);const s=i.length>0?`https://mail.google.com/mail/u/0/#search/${i.join(" OR ")}`:"#";chrome.tabs.create({url:s})})(e.id)},a.createElement(T.F4b,{className:"text-gray-500 cursor-pointer w-4 h-4"})),a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},a.createElement(A.iYk,{className:"text-blue-500 cursor-pointer w-4 h-4"})),a.createElement("button",{onClick:()=>(e=>{const a=n.findIndex((n=>n.id===e));if(-1===a)return;const o=n[a],r=n[a].type,i=[...n];"confirmed"===r?(o.type="booked",i[a]=o):i.splice(a,1),t(i),chrome.storage.sync.set({tasks:i},(function(){N(i.length.toString())})),chrome.runtime.sendMessage({action:"sendToContent"})})(e.id)},a.createElement(A.KCX,{className:"text-gray-600 cursor-pointer w-4 h-4"})))),a.createElement("div",{className:"mt-2 text-base"},a.createElement("p",null,e.text))))),n.length<1&&a.createElement("div",{className:"text-gray-50 text-sm text-center"},"Add items to see here!"))};const M=e=>{return n=void 0,t=void 0,o=function*(){const n=yield fetch(e);return yield n.json()},new((a=void 0)||(a=Promise))((function(e,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}l((o=o.apply(n,t||[])).next())}));var n,t,a,o},P=a.createContext(null),F=({children:e})=>{const[n,t]=a.useState({status:[],buy:[],sale:[],bonus:[]});return a.createElement(P.Provider,{value:{data:n,setData:t}},e)};var D=t(770);const R=({value:e,onChange:n,options:t})=>a.createElement(D.Ay.Group,{options:t,onChange:({target:{value:e}})=>{n(e)},value:e,optionType:"button",buttonStyle:"solid"});var I=t(8048),B=t(9834),U=t(279),L=t(1196);const G=({values:e,onChange:n,options:t})=>a.createElement(L.A.Group,{options:t,defaultValue:e,onChange:e=>{n(e)}});const H=[{id:"1h",label:"1 Hr",value:"1h"},{id:"6h",label:"6 Hr",value:"6h"},{id:"1d",label:"1 D",value:"1d"},{id:"7d",label:"7 D",value:"7d"},{id:"total",label:"All",value:"total"}],K=[{id:"buy",label:"Buy",value:"buy"},{id:"sale",label:"Sale",value:"sale"},{id:"bonus",label:"Bonus",value:"bonus"},{id:"available",label:"Available",value:"available"}],Y=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],Z=3e5,$=()=>{const{activeTab:e,activateTab:n}=x(H),[t,o]=a.useState([e.id]),{activeTab:r,activateTab:i}=x(K),{data:s,setData:l}=(()=>{const e=a.useContext(P);if(!e)throw new Error("useDataContext must be used within a DataProvider");return e})(),[c,d]=I.Ay.useMessage(),u=a.useMemo((()=>{const e=s.status.filter((e=>"Active"===e.status)).reduce(((e,n)=>(e[n.email]=n,e)),{}),n=s.buy.filter((n=>e[n.email])),t=s.sale.filter((n=>e[n.email])),a=s.bonus.filter((n=>e[n.email])),o=n.map((n=>{const o=n.email,r=t.find((e=>e.email===o))||{"1h_sale_count":0,"1h_sale_sum":0,"6h_sale_count":0,"6h_sale_sum":0,"1d_sale_count":0,"1d_sale_sum":0,"7d_sale_count":0,"7d_sale_sum":0,total_sale_count:0,total_sale_sum:0},i=a.find((e=>e.email===o))||{"1h_bonus_count":0,"1h_bonus_sum":0,"6h_bonus_count":0,"6h_bonus_sum":0,"1d_bonus_count":0,"1d_bonus_sum":0,"7d_bonus_count":0,"7d_bonus_sum":0,total_bonus_count:0,total_bonus_sum:0};return{email:o,code:e[o].code,"1h_available_count":n["1h_buy_count"]-r["1h_sale_count"]+i["1h_bonus_count"],"1h_available_sum":n["1h_buy_sum"]-r["1h_sale_sum"]+i["1h_bonus_sum"],"6h_available_count":n["6h_buy_count"]-r["6h_sale_count"]+i["6h_bonus_count"],"6h_available_sum":n["6h_buy_sum"]-r["6h_sale_sum"]+i["6h_bonus_sum"],"1d_available_count":n["1d_buy_count"]-r["1d_sale_count"]+i["1d_bonus_count"],"1d_available_sum":n["1d_buy_sum"]-r["1d_sale_sum"]+i["1d_bonus_sum"],"7d_available_count":n["7d_buy_count"]-r["7d_sale_count"]+i["7d_bonus_count"],"7d_available_sum":n["7d_buy_sum"]-r["7d_sale_sum"]+i["7d_bonus_sum"],total_available_count:n.total_buy_count-r.total_sale_count+i.total_bonus_count,total_available_sum:n.total_buy_sum-r.total_sale_sum+i.total_bonus_sum}}));return{buy:n,sale:t,bonus:a,available:o,activeStatusMap:e}}),[s]),b=[{key:"time",dataIndex:"time",title:"Time"},{key:"code",dataIndex:"code",title:"Code",render:(e,{code:n,coupon:t,key:o})=>a.createElement(B.A,{color:Y[parseInt(o)%Y.length],className:"cursor-pointer",onClick:()=>{var e;e=t,navigator.clipboard.writeText(e).then((()=>{})).catch((e=>console.log("Failed Copy"))),c.success(`Copied! ${t}`)}},n)},{key:"count",dataIndex:"count",title:"Count"},{key:"sum",dataIndex:"sum",title:"Sum"}],[m,h]=a.useState([]),[p,g]=a.useState(!1),f=a.useCallback((()=>{return e=void 0,n=void 0,a=function*(){try{g(!0);const e=yield M("https://script.google.com/macros/s/AKfycbxYIPxrVMF5eFdwvow1PCYSwYDLHsN0mdtf2w3ufgsfbAaVL88j72GjBhBaNhGL2F-c2g/exec"),n=yield M("https://script.google.com/macros/s/AKfycbxxQu_U_tiTbBB1dntgGuISjbhC_5X4uw-47xO8O1-jcZbzOGJaBbdR6-DFtKVld3Qk1Q/exec"),t={status:e,buy:n,sale:yield M("https://script.google.com/macros/s/AKfycbxahzbkZKRytcRB8BuzEO_PNaGoT0DPcKi3AdTLFzkcNp7xISsXeUPzD5XmuJVfiCFXug/exec"),bonus:yield M("https://script.google.com/macros/s/AKfycbwMCp7knj9-YMrAG2Xf5haYBRRBkYbZqmmSZHdWgHMxh4f59kwBGPPfY-p6EGchH5wM8w/exec")};l(t),chrome.storage.local.set({salesData:t,lastFetched:Date.now()})}catch(e){console.log("Error fetching data",e)}finally{g(!1)}},new((t=void 0)||(t=Promise))((function(o,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function s(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,s)}l((a=a.apply(e,n||[])).next())}));var e,n,t,a}),[]);return a.useEffect((()=>{let e=null;const n=()=>chrome.storage.local.get((t=>{const{salesData:a,lastFetched:o}=t;a&&l(a),a&&o&&Date.now()-o<Z?(l(a),clearTimeout(e),e=setTimeout(n,Z-(Date.now()-o))):(f(),clearTimeout(e),e=setTimeout(n,Z))}));return n(),()=>{clearTimeout(e)}}),[]),a.useEffect((()=>{const e=u[r.id];let n=[];t.forEach(((t,a)=>{n=n.concat(e.map(((e,n)=>({key:`${a}${n}`,time:t,email:e.email,code:u.activeStatusMap[e.email].code,coupon:u.activeStatusMap[e.email].coupon,count:e[`${t}_${r.id}_count`],sum:parseFloat(e[`${t}_${r.id}_sum`]).toFixed(2)}))))})),h(n)}),[e,r,u,t]),a.createElement("div",{className:"status-tab overflow-auto"},d,a.createElement("div",{className:"sticky top-0 backdrop-blur-sm z-10"},a.createElement("div",{className:"mb-4 flex justify-center "},a.createElement(R,{value:r.value,options:K,onChange:e=>i(e)})),a.createElement("div",{className:"mb-4 flex justify-center"},a.createElement(G,{values:t,options:H,onChange:e=>{o(e)}}))),p&&a.createElement("div",{className:"text-center font-semibold text-base"},"Loading..."),a.createElement("div",null,a.createElement(U.A,{columns:b,dataSource:m,size:"small",pagination:{pageSize:15}})))},V=[{id:"items",label:"Items",value:"items"},{id:"status",label:"Status",value:"status"}],X=()=>{const{activeTab:e,activateTab:n}=x(V);return a.createElement("div",{className:"py-2"},a.createElement("div",{className:"sticky top-0 backdrop-blur-sm"},a.createElement("div",{className:"flex justify-center mb-4 text-sm"},a.createElement(R,{value:e.id,options:V,onChange:e=>n(e)})),"items"===e.id&&a.createElement(v,null)),"items"===e.id?a.createElement(O,{activateTab:n}):"status"===e.id?a.createElement($,null):void 0)};!function(){const e=document.createElement("div");if(document.body.appendChild(e),!e)throw new Error("Can not find AppContainer");const n=(0,o.H)(e);console.log(e),n.render(a.createElement(F,null,a.createElement(X,null)))}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.exports}r.m=a,e=[],r.O=(n,t,a,o)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){for(var[t,a,o]=e[d],s=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,a,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var i={};n=n||[null,t({}),t([]),t(t)];for(var s=2&a&&e;"object"==typeof s&&!~n.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((n=>i[n]=()=>e[n]));return i.default=()=>e,r.d(o,i),o},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={796:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var a,o,[i,s,l]=t,c=0;if(i.some((n=>0!==e[n]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var d=l(r)}for(n&&n(t);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},t=self.webpackChunkbooking_extension=self.webpackChunkbooking_extension||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.nc=void 0;var i=r.O(void 0,[645],(()=>r(73)));i=r.O(i)})();