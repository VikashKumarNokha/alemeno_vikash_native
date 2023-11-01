import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseList from './src/pages/CourseList'
import CourseDetails from './src/pages/CourseDetails'
import Enrollement from './src/pages/Enrollement'

const App = () => {
  return (
    <View>
      {/* <CourseList/> */}
      {/* <CourseDetails/> */}
      <Enrollement/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})