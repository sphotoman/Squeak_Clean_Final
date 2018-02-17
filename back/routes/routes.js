const db = require('../config/db');
const path = require('path');

module.exports = (app, db) => {
		app.get('/' , (req, res) => {
			res.sendFile(path.join(__dirname, "../build/index.html"));
		});
		app.post('/service' , (req, res) => {
			let data={

				date: req.body.date,
				time: req.body.time,
				location: req.body.location,
				car: req.body.car,
				plate: req.body.plate

			};
			console.log(data);

			db.query("INSERT INTO appointment SET ?", data, (err, rows) => {
				if(err) {
							res.send({err: 'There was a problem'})
						} else {
							res.send("Your service has been scheduled. Thank you!")
						}
			})
		});
		app.post('/contact' , (req, res) => {
			let data=req.body;
			console.log(data);
			res.send("Thank you for your feedback!")
		});
}