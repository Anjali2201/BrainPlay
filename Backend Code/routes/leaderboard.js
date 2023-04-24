var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", async function (req, res, next) {

  let data = [];
  let users;
  try {
    users = await User.find();

    for (let a = 0; a < users.length; a++) {
      let dumm = {
        rank: a,
        username: users[a].name,
        email: users[a].email,
        level: users[a].level,
        points: users[a].points,
        time: users[a].time,
      };
      data.push(dumm);

    }
    data.sort((a, b) => {
      return a.points - b.points;
    });
    for (let a = 0; a < data.length; a++) {
      data[a].rank = a + 1;
    }

  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ data });
});

module.exports = router;
