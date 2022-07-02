import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import Colors from "../../Colors";
import metrix from "../../metrix";
const AppButon=(props)=>{
    return(
        <View style={styles.container}>
           <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}
export default AppButon;
const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.blue,
        width:'95%',
        justifyContent:'center',
        alignItems:'center',
        padding:metrix.HorizontalSize(8),
        borderRadius:metrix.VerticalSize(20)
    },
    text:{
      color:Colors.white,
        fontSize:metrix.VerticalSize(18),
        fontWeight:'700'

    }
})