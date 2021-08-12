import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Trash from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';
import ocurrenceStyle from './style';
import {search} from '../../config/storage';
import {connect} from 'react-redux';
import {remove} from '../../config/storage';

const formatData = data => {
  let day = new Date(data).getDate();
  let month = new Date(data).getMonth() + 1;
  let year = new Date(data).getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + '/' + month + '/' + year;
};

const formatHour = data => {
  let minute = new Date(data).getMinutes();
  let hour = new Date(data).getHours();

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  return hour + ':' + minute;
};

class Ocurrences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      loading: false,
      canRemove: false,
    };
  }

  componentDidMount = async () => {
    let data = await search();
    console.log('DATA', data)
    if (data) {
      this.props.allData(data);
    }
  };

  handleRemove = async data => {
    let menor = data;
    for (let i = 0; i < this.props.datas.length; i++) {
      if (
        new Date(menor.time).getTime() <
        new Date(this.props.datas[i].time).getTime()
      ) {
        menor = menor;
      } else {
        menor = this.props.datas[i];
      }
    }

    if (menor === data) {
      let result = await remove(data);
      if (result.status) {
        this.props.allData(result.info);
        ToastAndroid.show('Removido com sucesso', ToastAndroid.LONG);
      } else {
        ToastAndroid.show('Tente Novamente', ToastAndroid.LONG);
      }
    }
    if (menor !== data) {
      Alert.alert(
        'Atenção!',
        'Esse item não é o mais antigo, por favor delete o mais antigo.',
      );
    }
  };

  handleOcurre = data => {
    this.props.currentOcu(data);
    this.props.navigation.navigate('mapOcurrences');
  };

  renderItem = ({item}) => (
    <View style={ocurrenceStyle.itemFlatlist}>
      <TouchableOpacity
        style={ocurrenceStyle.buttonItem}
        onPress={() => this.handleOcurre(item)}>
        <Text style={ocurrenceStyle.headerTitleItem}>
          {'Título: '}
          <Text style={ocurrenceStyle.titleItem}>{item.title}</Text>
        </Text>

        <Text style={ocurrenceStyle.headerDescriptionItem}>
          {'Descrição: '}
          <Text style={ocurrenceStyle.descriptionItem}>{item.activity}</Text>
        </Text>

        <Text style={ocurrenceStyle.headerLatitudeItem}>
          {'Latitude: '}
          <Text style={ocurrenceStyle.latitudeItem}>
            {item.location.latitude}
          </Text>
        </Text>

        <Text style={ocurrenceStyle.headerLongitudeItem}>
          {'Longitude: '}
          <Text style={ocurrenceStyle.longitudeItem}>
            {item.location.longitude}
          </Text>
        </Text>

        <Text style={ocurrenceStyle.headerDateItem}>
          {'Data: '}
          <Text style={ocurrenceStyle.dateItem}>{formatData(item.time)}</Text>
        </Text>

        <Text style={ocurrenceStyle.headerHourItem}>
          {'Horário: '}
          <Text style={ocurrenceStyle.hourItem}>{formatHour(item.time)}</Text>
        </Text>
      </TouchableOpacity>

      <View style={ocurrenceStyle.buttonTrash}>
        <TouchableOpacity onPress={() => this.handleRemove(item)}>
          <Trash name={'trash'} color={colors.secondColorTheme} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={ocurrenceStyle.main}>
        <View style={ocurrenceStyle.menu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name={'menu'} color={colors.secondColorTheme} size={30} />
          </TouchableOpacity>
        </View>

        <Text style={ocurrenceStyle.title}>{'Lista de ocorrências'}</Text>

        <FlatList
          style={ocurrenceStyle.flatListStyle}
          contentContainerStyle={ocurrenceStyle.contentFlatList}
          showsVerticalScrollIndicator={false}
          data={this.props.datas}
          keyExtractor={(item, index) => `${index}`}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  datas: state.general.allData,
});

const mapDispatchToProps = dispatch => ({
  allData: data => dispatch({type: 'ON_ALL_DATA', data: data}),
  currentOcu: data => dispatch({type: 'ON_CURRENT', data: data}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ocurrences);
