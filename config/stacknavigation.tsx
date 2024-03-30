import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Products from '../screens/products';
import SingleProduct from '../screens/singleproduct';
import SignUp from '../screens/signup';
import UploadScreen from '../screens/uploadscreen';
import LocalData from '../screens/localdata';
import MapScreen from '../screens/mapscreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="LocalData" component={LocalData} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
