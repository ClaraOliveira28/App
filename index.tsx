import React, { useState } from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../theme';

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  InputContainer, 
  Input, 
  Button, 
  ButtonText 
} from './styles';

export function NewProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleRegister() {
    if (!name || !price || !quantity) {
      return Alert.alert('Cadastro', 'Por favor, preencha todos os campos.');
    }
    
    Alert.alert('Sucesso', `Produto ${name} cadastrado com sucesso no estoque!`);
    setName('');
    setPrice('');
    setQuantity('');
  }

  return (
    <Container>
      <Header>
        <MaterialIcons name="inventory" size={48} color={theme.COLORS.PRIMARY} />
        <Title>Novo Produto</Title>
      </Header>

      <Form>
        <InputContainer>
          <MaterialIcons name="label" size={24} color={theme.COLORS.TEXT_MUTED} />
          <Input 
            placeholder="Nome do Produto" 
            placeholderTextColor={theme.COLORS.TEXT_MUTED}
            value={name}
            onChangeText={setName}
          />
        </InputContainer>

        <InputContainer>
          <MaterialIcons name="attach-money" size={24} color={theme.COLORS.TEXT_MUTED} />
          <Input 
            placeholder="Preço de Venda" 
            placeholderTextColor={theme.COLORS.TEXT_MUTED}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </InputContainer>

        <InputContainer>
          <MaterialIcons name="inventory-2" size={24} color={theme.COLORS.TEXT_MUTED} />
          <Input 
            placeholder="Quantidade de entrada" 
            placeholderTextColor={theme.COLORS.TEXT_MUTED}
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
        </InputContainer>

        <Button activeOpacity={0.7} onPress={handleRegister}>
          <ButtonText>Cadastrar Produto</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
