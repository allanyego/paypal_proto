import { config } from "./config";

const { URL, TOKEN } = config;

export const request = async ({ method, url, body, headers }) => {
  const endpoint = URL + url;
  const { requireAuth, ...rest } = headers;
  if (requireAuth) {
    rest.Authorization = `Bearer ${TOKEN}`;
  }

  return await fetch(endpoint, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
      ...rest,
    },
  });
};
