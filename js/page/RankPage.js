import React, { Component, } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { connect, } from 'react-redux';
import { FlatList, } from 'react-native-gesture-handler';
import { fetchData, } from '../util/FetchUtil';
import RankService from '../api/service/RankService';
import { ColorFlags, } from '../../res/style/ThemeFactory';

class RankPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationData: [],
      rankData: [],
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    fetchData(RankService.DESTINATIONLIST)
      .then((dataList) => {
        this.setState({
          destinationData: dataList,
        });
        if (dataList && dataList.length > 0) {
          this._getRankList(0);
        }
      });
  }

  _renderLeftItem = ({ item, index, }) => {
    return <View>
      <Text
        onPress={() => {
          this._getRankList(index);
        }
        }
        style={styles.leftItem}
      >{item.destination}</Text>
      <View style={{ backgroundColor: '#F3F7F9', height: 1, flex: 1, }} />
    </View>;
  }

  _renderRightItem = ({ item, index, }) => {
    return <View style={styles.rightItem}>
      <Image source={{ uri: this.state.rankData[index].imageFullUrl, }}
        style={{
          width: 100, height: 100, resizeMode: 'stretch',
        }}
      />
      <View>
        <Text>{this.state.rankData[index].topicDescribe}</Text>
      </View>
    </View>;
  }

  /**
   * 获取右边排行榜列表
   * @param {*} index
   */
  _getRankList = (index) => {
    fetchData(RankService.RANKLIST, { destinationId: this.state.destinationData[index].id, })
      .then((rankPage) => {
        this.setState({
          rankData: rankPage.result,
        });
      });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', flex: 1, }}>
        <View>
          <FlatList
            data={this.state.destinationData}
            renderItem={this._renderLeftItem}
            style={styles.leftList}
          />
        </View>
        <View style={{ flex: 1, }}>
          <FlatList
            data={this.state.rankData}
            renderItem={this._renderRightItem}
            style={styles.rightList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftList: {
    width: 100,
  },
  rightList: {
  },
  leftItem: {
    height: 40,
    textAlign: 'center',
    fontSize: 13,
    textAlignVertical: 'center',
  },
  rightItem: {
    flexDirection: 'row',
    margin:16,
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(RankPage);
