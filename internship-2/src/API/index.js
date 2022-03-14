const app = require("express")();
const bodyParser = require("body-parser");
const core = require("cors");
const mysql = require("mysql");
app.use(core());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Running on port 5000");
});

const con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "ayush",
});

con.connect((err) => {
  if (err) {
    console.log("NOT");
  } else {
    console.log("connected  hello");
  }
});

//Login Api
app.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  if (email == null || pass == null) {
    res.send("Enter Email/Password");
  }
  con.query(
    "SELECT Email_Address, Password FROM users.user WHERE Email_Address = ? and Password = ?",
    [email, pass],
    (err, result) => {
      if (err) {
        res.send({ err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send("Not Found");
      }
    }
  );
});

//Registration Api
app.post("/register", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const first = req.body.first_name;
  const last = req.body.last_name;
  con.query(
    "INSERT INTO users.user (Email_Address,Password,First_name,Last_Name) VALUES (?,?,?,?)",
    [email, pass, first, last],
    (error, result) => {
      if (error) {
        res.send({ error });
      }
      if (result) {
        res.send(result);
      } else {
        res.send("try again");
      }
    }
  );
});

//Forget Password Api
app.post("/forgetpassword", (req, res) => {
  const body = req.body;
  con.query(
    "UPDATE users.user SET Password = ? WHERE Email_Address = ? ",
    [body.pass, body.email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result) {
        res.send("Password Successfully Changed, Now you can login");
      } else {
        res.send("Email Not Found");
      }
    }
  );
});

//Forget Password Email
app.post("/email", (req, res) => {
  const email = req.body.email;
  con.query(
    "SELECT * FROM users.user WHERE Email_Address = ?"
  ,
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result) {
        res.send(result);
      } else {
        res.send("Not Found");
      }
    });
});
