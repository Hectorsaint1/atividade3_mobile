import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorSimples() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('Contador reiniciado!');

  function aumentar() {
    setContador(contador + 1);
    setMensagem('Contador aumentado!');
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem('Contador diminuído!');
  }

  function resetar() {
    setContador(0);
    setMensagem('Contador reiniciado!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.contadorContainer}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#f44336' }]} onPress={diminuir}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#00bcd4' }]} onPress={resetar}>
          <Text style={styles.botaoTexto}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#4caf50' }]} onPress={aumentar}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>Aprenda React Native com Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffFFff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contadorContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contador: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  mensagem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rodape: {
    position: 'absolute',
    bottom: 20,
    color: '#999',
  },
});
