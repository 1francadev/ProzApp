import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import AntDesign from '@expo/vector-icons/AntDesign';

import ProzLogo2 from '../assets/ProzEducacao.png';
import LogoProz from '../assets/LogoProz.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '' || role === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (role === 'Enfermeiro' || role === 'enfermeiro' || role === 'Medico' || role === 'medico') {
      if (email === 'a' && password === 'a') {
        if (role === 'Enfermeiro' || role === 'enfermeiro') {
          navigation.navigate('EnfermeiroScreen');
        } else if (role === 'Medico' || role === 'medico') {
          navigation.navigate('MedicoScreen');
        }
      } else {
        setErrorMessage('E-mail ou senha incorretos.');
      }
    } else {
      setErrorMessage('Cargo Não Válido.');
    }
  };

  const backScreen = () => {
    navigation.navigate('InitialScreen');
  };

  const forgotPass = () => {
    navigation.navigate('InitialScreen');
  };

  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.navBar}>
        <TouchableOpacity style={stylesLogin.backBtn} onPress={backScreen}>
          <Text style={stylesLogin.backBtnText}>
           <AntDesign name="leftcircle" size={17} color="black" /> Voltar
          </Text>
        </TouchableOpacity>
        <Image source={LogoProz} style={stylesLogin.logo2} />
      </View>

      <View style={stylesLogin.containerLogin}>
        <View style={stylesLogin.topContainer}>
          <Image source={ProzLogo2} style={stylesLogin.logo} />
          <Text style={stylesLogin.title}>Login Proz Educação!</Text>
        </View>

        <Text style={stylesLogin.label}>Digite seu Cargo:</Text>
        <TouchableOpacity style={stylesLogin.picker}>
          <Picker selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)}>
            <Picker.Item style={stylesLogin.pickeritem} label="Selecione o Cargo" value="" />
            <Picker.Item label="Médico" value="medico" />
            <Picker.Item label="Enfermeiro" value="enfermeiro" />
          </Picker>
        </TouchableOpacity>
        <Text style={stylesLogin.label}>E-mail:</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={stylesLogin.label}>Senha:</Text>
        <TextInput
          style={stylesLogin.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={stylesLogin.forgotPass} onPress={forgotPass}>
          Esqueceu a Senha?
        </Text>

        {errorMessage ? <Text style={stylesLogin.error}>{errorMessage}</Text> : null}

        <TouchableOpacity style={stylesLogin.btn} onPress={handleLogin}>
          <Text style={stylesLogin.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  navBar: {
    position: 'relative',
    marginTop: 40,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 17,
    color: "#000",
  },
  logo2: {
    width: 50,
    height: 50,
  },
  containerLogin: {
    padding: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 40,
    marginTop: 5,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 20,
  },
  pickeritem: {
    color: '#595959',
  },
  label: {
    fontSize: 17,
    marginBottom: 5,
    paddingLeft: 10,
    color: "#BD10E0",
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 17,
  },
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#FF8000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPass: {
    color: '#00B0FF',
    textAlign: "center",
    marginBottom: 20,
  },
});