import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import musicImg from './asset/Image/images.jpg';
const PlayScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.headTop}>
        <View style={styles.header}>
          <Feather
            name="chevron-left"
            size={30}
            color="#fff"
            style={styles.iconback}
          />
          <Text style={styles.txtback}>Back</Text>
        </View>
        <View style={styles.soundicon}>
          <Entypo name="sound-mix" size={30} color="#fff" />
        </View>
      </View>
      <View style={styles.imgbox}>
        <Image source={musicImg} style={styles.musicsImg} />
      </View>
      <View style={styles.txtBox}>
        <View style={styles.detailbox}>
          <View style={styles.txtDesc}>
            <Feather name="music" size={25} style={styles.musicIcon} />
            <Text style={styles.Songname}>Kesariya</Text>
          </View>
          <Text style={styles.txtNameSinger}>Arman Malik & Sraya khosal</Text>
        </View>
        <View style={styles.circleBox}>
          <FontAwesome name="heart" size={30} color="#fff" />
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#383434',
  },

  headTop: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    width: 270,
    height: 50,
    backgroundColor: '#000',
    borderBottomRightRadius: 20,
  },
  iconback: {
    marginTop: 10,
  },
  txtback: {
    color: '#fff',
    marginTop: 14,
  },
  soundicon: {
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
    width: 250,
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
});

export default PlayScreen;
