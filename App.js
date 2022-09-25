import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>
            <Stack.Navigator>
                <Stack.Screen 
                    name='FeaturedMovies' 
                    component={HomeScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='SearchMovies' 
                    component={SearchScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='MovieInfo' 
                    component={MovieScreen} 
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}