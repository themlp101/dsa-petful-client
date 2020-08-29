import React, { useEffect } from 'react'
import config from '../../../config'

export default function People({ people }) {
	const servePet = async (pet) => {
		try {
			const data = await fetch(
				`${config.REACT_APP_API_BASE}/pets/${pet}`,
				{
					method: 'DELETE',
				}
			)
			if (data.error) throw data.error
		} catch (error) {
			console.error(error)
		}
	}
	const serveAdopter = async () => {
		try {
			const data = await fetch(
				`${config.REACT_APP_API_BASE}/people`,
				{
					method: 'DELETE',
				}
			)
		} catch (error) {
			console.error(error)
		}
	}
	const hello = () => {
		const id = Math.floor(Math.random() * (10 - 1) + 1)
		if (id > 5) {
			console.log(`DOG ${id}`)
			servePet('dog')
			serveAdopter()
		} else {
			console.log(`CAT ${id}`)
			servePet('cat')
			serveAdopter()
		}
	}
	useEffect(() => {
		let intervalID = setInterval((e) => hello(), 5000)
		return () => {
			clearInterval(intervalID)
		}
	}, [])
	return (
		<div>
			{people &&
				people.map((p, i) => (
					<span key={i} className='person'>
						{p}
					</span>
				))}
		</div>
	)
}
