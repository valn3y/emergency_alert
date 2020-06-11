import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import mapsStyle from './style';
import {connect} from 'react-redux';
import {search} from '../../config/storage';

class Maps extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    let data = await search();
    if (data) {
      this.props.allData(data);
    }
  };

  render() {
    return (
      <View style={mapsStyle.main}>
        <MapView
          ref={map => (this.mapView = map)}
          style={mapsStyle.map}
          loadingEnabled={true}
          region={{
            latitude: -3.10719,
            longitude: -60.0261,
            latitudeDelta: 0.001,
            longitudeDelta: 5.0,
          }}>
          {this.props.datas ? (
            this.props.datas.map((marker, index) => (
              <Marker
                key={`${index}`}
                coordinate={{
                  latitude: marker.location.latitude,
                  longitude: marker.location.longitude,
                }}
                title={'Título: ' + marker.title}
                description={'Descrição: ' + marker.activity}
              />
            ))
          ) : (
            <></>
          )}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  datas: state.general.allData,
});

const mapDispatchToProps = dispatch => ({
  allData: data => dispatch({type: 'ON_ALL_DATA', data: data}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
