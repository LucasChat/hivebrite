import React, { Component, PropTypes } from 'react';
import './reset.css';
import { connect } from 'react-redux';

import { getAllCities } from '../../utils/api/city';

class App extends Component {
  componentWillMount() {
    this.props.onAppLaunch();
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  onAppLaunch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onAppLaunch: () => dispatch(getAllCities()),
});

export default connect(null, mapDispatchToProps)(App);
