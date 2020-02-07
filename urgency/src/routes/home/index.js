import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { requestPermission } from '../../config/permission'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import homeStyle from './style'
import colors from '../../config/colors'
import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    getLocation() {
        if (requestPermission) {
            Geolocation.getCurrentPosition((position) => {
                let loc = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                this.props.onLocation(loc)
                console.log('LOCATION', loc)
            }, (error) => {
                console.log('ERROR', error)
            }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 })
        }
    }

    render() {
        return (
            <View style={homeStyle.main}>
                <MapView
                    ref={map => this.mapView = map}
                    style={homeStyle.map}
                    loadingEnabled={true}
                    region={{ latitude: -3.10719, longitude: -60.0261, latitudeDelta: 0.001, longitudeDelta: 5.0 }}
                >
                    {this.props.location ?
                        <Marker
                            coordinate={{ latitude: this.props.location.latitude, longitude: this.props.location.longitude }}
                        />
                        :
                        <></>
                    }
                </MapView>

                <View style={{ position: 'absolute', top: 5, left: 5 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon
                            name={'menu'}
                            color={colors.secondColorTheme}
                            size={30} />
                    </TouchableOpacity>
                </View>

                <View style={homeStyle.buttons}>
                    <TouchableOpacity
                        style={homeStyle.buttonGet}
                        onPress={() => this.getLocation()}
                    >
                        <Icon name={'drone'} color={colors.secondColorTheme} size={40} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[homeStyle.buttonSignup,
                        this.props.location ?
                            { backgroundColor: colors.secondColorTheme } :
                            { backgroundColor: colors.orangeLight }
                        ]}
                        disabled={this.props.location ? false : true}
                        onPress={() => this.props.navigation.navigate('signup')}
                    >
                        <Text style={homeStyle.textButton}>{'CADASTRAR NOVA LOCALIZAÇÃO'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    location: state.general.location
})

const mapDispatchToProps = (dispatch) => ({
    onLocation: (location) => dispatch({ type: 'ON_LOCATION', data: location })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)