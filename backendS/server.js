import express from "express";
import session from "express-session";
import flash from "connect-flash";
import { date } from "joi";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "this_is_our_secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now()+7*24*60*60*1000,
      maxAge: 7*24*60*60*1000,
      httpOnly: true
    },
  })
);

app.use(flash());

app.get("/", (req, res) => {
  const { name = "anonyms" } = req.query;
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  req.session.name = name;
  console.log(req.session);
  req.flash("success", "User register successfully");
  //   res.send(`hello ${name} you made ${req.session.count} times request`);
  res.redirect("/hello");
});
app.get("/hello", (req, res) => {
  res.send(`hello ${req.session.name}`);
});

app.listen(5000, () => console.log("server running on port 5000"));
