import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Padrao from '../src/estilo/padrao';


class Cadastro extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      var_email: '',
      var_senha: '',
    };
  };

  render() {
    return(
      <View style={Padrao.flex1}>
        <View style={Padrao.cadastroCabecalho}>
          <Text style={Padrao.cadastroCabecalhoFont}>  Nova Conta </Text>
        </View>
                
        <View style={Padrao.email_row}>
          <Text style= {Padrao.email_label}> Email </Text>
          <TextInput 
            style = {Padrao.email_textInput} 
                                // aqui deixamos transparente a linha do Input no android //
            underlineColorAndroid = "rgba(0,0,0,0)"
            value = {this.state.email}
                                // tudo que é digitado no Input, é gravado no onChange //
            onChangeText={(textoDigitadoNoCampoEmail) => 
              this.setState({var_email: textoDigitadoNoCampoEmail})}
                                // aqui nao CAPITALIZARA  a primeira letra (MAIUSCULA)
            autoCapitalize = "none"
                                // aqui nao vai CORRIGIR automatico o txt no email //
            autoCorrect={false}
          /> 
        </View>

        <View style={Padrao.senha_row}>
          <Text style= {Padrao.senha_label}> Senha </Text>
          <TextInput 
            style = {Padrao.senha_textInput} 
                                // aqui deixamos transparente a linha do Input no android //
            underlineColorAndroid = "rgba(0,0,0,0)"
            value = {this.state.senha}
                                // tudo que é digitado no Input, é gravado no onChange //
            onChangeText={(textoDigitadoNoCampoSenha) => 
                      this.setState({var_senha: textoDigitadoNoCampoSenha})}
                                // aqui nao CAPITALIZARA  a primeira letra (MAIUSCULA)
            autoCapitalize = "none"
                                // aqui nao vai CORRIGIR automatico o txt no email //
            autoCorrect={false}
                                // aqui o campo senha nao mostrar letras, somente * //
            secureTextEntry = {true}
          /> 
        </View>
        <View>
          <Button
           title= "Cadastrar"
           onPress= {() => null}
          
          /> 
        </View>
        
      </View>
    );
  }
}

export default Cadastro;