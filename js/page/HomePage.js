import { createMaterialTopTabNavigator, } from 'react-navigation';
import VideoPage from './VideoPage';
import RankPage from './RankPage';
import TourPage from './TourPage';
import { connect, } from 'react-redux';
import { ColorFlags, } from '../../res/style/ThemeFactory';

const HomeTab = createMaterialTopTabNavigator({
  Video: {
    screen: VideoPage,
    navigationOptions:{
      tabBarLabel: '这好玩',
    },
  },
  Rank: {
    screen: RankPage,
    navigationOptions:{
      tabBarLabel: '那座城',
    },
  },
  Tour: {
    screen: TourPage,
    navigationOptions:{
      tabBarLabel: '一键启程',
    },
  },
},{
  tabBarOptions:{
    style:{
      backgroundColor:ColorFlags,
    },
    labelStyle:{
      color:ColorFlags.Black,
    },
    indicatorStyle:{
      backgroundColor:ColorFlags.Green,

    },
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);
