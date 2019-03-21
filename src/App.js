import React, { Component } from 'react';

import LocationList from './components/LocationList'
import './App.css';

const cities = [
  'Bogota,co',
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation: ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
                      onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
