import config from '../config'
import { useState, useEffect } from 'react'
const useFetchCat = (people) => {
	const [nextCat, setnextCat] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const handleFetch = async () => {
			try {
				const data = await fetch(
					`${config.REACT_APP_API_BASE}/pets/cat`,
					{ method: 'GET' }
				)
				if (data.error) throw data.error

				const cat = await data.json()
				if (cat) {
					setnextCat(cat)
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
	}, [people, nextCat])

	return { nextCat, error }
}
export default useFetchCat
