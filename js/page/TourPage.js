import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ListView, WingBlank, WhiteSpace, } from '@ant-design/react-native';
import FetchUtil from '../util/FetchUtil';
import Page from '../bean/Page';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';
import Api from '../api/Api';
import BaseListComponent from '../base/BaseListComponent';

class TourPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  _renderItem = (data) => {
    return <Item data={data} />;
  }

  render() {
    return (
      <BaseListComponent
        renderItem={this._renderItem}
        url={Api.TRAVELLIST}
      />
    );
  }
}

class Item extends Component {
  render() {
    const { imageList, travelName, } = this.props.data;
    return (
      <WingBlank>
        <Image
          source={{ uri: imageList && imageList.length > 0 && imageList[0].url, }}
          style={styles.image}
        />
        <WhiteSpace />
        <WingBlank>
          <Text
            style={styles.desc}
          >{travelName}</Text>
        </WingBlank>
        <WhiteSpace />

      </WingBlank>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 270,
    resizeMode: 'stretch',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  desc: {
    backgroundColor: ColorFlags.white,
    fontSize: DimenFlags.MainSize,
    color: ColorFlags.Black,
  },
});

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TourPage);
