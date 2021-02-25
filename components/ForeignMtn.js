import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import api from '../api/list'

const ForeignMtn = ({ navigation }) => {
  console.log('===================== ForeignMtn =====================')

  const [list, setList] = useState([])
  const getList = useCallback(async () => {
    const result = await api.list();
    setList(result.data.filter(item => item.id > 5));
  }, [])

  useEffect(() => {
    getList();
  }, []) 
  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow:1, justifyContent:"center" }}>
        {
          list.map((item, i) => 
            <ListItem key={i} onPress={()=>navigation.navigate("Detail", {id: item.id})}>
              <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        } 
      </ScrollView>
    </View>
  )
  
}
export default ForeignMtn;

