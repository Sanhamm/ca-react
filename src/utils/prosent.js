const Prosent = (a, b) => {
  const math = a - b;
  const prosent = Math.round((math / a) * 100);
  console.log(prosent);
  return { prosent };
};

export default Prosent;
