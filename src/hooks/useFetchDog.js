import config from '../config'
import { useState, useEffect } from 'react'
const useFetchDog = (people) => {
	const [nextDog, setNextDog] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const handleFetch = async () => {
			try {
				const data = await fetch(
					`${config.REACT_APP_API_BASE}/pets/dog`,
					{ method: 'GET' }
				)
				if (data.error) throw data.error

				const dog = await data.json()

				if (dog) {
					setNextDog(dog)
				}
			} catch (error) {
				setError(error)
				console.error(error)
			}
		}

		handleFetch()
		return () => {
			//
		}
	}, [people, nextDog])

	return { nextDog, error }
}
export default useFetchDog
