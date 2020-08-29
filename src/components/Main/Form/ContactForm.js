import React, { useEffect } from 'react'
import './ContactForm.css'
import People from '../People/People'

export default function ContactForm({
	people,
	addPerson,
	newPerson,
	setNewPerson,
}) {
	let peopleList
	if (people && people.length > 1) {
		peopleList = <People people={people} newPerson={newPerson} />
	} else {
		peopleList = `You're next!`
	}

	return (
		<div className='form__container'>
			<form className='name__form' onSubmit={addPerson}>
				<label htmlFor='name'>GET IN LINE</label>
				<input
					name='name'
					type='text'
					value={newPerson}
					onChange={(e) => setNewPerson(e.target.value)}
					required
				/>
				<button type='submit' disabled={people.length === 1}>
					ADD
				</button>
			</form>

			{peopleList}
		</div>
	)
}
