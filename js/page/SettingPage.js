import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { List, Button, } from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';
import DeviceInfo from 'react-native-device-info';
import action from '../action/index';

class SettingPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const version = DeviceInfo.getVersion();
    const { userInfo, logout,} = this.props;
    return (
      <View>
        <List>
          <Item arrow="empty"
            extra={`当前版本${version}`}
          >
            升级检查
          </Item>
          <Item arrow="horizontal"
            disabled
            onPress={() => logout()}
          >
            关于我们
          </Item>
        </List>
        {userInfo && JSON.stringify(userInfo) != '{}' ?
          <Button >退出当前账号</Button> : null}

      </View>

    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logout:() => dispatch(action.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);