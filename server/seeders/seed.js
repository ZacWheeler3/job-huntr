const db = require("../config/connection");
const { User, Job, ComLog } = require("../models");
const userSeeds = require("./userSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Job", "jobs");

    await cleanDB("User", "users");

    await cleanDB("ComLog", "comlogs");

    await cleanDB("CommonQuestions", "commonquestions");

    await cleanDB("Contact", "contacts");

    await cleanDB("EmploymentTerms", "employmentterms");

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
