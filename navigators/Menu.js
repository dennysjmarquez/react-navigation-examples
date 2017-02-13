import { StackNavigator } from 'react-navigation';
import MenuScreen from '../screens/MenuScreen';
import StackMainScreen from '../screens/stack/MainScreen';
import Stack from './Stack';

const MenuNavigator = StackNavigator({
  Menu: {
    screen: MenuScreen,
  },
  Stack: {
    screen: Stack
  }
});

export default MenuNavigator;
