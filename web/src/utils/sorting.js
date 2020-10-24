function sortAlpha(arr, order) {
    // console.log('sorter arr: ', arr)
    if (order === 'AZ') {
        return arr.sort((a, b) => {
            return (a.name > b.name) ? 1 : -1
        })
    } else {
        return arr.sort((a, b) => {
            return (a.name < b.name) ? 1 : -1
        })
    }
}

export default sortAlpha