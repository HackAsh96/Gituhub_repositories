/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { BottomTabParamList, HomeParamList, FavoritesParamList } from '../../types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor:Colors.lochmara}}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            <TabBarIcon
              name="ios-home"
              color={focused ? Colors.lochmara : Colors.slateGray} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesTabNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            <TabBarIcon
            name={focused ? "ios-star" : "ios-star-outline"}
            color={focused?Colors.lochmara:Colors.slateGray} />,
        }}
      />
    </Tab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name'];color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeTabNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home',headerTintColor:Colors.lochmara }}
      />
    </HomeStack.Navigator>
  );
}

const FavoritesTabStack = createStackNavigator<FavoritesParamList>();

function FavoritesTabNavigator() {
  return (
    <FavoritesTabStack.Navigator>
      <FavoritesTabStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: 'Favorites',headerTintColor:Colors.lochmara }}
      />
    </FavoritesTabStack.Navigator>
  );
}
