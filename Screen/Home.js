import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import musicImg from './asset/Image/images.jpg';


const Home = () => {
  return (
    <View style={styles.body}>
      <View style={styles.card1}>
        <View style={styles.card2}>
          <AntDesign name="play" size={30} color="#ECCC68" />
          <Text style={styles.txtHeader}>My Music City</Text>
        </View>
        <View style={styles.iconSound}>
          <Entypo name="sound-mix" size={30} color="#fff" />
        </View>
      </View>

      <View style={styles.card3}>
        <View style={styles.card4}>
          <Image source={musicImg} style={styles.imgMusic} />
        </View>
        <View style={styles.card5}>
          <Text style={styles.txttitle}>Kesariya </Text>
          <Text style={styles.txttitle2}>( Movie from Brahmaster) </Text>
          <Text style={styles.txtName}>Pritam,Arijit Singh</Text>
          <View style={styles.card6}>
            <View style={styles.circle1}>
              <AntDesign
                name="caretright"
                size={30}
                color="#ECCC68"
                style={styles.playicon}
              />
            </View>
            <View style={styles.circle1}>
              <AntDesign
                name="heart"
                size={30}
                color="#fff"
                style={styles.hearticon}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardlineGroup}>
        <View style={styles.cardline}>
          <Image source={musicImg} style={styles.cdlimg} />
          <View style={styles.cdltxt}>
            <Text style={styles.cdltitle}>Teri Ada</Text>
            <Text style={styles.cdlDesc}>Mohit Chouhan</Text>
          </View>
          <AntDesign
            name="heart"
            size={30}
            color="#fff"
            style={styles.Cdlhearticon}
          />
          <Entypo
            name="dots-three-vertical"
            size={25}
            color="#fff"
            style={styles.cldthree}
          />
        </View>

        <View style={styles.cardline}>
          <Image source={musicImg} style={styles.cdlimg} />
          <View style={styles.cdltxt}>
            <Text style={styles.cdltitle}>Teri Ada</Text>
            <Text style={styles.cdlDesc}>Mohit Chouhan</Text>
          </View>
          <AntDesign
            name="heart"
            size={30}
            color="#fff"
            style={styles.Cdlhearticon}
          />
          <Entypo
            name="dots-three-vertical"
            size={25}
            color="#fff"
            style={styles.cldthree}
          />
        </View>

        <View style={styles.cardline}>
          <Image source={musicImg} style={styles.cdlimg} />
          <View style={styles.cdltxt}>
            <Text style={styles.cdltitle}>Teri Ada</Text>
            <Text style={styles.cdlDesc}>Mohit Chouhan</Text>
          </View>
          <AntDesign
            name="heart"
            size={30}
            color="#fff"
            style={styles.Cdlhearticon}
          />
          <Entypo
            name="dots-three-vertical"
            size={25}
            color="#fff"
            style={styles.cldthree}
          />
        </View>

        <View style={styles.cardline}>
          <Image source={musicImg} style={styles.cdlimg} />
          <View style={styles.cdltxt}>
            <Text style={styles.cdltitle}>Teri Ada</Text>
            <Text style={styles.cdlDesc}>Mohit Chouhan</Text>
          </View>
          <AntDesign
            name="heart"
            size={30}
            color="#fff"
            style={styles.Cdlhearticon}
          />
          <Entypo
            name="dots-three-vertical"
            size={25}
            color="#fff"
            style={styles.cldthree}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#383434',
  },
  card1: {
    flexDirection: 'row',
  },
  card2: {
    width: 270,
    height: 50,
    backgroundColor: '#000',
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Dm Sans',
    marginLeft: 5,
  },
  iconSound: {
    marginRight: 20,
    marginLeft: 30,
    marginEnd: 20,
    marginTop: 10,
  },
  card3: {
    flexDirection: 'row',
    marginTop: 30,
  },
  imgMusic: {
    width: 170,
    height: 160,
    marginLeft: 20,
  },
  card5: {
    flexDirection: 'column',
  },
  txttitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
    marginEnd: 10,
  },
  txttitle2: {
    marginTop: 5,
    color: '#fff',
    marginLeft: 5,
  },
  txtName: {
    marginTop: 5,
    color: '#fff',
    marginLeft: 5,
  },
  card6: {
    flexDirection: 'row',
  },
  circle1: {
    width: 54,
    height: 54,
    borderRadius: 50,
    backgroundColor: '#000',
    marginLeft: 10,
    marginTop: 20,
    shadowColor:"#fff",
    shadowOffset:{
      width:5,
      height:5,
    },
    shadowOpacity:5,
    shadowRadius:3.04,
    elevation:10
  },
  playicon: {
    marginLeft: 10,
    marginTop: 10,
  },
  hearticon: {
    marginLeft: 12,
    marginTop: 12,
  },
  cardlineGroup: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardline: {
    width: 340,
    height: 60,
    marginTop: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    borderRadius: 50,
    shadowColor:"#fff",
    shadowOffset:{
      width:5,
      height:5,
    },
    shadowOpacity:5,
    shadowRadius:3.04,
    elevation:5
  },
  cdlimg: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 7,
  },
  cdltxt: {
    flexDirection: 'column',
  },
  cdltitle: {
    color: '#fff',
    fontFamily: 'Dm sans',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 10,
  },
  cdlDesc: {
    color: '#fff',
    marginLeft: 20,
  },
  Cdlhearticon: {
    marginLeft: 90,
    marginTop: 15,
  },
  cldthree: {
    color: '#fff',
    marginTop: 15,
    marginLeft: 15,
  },
});

export default Home;
