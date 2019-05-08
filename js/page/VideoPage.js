import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import { ListView, WingBlank, WhiteSpace, } from '@ant-design/react-native';
import FetchUtil from '../util/FetchUtil';
import Page from '../bean/Page';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';

class VideoPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  _onFetch = (page = 1, startFetch, abortFetch) => {
    FetchUtil.fetch('http://203.110.179.27:60409/lyjfapp/api/v1/video/homeImage/list', new Page(page))
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
    const { homeImageUrl, videoDesc, } = this.props.data;
    return (
      <View>
        <Image
          source={{ uri: homeImageUrl, }}
          style={styles.image}
        />
        <WhiteSpace />
        <WingBlank>
          <Text
            style={styles.desc}
          >{videoDesc}</Text>
        </WingBlank>
        <WhiteSpace />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
