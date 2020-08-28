import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
	return (
		<div className='form__container'>
			<form className='name__form'>
				<label htmlFor='name'>GET IN LINE</label>
				<input name='name' type='text' />
				<button type='submit'>ADD</button>
			</form>
		</div>
	)
}
