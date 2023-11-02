import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CourseDetails = () => {
  return (
    <View>
      <Text style={styles.CourseDetailsHeading} >Course Details</Text>
       <View style={styles.courseDetails}>
         <Text>Hello</Text>
       </View>
    </View>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
    CourseDetailsHeading : {
        textAlign : "center",
        color :"red",
        fontSize : 30,
        fontWeight : "900"
    },
    courseDetails : {
       width : "98%",
       height : "90%",
       margin :5,
       backgroundColor : "white",
       elevation: 2,
       borderRadius : 20,
       
    }
})