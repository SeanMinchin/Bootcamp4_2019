import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedData: this.props.data,
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  removedUpdate(id) {
    this.setState({
      updatedData: this.state.updatedData
        .filter(building => {
          return building.id !== id
        })
    })
    //console.log(' removed ')
  }

  addedUpdate(code, name, latitude, longitude, address) {
    const id = this.state.updatedData.length + 1;
    const building = {
      id:id,
      code:code,
      name:name,
      coordinates: { latitude:parseFloat(latitude), longitude:parseFloat(longitude) },
      address:address
    };

    //console.log('entry to add: ', building);
    
    /*
    this.setState((prevState) => ({
      updatedData: prevState.updatedData.concat(building)
    }))
    */

    this.setState({
      updatedData: this.state.updatedData.concat(building)
    })

  }

  render() {
    //console.log('data: ', this.state.updatedData)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.updatedData}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.updatedData}
                selectedBuilding={this.state.selectedBuilding}
              />
              <RemoveBuilding
                removedUpdate={this.removedUpdate.bind(this)}
                selectedBuilding={this.state.selectedBuilding}
              />
              <AddBuilding
                addedUpdate={this.addedUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
