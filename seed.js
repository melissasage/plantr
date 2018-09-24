const db = require("./models");

db.sync({ force: true })
  .then(() => {
    console.log("Sync successful");
  })
  .catch(err => {
    console.log("Something went wrong!");
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
