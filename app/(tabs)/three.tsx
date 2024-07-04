import { Stack } from 'expo-router';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import {useState} from 'react';

import { ScreenContent } from '~/components/ScreenContent';

export default function Three() {
let [cep, setCep] = useState();
let [address, setAddress] = useState('');
let [bairro, setBairro] = useState([]);
let [estado, setEstado] = useState([]);
let [ibge, setIbge] = useState([]);
let [ddd, setDdd] = useState([]);

 const [text, setText] = useState('');
 const [Error, setError] = useState([]);

 const _onPressButton = () => {
   Alert.alert('You tapped the button!');
}

const fetchCep = async () => {

    try{

    let response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    setAddress(response.data.logradouro);
    setCep(response.data.cep)
    setBairro(response.data.cep)
    setEstado(response.data.cep)
    setIbge(response.data.cep)
    setDdd(response.data.cep)

    setError(null);
   }catch(e){
    setAddress([]);
    setError("Erro ao buscar cep");
   }
}

  return (
    <>
      <Stack.Screen options={{ title: 'API - CORREIOS' }} />
      <View style={styles.container}>

                   <Text>
                   BUSCAR CEP
                   </Text>
                 <TextInput
                   style={styles.input}
                   placeholder="Insira o CEP"
                   onChangeCep={newCep => setCep(newCep)}
                   defaultValue={text}
                 />
                  <Button
                   onPress={fetchCep}
                    title="BUSCAR CEP"
                    color="#841584"
                  />

                  <Text >Rua: {address}</Text>
                  <Text>Bairro: {bairro}</Text>
                  <Text>Estado: {estado}</Text>
                  <Text>CEP: {cep}</Text>
                  <Text>IBGE: {ibge}</Text>
                  <Text>DDD: {ddd}</Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  input: {

  borderWidth: 2,
  padding: 8,
  marginButton: 14,
  borderRadius: 6,
  marginBottom: 10,
  },
});


