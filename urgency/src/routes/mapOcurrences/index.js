import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import mapOcurren from './style'
import { connect } from 'react-redux'

class MapOcurrences extends React.Component {
    render() {
        console.log(this.props.current)
        return (
            <View style={mapOcurren.main}>
                <MapView
                    ref={map => this.mapView = map}
                    style={mapOcurren.map}
                    loadingEnabled={true}
                    region={{ latitude: -3.10719, longitude: -60.0261, latitudeDelta: 0.001, longitudeDelta: 5.0 }}
                >
                    {this.props.current ?
                        <Marker
                            coordinate={{
                                latitude: this.props.current.location.latitude,
                                longitude: this.props.current.location.longitude
                            }}
                            title={'Título: ' + this.props.current.title}
                            description={'Descrição: ' + this.props.current.activity}
                        /> :
                        <></>
                    }

                </MapView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    current: state.general.current
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MapOcurrences)