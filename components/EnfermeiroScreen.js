import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import ProzLogo from '../assets/ProzLogo.png';

export default function EnfermeiroScreen({ navigation }) {
  const [paciente, setPaciente] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [medicoResponsavel, setMedicoResponsavel] = useState('');
  const [planoCuidado, setPlanoCuidado] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [evolucao, setEvolucao] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [showSecondPart, setShowSecondPart] = useState(false);

  const submit = () => {
    if (planoCuidado !== '' || medicamentos !== '' || evolucao !== '' || observacoes !== '' || diagnostico !== '') {
      Alert.alert('Proz Educação','Dados enviados com Sucesso!');
      navigation.navigate('InitialScreen');
    } else {
      Alert.alert('Proz Educação','Preencha todos os campos!');
    };
  };

  const validateForm = () => {
    if (paciente !== '' || dataConsulta !== '' || horaConsulta !== '' || medicoResponsavel !== '') {
      setShowSecondPart(true);
    } else {
      Alert.alert('Proz Educação','Preencha todos os campos!');
    };
  };


  return (
    <SafeAreaView style={stylesEnfermeiro.container}>
      <View style={stylesEnfermeiro.topContainer}>
        <Image source={ProzLogo} style={stylesEnfermeiro.logo} />
      </View>

      <ScrollView style={stylesEnfermeiro.scrollContainer}>
        <Text style={stylesEnfermeiro.title}>Evolução de Prontuário e Administração de Medicamentos</Text>

        {!showSecondPart ? (
          <>
            <Text style={stylesEnfermeiro.label}>Paciente:</Text>
            <TouchableOpacity style={stylesEnfermeiro.picker}>
              <Picker selectedValue={paciente} onValueChange={(itemValue) => setPaciente(itemValue)}>
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Selecione um paciente" value="" />
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Joãozinho" value="opcao1" />
              </Picker>
            </TouchableOpacity>

            <Text style={stylesEnfermeiro.label}>Data da Consulta:</Text>
            <TextInput
              style={stylesEnfermeiro.input}
              placeholder="Data da Consulta"
              onChangeText={setDataConsulta}
              value={dataConsulta}
            />

            <Text style={stylesEnfermeiro.label}>Hora da Consulta:</Text>
            <TextInput
              style={stylesEnfermeiro.input}
              placeholder="Hora da Consulta"
              onChangeText={setHoraConsulta}
              value={horaConsulta}
            />

            <Text style={stylesEnfermeiro.label}>Médico Responsável:</Text>
            <TouchableOpacity style={stylesEnfermeiro.picker}>
              <Picker selectedValue={medicoResponsavel} onValueChange={(itemValue) => setMedicoResponsavel(itemValue)}>
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Selecione um médico" value="" />
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Dr. Jamerson" value="opcao1" />
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Dr. Fabio" value="opcao2" />
                <Picker.Item style={stylesEnfermeiro.pickeritem} label="Dra. Najila" value="opcao3" />
              </Picker>
            </TouchableOpacity>

            <TouchableOpacity style={stylesEnfermeiro.btn} onPress={validateForm}>
              <Text style={stylesEnfermeiro.btnText}>Próximo</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={stylesEnfermeiro.label}>Plano de Cuidado:</Text>
            <TextInput
              style={stylesEnfermeiro.textArea}
              placeholder="Plano de Cuidado"
              onChangeText={setPlanoCuidado}
              value={planoCuidado}
              multiline
              numberOfLines={5}
            />

            <Text style={stylesEnfermeiro.label}>Medicamentos Administrados:</Text>
            <TextInput
              style={stylesEnfermeiro.textArea}
              placeholder="Medicamentos Administrados"
              onChangeText={setMedicamentos}
              value={medicamentos}
              multiline
              numberOfLines={5}
            />

            <Text style={stylesEnfermeiro.label}>Evolução do Paciente:</Text>
            <TextInput
              style={stylesEnfermeiro.textArea}
              placeholder="Evolução"
              onChangeText={setEvolucao}
              value={evolucao}
              multiline
              numberOfLines={5}
            />

            <Text style={stylesEnfermeiro.label}>Observações:</Text>
            <TextInput
              style={stylesEnfermeiro.textArea}
              placeholder="Observações"
              onChangeText={setObservacoes}
              value={observacoes}
              multiline
              numberOfLines={5}
            />

            <Text style={stylesEnfermeiro.label}>Diagnóstico:</Text>
            <TextInput
              style={stylesEnfermeiro.textArea}
              placeholder="Diagnóstico"
              onChangeText={setDiagnostico}
              value={diagnostico}
              multiline
              numberOfLines={5}
            />

            <TouchableOpacity style={stylesEnfermeiro.btn} onPress={submit}>
              <Text style={stylesEnfermeiro.btnText}>Enviar</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesEnfermeiro = StyleSheet.create({
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
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 5,
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
