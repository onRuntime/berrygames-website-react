import React from "react";
import { Link } from "react-router-i18n";

class NavBar extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="navbar container">
					<Link to="/" className="nav-item"><i className="ri-home-4-line" /></Link>
					<a className="nav-item" href="#">
						<i className="ri-gamepad-line" />
					</a>
					<a className="nav-item img" href="#">
						<img
							src="https://cravatar.eu/helmhead/hypixel/512.png"
							alt="berrygames player"
						/>
					</a>
					<a className="nav-item" href="#">
						<i className="ri-line-chart-line" />
					</a>
					<a className="nav-item" href="#">
						<i className="ri-store-line" />
					</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
