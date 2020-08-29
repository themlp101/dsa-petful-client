import React from 'react'
import CatImage from './CatImage'
import CatInfo from './CatInfo'
import './Cat.css'
import useFetchCat from '../../../../hooks/useFetchCat'

export default function Cat({ people, user }) {
	const { nextCat } = useFetchCat(people)

	return (
		<div className='cat__container'>
			<div className='flex__container'>
				<CatImage {...nextCat} />
				<CatInfo {...nextCat} />
				<div>
					<button disabled={people.length > 1}>
						Adopt
					</button>
				</div>
			</div>
		</div>
	)
}
