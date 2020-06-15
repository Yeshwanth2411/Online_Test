import React from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Container, Button } from 'reactstrap';

function validate(evt) {
	console.log(evt.target.value);
	console.log(evt.target.name);
	var count = 0;
	if (evt.target.name === evt.target.value) {
		count = count + 1;
	}
	console.log(count);
}

const Cards = ({ quiz }) => {
	return (
		<div>
			{quiz.map((question, key) => (
				<Card>
					<CardBody>
						<CardTitle>
							{question.qid}. {question.question}
						</CardTitle>
						<FormGroup check>
							<Label check>
								<Input type="radio" name={question.correctAnswer} value={question.options[0]} />
								{question.options[0]}
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name={question.correctAnswer} value={question.options[1]} />
								{question.options[1]}
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name={question.correctAnswer} value={question.options[2]} />
								{question.options[2]}
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name={question.correctAnswer} value={question.options[3]} />
								{question.options[3]}
							</Label>
						</FormGroup>
					</CardBody>
				</Card>
			))}
			<Button color="primary" onClick={validate}>
				Submit
			</Button>
		</div>
	);
};

export default Cards;
