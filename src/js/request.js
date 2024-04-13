let requeat = async (resurs) => {
  let req = await fetch(resurs);
  let data = await req.json();
  return data;
};

export default requeat 