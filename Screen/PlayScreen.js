import {View, Text, StyleSheet, Image, FlatList,Animated,TouchableOpacity,Dimensions,scrollTopOffset} from 'react-native';
import React ,{useEffect,useRef,useState}from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import musicImg from './asset/Image/images.jpg';
import Slider from 'react-native-slider';

import TrackPlayer,
{Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player';
import { song2 } from './data2';
import { useNavigation } from '@react-navigation/native';



const {width,height} =Dimensions.get('window')

const setupPlayer= async()=>{
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(song2)
 }

 const togglePlayback=async(playbackState)=>{
   const currentTrack =await TrackPlayer.getCurrentTrack();

   if(currentTrack !== null){
     if(playbackState === State.Paused)
     await TrackPlayer.play()
   }
   else{
     await TrackPlayer.pause();
   }
 }



  
const PlayScreen = ({navigation}) => {
  const playbackState =usePlaybackState();
  const progress =useProgress()
  const songSlider =useRef(null)
  const [songIndex,setSongIndex] =useState(0)
  const scrollX=useRef(new Animated.Value(0)).current;
  
  
  const skipTo =async(trackId)=>{
    await TrackPlayer.skip(trackId)
  }

  useEffect(()=>{
    setupPlayer();
     scrollX.addListener(({value})=>{
    //  console.log('Scroll X',scrollX)
    //  console.log('Device Width',scrollX.width)
     const index =Math.round(value/width)
    //  console.log('index:',index)
    skipTo(index)
    setSongIndex(index)
     })
    return() =>{
     scrollX.removeAllListeners()
    }
  },[]);

   
  const skipNext =()=>{
    songSlider.current.scrollTopOffset({

      offset:(songIndex +1)*width
    })
  }

   const skipPrevious =()=>{
    songSlider.current.scrollTopOffset({
      offset:(songIndex-1)*width,
    })
  }
  const renderSong = ({index, item}) => {
    return (
      <Animated.View style={{
        width:width
      }}>

      <View style={styles.imgbox}>
        <Image source={item.image} style={styles.musicsImg} />
      </View>

        <View style={styles.txtDesc}>
          <Feather name="music" size={25} style={styles.musicIcon} />
          <Text style={styles.Songname}>{song2[songIndex].title}</Text>
        </View>
        <Text style={styles.txtNameSinger}>{song2[songIndex].artist}  {song2[songIndex].album}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.body}>
     <View style={styles.headTop}>
  <View style={styles.header}>
    <Feather name="chevron-left" size={30} color="#fff" style={styles.iconback} onPress={()=>navigation.goBack()}/>
    <Text style={styles.txtback}>Back</Text>
  </View>
  <View style={styles.soundicon}>
  <Entypo name="sound-mix" size={30} color="#fff" />
  </View>
  </View>
      
      <View style={styles.txtBox}>
        <View style={styles.detailbox}>
          <Animated.FlatList
           ref={songSlider}
            data={song2}
            renderItem={renderSong}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
             [{nativeEvent:{
               contentOffset:{x:scrollX}
             }}],
              {useNativeDriver:true}
            )}
          />
        </View>
        
      </View>
      <View style={styles.playsystem}>
        <View style={styles.backbtn}>
        <TouchableOpacity onPress={()=>skipPrevious}>
          <AntDesign name="banckward" color="#ECCC68" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.playbtn}>
        <TouchableOpacity onPress={()=>togglePlayback(playbackState)}>
          {

              playbackState ===State.Playing?
              <AntDesign name= "pause"  color="#000" size={40} onPress={()=>TrackPlayer.pause()}  />
              :
              <AntDesign name= "caretright"  color="#000" size={40} />

          }

            
           
          </TouchableOpacity>
        </View>
        <View style={styles.nextbtn}>
          <TouchableOpacity onPress={()=>skipNext} >
          <AntDesign name="forward" color="#ECCC68" size={35} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.progressbox}>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#ECCC68"
          minimumTrackTintColor="#ECCC68"
          miximumTrackTintColor="#fff"
          onSlidingComplete={async(value) => {
            await TrackPlayer.seekTo(value)
          }}
        />
      </View>
      <View style={styles.progressLabelContainer}>
        <Text style={styles.progressLabelContainertxt}>{new Date(progress.position*1000).toISOString().substr(14,5)}</Text>
        <Text style={styles.progressLabelContainertxt}>{new Date(progress.duration-progress.position*1000).toISOString().substr(14,5)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#383434',
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
  iconback: {
    marginTop: 10,
  },
  txtback: {
    color: '#fff',
    marginTop: 14,
  },
  soundicon:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:20
  },
  imgbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicsImg: {
    width: 250,
    height: 250,
    marginTop: 70,
    borderRadius: 150,
  },
  txtBox: {
    flexDirection: 'row',
  },
  txtDesc: {
    flexDirection: 'row',
    
  },
  detailbox: {
   
    flexDirection: 'column',
  },
  musicIcon: {
    marginTop: 10,
    marginLeft: 20,
    color: '#ECCC68',
  },
  Songname: {
    marginTop: 8,
    marginLeft: 15,
    fontSize: 22,
    color: '#fff',
  },
  txtNameSinger: {
    marginTop: 10,
    marginLeft: 20,
    color: '#fff',
  },
  circleBox: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playsystem: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backbtn: {
    marginLeft: 50,
  },
  playbtn: {
    width: 60,
    height: 60,
    backgroundColor: '#ECCC68',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextbtn: {
    marginRight: 50,
  },
  progressbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    width: 340,
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  progressLabelContainertxt: {
    color: '#fff',
  },
});

export default PlayScreen;
