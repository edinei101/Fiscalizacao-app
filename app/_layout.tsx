import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="formulario"
        options={{
          title: 'Formulário',
        }}
      />
      <Stack.Screen
        name="camera"
        options={{
          title: 'Câmera',
        }}
      />
      <Stack.Screen
        name="microfone"
        options={{
          title: 'Microfone',
        }}
      />
    </Stack>
  );
}
