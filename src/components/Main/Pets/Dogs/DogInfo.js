import React from 'react'

export default function DogInfo({
	name = null,
	age = null,
	breed = null,
	description = null,
	gender = null,
}) {
	return (
		<div className='info__container'>
			<div className='pet__stats'>
				<ul className='stats__list'>
					<li>Name: {name}</li>
					<li>Age: {age}</li>
					<li>Breed: {breed}</li>
					<li>Gender: {gender}</li>
					<li>Description: {description}</li>
				</ul>
			</div>
		</div>
	)
}
