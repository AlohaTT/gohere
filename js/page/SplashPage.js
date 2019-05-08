import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

class SplashPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 200);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
