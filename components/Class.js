import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const Class = ({ navigation }) => {
  console.log('===================== Class =====================')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button 
        buttonStyle={{width: '100%', height: '30%'}} 
        onPress={() => {
          navigation.navigate("DomesticMtn")
        }} 
        title="국내산(山)" 
      />
      <Button 
        buttonStyle={{width: '100%', height: '30%'}} 
        onPress={() => {
          navigation.navigate("ForeignMtn")
        }} 
        title="외국산(山)" 
      />
    </View>
    )
}
export default Class;