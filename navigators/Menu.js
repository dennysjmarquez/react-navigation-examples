import { StackNavigator } from 'react-navigation';
import MenuScreen from '../screens/MenuScreen';
import Stack from './Stack';
import Tab from './Tab';
import Drawer from './Drawer';

const NavigatorMenu = StackNavigator(
  {
    Menu: {
      screen: MenuScreen,
    },
    StackExample: {
      screen: Stack,
    },
    TabExample: {
      screen: Tab,
    },
    DrawerExample: {
      screen: Drawer,
    },
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
  },
);

export default NavigatorMenu;
