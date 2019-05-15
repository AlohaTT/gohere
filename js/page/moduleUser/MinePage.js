import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import ThemeFactory, { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';
import { WhiteSpace, WingBlank, Button, } from '@ant-design/react-native';
import action from '../../action';
import RouteHub from '../../RouteHub';
import NavigationUtil from '../../util/NavigationUtil';
import ImageText from '../../components/ImageText';

class MinePage extends Component {

  _loginPress = () => {
    NavigationUtil.goPage({}, RouteHub.LOGIN);
  }

  render() {
    const { userInfo, navigation, } = this.props;
    const Header = () => {
      if (userInfo && JSON.stringify(userInfo) != '{}') {
        return <LoginHeader userInfo={userInfo}/>;
      }
      return <UnLoginHeader
        onPress={this._loginPress}
      />;
    };
    return (
      <View style={[styles.container, { paddingTop: 32, },]}>
        <Header />
        <View style={[styles.row, { justifyContent: 'space-between', },]}>
          <ImageText
            text={'全部订单'}
          />
          <ImageText
            text={'待出行'}
          />
          <ImageText
            text={'待支付'}
          />
          <ImageText
            text={'退款单'}
          />
        </View>
      </View>
    );
  }
}

class LoginHeader extends Component {
  static propTypes = {
    settingPress: PropTypes.func,
  }

  render() {
    const {userInfo,} =this.props;
    return (
      <View style={{ paddingHorizontal: DimenFlags.HorizontalMargin, }}>
        <View style={[styles.row, { marginBottom: 23, },]}>
          <WingBlank>
            <Image source={{uri:userInfo.iconUrl,}}
              style={styles.avater}
            />
          </WingBlank>

          <View style={[styles.column, { flex: 1, },]}>
            <Text style={{ fontSize: 16, color: ColorFlags.Black, }}>{userInfo.userName}</Text>
            <View style={styles.row}>
              <Text>Lv{userInfo.userLevel}</Text>
              <WingBlank>
                <Text style={{ fontSize: 14, color: ColorFlags.Grey, }}>会员权益</Text>
              </WingBlank>
            </View>
            <Text style={{ fontSize: 12, color: ColorFlags.Grey, }}>UID:{userInfo.userId}</Text>
          </View>

          <TouchableOpacity onPress={()=>{NavigationUtil.goPage({},RouteHub.SETTING);}}>
            <Image
              source={require('../../res/drawable/ic_setting.png')}
              style={[styles.imageButton, { marginRight: 17, },]}
            />
          </TouchableOpacity>

          <Image
            source={require('../../res/drawable/ic_message.png')}
            style={styles.imageButton}
          />
        </View>
        <Account userInfo={userInfo}/>
      </View>
    );
  }
}

class Account extends Component {
  render() {
    const {userInfo,} = this.props;
    return (
      <View style={{ backgroundColor: ColorFlags.Green, padding: 20, borderRadius: 5, }}>
        <View style={[styles.row, { justifyContent: 'space-between', },]}>
          <Text style={{ fontSize: 14, }}>升级还需75成长值</Text>
          <Text style={{ fontSize: 12, }}>成长值说明
            <Image source={require('../../res/drawable/ic_arrow_right.png')}
              style={{ width: 6, height: 11, marginLeft: 9, }}
            /></Text>
        </View>
        <Text styel={{}}>我的玩贝(个)</Text>
        <View style={[styles.row, { alignItems: 'center', },]}>
          <Text style={{ fontSize: 25, }}>7000</Text>
          <Text style={{ fontSize: 12, marginLeft: 40, }}>查看账户</Text>
        </View>
      </View>
    );
  }
}

class UnLoginHeader extends Component {
  static propTypes = {
    onPress: PropTypes.func,
  }

  render() {
    return (
      <View style={[styles.row, { alignItems: 'center', },]}>

        <Image
          source={require('../../res/drawable/ic_avater.png')}
          style={{ width: 39, height: 39, }}
        />
        <Text style={{ fontSize: 16, color: ColorFlags.Black, flex: 1, marginLeft: 15, }}>登陆获取更多信息</Text>
        <Button onPress={this.props.onPress}
          style={{ backgroundColor: ColorFlags.Green, }}
        > 登录</Button>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  imageButton: {
    width: 20,
    height: 20,
  },

  avater: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
  // checkLogin: () => dispatch(action.checkLogin()),

});

export default connect(mapStateToProps, mapDispatchToProps)(MinePage);
