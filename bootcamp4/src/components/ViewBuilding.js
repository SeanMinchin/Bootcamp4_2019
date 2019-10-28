import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		//console.log('building id:', selectedBuilding);

		const buildingInfo = data
			.filter(building => {
				return building.id === selectedBuilding
			})
			.map(building => {
				return (
					<div>
						<tr><row><b> Code: </b>{building.code} </row></tr>
						<tr><row><b> Name: </b>{building.name} </row></tr>
						<tr><row><b> Coordinates: </b>{building.coordinates.latitude}, {building.coordinates.longitude} </row></tr>
						<tr><row><b> Address: </b>{building.address} </row></tr>
					</div>
				);
			});

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					<ul>{buildingInfo}</ul>
				</p>
			</div>
		);
	}
}

export default ViewBuilding;