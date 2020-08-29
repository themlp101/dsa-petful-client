import React from 'react'
import config from '../config'

export default function useAdopt() {
	const [adoptError, setAdoptError] = useState(null)
	const handleAdopt = async (pet) => {
		try {
			const data = await fetch(
				`${config.REACT_APP_API_BASE}/pets/${pet}`,
				{
					method: 'DELETE',
				}
			)
			if (data.error) throw data.error
		} catch (error) {
			setAdoptError(error)
		}
	}
	return {}
}
