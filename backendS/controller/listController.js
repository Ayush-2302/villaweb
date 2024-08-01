import connection from "../db/db.js";
import AsyncWrap from "../utils/AsyncWrap.js";
import expressError from "../utils/expressError.js";

export const createList = async (req, res) => {
  try {
    const q =
      "INSERT INTO listing (title, description, price) VALUES (?, ?, ?)";
    const { title, description, price } = req.body;
    const values = [title, description, price];
    const lists = await connection.query(q, values);
    console.log(lists[0]);
    res
      .status(201)
      .send({ message: "user created successfully ", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message, success: false });
  }
};

export const fetchAllList = AsyncWrap(async (req, res, next) => {
  const q = "SELECT * FROM LISTING";
  const lists = await connection.query(q);
  if (!lists) {
    throw new expressError(404, "Not able to find villas", false);
  }
  console.log(lists[0]);
  res.status(201).send({ result: lists[0], success: true });
});

export const fetchById = AsyncWrap(async (req, res, next) => {
  const { id } = req.params;
  const q = `SELECT * FROM LISTING WHERE ID ='${id}'`;
  const lists = await connection.query(q);
  if (!lists) {
    throw new expressError(404, "Not able to find villa", false);
  }
  console.log(lists[0]);
  res.status(201).send({ result: lists[0], success: true });
});
