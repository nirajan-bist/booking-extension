/** Utils  for http requests (rest api ) using fetch api*/
export const http = {
  get: async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  },
  post: async (url: string, data: any) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
  put: async (url: string, data: any) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
  delete: async (url: string) => {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  },
};
