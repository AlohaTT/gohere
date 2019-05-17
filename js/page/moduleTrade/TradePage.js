import React, { Component, } from 'react';
import { View, Text, Image, ScrollView, } from 'react-native';
import { connect, } from 'react-redux';
import BaseListComponent from '../../components/BaseListComponent';
import TradeService from '../../api/service/TradeService';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';
import { Button, } from '@ant-design/react-native';
import { createMaterialTopTabNavigator, } from 'react-navigation';
import BuyListPage from './BuyListPage';

const TradeTab = createMaterialTopTabNavigator({
  BuyList: {
    screen: BuyListPage ,
    navigationOptions:{
      tabBarLabel: '买买',
    },
  },
  SellList: {
    screen: BuyListPage ,
    navigationOptions:{
      tabBarLabel: '卖卖',
    },
  },
  PublishList: {
    screen: BuyListPage ,
    navigationOptions:{
      tabBarLabel: '我的发布',
    },
  },
  PickList: {
    screen: BuyListPage ,
    navigationOptions:{
      tabBarLabel: '我的摘单',
    },
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: ColorFlags.White,
    },
    labelStyle: {
      color: ColorFlags.Black,
    },
    indicatorStyle: {
      backgroundColor: ColorFlags.Green,

    },
  },
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TradeTab);
