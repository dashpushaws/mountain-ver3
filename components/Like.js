import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, ListItem, Icon, Tile, Header } from 'react-native-elements'
import { removeLike } from '../redux/actioncreator'

const Like = ({ navigation }) => {
  console.log('===================== Like =====================')

  const dispatch = useDispatch();

  const likes = useSelector(state => state.likes);
  const flag = useSelector(state => state.flag);

  return (
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        likes.map((likeItem, i) => (
              <ListItem containerStyle={{width:"100%"}} key={i}>
                <Avatar
                source={{uri: likeItem.image}} 
                />
                <ListItem.Content>
                  <ListItem.Title>{likeItem.title}</ListItem.Title>
                  <ListItem.Subtitle>{likeItem.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                
                {
                  flag.findIndex(flagItem => flagItem.id == likeItem.id) == -1 ?
                    <Icon
                      name='atlassian'
                      type='fontisto'
                      color='#FFCC00'
                    />
                    :
                    <Icon
                      name='flag'
                      type='entypo'
                      color='#009900'
                    />
                }

                <Icon 
                name='checkmark-outline' 
                type='ionicon' 
                color='#f00' 
                onPress={()=>{
                  dispatch(removeLike(likeItem))
                  }} 
                />
              </ListItem>
          )
        )
      }
      </ScrollView>
    </View>
    )
}
export default Like;