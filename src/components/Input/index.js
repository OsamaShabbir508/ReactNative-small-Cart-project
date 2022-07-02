import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../Colors';
import metrix from '../../metrix';
const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={Colors.greyTwo}
        value=""
        onChangeText={val => {
          console.log(val);
        }}
      />
      <View style={styles.borderLine}></View>
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'column',
    padding: metrix.HorizontalSize(1),
    marginBottom:metrix.VerticalSize(10)
  },
  borderLine: {
    backgroundColor: Colors.grey,
    height: metrix.VerticalSize(1),
    width: '95%',
  },
});
