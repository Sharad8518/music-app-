import { View, Text,FlatList,StyleSheet,TextInput,Image,ScrollView} from 'react-native'
import React from 'react'
import { song } from './data'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import imagemy from "./asset/Image/images.jpg"
const Search = () => {


 

const renderSong =({index,item}) =>{

return(

<View style={styles.listBox}>
  <View style={styles.list}>
  <Image source={item.image} style={styles.Img} />
  <View style={styles.txttitle}>
   <Text style={styles.txt}>{item.title}</Text>
   <Text style={styles.movietxt}>{item.album}</Text>
  </View>
  </View>
  </View>
)

}



  return(

    <View style={styles.body}>
     
 <View style={styles.headTop}>
  <View style={styles.header}>
    <Feather name="search" size={25} color="#fff" style={styles.iconSearch} />
    <TextInput  placeholder='Search...' style={styles.txtEdit} placeholderTextColor="#fff" />
   
  </View>
  <View style={styles.soundicon}>
  <Entypo name="sound-mix" size={30} color="#fff" />
  </View>
  </View>


  


  <FlatList
  data={song}
  renderItem={renderSong}
  
  />




  
    </View>
  )

  }


  

const styles =StyleSheet.create({
body:{
  flex:1,
  backgroundColor:"#383434"
},
headTop:{
 flexDirection:"row"
 
},
header:{
  flexDirection:"row",
  width:270,
  height:50,
  backgroundColor:"#000",
  borderBottomRightRadius: 20,
},
iconSearch:{
  marginTop:10,
  marginLeft:3
},
txtEdit:{
  width:200,
  color:"#fff"
},
soundicon:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  marginLeft:20
},
listBox:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
marginTop:10
},
list:{
width:330,
height:60,
marginTop:5,
flexDirection:"row",
borderRadius:50,
backgroundColor:"#000"
},
Img :{
width:45,
height:45,
marginLeft:10,
marginTop:7,
borderRadius:50
},
txttitle:{
flexDirection:"column"
},
txt:{
  color:"#fff",
  
  marginLeft:20,
  marginTop:5,
  fontFamily: 'Dm sans',
},
movietxt:{
  color:"#ECCC68",
  marginTop:5,
  marginLeft:20
}


})


export default Search