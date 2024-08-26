export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch((err) => console.log("Failed Copy"));
};
