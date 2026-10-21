import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class acercademi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Acerca de mí </Text>
        <Link href="/">Inicio</Link>
        <Link href="/contacto">Contacto</Link>
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default acercademi
