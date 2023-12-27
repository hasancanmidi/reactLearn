import React from "react";
import {Menu} from "semantic-ui-react";
import {Link, useNavigate} from "react-router-dom";

function Navbar() {
	//const navigate = useNavigate();

	return (
		<Menu>
			<Menu.Item as={Link} to={"/"}>
				Ana Sayfa
			</Menu.Item>
			<Menu.Item as={Link} to={"/posts"}>
				Postlar
			</Menu.Item>
		</Menu>
	);
}

export default Navbar;

// local storage
// global state management (redux,context API)