import AsyncStorage from '@react-native-community/async-storage'

const save = async (data) => {
    try {
        let oldData = await search()
        console.log('OLD', oldData)
        if (oldData) {
            oldData.push(data)
            await AsyncStorage.setItem('ocurrences', JSON.stringify(oldData))
            return { status: true, info: oldData }
        } else {
            let newData = []
            newData.push(data)
            await AsyncStorage.setItem('ocurrences', JSON.stringify(newData))
            return { status: true, info: oldData }
        }
    } catch (e) {
        return { status: false }
    }
}

const remove = async (data) => {
    let array = await search()
    if (array) {
        let item = array.filter(e => e.title !== data.title)
        await AsyncStorage.setItem('ocurrences', JSON.stringify(item))
        return { status: true, info: item }
    } else
        return { status: false }
}

const search = async () => {
    let data = await AsyncStorage.getItem('ocurrences')
    data = JSON.parse(data)
    return data
}

export {
    save,
    remove,
    search
}