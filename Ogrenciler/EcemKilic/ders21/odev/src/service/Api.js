const url = "http://localhost:3000/toDoList";

export const getAllToDoDB = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Veri alınamadı.");
  }
  const result = await response.json();
  return result;
};

export const addToDoDB = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Veri alınamadı.");
  }
  const result = await response.json();
  return result;
};

export const updateToDoDB = async (data, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Veri alınamadı.");
  }
};

export const deleteToDoDB = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Veri alınamadı.");
  }
  return "Nesne silindi.";
};
