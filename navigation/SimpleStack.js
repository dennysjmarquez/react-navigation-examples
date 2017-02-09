import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import OtherScreen from '../screens/OtherScreen';

const SimpleStack = StackNavigator({
  Main: {
    screen: MainScreen,
  },
  Other: {
    screen: OtherScreen,
  }
});

export default SimpleStack;
