const url = "http://localhost:3000/books";
export const readData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

export const createData = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

export const updateData = async (id, data) => {
  const response = await fetch(url + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

export const deleteData = async (id) => {
  const response = await fetch(url + `/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  return "Movie deleted successfully";
};
