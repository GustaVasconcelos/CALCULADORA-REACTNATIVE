import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {

    const [operacao, setOperacao] = useState(0)
    const [resultado, setResultado] = useState(0)

    const operar = () =>{
        setResultado(eval(operacao))
    }

    return (
        <View style={styles.container}>
            {/* <TextInput 
                style={styles.display}
                value={String(operacao)}
                onChangeText={(texto) => {setOperacao(texto)}}
            ></TextInput>
            <TextInput 
                style={styles.display}
                value={String(resultado)}
                onChangeText={(texto) => {setResultado(texto)}}
            >a</TextInput>
    
            <TouchableHighlight style={styles.btn} onPress={operar}>
                <Text>Operar</Text>
            </TouchableHighlight> */}
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    display:{
        borderWidth:1,
        borderRadius:20,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:15
    },
    btn:{
        backgroundColor:'#AAA',
        padding:20,
    },

});
