// https://snack.expo.io/@jr_acn/65abc5

import * as React from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Card } from 'react-native-paper';
import Constants from 'expo-constants';

export default class App extends React.Component {

  state = {
    gasolina: '',
    etanol: '',
    resultado: 'Preencha os dados e calcule'
  }

  calculate = () => {
    const { etanol, gasolina } = this.state;
    if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.70) {
        this.setState({ resultado: 'Vale a pena gasolina' })
      } else if (value < 0.70) {
        this.setState({ resultado: 'Vale a pena etanol' })
      } else {
        this.setState({ resultado: 'São equivalentes' })
      }

      console.log(value);
    }
  }

  onChangeText = (value) => {
    this.setState(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Etanol ou Gasolina?</Text>
        <Card>
          <Text>Etanol:</Text>
          <TextInput value={this.state.etanol}
            onChangeText={(etanol) => this.onChangeText({ etanol })} />
          <Text>Gasolina:</Text>
          <TextInput value={this.state.gasolina}
            onChangeText={(gasolina) => this.onChangeText({ gasolina })} />
          <Button onPress={() => this.calculate()} title='Calcular' />

          <Text style={styles.paragraph}>{this.state.resultado}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fffff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
