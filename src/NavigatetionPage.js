import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';
import Enrollement from './pages/Enrollement';
const Stack = createNativeStackNavigator();

const NavigatetionPage = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="CourseList" screenOptions={{ headerShown: false}} >
      <Stack.Screen name="CourseList" component={CourseList} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="Enrollement" component={Enrollement} />
    </Stack.Navigator>

    </NavigationContainer>
  )
}

export default NavigatetionPage

const styles = StyleSheet.create({})