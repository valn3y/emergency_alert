import React, {Component} from 'react';
import {View, Alert, BackHandler, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import welcomeStyle from './style';
import colors from '../../config/colors';
import requestPermission from '../../config/permission';

class Welcome extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.preRequisites();
    }, 3000);
  }

  preRequisites = async () => {
    const {navigation} = this.props;
    const permission = await requestPermission();
    if (permission) {
      navigation.replace('drawer');
    } else {
      Alert.alert(
        'Atenção!',
        'É necessário que permita o acesso a localização, abra o aplicativo novamente e conceda a permissão.',
        [{text: 'OK!', onPress: () => BackHandler.exitApp()}],
      );
    }
  };

  render() {
    return (
      <View style={welcomeStyle.main}>
        <Icon
          name={'exclamation-triangle'}
          size={100}
          color={colors.blueTheme.white}
        />
        <ActivityIndicator
          size={20}
          color={colors.blueTheme.white}
          style={welcomeStyle.loading}
        />
      </View>
    );
  }
}

export default Welcome;
