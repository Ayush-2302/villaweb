import connection from "../db/db.js";
import AsyncWrap from "../utils/AsyncWrap.js";

export const createReview = AsyncWrap(async (req, res) => {
  const list_id = parseInt(req.params.list_id);
  const { review, rating } = req.body;

  // console.log(list_id, review, rating);

  const q = "INSERT INTO rating (list_id,review,rating) values(?,?,?)";
  const values = [list_id, review, rating];
  const result = await connection.query(q, values);
  console.log(result[0]);
  res.status(201).send({ result: result[0], success: true });
});

export const getbylistid = AsyncWrap(async (req, res) => {
  const list_id = parseInt(req.params.list_id);
  const q = `select * from rating where list_id=?`;
  const values = [list_id];
  const result = await connection.query(q, values);
  // console.log(result[0]);
  res.status(201).send({ result: result[0], success: true });
});

export const getreviewbyid = AsyncWrap(async (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  const q = `select * from rating where id=?`;
  const values = [id];
  const result = await connection.query(q, values);
  // console.log(result[0]);
  res.status(201).send({ result: result[0], success: true });
});

export const deletebyid = AsyncWrap(async (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  const q = `Delete from rating where id=?`;
  const values = [id];
  const result = await connection.query(q, values);
  // console.log(result[0]);
  res.status(201).send({ result: result[0], success: true });
});

export const updatebyid = AsyncWrap(async (req, res) => {
  const id = parseInt(req.params.id);
  const { review, rating } = req.body;
  console.log(id, review, rating);
  const q = "Update rating set review=? , rating=? where id=?";
  const values = [review, rating, id];
  const result = await connection.query(q, values);
  // console.log(result[0]);
  res.status(201).send({ result: result[0], success: true });
});
