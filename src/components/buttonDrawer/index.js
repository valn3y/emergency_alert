import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ButtonDraweStyle from './styles';

const ButtonDrawer = ({colorButton, onPress}) => {
  return (
    <TouchableOpacity style={ButtonDraweStyle.main} onPress={onPress}>
      <Icon name="menu" size={45} color={colorButton} />
    </TouchableOpacity>
  );
};

export default ButtonDrawer;
