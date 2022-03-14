const express = require("express");
const cors = require("cors");
const client = require("./db");

const app = express();
app.use(express.json());
app.use(cors({}));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).json({ message: "loan application" });
});

app.post("/insert", async (req, res) => {
  await client.connect();

  const database = client.db("Loan");
  const person = database.collection("Person");

  const data = req.body;

  const result = await person.insertOne(data);

  await client.close();
  return res
    .status(200)
    .json({ message: "Person data successfully insterted" });
});

app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});
