import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const CourseList = ({navigation}) => {



  return (
    <View> 
         <Text style={styles.courseHeading} >
              WELCOME TO LMS
         </Text> 
         <ScrollView> 
        <TouchableOpacity onPress = {()=>{ navigation.navigate("CourseDetails")} } >    
       <View style={styles.courseContainer}  >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       </TouchableOpacity>
       <View style={styles.courseContainer} >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       <View style={styles.courseContainer} >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       <View style={styles.courseContainer} >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       <View style={styles.courseContainer} >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       <View style={styles.courseContainer} >
            <Text style={styles.courseContainer_Heding} >Introduction to React Native</Text>
            <Text style={styles.courseContainer_By} >By</Text>
            <Text style={styles.courseContainer_teacher} >Vikash Kumar Singh</Text>
       </View>
       </ScrollView>
    </View>
  )
}

export default CourseList

const styles = StyleSheet.create({
   courseHeading : {
        textAlign : "center",
        fontSize : 30,
        color : "red",
        fontWeight : "900"
   },
   courseContainer : {
        width : "98%",
        height : 150,
        margin : 5 ,
        backgroundColor : "green",
        borderRadius : 20,
   },
   courseContainer_Heding :{
       textAlign : "center",
      fontSize : 25,
      color : "white"
   },
   courseContainer_By :{
      textAlign : "center",
      fontSize : 17,
      width : 50,
      height : 50 ,
      borderRadius : 50,
      backgroundColor :"yellow",
      color :"red",
      paddingTop : 10,
      marginLeft : "43%",
      marginTop : 15
   },
   courseContainer_teacher :{
    textAlign : "center",
    fontSize : 25,
    color : "white"
   }

})