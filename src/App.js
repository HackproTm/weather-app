import AppBar from '@material-ui/core/AppBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import  { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ForecastExtended from './components/ForecastExtended';
import LocationList from './components/LocationList';
import './App.css';
import { setCity } from './actions';

const cities = [
  'Bogota,co',
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
];

const store = createStore(
  () => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });

<<<<<<< HEAD
    this.props.setCity(city);
=======
    const action = {
      type: 'setCity',
      value: city
    };
    store.dispatch(action);
>>>>>>> 71faeaa... 112. Creación de store, dispatch de acciones y uso de React Dev Tools
  }

  render() {
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
                          onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={4}>
              <div className='details'>
                {
                  city ? 
                    <ForecastExtended city={city}/> :
                    <h1>Select first a City</h1>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
