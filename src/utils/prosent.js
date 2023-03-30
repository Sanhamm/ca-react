const Prosent = (a, b) => {
  const math = a - b;
  const prosent = Math.round((math / a) * 100);
  return { prosent };
};

export default Prosent;
