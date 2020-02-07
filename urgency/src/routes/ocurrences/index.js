import React from 'react'
import { View, FlatList, Text, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Trash from 'react-native-vector-icons/Feather'
import colors from '../../config/colors'
import ocurrenceStyle from './style'
import { search } from '../../config/storage'
import { connect } from 'react-redux'
import { parseISO, isAfter } from 'date-fns'
import { remove } from '../../config/storage'

const formatData = (data) => {
    let day = new Date(data).getDate()
    let month = new Date(data).getMonth() + 1
    let year = new Date(data).getFullYear()

    if (day < 10)
        day = '0' + day
    if (month < 10)
        month = '0' + month

    return day + '/' + month + '/' + year
}

const formatHour = (data) => {
    let minute = new Date(data).getMinutes()
    let hour = new Date(data).getHours()

    if (minute < 10)
        minute = '0' + minute

    if (hour < 10)
        hour = '0' + hour

    return hour + ':' + minute
}

class Ocurrences extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info: null,
            loading: false,
            canRemove: false
        }
    }

    componentDidMount = async () => {
        let data = await search()
        if (data) {
            this.props.allData(data)
        }
    }

    handleRemove = async (data) => {
        let menor = data
        for (let i = 0; i < this.props.datas.length; i++) {
            if (new Date(menor.time).getTime() < new Date(this.props.datas[i].time).getTime())
                menor = menor
            else
                menor = this.props.datas[i]
        }

        if (menor === data) {
            let result = await remove(data)
            if (result.status) {
                this.props.allData(result.info)
                ToastAndroid.show('Removido com sucesso', ToastAndroid.LONG)
            }
            else
                ToastAndroid.show('Tente Novamente', ToastAndroid.LONG)
        }
        if (menor !== data) {
            Alert.alert('Atenção!', 'Esse item não é o mais antigo, por favor delete o mais antigo.')
        }
    }

    handleOcurre = (data) => {
        this.props.currentOcu(data)
        this.props.navigation.navigate('mapOcurrences')
    }

    renderItem = ({ item }) => (
        <View style={{ backgroundColor: '#EEE', marginTop: 10, padding: 20, flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 7, flexWrap: 'wrap' }}
                onPress={() => this.handleOcurre(item)}
            >
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 18 }} >
                    {'Título: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight }}>{item.title}</Text>
                </Text>
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 15 }} >
                    {'Descrição: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight, textAlign: 'justify' }}>{item.activity}</Text>
                </Text>
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 15 }} >
                    {'Latitude: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight }}>{item.location.latitude}</Text>
                </Text>
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 15 }} >
                    {'Longitude: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight }}>{item.location.longitude}</Text>
                </Text>
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 15 }} >
                    {'Data: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight }}>{formatData(item.time)}</Text>
                </Text>
                <Text style={{ fontFamily: 'Raleway-Bold', color: colors.secondColorTheme, fontSize: 15 }} >
                    {'Horário: '}
                    <Text style={{ fontFamily: 'Raleway-Regular', color: colors.orangeLight }}>{formatHour(item.time)}</Text>
                </Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => this.handleRemove(item)}
                >
                    <Trash name={'trash'} color={colors.secondColorTheme} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        console.log(this.props.datas)
        return (
            <View style={ocurrenceStyle.main}>
                <View style={ocurrenceStyle.menu} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon name={'menu'} color={colors.secondColorTheme} size={30} />
                    </TouchableOpacity>
                </View>

                <Text style={ocurrenceStyle.title} >{'Lista de ocorrências'}</Text>

                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    data={this.props.datas}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={this.renderItem}
                />
            </View >
        )
    }
}

const mapStateToProps = (state) => ({
    datas: state.general.allData
})

const mapDispatchToProps = (dispatch) => ({
    allData: (data) => dispatch({ type: 'ON_ALL_DATA', data: data }),
    currentOcu: (data) => dispatch({ type: 'ON_CURRENT', data: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Ocurrences)