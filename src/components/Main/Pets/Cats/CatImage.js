import React from 'react'

export default function CatImage({ imageURL }) {
	return (
		<div>
			<img className='cat__image' src={imageURL}></img>
		</div>
	)
}
