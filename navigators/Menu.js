import { StackNavigator } from 'react-navigation';
import MenuScreen from '../screens/MenuScreen';
import Stack from './Stack';

const MenuNavigator = StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  Stack: {
    screen: Stack
  }
},
{
  initialRouteName: 'Menu',
  headerMode: 'none'
});

export default MenuNavigator;
