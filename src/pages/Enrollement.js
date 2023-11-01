import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Enrollement = () => {
  return (
    <View>
      <Text style={styles.buyCourseHeading} >BUY COURSE</Text>
       <View style={styles.orderSummary} >
           <Text>Hello</Text>
       </View>
    </View>
  )
}

export default Enrollement

const styles = StyleSheet.create({
   buyCourseHeading : {
       textAlign : "center",
       color : "red",
       fontWeight :"900",
       fontSize : 30 
   },
   orderSummary :{
    width : "98%",
    height : 150,
    margin : 5 ,
    backgroundColor : "white",
    borderRadius : 20 ,
   } 
})