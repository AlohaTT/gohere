import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ListView, WingBlank, WhiteSpace, } from '@ant-design/react-native';
import FetchUtil from '../util/FetchUtil';
import Page from '../bean/Page';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';

class TourPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  _onFetch = (page = 1, startFetch, abortFetch) => {
    FetchUtil.fetch('http://203.110.179.27:60409/lyjfapp/api/v1/travel/findByCondition', new Page(page))
      .then((res) => {
        const { result, } = res;
        let rowData = Array.from(result);
        if (page > res.totalPage) {
          rowData = [];
        }
        startFetch(rowData);
      }).catch((err) => {
        abortFetch();
      }
      );
  }

  _renderItem = (data) => {
    return <Item data={data} />;
  }

  render() {
    return (
      <WingBlank size="sm">
        <ListView
          onFetch={this._onFetch}
          renderItem={this._renderItem}
        />
      </WingBlank>
    );
  }
}

class Item extends Component {
  render() {
    const { imageList, travelName, } = this.props.data;
    return (
      <View>
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

      </View>

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
