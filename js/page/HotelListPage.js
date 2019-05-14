/*
 * @Author: Tony
 * @Date: 2019-05-10 17:48:42
 * @Last Modified by:   Tony
 * @Last Modified time: 2019-05-10 17:48:42
 */
import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

export class HotelListPage extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelListPage);
