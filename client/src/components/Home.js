import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import axios from 'axios';
import AppNavbar from './AppNavbar';
import Card from './Card';
// import Submit from './Submit';

function Home() {
	const [ quiz, setQuiz ] = useState([]);
	useEffect(() => {
		axios.get('/api/quiz').then((res) => setQuiz(res.data)).catch((error) => console.log(error));
	});
	return (
		<div className="Home">
			<Container>
				<AppNavbar />
				<Route to="/" render={() => <Card quiz={quiz} />} />
				{/* <Route to="/" render={() => <Submit quiz={quiz} />} /> */}
			</Container>
		</div>
	);
}

export default Home;
