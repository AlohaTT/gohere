import React, { Component, } from 'react';
import { ViewPropTypes, Text, StatusBar, StyleSheet, View, Platform, DeviceInfo, } from 'react-native';
import { PropTypes, } from 'prop-types';

const NAV_BAR_HEIGHT_IOS = 44;//导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 50;//导航栏在Android中的高度
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 0 : 20;//状态栏的高度
const StatusBarShape = {//设置状态栏所接受的属性
  barStyle: PropTypes.oneOf(['light-content', 'default',]),
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string,
};
export default class NavigationBar extends Component {
  //提供属性的类型检查
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element,
  };
  //设置默认属性
  static defaultProps = {
    statusBar: {
      backgroundColor:'white',
      barStyle: 'dark-content',
      hidden: false,
    },
  };

  render() {
    const statusBar = !this.props.statusBar.hidden ?
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar} />
      </View> : null;

    const titleView = this.props.titleView ? this.props.titleView :
      <Text ellipsizeMode="head"
      numberOfLines={1}
      style={styles.title}
    >{this.props.title}</Text>;

    const content = this.props.hide ? null :
      <View style={styles.navBar}>
      {this.getButtonElement(this.props.leftButton)}
      <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle,]}>
          {titleView}
        </View>
      {this.getButtonElement(this.props.rightButton)}
    </View>;
    return (
      <View style={[styles.container, this.props.style,]}>
        {statusBar}
        {content}
      </View>
    );
  }

  getButtonElement(data) {
    return (
      <View style={styles.navBarButton}>
        {data ? data : null}
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  navBarButton: {
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  navBarTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  },
});