import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsContainer from '../redux/containers/details.container'
export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen
				options={() => ({
					...TransitionPresets.ModalPresentationIOS,
					cardOverlayEnabled: true,
					gestureEnabled: true
				})}
				name='Detail'
				component={DetailsContainer}
			/>
		</Stack.Navigator>
	);
}
