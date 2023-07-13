
const { format } = require('date-fns')

const rwn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const getRecordset = () => {
    const recordSet = []
    const numberOfRecords = rwn(50, 400)
    
    for (let i = 0; i < numberOfRecords; i++) {
        recordSet.push({
            timestamp: format(new Date(2021, rwn(1, 28), rwn(1, 7)), 'MM/dd/yyyy'),
            purchase: rwn(100,30000) / 100
        })
    }

    return recordSet
}

module.exports = getRecordset
