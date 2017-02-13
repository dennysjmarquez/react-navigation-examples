import { StackNavigator } from 'react-navigation';
import MenuScreen from '../screens/MenuScreen';
import Stack from './Stack';
import Tab from './Tab';

const MenuNavigator = StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  Stack: {
    screen: Stack
  },
  Tab: {
    screen: Tab
  }
},
{
  initialRouteName: 'Menu',
  headerMode: 'none'
});

export default MenuNavigator;
