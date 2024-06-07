const express = require("express");
var cors = require("cors");
const app = express();
const port = 1234;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Get - 주소창 ㅇ / Post - 주소창 X
// get > HTTP 메서드
// get(라우팅, 콜백함수)
app.get("/", (req, res) => {
  res.send("Hello Irish!");
});

app.get("/dog", (req, res) => {
  res.json(`{'sound' : '멍멍'}`);
});

app.get("/cat", (req, res) => {
  res.json(`{'sound' : '냥냥'}`);
});

app.get("/pig", (req, res) => {
  res.json(`{'sound' : '꿀꿀'}`);
});

app.get("/animal/:id", (req, res) => {
  const q = req.params;
  console.log(q);

  res.json({ sound: q.id });
});

app.get("/user/:id", (req, res) => {
  const q = req.query;
  console.log(q);

  res.json({ first: q.first });
});
