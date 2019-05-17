import React, { Component, } from 'react';
import { View, Text, Image, ImageBackground,} from 'react-native';
import { connect, } from 'react-redux';
import { DimenFlags, ColorFlags, } from '../../res/style/ThemeFactory';
import { Button, WhiteSpace, WingBlank, InputItem, List, } from '@ant-design/react-native';
import NavigationUtil from '../../util/NavigationUtil';
import RouteHub from '../../RouteHub';
import { FlatList, ScrollView, } from 'react-native-gesture-handler';
import { fetchData, } from '../../util/FetchUtil';
import UserService from '../../api/service/UserService';

class VipRightsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [],
      inputValue: '',
    };
    this.IMAGES = [require('../../res/drawable/user_level_card_1.webp'),
      require('../../res/drawable/user_level_card_2.webp'),
      require('../../res/drawable/user_level_card_3.webp'),
      require('../../res/drawable/user_level_card_4.webp'),
      require('../../res/drawable/user_level_card_5.webp'),];

  }

  componentDidMount() {
    fetchData(UserService.VIPCARD)
      .then(result => {
        const cardList = result.vipCardInfos;
        this.setState({
          cardList: cardList,
        });
      });
  }

  _renderItem = ({ item, index, }, ) => {
    return <ImageBackground
      imageStyle={{ resizeMode: 'stretch', }}
      source={this.IMAGES[index]}
      style={{ width: 137, height: 198, }}
    >
      <View style={{ marginLeft: 14, marginTop: 114, }}>
        <Text>{item.vipTypeName} </Text>
        <Text>{item.vipMoney}</Text>
      </View>
    </ImageBackground>;
  }

  render() {
    const { userInfo, } = this.props;
    return (
      <ScrollView>
        <View style={{ backgroundColor: '#83EECC', height: 120, }}>
          <Text style={{ alignSelf: 'center', fontSize: 18, color: '#009073', }}> Vip权益 </Text>
        </View >
        <View style={{
          borderRadius: 5,
          backgroundColor: '#B5FBDD',
          height: 119,
          marginTop: -59,
          marginLeft: DimenFlags.HorizontalMargin,
          marginRight: DimenFlags.HorizontalMargin,
          paddingHorizontal: 25,
          paddingVertical: 18,
        }}
        >
          {userInfo && JSON.stringify(userInfo) != '{}' ? <LoginHeader userInfo={userInfo} /> : <UnLoginHeader />}
        </View>
        <FlatList
          data={this.state.cardList}
          horizontal
          renderItem={this._renderItem}
        />
        <View style={{ backgroundColor: '#F3F7F9', }}>
          <WhiteSpace />
          <WingBlank>
            <View style={{ backgroundColor: ColorFlags.White, paddingTop: 35, paddingHorizontal: 17, }}>
              <View style={{ flexDirection: 'row', }}>
                <Image
                  source={require('../../res/drawable/ic_coin.png')}
                  style={{ width: 14, height: 14, }}
                />
                <Text style={{ flex: 1, }}>金额</Text>
                <Text>奖励玩贝0个</Text>

              </View>
              <List style={{ marginTop: 23, marginBottom: 43, }}>
                <InputItem
                  clear
                  onChange={(text) => {
                    this.setState({
                      inputValue: text,
                    });
                  }
                  }
                  placeholder="请输入金额"
                  type="number"
                  value={this.state.inputValue}
                >￥</InputItem>
              </List>

              <Button style={{ backgroundColor: ColorFlags.Green, }}>确认并支付</Button>
            </View>

          </WingBlank>
        </View>
      </ScrollView>
    );
  }
}

class UnLoginHeader extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Image
          source={require('../../res/drawable/ic_avater.png')}
          style={{ width: 34, height: 34, }}
        />
        <Text style={{ marginLeft: 12, color: '#009073', fontSize: 16, flex: 1, }}>登陆获取更多信息</Text>
        <Button
          onPress={() => NavigationUtil.goPage({}, RouteHub.LOGIN)}
          style={{ backgroundColor: ColorFlags.Green, }}
        >登录</Button>
      </View>
    );
  }
}

class LoginHeader extends Component {
  render() {
    const { userInfo, } = this.props;
    return (
      <View>
        <View style={{ flexDirection: 'row', }}>
          <Image
            source={{ uri: userInfo.iconUrl, }}
            style={{ width: 34, height: 34, }}
          />
          <Text style={{ flex: 1, }}>Hi,{userInfo.userName}</Text>
          <Text >Lv{userInfo.userLevel}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(VipRightsPage);
