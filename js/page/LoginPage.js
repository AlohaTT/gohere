import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import { connect, } from 'react-redux';

export class LoginPage extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
