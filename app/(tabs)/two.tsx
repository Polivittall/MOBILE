import React, {Component, useState} from 'react';
import {Alert, Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { Stack } from 'expo-router';


export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Novo Preço :)');
  }

  render() {

    return (
      <View>

        <View style={styles.textContainer}>

           <Text>
           PRODUTO
           </Text>

        <TextInput
         style={styles.input}
         placeholder="Insira o nome do produto"
         />

           <Text>
            PREÇO ATUAL
           </Text>

           <TextInput
           style={styles.input}
           placeholder="R$ produto"/>

        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Reajuste 5%"
            color="#841584"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

    input: {

    borderWidth: 2,
    padding: 8,
    marginButton: 14,
    borderRadius: 6,
    marginBottom: 10,
    },

});
