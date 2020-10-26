import React, { useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import { PermissionsAndroid, Platform } from 'react-native';

export default PhotoCamera = () => {
  const cameraRef = useRef(null);

  // Captures the images
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const img = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
          maxWidth: 1080,
          maxHeight: 1920,
        });

        if (Platform.OS === 'android') {
          const permission =
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
          await PermissionsAndroid.request(permission);
        }

        CameraRoll.save(img.uri, 'photo', 'temp-img');
      } catch (err) {
        console.log('Akshay err', err);
      }
    }
  };

  return (
    <View style={CameraStyles.cameraContainer}>
      <RNCamera
        ref={cameraRef}
        style={CameraStyles.camera}
        type={RNCamera.Constants.Type.back}
        playSoundOnCapture={true}
      />
      <View style={CameraStyles.cameraOptions}>
        <Button onPress={takePicture} color="red" title="Snap" />
      </View>
    </View>
  );
};

const CameraStyles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraOptions: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
