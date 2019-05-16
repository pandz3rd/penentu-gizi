import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Gizi from './components/Gizi';
import Kalori from './components/Kalori';
import Nutrisi from './components/Nutrisi';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack = createStackNavigator({
  Gizi: {screen: Gizi},
  Kalori: {screen: Kalori},
  Nutrisi: {screen: Nutrisi},
})

const GiziScreen = createStackNavigator({
  Gizi: {screen: Gizi},
})

const KaloriScreen = createStackNavigator({
  Kalori: {screen: Kalori},
})

const NutrisiScreen = createStackNavigator({
  Nutrisi: {screen: Nutrisi},
})

const RootTab = createBottomTabNavigator({
  Gizi: {
    screen: GiziScreen,
    navigationOptions: {
      tabBarLabel: 'Gizi',
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="heart" size={25} color={tintColor} />
      )
    }
  },
  Kalori: {
    screen: KaloriScreen,
    navigationOptions: {
      tabBarLabel: 'Kalori',
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="calculator" size={25} color={tintColor} />
      )
    }
  },
  Nutrisi: {
    screen: NutrisiScreen,
    navigationOptions: {
      tabBarLabel: 'Nutrisi',
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="star" size={25} color={tintColor} />
      )
    }
  },
}, {
tabBarOptions: {
    showIcon: true,
    activeTintColor: '#F16A53',
    inactiveTintColor: '#7E8080',
  }
})

const AppContainer = createAppContainer(RootTab);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
