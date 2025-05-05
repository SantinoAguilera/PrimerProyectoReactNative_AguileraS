import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [colour, setColour] = useState("#ffffff");
  const [number, setNumber] = useState(0);

  const toggleColour = () => {
    if (colour === "#ffffff") {
      setColour("#56c425");
    } else {
      setColour("#ffffff");
    }
  };

  const toggleNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: colour }]}>
      <Text>{number}</Text>
      <Button
      title = "Presionar"
      onPress={() => {
        toggleColour();
        toggleNumber();
      }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
