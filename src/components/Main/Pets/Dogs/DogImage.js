import React from 'react'

export default function DogImage({ imageURL = null }) {
	return (
		<div>
			<img className='dog__image' src={imageURL}></img>
		</div>
	)
}
