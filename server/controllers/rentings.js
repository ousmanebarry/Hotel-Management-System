import db from "../db.js";

export const rentingInfo = (req, res) => {
	let q = "SELECT * FROM Renting_View";

	db.query(q, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results);
	});
};

export const deleteRenting = (req, res) => {
	let q = "DELETE FROM Renting WHERE Renting_ID=?";

	db.query(q, req.body.rentingId, (err) => {
		if (err) return res.status(404).json(err);

		res.status(200).json("OK");
	});
};

export const rentNow = (req, res) => {
	let q = "CALL Customer_Renting(?,?,?,?,?,?)";

	const {} = req.body;

	db.query(q, []);
};

export const employeeRooms = (req, res) => {
	let q =
		"SELECT r.*, h.Address, h.Number_Of_Rooms, h.Contact_Email, h.Contact_Phone, h.Category, h.Rating, h.Chain_Name FROM Room r INNER JOIN Employee e ON r.Hotel_ID=? INNER JOIN Hotel h ON r.Hotel_ID=h.Hotel_ID";

	db.query(q, req.body.hotelId, (err, results) => {
		if (err) return res.status(404).json(err);

		res.status(200).json(results);
	});
};
