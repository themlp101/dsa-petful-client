import React from 'react'
import CatImage from './CatImage'
import CatInfo from './CatInfo'
import useFetchCat from './useFetchCat'
import './Cat.css'

export default function Cat() {
	const { nextCat } = useFetchCat()
	return (
		<div className='cat__container'>
			<div className='flex__container'>
				<CatImage {...nextCat} />
				<CatInfo {...nextCat} />
				<div>
					<button>Adopt</button>
				</div>
			</div>
		</div>
	)
}
