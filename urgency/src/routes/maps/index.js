import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import mapsStyle from './style'
import colors from '../../config/colors'
import { connect } from 'react-redux'
import { search } from '../../config/storage'

class Maps extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        let data = await search()
        if (data) {
            this.props.allData(data)
        }
    }

    render() {
        return (
            <View style={mapsStyle.main}>
                <MapView
                    ref={map => this.mapView = map}
                    style={mapsStyle.map}
                    loadingEnabled={true}
                    region={{ latitude: -3.10719, longitude: -60.0261, latitudeDelta: 0.001, longitudeDelta: 5.0 }}
                >
                    {this.props.datas ?
                        this.props.datas.map((marker, index) => (
                            <Marker
                                key={`${index}`}
                                coordinate={{ latitude: marker.location.latitude, longitude: marker.location.longitude }}
                                title={'Título: ' + marker.title}
                                description={'Descrição: ' + marker.activity}
                            />
                        ))
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
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    datas: state.general.allData
})

const mapDispatchToProps = (dispatch) => ({
    allData: (data) => dispatch({ type: 'ON_ALL_DATA', data: data }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Maps)