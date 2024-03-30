import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import rncStyles from 'rncstyles';

export default function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <Icon name="home" size={30} color="#4F8EF7" />
      <View style={rncStyles.py2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Products')}
          style={[rncStyles.btnPrimary, rncStyles.rounded]}>
          <Text
            style={[rncStyles.fs5, rncStyles.textWhite, rncStyles.textCenter]}>
            View Products
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
