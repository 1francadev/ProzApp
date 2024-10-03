import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

import ProzLogo from '../assets/ProzLogo.png';

export default function InitialScreen({ navigation }) {
  const initialEnter = () => {
    navigation.navigate('Login');
  };

  const loginErrors = () => {
    Alert.alert("Equipe Proz:", "Entre em contato conosco e relate seu problema!\n\n +55 11 99842-9053");
  };

  return (
    <View style={stylesInitial.container}>
      <View style={stylesInitial.topContainer}>
        <Image source={ProzLogo} style={stylesInitial.logo} />
      </View>

      <View style={stylesInitial.bottomContainer}>
        <TouchableOpacity style={stylesInitial.btn} onPress={initialEnter}>
          <Text style={stylesInitial.btnText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={stylesInitial.infoText}>
          Caso não saiba suas credencias de login, favor entrar em contato com a direção.
        </Text>

        <Text style={stylesInitial.forgotPass} onPress={loginErrors}>
          Problemas com login?
        </Text>
      </View>
    </View>
  );
};

const stylesInitial = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 500,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: '#FF8000',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: "Montserrat",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  forgotPass: {
    color: '#00B0FF',
    textAlign: "center",
  },
  logo: {
    width: 150,
  },
});