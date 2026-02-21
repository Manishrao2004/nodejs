const express= require("express")
const app = express();
app.listen(8080);

const user={
name: "chigga",
age: 69
}


app.get("/", (req, res) => {
  res.json(user)
});