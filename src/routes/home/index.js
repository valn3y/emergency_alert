import React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import requestPermission from '../../config/permission';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonDrawer from '../../components/buttonDrawer';
import MapView, {Marker} from 'react-native-maps';
import homeStyle from './style';
import colors from '../../config/colors';
import {connect} from 'react-redux';

class Home extends React.Component {
  getLocation() {
    if (requestPermission) {
      Geolocation.getCurrentPosition(
        position => {
          let loc = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          this.props.onLocation(loc);
        },
        error => {
          ToastAndroid.show(
            'Ooops, ocorreu um erro ao obter a localização',
            ToastAndroid.LONG,
          );
        },
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
      );
    }
  }

  handleSignup() {
    const {navigation} = this.props;
    navigation.navigate('signup');
  }

  handleOpenDrawer() {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  }

  render() {
    const {location} = this.props;

    return (
      <View style={homeStyle.main}>
        <MapView
          ref={map => (this.mapView = map)}
          style={homeStyle.map}
          loadingEnabled={true}
          region={{
            latitude: -3.10719,
            longitude: -60.0261,
            latitudeDelta: 0.001,
            longitudeDelta: 5.0,
          }}>
          {location && (
            <Marker
              pinColor={colors.blueTheme.mainColor}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />
          )}
        </MapView>

        <ButtonDrawer
          colorButton={colors.blueTheme.mainColor}
          onPress={() => this.handleOpenDrawer()}
        />

        <TouchableOpacity
          style={homeStyle.buttonGet}
          onPress={() => this.getLocation()}
          activeOpacity={0.6}>
          <Icon name={'drone'} color={colors.blueTheme.secondColor} size={40} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            homeStyle.buttonSignup,
            location
              ? {backgroundColor: colors.blueTheme.secondColor}
              : {backgroundColor: colors.blueTheme.light},
          ]}
          disabled={location ? false : true}
          onPress={() => this.handleSignup()}>
          <Text style={homeStyle.textButton}>
            {'CADASTRAR NOVA LOCALIZAÇÃO'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  location: state.general.location,
});

const mapDispatchToProps = dispatch => ({
  onLocation: location => dispatch({type: 'ON_LOCATION', data: location}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
