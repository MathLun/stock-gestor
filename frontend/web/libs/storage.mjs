const saveData = async (input) => {
    localStorage.setItem(input.storageName, input.data)
}

const getData = async (input) => {
    const data = localStorage.getItem(input.storageName)
    return data
}

const removeData = async (input) => {
    localStorage.removeItem(input.storageName)
}

export default {
    saveData,
    getData,
    removeData
}