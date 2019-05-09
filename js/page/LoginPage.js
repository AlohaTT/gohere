import React, { Component, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { connect, } from 'react-redux';
import { InputItem, WingBlank, WhiteSpace, Button, } from '@ant-design/react-native';
import { ColorFlags, } from '../../res/style/ThemeFactory';
import action from '../action';
import { fetchData, } from '../util/FetchUtil';
import NavigationUtil from '../util/NavigationUtil';
import UserService from '../api/service/UserService';

export class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };
  }

  _onPress = () => {
    fetchData(UserService.LOGIN, {
      userName: this.state.phone,
      password: this.state.password,
      userType: 'member',
    }).then((data) => {
      NavigationUtil.goBack(this.props.navigation);
    }
    );
  }

  render() {
    const { onUserInfoUpdate, } = this.props;
    return (
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
  onUserInfoUpdate: () => {
    dispatch(action.onUserInfoUpdate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
