import React, { Component, } from 'react';
import { View, Text, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import BaseListComponent from '../../components/BaseListComponent';
import RestaurantService from '../../api/service/RestaurantService';
import { WhiteSpace, WingBlank, } from '@ant-design/react-native';

class RestaurantListPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <BaseListComponent
        renderItem={(data) => {
          return <Item data={data} />;
        }}
        url={RestaurantService.RESTAURANTLIST}
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
          <Image
            source={{ uri: data.restaurantImageList[0].imageFullUrl, }}
            style={{ width: 114, height: 86, resizeMode: 'contain', borderRadius: 5, }}
          />
          <View style={{marginLeft:20,}}>
            <Text>{data.restaurantName}</Text>
            <Text>{data.perCapita}玩贝起</Text>
            <Text>{data.restaurantName}</Text>
            <Text>{data.address}</Text>
          </View>

        </WingBlank>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListPage);
