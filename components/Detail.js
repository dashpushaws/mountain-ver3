import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { addLike, removeLike, climb, unclimb } from '../redux/actioncreator'
import api from '../api/list'

const Detail = ({ navigation, route }) => {
  console.log('===================== Detail =====================')

  const { id } = route.params;

  const [item, setList] = useState(null)
  const getList = useCallback(async () => {
    const result = await api.get(id);
    setList(result.data);
  }, [])

  useEffect(() => {
    getList();
  }, [])

  const dispatch = useDispatch();

  const likes = useSelector(state => state.likes);
  const isExistedLike = likes.filter(item => item.id == id).length > 0 ? true : false;

  const flag = useSelector(state => state.flag);
  const isClimbed = flag.filter(item => item.id == id).length > 0 ? true : false;
  return (
    <View>
      { !item && <ProgressBarAndroid />}
      { item &&
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: item.image }} />
          <Card.Divider />
          <Text style=
            {{
              marginBottom: 10,
              marginLeft: 10,
              color: '#000',
            }}>
            {"위치: " + item.location}
          </Text>
          <Text style=
            {{
              marginLeft: 10,
              color: '#000',
            }}>
            {"높이: " + item.height}
          </Text>
          {
            isExistedLike ?
              <Icon
                raised
                name='favorite'
                type='material'
                color='#FF3333'
                onPress={() => {
                  dispatch(removeLike(item))
                }}
              />
              :
              <Icon
                raised
                name='favorite-border'
                type='material'
                color='#FF3333'
                onPress={() => {
                  dispatch(addLike(item))
                }}
              />
          }
          {
            isClimbed ?
              <Icon
                raised
                name='flag'
                type='entypo'
                color='#009900'
                onPress={() => {
                  dispatch(unclimb(item))
                }}
              />
              :
              <Icon
                raised
                name='atlassian'
                type='fontisto'
                color='#FFCC00'
                onPress={() => {
                  dispatch(climb(item))
                }}
              />
          }
          <Button
            title="Class화면으로 돌아가기"
            type="outline"
            onPress={() => {
              navigation.navigate('Class')
            }}
          />
        </Card>
      }
    </View>
  )
}
export default Detail;