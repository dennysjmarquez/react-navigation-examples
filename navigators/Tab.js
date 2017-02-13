import { TabNavigator } from 'react-navigation';
import DummyScreen from '../screens/tab/DummyScreen';
import Stack from './Stack';

const Tab = TabNavigator({
  Tab1: {
    screen: Stack,
  },
  Tab2: {
    screen: DummyScreen,
  }
},
{
  initialRouteName: 'Tab1',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: '#AAA',
    activeBackgroundColor: '#FFF', // iOS
    inactiveBackgroundColor: '#DDD', // iOS
    pressColor: '#e91e63', // Android
    indicatorStyle: { // Android
      backgroundColor: '#242134'
    },
    style: {
      backgroundColor: '#EEE', // Android
    }
  }
});

export default Tab;
