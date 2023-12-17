export const test = (req, res) => {
  res.json({
    message: "Hello world",
    sender: "Sam Nguyen",
    working: "test api route is working",
  });
};
