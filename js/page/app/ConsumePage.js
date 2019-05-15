import { connect, } from 'react-redux';
import { createMaterialTopTabNavigator, } from 'react-navigation';
import HotelListPage from '../moduleHotel/HotelListPage';
import RestaurantListPage from '../moduleRestaurant/RestaurantListPage';
import ShopListPage from '../moduleShop/ShopListPage';
import { ColorFlags, } from '../../res/style/ThemeFactory';

const ConsumeTab = createMaterialTopTabNavigator({
  Hotel:{
    screen:HotelListPage,
    navigationOptions:{
      tabBarLabel: '好住',
    },
  },
  Restaurant:{
    screen:RestaurantListPage,
    navigationOptions:{
      tabBarLabel: '好吃',
    },
  },
  Shop:{
    screen:ShopListPage,
    navigationOptions:{
      tabBarLabel: '好物',
    },
  },
},{
  tabBarOptions:{
    style:{
      backgroundColor:ColorFlags.White,
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

export default connect(mapStateToProps, mapDispatchToProps)(ConsumeTab);
