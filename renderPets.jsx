import React from 'react'

const renderPets = ({ pets }) => {
	if (pets && pets.length > 0) {
		const petTypes = pets.map(pet => <Span>{pet.type}</Span>)
		return (
			<list>
				{petTypes}
			</list>
		)
  	}
	return (
  		<Error message={'No Pets'}>
	)
}
export default renderPets
