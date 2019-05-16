import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { List, Button, } from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';
import DeviceInfo from 'react-native-device-info';
import action from '../../action/index';
import BackPressComponent from '../../components/BackPressComponent';
import NavigationUtil from '../../util/NavigationUtil';

class SettingPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  constructor(props) {
    super(props);

    this.state = {

    };
    this.backPress = new BackPressComponent({ backPress: (e) => NavigationUtil.goBack(this.props.navigation), });
  }

  componentDidMount() {
    this.backPress.componentDidMount();
  }

  componentWillUnmount() {
    this.backPress.componentWillUnmount();
  }




  render() {
    const version = DeviceInfo.getVersion();
    const { userInfo, logout, navigation, } = this.props;
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
          >
            关于我们
          </Item>
        </List>
        {userInfo && JSON.stringify(userInfo) != '{}' ?
          <Button onPress={() => logout(navigation)}>退出当前账号</Button> : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (navigation) => dispatch(action.logout(navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
