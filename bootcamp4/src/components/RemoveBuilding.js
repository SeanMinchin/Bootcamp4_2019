import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
		const { removedUpdate, selectedBuilding } = this.props;

		//console.log('selected building: ',selectedBuilding)

		return (
			<div>
				<p>
					{' '}
					<button onClick={() => removedUpdate(selectedBuilding)}>
					<i>Click here to remove selected building</i>
					</button>
				</p>
			</div>
		);
	}
}

export default RemoveBuilding;