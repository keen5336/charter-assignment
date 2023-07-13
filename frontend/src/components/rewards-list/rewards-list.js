
import { getMonth, subMonths } from 'date-fns'
import dateLookup from '../../globals/date-lookup'

const useRewardsList = (dataset) => {
    const pastMonths = 3

    const endDate = new Date()
    const startDate = subMonths(endDate, pastMonths - 1)

    const renderData = dataset.reduce((acc, value) => {
        const valueDate = new Date(value.timestamp)
        if (startDate < valueDate && endDate > valueDate) {
            const thisMonth = getMonth(valueDate)
            let addPoints = 0
            if (!acc[thisMonth]) {
                acc[thisMonth] = { month: dateLookup[thisMonth], transactions: [], points: 0}
            }
            let purchase = Math.floor(value.purchase)
            if(purchase > 100) {
                addPoints += 2 * (purchase - 100)
                purchase = 100
            }
            if(purchase > 50){
                addPoints += purchase - 50
            }
            acc[thisMonth].points += addPoints
            value.points = addPoints
            acc[thisMonth].transactions.push(value)
        }
        return acc
    }, []).filter(month => month)
    renderData.reverse()
    return {
        renderData
    }
}

export default useRewardsList
