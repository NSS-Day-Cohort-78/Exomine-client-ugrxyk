export const getMinerals = async () => {
  return fetch(`http://localhost:8088/minerals`).then((res) => res.json());
};
