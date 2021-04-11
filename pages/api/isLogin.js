export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: res.cookirs.a_name })
}
