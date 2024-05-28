const url = "http://localhost:3000/todos";
export const get = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

export const post = async (data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

export const update = async (id, data) => {
  const response = await fetch(url + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

export const deleteData = async (id) => {
  const response = await fetch(url + `/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  return "Deleted";
};

export const getOptions = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  let options = new Set();
  result.forEach((toDo) => {
    options.add(toDo.categories);
  });
  console.log(options.size, "length");
  if (options.size < 4) {
    options = ["On Hold", "To Do", "In Progress", "Done"];
  }
  return Array.from(options);
};

export const getFiltered = async (category) => {
  const response = await fetch(url + `?categories=${category}`);
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};
