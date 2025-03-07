import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera'; // Importe o componente Camera corretamente
import { Link } from 'expo-router';


export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera>(null); // Use o tipo Camera diretamente

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Solicite permissões
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Salve a foto no dispositivo
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}>Tirar Foto</Text>
        </TouchableOpacity>
      </Camera>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#6200ee',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
  },
});