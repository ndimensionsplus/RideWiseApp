import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Home, WhereTo, Settings } from './containers';

const DrawNavigator = createDrawerNavigator({
  Home,
  'Where To': WhereTo,
  Settings
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(DrawNavigator)

export default AppContainer;
