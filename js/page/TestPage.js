import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

class TestPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const { isLogin, } = this.props;
    return (
      <View>
        <Text>{isLogin}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
