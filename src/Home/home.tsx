import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#935610"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
            placeholderTextColor="#935610"
        />
      </View>

      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.buttonCadastrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Image source={require('../assets/coffe.png')} style={styles.logo2} />
    </View>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: height * 0.05,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3,
    marginBottom: height * 0.03, // Reduz o espaçamento abaixo da logo
  },
  inputContainer: {
    width: width * 0.8,
    marginTop: height * 0.02, // Reduz o espaço acima do inputContainer
    marginBottom: height * 0.02,
  },
  input: {
    width: '100%',
    height: height * 0.06,
    borderColor: '#38180B',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15, // Reduz o espaço entre os inputs
    backgroundColor: '#fff',
  },
  buttonEntrar: {
    width: width * 0.6,
    marginTop: height * 0.015, // Reduz o espaço acima do botão Login
    backgroundColor: '#38180B',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonCadastrar: {
    width: width * 0.6,
    marginTop: height * 0.015, // Reduz o espaço acima do botão Cadastrar
    backgroundColor: '#935610',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  logo2: {
    position: 'absolute',
    bottom: 0,
    width: width * 1.0,
    height: height * 0.2,
  },
});
