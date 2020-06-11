import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import signupStyle from './style';
import {connect} from 'react-redux';
import {save} from '../../config/storage';

class Signup extends React.Component {
  state = {
    title: '',
    activity: '',
    loading: false,
  };

  handleSaveDatas = async () => {
    const {location} = this.props;
    const {title, activity} = this.state;
    if (title === '' || activity === '') {
      ToastAndroid.show(
        'Por favor, verifique se todos os campos estão preenchidos.',
        ToastAndroid.LONG,
      );
    } else {
      this.setState({loading: true});
      let body = {
        title,
        activity,
        location,
        time: new Date(),
      };
      let result = await save(body);
      if (result.status) {
        this.setState({loading: false});
        this.props.allData(result.info);
        Alert.alert('Sucesso!', 'Cadastro realizado com sucesso.', [
          {text: 'OK!', onPress: () => this.finishSignup()},
        ]);
      } else {
        ToastAndroid.show('Tente Novamente', ToastAndroid.LONG);
        this.setState({loading: false});
      }
    }
  };

  finishSignup() {
    this.props.clearLocation();
    this.props.navigation.navigate('home');
  }

  render() {
    return (
      <View style={signupStyle.main}>
        <Text style={signupStyle.title}>
          {
            'Gostaria de cadastrar essa localização como área de risco?\n\n Detalhe abaixo.'
          }
        </Text>
        <View style={signupStyle.campTitle}>
          <Text style={signupStyle.infoTitle}>{'Título'}</Text>
        </View>
        <View style={signupStyle.inputTitle}>
          <TextInput
            style={signupStyle.contentInputTitle}
            maxLength={30}
            onChangeText={text => this.setState({title: text})}
            value={this.state.title}
            returnKeyType={'next'}
            onSubmitEditing={() => this.textActivity.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={signupStyle.campTitle}>
          <Text style={signupStyle.infoTitle}>{'Atividade do local'}</Text>
        </View>
        <View style={signupStyle.inputActivity}>
          <TextInput
            ref={input => {
              this.textActivity = input;
            }}
            style={signupStyle.contentInputActivity}
            multiline={true}
            onChangeText={text => this.setState({activity: text})}
            value={this.state.activity}
          />
        </View>

        <TouchableOpacity
          style={signupStyle.button}
          onPress={() => this.handleSaveDatas()}>
          {this.state.loading ? (
            <ActivityIndicator size={35} color={'#FFFFFF'} />
          ) : (
            <Text style={signupStyle.textButton}>{'FINALIZAR'}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  location: state.general.location,
});

const mapDispatchToProps = dispatch => ({
  clearLocation: () => dispatch({type: 'ON_CLEAR'}),
  allData: data => dispatch({type: 'ON_ALL_DATA', data: data}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
