import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { song } from './data'

const Search = () => {

 const names =[

    {
      name:"pavan"
    },
    {
      name:"harish"
    },
    {
      name:"ishan"
    }


 ]
  const renderSong =({index,item})=>{

  return(

    <View>
      <Text>{item.title}</Text>
    </View>
  )

  }


  return (
  <FlatList
   data={song}
   renderItem={renderSong}
   keyExtractor={(item)=>item.id}
   horizontal
   pagingEnabled
   showsHorizontalScrollIndicator={false}
   scrollEventThrottle={16}

  />
  )
}

export default Search