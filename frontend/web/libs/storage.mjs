let storageName = ""
const data = []

const saveStorageName = async (name) => {
    storageName = name
}

const saveData = async (input) => {
    data.push(input)
    localStorage.setItem(storageName, JSON.stringify(data))
}
const getData = async () => {
    const data = JSON.parse(localStorage.getItem(storageName))
    return data
}

export default {
    saveStorageName,
    saveData,
    getData
}