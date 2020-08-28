import config from '../../../../config'
import { useState, useEffect } from 'react'
const useFetchCat = () => {
	const [nextCat, setnextCat] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const handleFetch = async () => {
			try {
				const data = await fetch(
					`${config.REACT_APP_API_BASE}/pets/cat`
				)
				if (data.error) throw data.error

				const cat = await data.json()
				if (cat) {
					setnextCat(cat)
				}
				console.log(cat)
			} catch (error) {
				setError(error)
				console.error(error)
			}
		}

		handleFetch()
		return () => {
			//
		}
	}, [])

	return { nextCat, error }
}
export default useFetchCat
