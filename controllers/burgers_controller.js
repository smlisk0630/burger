// Dependencies
const express = require("express");

// Import the model to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

//Routes
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const handlebarsObj = {
      burger: data,
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back ID of new burger
      res.render({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: res.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
