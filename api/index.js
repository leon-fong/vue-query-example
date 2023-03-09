export default async (req, res) => {
  const data = {
    msg: 'Hello world!',
  }

  res.status(200).json(data)
}
