import { createDrawerNavigator } from 'react-navigation';
import FooScreen from '../screens/drawer/FooScreen';
import Stack from './Stack';

const Drawer = createDrawerNavigator(
  {
    Drawer1: {
      screen: Stack,
    },
    Drawer2: {
      screen: FooScreen,
    },
  },
  {
    initialRouteName: 'Drawer1',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#CCC',
      activeBackgroundColor: '#EEE',
      inactiveBackgroundColor: '#FFF',
    },
  },
);

export default Drawer;
