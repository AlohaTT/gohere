/*
 * @Author: Tony
 * @Date: 2019-05-10 17:48:42
 * @Last Modified by: Tony
 * @Last Modified time: 2019-05-15 11:26:11
 */
import React, { Component, } from 'react';
import { View, Text, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import BaseListComponent from '../../components/BaseListComponent';
import HotelService from '../../api/service/HotelService';
import { WingBlank, WhiteSpace, } from '@ant-design/react-native';

export class HotelListPage extends Component {
  render() {
    return (
      <BaseListComponent
        renderItem={(data) => {
          return <Item data={data} />;
        }}
        url={HotelService.HOTELLIST}
      />
    );
  }
}

class Item extends Component {
  render() {
    const { data, } = this.props;
    return (
      <View>
        <WhiteSpace/>
        <WingBlank style={{ flexDirection: 'row', alignItems:'center',}}>
          <Image source={{ uri: data.imageList[0].url, }}
            style={{ width: 114, height: 86, resizeMode: 'stretch', }}
          />
          <View style={{flex:1,}}>
            <Text>{data.hotelName}</Text>
            <Text>{data.price}玩贝起</Text>
            <Text>{data.rmbprice}</Text>
            <Text>{data.address}</Text>
          </View>
          <Text >{data.collectCount}</Text>
        </WingBlank>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HotelListPage);
