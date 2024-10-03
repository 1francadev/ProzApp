import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import ProzLogo from '../assets/ProzLogo.png';

export default function MedicoScreen({ navigation }) {
  const [paciente, setPaciente] = useState('');
  const [dataNascimento, setNascimento] = useState('');
  const [cpfPaciente, setCPF] = useState('');
  const [rgPaciente, setRG] = useState('');
  const [emailPaciente, setEmail] = useState('');
  const [numberPaciente, setNumber] = useState('');

  const [ruaPaciente, setRua] = useState('');
  const [compPaciente, setComplemento] = useState('');
  const [cidadePaciente, setCidade] = useState('');
  const [numeroPaciente, setNumero] = useState('');
  const [bairroPaciente, setBairro] = useState('');
  const [estadoPaciente, setEstado] = useState('');
  const [cepPaciente, setCEP] = useState('');


  const [showSecondPart, setShowSecondPart] = useState(false);

  const submit = () => {
    if (ruaPaciente !== '' || compPaciente !== '' || cidadePaciente !== '' || numeroPaciente !== '' || bairroPaciente !== '' || estadoPaciente !== '' || cepPaciente !== '') {
      Alert.alert('Proz Educação','Dados enviados com Sucesso!');
      navigation.navigate('InitialScreen');
    } else {
      Alert.alert('Proz Educação','Preencha todos os campos!');
    };
  };

  const validateForm = () => {
    if (paciente !== '' || dataNascimento !== '' || cpfPaciente !== '' || rgPaciente !== ''  || emailPaciente !== '' || numberPaciente !== '') {
      setShowSecondPart(true);
    } else {
      Alert.alert('Proz Educação','Preencha todos os campos!');
    };
  };

  return (
    <SafeAreaView style={stylesMedico.container}>
      <View style={stylesMedico.topContainer}>
        <Image source={ProzLogo} style={stylesMedico.logo} />
      </View>

      <ScrollView style={stylesMedico.scrollContainer}>
        <Text style={stylesMedico.title}>Dados Pessoais do Paciente</Text>

        {!showSecondPart ? (
          <>
            <Text style={stylesMedico.label}>Nome:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Nome do Paciente"
              onChangeText={setPaciente}
              value={paciente}
            />

            <Text style={stylesMedico.label}>Data de Nascimento:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Data de Nascimento"
              onChangeText={setNascimento}
              value={dataNascimento}
            />

            <Text style={stylesMedico.label}>CPF:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o CPF do Paciente"
              onChangeText={setCPF}
              value={cpfPaciente}
            />

            <Text style={stylesMedico.label}>RG:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o RG do Paciente"
              onChangeText={setRG}
              value={rgPaciente}
            />

            <Text style={stylesMedico.label}>E-mail:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o E-mail do Paciente"
              onChangeText={setEmail}
              value={emailPaciente}
            />

            <Text style={stylesMedico.label}>Telefone:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o Telefone do Paciente"
              onChangeText={setNumber}
              value={numberPaciente}
            />

            <TouchableOpacity style={stylesMedico.btn} onPress={validateForm}>
              <Text style={stylesMedico.btnText}>Próximo</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={stylesMedico.label}>Rua:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Nome da Rua do Paciente"
              onChangeText={setRua}
              value={ruaPaciente}
            />

            <Text style={stylesMedico.label}>Numero:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Numero da Casa"
              onChangeText={setNumero}
              value={numeroPaciente}
            />

            <Text style={stylesMedico.label}>Complemento:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o Complemento - EX: (apto 202)"
              onChangeText={setComplemento}
              value={compPaciente}
            />

            <Text style={stylesMedico.label}>Bairro:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o Bairro do Paciente"
              onChangeText={setBairro}
              value={bairroPaciente}
            />

            <Text style={stylesMedico.label}>Estado:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite o Estado"
              onChangeText={setEstado}
              value={estadoPaciente}
            />

            <Text style={stylesMedico.label}>Cidade:</Text>
            <TextInput
              style={stylesMedico.input}
              placeholder="Digite a Cidade do Paciente"
              onChangeText={setCidade}
              value={cidadePaciente}
            />

            <TouchableOpacity style={stylesMedico.btn} onPress={submit}>
              <Text style={stylesMedico.btnText}>Enviar</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesMedico = StyleSheet.create({
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
    height: 80,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#F5A623',
    fontWeight: '800',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 17,
    marginBottom: 5,
    color: "#BD10E0",
  },
  logo: {
    width: 100,
    height: 30,
  },
  btn: {
    backgroundColor: '#FF8000',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
