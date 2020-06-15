import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, NavLink, Container } from 'reactstrap';

const AppNavbar = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" light expand="md">
				<Container>
					<NavbarBrand href="/">Quiz</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<NavLink href="/Logout/">Sign out</NavLink>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
