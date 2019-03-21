import AppBar from '@material-ui/core/AppBar';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ForecastExtended from './components/ForecastExtended';
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
  constructor() {
    super();

    this.state = {
      city: 'Select a city'
    }
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
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
            <Paper zDepth={4}>
              <div className='details'>
                <ForecastExtended city={city}/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
