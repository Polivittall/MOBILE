import { Stack } from 'expo-router';
import { StyleSheet, View, TextInput, Text, Button, Image, TouchableHighlight} from 'react-native';
import {useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScreenContent } from '~/components/ScreenContent';
import * as ImagePicker from 'expo-image-picker';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

export default function five () {

            let [nome, setNome] = useState ('');
            let [venda, setVenda] = useState ('');
            let [compra, setCompra] = useState ('');
            let [descricao, setDescricao] = useState ();
            let [sub, setSub] = useState ();

            let [vendax, setVendax] = useState ('');
            let [comprax, setComprax] = useState (0);

            let onPress = () => {
            setVendax (compra / 0.671)
            };

            const [selectedImage, setSelectedImage] = useState('testa');
            const [takenImage, setTakenImage] = useState('teste');
            const [text, setText] = useState('');
            const [value, setValue] = useState(null);

             const pickImage = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });

                if (!result.cancelled) {
                  setSelectedImage(result.assets[0].uri);
                }
              };

              const takePicture = async () => {
                let result = await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });

                setTakenImage(result.assets[0].uri);
              };

            return (
            <>
            <Stack.Screen options={{ title: 'CADASTRO' }} />

            <View style={styles.container}>

              <Text>
              NOME
              </Text>
              <TextInput
              style={styles.input}
              placeholder="Insira o nome do produto"
              onChangeText={newText => setNome(newText)}
              />


              <View>

                <Dropdown
                   style={styles.dropdown}
                   placeholderStyle={styles.placeholderStyle}
                   selectedTextStyle={styles.selectedTextStyle}
                   inputSearchStyle={styles.inputSearchStyle}
                   iconStyle={styles.iconStyle}
                   data={data}
                   search
                   maxHeight={300}
                   labelField="label"
                   valueField="value"
                   placeholder="Categoria"
                   searchPlaceholder="Search..."
                   value={value}
                   onChange={item => {
                     setValue(item.value);
                   }}
                   renderLeftIcon={() => (
                     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                   )}
                 />

           </View>

           <View style={styles.row}>

             <TextInput
             style={styles.alternativeInputA}
             placeholder="R$ COMPRA"
             onChangeText={newText => setCompra(newText)}
             defaultValue={text}
             />

           <View style={styles.countContainer} >

            <Text style={styles.countText}>{vendax}</Text>

             <TouchableHighlight onPress={onPress}>
                 <View style={styles.button}>
                    <Text>PREÇO DE VENDA</Text>
                 </View>
             </TouchableHighlight>

            </View>



            </View>



                <Text>
                SUBTÍTULO
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setSub(newText)}
                  />

                 <Text>
                  DESCRIÇÃO
                 </Text>
                <TextInput
                    style={styles.alternativeInput}
                    onChangeText={newText => setDescricao(newText)}
                   />

             <View style={styles.container}>

                <Button title="Selecionar uma imagem" onPress={pickImage} color="#808080" />
                      {selectedImage && (
                        <Image source={{ uri: selectedImage }} style={styles.image} />
                      )}

                <View >
                    <Button style={styles.alternativeButton} title="Tirar uma foto" onPress={takePicture} color="#808080" />
                                 {takenImage && <Image source={{ uri: takenImage }} style={styles.image} />}
                </View>


             </View>

            </View>

            <View style={styles.buttonContainer}>
                  <Button
                      onPress={this._onPressButton}
                       title="SALVAR"
                       color="#000000"
                  />
            </View>


            </>

            );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  button: {

    padding: 8,
    marginButton: 14,
    borderRadius: 6,
    marginBottom: 5,
    color: "841584",
  },

  alternativeButton: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 10,
        marginButton: 14,
  },

  input: {

    borderWidth: 2,
    padding: 8,
    marginButton: 14,
    borderRadius: 6,
    marginBottom: 10,
    margin: 10
    },

    alternativeInput: {
        borderWidth: 2,
        padding: 40,
        marginButton: 14,
        borderRadius: 10,
        marginBottom: 10,
        margin: 10,
        },

    alternativeInputInput :{
        alignItems: 'left',
        borderWidth: 2,
        padding: 8,
        marginButton: 14,
        borderRadius: 6,
        marginBottom: 10,
        width: 180,
        margin :10,

        },

    alternativeInputA: {
          borderWidth: 2,
          padding: 8,
          marginButton: 14,
          borderRadius: 6,
          marginBottom: 20,
          width: 180,
          margin :10,
    },

    alternativeLayoutButtonContainer: {
      margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },

    buttonContainer: {
        margin: 20,
        },

      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

    dropdown: {
         margin: 16,
         height: 50,
         borderBottomColor: 'gray',
         borderBottomWidth: 0.5,
         },

    icon: {
         marginRight: 5,
         },

    placeholderStyle: {
         fontSize: 16,
         },

    selectedTextStyle: {
         fontSize: 16,
         },

    iconStyle: {
          width: 20,
          height: 20,
          },
    inputSearchStyle: {
          height: 40,
          fontSize: 16,
          },
     countContainer: {
         alignItems: 'center',
         padding: 10,
       },
        countText: {
             color: '#000000',
              alignItems: 'center',

           },

});