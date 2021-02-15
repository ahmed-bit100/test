const express = require("express");
const path = require("path");
const members = require("./api/members");

const app = express();

const logger = (req, res, next) => {
  console.log("hello");
  next();
};

app.get("/", logger, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//static folder
/*app.get('/members/:id', (req, res)=>{
const found= members.some(members => members.id === Number(req.params.id));
if (found){
    res.json(members.filter(members=>members.id === Number(req.params.id)))
}
else {
    res.status(400).json(`No members with the id of ${req.params.id}`)
}

}); */
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
