import React from "react";
import { useDropzone } from "react-dropzone";

export function DropzoneArea() {
  useDropzone();
  const onDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");

    chrome.runtime.sendMessage({
      action: "addToSidePanelByDrag",
      selectedText: data,
    });
  };

  return (
    <div className="pb-1">
      <div
        onDrop={onDrop}
        className={`border-2 text-center text-md border-dotted border-gray-400 p-4 w-full bg-gray-300 `}
      >
        Drag the text here...
      </div>
    </div>
  );
}
