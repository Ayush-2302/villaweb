import connection from "../db/db.js";
import AsyncWrap from "../utils/AsyncWrap.js";
import ExpressErr from "../utils/expressError.js";

export const addContact = AsyncWrap(async (req, res) => {
  const { name, email, message } = await req.body;

  console.log(req.body);

  if (!name || !email || !message) {
    throw new ExpressErr(404, "All fields is required", false);
  }

  const q = "INSERT INTO contact(name, email, message) VALUES (?, ?, ?)";
  const values = [name, email, message];

  const [result] = await connection.query(q, values);
  console.log(result);

  if (result.affectedRows === 0) {
    throw new ExpressErr(500, "Something went wrong!", false);
  }

  res.status(200).send({ message: "We will contact you soon", success: true });
});
