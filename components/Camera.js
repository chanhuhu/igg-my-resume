import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Camera } from 'expo-camera'

export default () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [takePictureMode, setTakePictureMode] = useState(false)
  const [picture, setPicture] = useState('')
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })();
  }, [])
  if (hasPermission === null) {
    return <View />
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  if(picture) {
    return <Image style={styles.avatar} source={{ uri: picture }} />
  } else if (takePictureMode) {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => { this.camera = ref }}
          type={Camera.Constants.Type.front}
          style={styles.camera}
        ></Camera>
      </View>
    )
  } else {
    return <Button
              onPress={() => setTakePictureMode(true)}
              title="Take Photo" 
           />
  }
}

const styles = StyleSheet.create({
  avatar: { width: '100%', height: 360, marginBottom: 20 },
  cameraContainer: { width: '100%', height: 400, marginBottom: 20 },
  camera: { width: '100%', height: 360 },
})
