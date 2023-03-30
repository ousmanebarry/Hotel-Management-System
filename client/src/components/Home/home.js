import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const HomePage = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [capacity, setCapacity] = useState("");
	const [area, setArea] = useState("");
	const [chainName, setChainName] = useState("");
	const [category, setCategory] = useState("");
	const [roomCount, setRoomCount] = useState("");
	const [price, setPrice] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleReset = () => {
		setCapacity("");
		setArea("");
		setChainName("");
		setCategory("");
		setRoomCount("");
		setPrice("");
	};

	const starArray = (rating) =>
		Array(5)
			.fill()
			.map((_, i) => {
				if (i < rating) {
					return <FaStar key={i} fill="#ffc107" />;
				} else {
					return <FaStar key={i} fill="#ccc" />;
				}
			});

	return (
		<>
			<Row>
				<Col md={4}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="capacity">
							<Form.Label>Capacity</Form.Label>
							<Form.Control
								type="number"
								value={capacity}
								onChange={(event) => setCapacity(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="area">
							<Form.Label>Area</Form.Label>
							<Form.Control
								type="text"
								value={area}
								onChange={(event) => setArea(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="chainName">
							<Form.Label>Chain Name</Form.Label>
							<Form.Control
								as="select"
								value={chainName}
								onChange={(event) => setChainName(event.target.value)}
							>
								<option value="">Any</option>
								<option value="Marriott">Marriott</option>
								<option value="Cardinal">Cardinal</option>
								<option value="Four Seasons">Four Seasons</option>
								<option value="Hilton">Hilton</option>
								<option value="Wyndham">Wyndham</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control
								as="select"
								value={category}
								onChange={(event) => setCategory(event.target.value)}
							>
								<option value="">Any</option>
								<option value="budget">Budget</option>
								<option value="resort">Resort</option>
								<option value="luxury">Luxury</option>
								<option value="motel">Motel</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="roomCount">
							<Form.Label>Room Count</Form.Label>
							<Form.Control
								type="number"
								value={roomCount}
								onChange={(event) => setRoomCount(event.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								value={price}
								onChange={(event) => setPrice(event.target.value)}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Search
						</Button>{" "}
						<Button variant="secondary" type="button" onClick={handleReset}>
							Reset
						</Button>
					</Form>
				</Col>
				<Col md={8}>
					<Row>
						{/* {props.filteredHotels.map((hotel) => {
							return (
								<Col key={hotel.hotelId} md={6} lg={4} className="mb-4">
									<HotelCard hotel={hotel} />
								</Col>
							);
						})} */}
						<Card>
							<Card.Body>
								<Card.Title>{"Cardinal"}</Card.Title>
								<Card.Text>
									<ul>
										<li>Address: {"131 Woodridge Crescent"}</li>
										<li>Price: {"$550"}</li>
										<li>Rating: {starArray(4)}</li>
									</ul>
								</Card.Text>
								<Button variant="primary" onClick={handleShow}>
									More Info
								</Button>
							</Card.Body>
						</Card>

						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>{props.hotelName}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<p>Contact Email: {props.contactEmail}</p>
								<p>Contact Phone: {props.contactPhone}</p>
								<p>Number of Rooms: {props.numRooms}</p>
								<p>Category: {props.category}</p>
								<p>Chain Name: {props.chainName}</p>
								<p>Room Amenities: {props.amenities}</p>
								<p>Room Capacity: {props.capacity}</p>
								<p>Room View: {props.view}</p>
								<p>Extendable: {props.extendable ? "Yes" : "No"}</p>
								<p>Damage: {props.damage}</p>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Button variant="primary" onClick={props.bookRoom}>
									Book Room
								</Button>
							</Modal.Footer>
						</Modal>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default HomePage;
