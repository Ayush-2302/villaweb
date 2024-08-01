import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";
import listRouter from "./routes/listRouter.js";
import EXpressErr from "./utils/expressError.js";
import villaRouter from "./routes/villaRouter.js";
import cors from "cors";
import reviewRouter from "./routes/reviewRoute.js";
import contactRouter from "./routes/contactRouter.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser("secret_key"));

app.use("/api/user", userRouter);
app.use("/api", listRouter);
app.use("/api/review", reviewRouter);
app.use("/api/villa", villaRouter);
app.use("/api", contactRouter);
app.get("/", async (req, res) => {
  res.cookie("greet", "hello", { signed: true });
  res.send("hello");
});

app.get("/getcookies", async (req, res) => {
  console.log(req.signedCookies);
  const { greet = "announces" } = req.signedCookies;

  res.send("hello cookies " + greet);
});

// Error-handling middleware should be defined after all other middleware and routes

app.all("*", (req, res, next) => {
  next(new EXpressErr(404, "Page Not Found!", false));
});

app.use((err, req, res, next) => {
  let {
    status = 500,
    message = "Internal server issue",
    success = false,
  } = err;
  console.log(err);
  res.status(status).send({ message, success });
});

export default app;
