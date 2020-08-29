import React, { useEffect, useState } from 'react'
import DogImage from './DogImage'
import DogInfo from './DogInfo'
import './Dog.css'
import useFetchDog from '../../../../hooks/useFetchDog'
import config from '../../../../config'
export default function Dog({ people, user }) {
	const { nextDog } = useFetchDog(people)

	return (
		<div className='dog__container'>
			<div className='flex__container'>
				<DogImage {...nextDog} />
				<DogInfo {...nextDog} />
				<div>
					<button disabled={people.length !== 1}>
						Adopt
					</button>
				</div>
			</div>
		</div>
	)
}
