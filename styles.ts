import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT_MAIN};
  margin-top: 12px;
`;

export const Form = styled.View`
  width: 100%;
  gap: 16px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.TEXT_MAIN};
  font-size: 16px;
  margin-left: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  
  /* Estilização de Sombra */
  elevation: 4;
  shadow-color: ${({ theme }) => theme.COLORS.SHADOW};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: bold;
`;
