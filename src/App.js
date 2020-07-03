import AppBar from '@material-ui/core/AppBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ForecastExtended from './components/ForecastExtended';
import LocationList from './components/LocationList';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import { setCity } from './actions';
=======
import { setCity } from './actions'
>>>>>>> 859d92c... 114. Mejora a action creator
=======
import { setCity } from './actions';
<<<<<<< HEAD
import { store } from './store';
>>>>>>> 3cae83a... 115. Refactorización de Store y vinculación de Provider
=======
>>>>>>> 0546f79... Leccion 116. Connect

const cities = [
  'Bogota,co',
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
];

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
<<<<<<< HEAD
<<<<<<< HEAD
    this.props.setCity(city);
=======
    const action = {
      type: 'setCity',
      value: city
    };
    store.dispatch(action);
>>>>>>> 71faeaa... 112. Creación de store, dispatch de acciones y uso de React Dev Tools
=======
    store.dispatch(setCity(city));
>>>>>>> b3403fc... 113. Generación de action creator
=======
    this.props.setCity(city);
>>>>>>> 0546f79... Leccion 116. Connect
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
