import React, { Component, } from 'react';
import { View, Text, Image, ScrollView,} from 'react-native';
import { connect, } from 'react-redux';
import BaseListComponent from '../../components/BaseListComponent';
import TradeService from '../../api/service/TradeService';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';
import { Button, } from '@ant-design/react-native';

class BuyListPage extends Component {

  _renderHeader = () => {
    return <View style={{alignItems:'center',}}>
      <Image
        source={require('../../res/drawable/trade_manunal.webp')}
        style={{ height: 120, width:360,resizeMode: 'stretch', }}
      />
      <View style={{ flexDirection: 'row', backgroundColor: ColorFlags.White, padding: 18, }}>
        <Text>数量</Text>
        <Text>价格</Text>
        <View style={{ flex: 1, }} />
        <Text >筛选</Text>
      </View>
    </View>;
  }


  render() {
    return (
      <View style={{ backgroundColor: ColorFlags.Background, flex: 1, }}>

        <BaseListComponent
          header={this._renderHeader}
          numColumns={2}
          renderItem={(data) => (<Item data={data} />)}
          url={TradeService.CANTRADELIST}
        />
      </View>
    );
  }
}

class Item extends Component {
  render() {
    const { data, } = this.props;
    return (
      <View style={{
        flex: 1,
        backgroundColor: ColorFlags.White,
        margin: DimenFlags.HorizontalMargin,
        borderRadius: 5,
        padding: 14,
      }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image
            source={require('../../res/drawable/ic_avater.png')}
            style={{ width: 24, height: 24, borderRadius: 12, marginRight: 9, }}
          />
          <Text>{data.creater}</Text>
        </View>
        <Text style={{ marginTop: 20, }}>单价: ￥{data.price}</Text>
        <Text>数量</Text>
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ flex: 1, }}>{data.surplusVolume}</Text>
          <Text>{data.isPartialDeal === 0 ? '可零售' : '不可零售'}</Text>
        </View>
        <Button
          size="small"
          style={{ backgroundColor: ColorFlags.Green, width: 68, marginTop: 21, }}
        >我要了</Button>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BuyListPage);
