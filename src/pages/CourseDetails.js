import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const CourseDetails = () => {
  return (
    <View>
      <Text style={styles.CourseDetailsHeading} >Course Details</Text>
       <ScrollView>
       <View style={styles.courseDetails}>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Course name :</Text>
             <Text style ={styles.courseTextRight} >Introduction to React Native</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Instructor's name :</Text>
             <Text style ={styles.courseTextRight} >John Doe</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Description :</Text>
             <Text style ={styles.courseTextRight} >'Learn the basics of React Native development and build your first mobile app.</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Enrollment status :</Text>
             <Text style ={styles.courseTextRight} >Open</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Course duration :</Text>
             <Text style ={styles.courseTextRight} > 8 Weeks</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Schedule :</Text>
             <Text style ={styles.courseTextRight} >Tuesdays and Thursdays, 6:00 PM - 8:00 PM</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Location :</Text>
             <Text style ={styles.courseTextRight} >Online</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Pre-requisites :</Text>
             <Text style ={styles.courseTextRight} >Basic JavaScript knowledge', 'Familiarity with React</Text>
          </View>
          <View style ={styles.coursename}>
             <Text style ={styles.courseTextLeft} >Syllabus :</Text>
             <Text style ={styles.courseTextRight} >Introduction to Reac</Text>
          </View>

       </View>
       </ScrollView>
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
       height :  650 ,
       margin :5,
       backgroundColor : "white",
       elevation: 2,
       borderRadius : 20,
 
    },
    coursename : {
        flex : 1,
        justifyContent :"space-between",
        flexWrap :"nowrap",
        flexDirection : "row",
       marginLeft : 10,
       marginRight : 10,
       marginTop : 10
    },
    courseTextLeft : {
        fontWeight : "700",
        color : "black",
        fontSize : 20
    },
    courseTextRight :{
         fontSize :15,
         fontWeight : "400",
         color : "black",
         height : "auto"
    }
})