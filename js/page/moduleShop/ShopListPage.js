import React, { Component, } from 'react';
import { View, Text, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import BaseListComponent from '../../components/BaseListComponent';
import ShopService from '../../api/service/ShopService';
import { WhiteSpace, WingBlank, } from '@ant-design/react-native';

class ShopListPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <BaseListComponent
        renderItem={(data) => {
          return <Item data={data} />;
        }}
        url={ShopService.GOODSLIST}
      />
    );
  }
}


class Item extends Component {
  render() {
    const { data, } = this.props;
    return (
      <View>
        <WhiteSpace />
        <WingBlank style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={{ uri: data.goodsImg, }}
            style={{
              width: 74,
              height: 74,
              resizeMode: 'contain',
              borderRadius: 5,
            }}
          />
          <View style={{marginLeft:20,flex:1,}}>
            <Text>{data.goodsName}</Text>
            <Text>{data.shopCredit}玩贝</Text>
            <Text>约￥{data.shopPrice}</Text>
          </View>
          <Text style={{alignSelf:'flex-end',}}>{data.virtualSales}已售</Text>
        </WingBlank>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListPage);
