
const { format, subMonths } = require('date-fns')
const rwn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const getRandomDate = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const timeDiff = endDate.getTime() - startDate.getTime()
    const randomTime = Math.random() * timeDiff
    const randomDate = new Date(startDate.getTime() + randomTime)
    return format(randomDate, 'yyyy-MM-dd')
}

const getRecordset = () => {
    const recordSet = []
    const numberOfRecords = rwn(50, 400)
    const endDate = new Date()
    const startDate = subMonths(endDate, rwn(4, 8))
    
    for (let i = 0; i < numberOfRecords; i++) {
        recordSet.push({
            timestamp: getRandomDate(startDate, endDate),
            purchase: rwn(100,30000) / 100
        })
    }
    recordSet.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))
    return recordSet
}

module.exports = getRecordset
