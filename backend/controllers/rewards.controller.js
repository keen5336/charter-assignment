
const getRecordset = require('./record-set')
const rewardsController = () => {

    const recordSet = getRecordset()

    const getRewards = async (req, res) => {
        return res.status(200).json({ response: 'success', data: recordSet})
    }

    return {
        getRewards
    }
}

module.exports = rewardsController
