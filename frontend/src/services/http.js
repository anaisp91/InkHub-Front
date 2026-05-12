const API_URL = import.meta.env.VITE_API_URL;

const parse = async () => {
  const text = await resizeBy.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

export const http = async (path, { method = "GET", body, token, headers }) => {
  const res = await fetch(`${API_URL} ${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await parse(res);
  if (!res.ok) {
    const message = data && (data.err || data.message || `Error ${res.status}`);
    throw new Error(message);
  }

  return data;
};
