import React, { Component, } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { connect, } from 'react-redux';
import { ListView, WingBlank, WhiteSpace, } from '@ant-design/react-native';
import { ColorFlags, DimenFlags, } from '../../res/style/ThemeFactory';
import BaseListComponent from '../../components/BaseListComponent';
import VideoService from '../../api/service/VideoService';

class VideoPage extends Component {
  render() {
    return (
      <BaseListComponent
        header={()=>(<Text style={{fontSize:20,color:ColorFlags.Black,fontWeight:'bold',margin:20,}}>当红精选</Text>)}
        renderItem={(data) => {
          return <Item data={data} />;
        }}
        url={VideoService.VIDEOLIST}
      />
    );
  }
}

class Item extends Component {
  render() {
    const { homeImageUrl, videoDesc, } = this.props.data;
    return (
      <WingBlank>
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
      </WingBlank>
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
