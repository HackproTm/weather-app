import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import LocationList from '../components/LocationList';
import { getWeatherCities, getCity } from '../reducers';

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setSelectedCity, cities, city } = this.props;

    setWeather(cities);
    setSelectedCity(city);
  }

  handleSelectedLocation = city => {
    this.props.setSelectedCity(city);
  }

  render() {
    return (
      <LocationList cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
// const mapDispatchToProps = dispatch => ({
//   setSelectedCity: value => dispatch(setSelectedCity(value)),
//   setWeather: cities => dispatch(setWeather(cities))
// });

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
