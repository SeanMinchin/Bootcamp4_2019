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
				//console.log('lat: ', building.coordinates.latitude)
				let coord, addr = '';
				if(typeof building.coordinates !== 'undefined'
					&& !(isNaN(building.coordinates.latitude) || isNaN(building.coordinates.longitude))) {
						coord = building.coordinates.latitude + ', ' + building.coordinates.longitude;
				} else {
					coord = 'n/a';
				}
				if(typeof building.address !== 'undefined' && building.address !== '') {
					addr = building.address;
				} else {
					addr = 'n/a';
				}
				return (
					<div>
						<tr><row><b> Code: </b>{building.code} </row></tr>
						<tr><row><b> Name: </b>{building.name} </row></tr>
						<tr><row><b> Coordinates: </b>{coord} </row></tr>
						<tr><row><b> Address: </b>{addr} </row></tr>
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