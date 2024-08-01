import connection from "../db/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { userSchemaValidator } from "../utils/schemaValidator.js";
import AsyncWrap from "../utils/AsyncWrap.js";
import jwt from "jsonwebtoken";
import EXpressErr from "../utils/expressError.js";
import {
  sendResetPasswordEmail,
  sendVerificationEmail,
} from "../utils/NodeMailer.js";
const JWT_SECRET = "dflajeroquwerdmnsvljna6749";
import path from "path";
import { sign } from "crypto";

export const getAllUsers = AsyncWrap(async (req, res) => {
  console.log(req.body, "requesd");
  const [rows] = await connection.query("SELECT * FROM vuser");
  res.status(200).json(rows);
});

export const createUser = AsyncWrap(async (req, res) => {
  const { name, email, password } = await req.body;
  const id = uuidv4();
  const reqResult = userSchemaValidator.validate(await req.body);
  if (reqResult.error) {
    throw new EXpressErr(404, reqResult.error.message, false);
  }
  const secPassword = await bcrypt.hash(password, 10);
  const value = [id, name, email, secPassword];
  const q = `INSERT INTO vuser (id, name, email, password)
      VALUES (?, ?, ?, ?)`;
  const [result] = await connection.query(q, value);
  console.log(result);

  return res
    .status(201)
    .json({ message: "user created successfully", success: true, result });
});

export const loginUser = AsyncWrap(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new EXpressErr(404, "Email or password is required", false);
  }

  const q = "SELECT * FROM vuser WHERE email = ?";
  const values = [email];

  const [rows] = await connection.query(q, values);
  // console.log(rows);
  if (rows.length === 0) {
    throw new EXpressErr(404, "User not found", false);
  }

  const user = rows[0];
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new EXpressErr(401, "Invalid password", false);
  }

  const authToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
  console.log(authToken);

  res.cookie("authToken", authToken, {
    signed: true,
    httpOnly: true,
    maxAge: 3600000,
  });
  const { auToken } = req.signedCookies;
  console.log(auToken);
  // console.log(req.signedCookies);
  res.status(201).json({ user, success: true, authToken });
});

export const resetPassword = AsyncWrap(async (req, res) => {
  const { password, confirmPassword } = req.body;
  const token = req.query;

  if (!token || !password || !confirmPassword) {
    throw new EXpressErr(400, "All fields are required", false);
  }

  if (password !== confirmPassword) {
    throw new EXpressErr(400, "Passwords do not match", false);
  }

  let decoded;

  decoded = jwt.verify(token, JWT_SECRET);
  if (!decoded.id) {
    throw new EXpressErr(400, "Invalid or expired token", false);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = "UPDATE vuser SET password = ? WHERE id = ?";
  const values = [hashedPassword, decoded.id];

  try {
    const [result] = await connection.query(query, values);
    if (result.affectedRows === 0) {
      throw new EXpressErr(404, "User not found", false);
    }
    res.status(200).json({ message: "Password reset successfully!" });
  } catch (err) {
    throw new EXpressErr(500, "Database error", false);
  }
});
