import React from 'react';

class AddBuilding extends React.Component {
	render() {
		const { addedUpdate } = this.props;
		return (
			<div>
				<i>Fill in the below properties to add a building</i>
				<p></p>
				<form>
					<input
					type="text"
					placeholder="Enter code"
					ref={ (code) => this.code = code }
					/>
				</form>
				<form>
					<input
					type="text"
					placeholder="Enter name"
					ref={ (name) => this.name = name }
					/>
				</form>
				<form>
					<input
					type="text"
					placeholder="Enter latitude"
					ref={ (latitude) => this.latitude = latitude }
					/>
				</form>
				<form>
					<input
					type="text"
					placeholder="Enter longitude"
					ref={ (longitude) => this.longitude = longitude }
					/>
				</form>
				<form>
					<input
					type="text"
					placeholder="Enter address"
					ref={ (address) => this.address = address }
					/>
				</form>
				<p>
					{' '}
					<button onClick={() => addedUpdate(
						this.code.value,
						this.name.value,
						this.latitude.value,
						this.longitude.value,
						this.address.value
					)}>
					<i>Click here to add a building</i>
					</button>
				</p>
			</div>
		);
	}
}

export default AddBuilding;