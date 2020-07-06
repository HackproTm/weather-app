import AppBar from '@material-ui/core/AppBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import  PropTypes from 'prop-types';
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

    this.props.setCity(city);
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

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);
