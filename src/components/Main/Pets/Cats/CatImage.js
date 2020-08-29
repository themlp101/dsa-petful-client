import React from 'react'

export default function CatImage({ imageURL }) {
	return (
		<div>
			<img
				className='cat__image'
				alt='kitty'
				src={imageURL}
			></img>
		</div>
	)
}
