import React, { useState } from 'react'; // Importe o useState
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [processo, setProcesso] = useState(''); // Agora o useState funciona

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número do Processo"
        value={processo}
        onChangeText={setProcesso}
      />
      <View style={styles.iconsContainer}>
        <Link href="/formulario" asChild>
          <TouchableOpacity>
            <Image source={require('../../assets/formulario.png')} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/camera" asChild>
          <TouchableOpacity>
            <Image source={require('../../assets/images/camera (2).png')} style={styles.icon} />
          </TouchableOpacity>
        </Link>
        <Link href="/microfone" asChild>
          <TouchableOpacity>
            <Image source={require('../../assets/microfone.png')} style={styles.icon} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    width: 50,
    height: 50,
  },
});