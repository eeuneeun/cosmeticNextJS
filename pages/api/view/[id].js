export default (req, res) => {
  res.statusCode = 200;
  res.json({id : req.query.id});
  // res.status(200).json({ name: 'null' })
}
  