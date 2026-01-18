import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { BasicCalculator } from '../../emitter/Calculator';

const Calculator = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const [result, setResult] = useState<number>(0);

  const Addition = async () => {
    const res = await BasicCalculator.add(a, b);
    setResult(res);
  };
  const Subt = async () => {
    const res = await BasicCalculator.sub(a, b);
    setResult(res);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{result}</Text>
      <TextInput
        onChangeText={text => setA(parseInt(text))}
        inputMode={'number'}
        value={a}
        style={{
          width: '50%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          color: '#000',
        }}
        placeholder="Enter A"
        placeholderTextColor={'#2f2f2f'}
      />
      <TextInput
        onChangeText={text => setB(parseInt(text))}
        inputMode={'number'}
        value={b}
        style={{
          width: '50%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 10,
          color: '#000',
        }}
        placeholder="Enter B"
        placeholderTextColor={'#2f2f2f'}
      />
      <TouchableOpacity
        onPress={Addition}
        style={{
          marginTop: 10,
          width: '50%',
          height: 50,
          boxShadow: '0 0 5px gray inset',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={Subt}
        style={{
          marginTop: 10,
          width: '50%',
          height: 50,
          boxShadow: '0 0 5px gray inset',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Subtract</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({});
