import React from 'react';
import {View, Text} from 'react-native';
import aboutStyle from './style';
import ButtonDrawer from '../../components/buttonDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../config/colors';

const About = props => {
  function handleOpenDrawer() {
    props.navigation.toggleDrawer();
  }

  return (
    <View style={aboutStyle.main}>
      <ButtonDrawer
        colorButton={colors.blueTheme.white}
        onPress={handleOpenDrawer}
      />

      <Icon
        name="exclamation-triangle"
        color={colors.blueTheme.white}
        size={80}
      />
      <Text style={aboutStyle.textTitle}>
        Aplicativo para alerta de áreas de risco
      </Text>
      <Text style={aboutStyle.textDescription}>
        Seja VOCÊ também um desenvolvedor, e ajude as pessoas.
      </Text>

      <Text style={aboutStyle.textMade}>Desenvolvido por Valney Marinho</Text>
    </View>
  );
};

export default About;
