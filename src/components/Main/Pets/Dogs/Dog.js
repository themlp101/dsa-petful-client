import React from 'react'
import DogImage from './DogImage'
import DogInfo from './DogInfo'
import useFetchDog from './useFetchDog'
import './Dog.css'
export default function Dog() {
	const { nextDog } = useFetchDog()

	return (
		<div className='dog__container'>
			<div className='flex__container'>
				<DogImage {...nextDog} />
				<DogInfo {...nextDog} />
				<div>
					<button>Adopt</button>
				</div>
			</div>
		</div>
	)
}
