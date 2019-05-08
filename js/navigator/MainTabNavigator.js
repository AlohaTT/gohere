import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import HomePage from '../page/HomePage';
import ConsumePage from '../page/ConsumePage';
import VipRightsPage from '../page/VipRightsPage';
import TradePage from '../page/TradePage';
import MinePage from '../page/MinePage';
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation';
import { ThemeFlags, DimenFlags, } from '../../res/style/ThemeFactory';

const TABS = {
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor, }) => (
        <Image
          source={require('../../res/drawable/ic_home.png')}
          style={[styles.icon, { tintColor: tintColor, },]}
        />
      ),
    },
  },
  Consume: {
    screen: ConsumePage,
    navigationOptions: {
      tabBarLabel: '去玩',
      tabBarIcon: ({ focused, tintColor, }) => (
        <Image
          source={require('../../res/drawable/ic_consume.png')}
          style={[styles.icon, { tintColor: tintColor, },]}
        />
      ),
    },
  },
  VipRights: {
    screen: VipRightsPage,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor, }) => (
        <Image
          source={require('../../res/drawable/ic_vip.png')}
          style={[styles.icon, { tintColor: tintColor, },]}
        />
      ),

    },
  },
  Trade: {
    screen: TradePage,
    navigationOptions: {
      tabBarLabel: '玩贝',
      tabBarIcon: ({ focused, tintColor, }) => (
        <Image
          source={require('../../res/drawable/ic_trade.png')}
          style={[styles.icon, { tintColor: tintColor, },]}
        />
      ),
    },
  },
  Mine: {
    screen: MinePage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor, }) => (
        <Image
          source={require('../../res/drawable/ic_mine.png')}
          style={[styles.icon, { tintColor: tintColor, },]}
        />
      ),
    },
  },
};

class MainTabNavigator extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  _renderTabs = () => {
    return createAppContainer(createBottomTabNavigator(TABS,
      {
        tabBarOptions: {
          activeTintColor: ThemeFlags.Green,
          showIcon: true,
          labelStyle: styles.label,
        },
      }));
  }

  render() {
    const Tabs = this._renderTabs();
    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  label: {
    fontSize: DimenFlags.MainSize,
  },
});



const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainTabNavigator);
