import React, { Component, } from 'react';
import { View, Text, StyleSheet, AsyncStorage, } from 'react-native';
import { connect, } from 'react-redux';
import { InputItem, WingBlank, WhiteSpace, Button, } from '@ant-design/react-native';
import { ColorFlags, } from '../../res/style/ThemeFactory';
import action from '../../action';
import NavigationUtil from '../../util/NavigationUtil';
import Constants from '../../Constants';
import SafeAreaViewPlus from '../../components/SafeAreaViewPlus';
import NavigationBar from '../../components/NavigationBar';
import ViewUtil from '../../util/ViewUtil';
import BackPressComponent from '../../components/BackPressComponent';

export class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };

    this.backPress = new BackPressComponent({backPress: (e) => NavigationUtil.goBack(this.props.navigation),});
  }

  componentDidMount() {
    this.backPress.componentDidMount();
    AsyncStorage.getItem(Constants.USERNAME)
      .then((res) => {
        this.setState({
          phone: res,
        });
      });
  }

  componentWillUnmount() {
    this.backPress.componentWillUnmount();
  }


  _onPress = () => {
    const { login, navigation, } = this.props;
    login({
      userName: this.state.phone,
      password: this.state.password,
      userType: 'member',
    }, navigation);
  }

  render() {
    const { navigation, } = this.props;
    const navigationBar = <NavigationBar
      leftButton={ViewUtil.getLeftBackButton(() => NavigationUtil.goBack(navigation))}
      title={'登录'}
    />;
    return (
      <SafeAreaViewPlus>
        {navigationBar}
        <WingBlank>
          <Text style={[styles.title, { marginTop: 48, },]}>Hi,</Text>
          <Text style={[styles.title, { marginBottom: 25, },]}>欢迎来到这好玩</Text>
          <InputItem
            onChange={(value) => {
              this.setState({
                phone: value,
              });
            }
            }
            placeholder={'请输入手机号'}
            type={'digit'}
            value={this.state.phone}
          >
            +86
          </InputItem>
          <InputItem
            extra={'忘记密码'}
            onChange={(value) => {
              this.setState({
                password: value,
              });
            }
            }
            placeholder={'请输入登录密码'}
            type={'password'}
          >
          </InputItem>
          <Button
            onPress={
              this._onPress
            }
            style={{ marginTop: 45, backgroundColor: ColorFlags.Green, }}
          >登录</Button>
        </WingBlank >
      </SafeAreaViewPlus>

    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: ColorFlags.Black,
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (params, navigation) => {
    dispatch(action.login(params, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
