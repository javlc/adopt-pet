const fetchPet = async ({ queryKey }) => {
  console.log("Called fetchPet!! :>> ");
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  console.log("apiRes :>> ", apiRes);
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok.`);
  }

  // Return a promise here (need not await the json here)
  return apiRes.json();
};

export default fetchPet;
