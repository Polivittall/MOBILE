import { Stack } from 'expo-router';
import { StyleSheet, View, TextInput, Text, Button, Alert, TouchableHighlight } from 'react-native';
import {useState} from 'react';

import { ScreenContent } from '~/components/ScreenContent';

export default function Four() {

let [result, setResult] = useState(0);
let [resultE, setResultE] = useState(0);
let [resultEE, setResultEE] = useState(0);

let onPress = () => {
    setResult(valor / dolar)
    setResultE(valor / euro)
    setResultEE(valor / peso)
};

let [valor, setValor] = useState('')
let [dolar, setDolar] = useState('');
let [euro, setEuro] = useState('');
let [peso, setPeso] = useState('');


const [text, setText] = useState('');


  return (
    <>
      <Stack.Screen options={{ title: 'COTAÇÃO' }} />
      <View style={styles.container}>

                   <Text>
                   VALOR A SER CONVERTIDO
                   </Text>
                 <TextInput
                   style={styles.alternativeInput}
                   placeholder="R$ VALOR"
                   defaultValue={text}
                   onChangeText={newText => setValor(newText)}
                 />




                 <View style={styles.container}>

                 <Text>DOLÁR</Text>


                 <View style={styles.row}>

                    <TextInput
                        style={styles.input}
                        placeholder="$ VALOR"
                        defaultValue={text}
                        onChangeText={newText => setDolar(newText)}
                    />

                    <View style={styles.countContainer}>
                            <Text style={styles.countText}>{result}</Text>
                    </View>

                 </View>

                  <Text>EURO</Text>

                 <View style={styles.row}>

                     <TextInput
                         style={styles.input}
                         placeholder="$ VALOR"
                         defaultValue={text}
                         onChangeText={newText => setEuro(newText)}
                         />

                     <View style={styles.countContainer}>
                           <Text style={styles.countText}>{resultE}</Text>
                     </View>

                 </View>

                 <Text>PESO</Text>

                 <View style={styles.row}>

                     <TextInput
                         style={styles.input}
                         placeholder="$ VALOR"
                         defaultValue={text}
                         onChangeText={newText => setPeso(newText)}
                         />

                     <View style={styles.countContainer}>
                           <Text style={styles.countText}>{resultE}</Text>
                     </View>

                 </View>

                 </View>

                        <TouchableHighlight onPress={onPress}>
                           <View style={styles.button}>
                             <Text>CONVERTER</Text>
                           </View>
                         </TouchableHighlight>



      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {

  borderWidth: 2,
  padding: 8,
  marginButton: 14,
  borderRadius: 6,
  marginBottom: 10,
  width: 180,
  },

  alternativeInput: {
  borderWidth: 2,
    padding: 8,
    marginButton: 14,
    borderRadius: 6,
    marginBottom: 10,
  },

   button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      color: "841584"

    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    countText: {
      color: '#000000',
    },

});