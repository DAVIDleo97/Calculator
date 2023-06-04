import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';


export default function App() {

  const [num1, setnum1] = useState('')
  const [result, setresult] = useState('')
  const operation = ['+', '-', '*', '/', '.']

  const calc = value =>{
    if (operation.includes(value) && operation.includes(num1.slice(-1)) ||
        operation.includes(value) && num1 == ""){
      return;
    }
    setnum1(num1 + value);
    if (!operation.includes(value)){
      setresult(eval(num1 + value))
    }
    }

  const limpiar = () =>{
    setresult('');
    setnum1('')
  }

  const calculate = () =>{
    if (operation.includes(num1.slice(-1))){
      return;
    }
    setresult(eval(num1))
  }

  const clear = () =>
  {
    if (num1 == ''){
      return;
    }
    const value = num1.slice(0, -1);
    setnum1(value);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{num1}</Text>
      <Text style={styles.texto}>"{result}"</Text>
      <View style={{left: 30, top: 60}}>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(1))}> 1 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(2))}> 2 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(3))}> 3 </Text></TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(4))}> 4 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(5))}> 5 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(6))}> 6 </Text></TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(7))}> 7 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(8))}> 8 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(9))}> 9 </Text></TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(0))}> 0 </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc('+'))}> + </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc('-'))}> - </Text></TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc('*'))}> * </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc('/'))}> / </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> calc(' . '))}> . </Text></TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity><Text style={styles.numeros} onPress={()=>clear()}>D</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={()=>calculate()}>=</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.numeros} onPress={(()=> limpiar())}>C</Text></TouchableOpacity>
        </View>
      </View>

      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  fila:{
    flexDirection:'row',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  numeros:{
    fontStyle: 'italic',
    fontSize: 60,
    width: 120,
    height: 100,
  },
  numeros2:{
    fontStyle: 'italic',
    fontSize: 60,
    width: 100,
    height: 100,
    right: 45
  },
  numeros3:{
    fontStyle: 'italic',
    fontSize: 60,
    width: 100,
    height: 100,
    left: 20
  },
  texto:{
    fontSize: 60,
    
  }
});
