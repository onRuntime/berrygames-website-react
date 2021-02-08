import React from "react";
import Footer from "./Footer";

class Page extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="profile-content">
					<div className="profile-wrapper">
						<div className="profile-container">
							<h1>{this.props.title}</h1>
						</div>
					</div>
				</div>
				<div className="page-content container">
					<div className="page-container">{this.props.children}</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default Page;
