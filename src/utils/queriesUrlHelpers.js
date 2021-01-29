function parseQueriesObject(queries = {}) {
  let queryString = '?';
  for (const key in queries) {
    queryString += `${key}=${queries[key]}&`;
  }
  return queryString;
}

export { parseQueriesObject };
