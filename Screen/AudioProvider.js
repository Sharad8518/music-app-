import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MediaLibrary from 'react-native-media-library';
export class AudioProvider extends Component {
    constructor(props){
    super(props)
    }

getPermission =async() =>{
  const permission=  await MediaLibrary.getPermissionAsync()
  console.log(permission)
};

componentDidMount(){
    getPermission()
}

  render() {
    return (
      <View>
        <Text>AudioProvider</Text>
      </View>
    )
  }
}

export default AudioProvider