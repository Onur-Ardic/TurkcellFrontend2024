export const checkValidQuery = (queries) => {
    return queries.filter((query) => query !== "").length > 0;
  };
  
  export const convertStringToQueriesObject = (searchParams) => {
    let selectedQueries = {};
    searchParams.forEach((values, key) => {
      const queries = values.split("|");
      if (selectedQueries[key]) {
        selectedQueries[key].push(...queries);
      } else {
        selectedQueries[key] = queries;
      }
    });
    return selectedQueries;
  };
  
  export const convertValidStringQueries = (queries) => {
    let q = "";
    for (let [key, value] of Object.entries(queries)) {
      q = q + `${q === "" ? "" : "&"}${key}=${value.join("|")}`;
    }
    return q;
  };

  export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)
  return `${date.toLocaleDateString('en-US', options)}`
}