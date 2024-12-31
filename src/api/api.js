const baseUrl = import.meta.env.VITE_API_BASE_URL;
import Cookies from "js-cookie";

export const POST = async (endpoint, data) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const GET = async (endpoint) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response.json();
};

export const DELETE = async (endpoint, id) => {
  const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const PUT = async (endpoint, data) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
