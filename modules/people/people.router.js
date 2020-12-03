const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
	// Return all the people currently in the queue.
	const people = People.get();
	res.json(people);
});

router.post("/", json, (req, res) => {
	// Add a new person to the queue.
	const person = People.enqueue(req.body.name);
	res.json({ person });
});

module.exports = router;
