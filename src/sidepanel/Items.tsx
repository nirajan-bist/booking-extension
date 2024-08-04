import React, { useEffect, useState } from "react";
import "./sidepanel.css";
import { TASK } from "../background/background";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaFacebook, FaRegTimesCircle, FaCheck } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DropzoneArea } from "./DropzoneArea";
import clsx from "clsx";
import useTab, { Tab } from "../hooks/useTab";

dayjs.extend(relativeTime);

function updateBadge(count: string) {
  chrome.action.setBadgeText({ text: count });
}

type Props = {
  activateTab: (tabId: string) => void;
};

const Items = ({ activateTab }: Props) => {
  const [data, setData] = useState<TASK[]>([]);
  const [copiedItemId, setCopiedItemId] = useState("");

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === "updatePanel") {
        chrome.storage.sync.get("tasks", (obj) => {
          const tasks = obj.tasks;
          setData(tasks);
          updateBadge(tasks.length.toString());
          activateTab("items");
          chrome.runtime.sendMessage({ action: "sendToContent" });
        });
      }
    });

    chrome.storage.sync.get("tasks", (obj) => {
      const tasks = obj.tasks;
      setData(tasks);
      updateBadge(tasks.length.toString());
    });
  }, []);

  const handleClipboard = (text: string, id: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedItemId(id);
        setTimeout(() => setCopiedItemId(""), 2000);
      })
      .catch((err) => console.log("Failed Copy"));
  };

  const handleClose = (id: string) => {
    const index = data.findIndex((i) => i.id === id);
    if (index === -1) return;

    const item = data[index];
    const itemType = data[index].type;
    const newData = [...data];
    if (itemType === "confirmed") {
      item.type = "booked";
      newData[index] = item;
    } else {
      newData.splice(index, 1);
    }

    setData(newData);
    chrome.storage.sync.set({ tasks: newData }, function () {
      updateBadge(newData.length.toString());
    });

    chrome.runtime.sendMessage({ action: "sendToContent" });
  };

  const handleGoogle = (id: string) => {
    const index = data.findIndex((i) => i.id === id);
    if (index === -1) return;

    const item = data[index];
    const itemText = item.text;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const phonePattern = /\#[a-zA-Z_]\w*/;

    const emailMatch = itemText.match(emailPattern);
    const phoneMatch = itemText.match(phonePattern);

    const searchQueries = [];
    if (emailMatch) searchQueries.push(emailMatch[0]);
    if (phoneMatch) searchQueries.push(phoneMatch[0]);

    const url =
      searchQueries.length > 0
        ? `https://mail.google.com/mail/u/0/#search/${searchQueries.join(
            " OR "
          )}`
        : "#";

    chrome.tabs.create({ url });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-md max-w-2xl">
      {data.map((item) => (
        <div
          className={clsx(" rounded-md p-4 mb-4 last:mb-0 w-full", {
            "bg-white": item.type === "confirmed",
            "bg-green-200": item.type === "booked",
          })}
          key={item.id}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="text-green-600 text-sm">
              {dayjs(item.timeAdded).fromNow()}
            </div>
            <div className="flex items-center space-x-3.5">
              <button
                onClick={() => handleClipboard(item.text, item.id)}
                disabled={copiedItemId === item.id}
              >
                {copiedItemId === item.id ? (
                  <FaCheck className="text-green-500 w-3.5 h-3.5" />
                ) : (
                  <FaRegClipboard className="text-gray-700 w-4 h-4" />
                )}
              </button>
              <button onClick={() => handleGoogle(item.id)}>
                <FcGoogle className="text-gray-500 cursor-pointer w-4 h-4" />
              </button>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-500 cursor-pointer w-4 h-4" />
              </a>
              <button onClick={() => handleClose(item.id)}>
                <FaRegTimesCircle className="text-gray-600 cursor-pointer w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-2 text-base">
            <p>{item.text}</p>
          </div>
        </div>
      ))}

      {data.length < 1 && (
        <div className="text-gray-50 text-sm text-center">
          Add items to see here!
        </div>
      )}
    </div>
  );
};

export default Items;
