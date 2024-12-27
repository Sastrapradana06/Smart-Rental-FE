const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const POST = async (endpoint, data) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // if (!response.ok) {
  //   const error = await response.json();
  //   console.log(error);

  //   throw new Error(error.error || "Something went wrong");
  // }

  return response.json();
};

export const GET = async (endpoint) => {
  const response = await fetch(`${baseUrl}${endpoint}`);
  return response.json();
};

export const DELETE = async (endpoint, id) => {
  const response = await fetch(`${baseUrl}${endpoint}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
