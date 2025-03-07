import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <Text style={styles.text}>Caminho: {path}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});