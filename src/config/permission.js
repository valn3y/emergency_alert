import {PermissionsAndroid} from 'react-native';

const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão necessária',
        message:
          'O aplicativo necessita de sua permissão para acessar a localização.',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.warn(error);
  }
};

export default requestPermission;
