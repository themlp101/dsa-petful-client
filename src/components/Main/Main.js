import React from 'react'
import Dog from './Pets/Dogs/Dog'
import './Main.css'
import Cat from './Pets/Cats/Cat'
import ContactForm from './Form/ContactForm'
export default function Main() {
	return (
		<div className='main__container'>
			<ContactForm />
			<Cat />
			<Dog />
		</div>
	)
}
