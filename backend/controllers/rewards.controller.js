
const rewardsController = () => {

    const getRewards = async (req, res) => {
        return res.status(200).json({ response: 'succes', data: { temp: 'hi' }})
    }

    return {
        getRewards
    }
}

module.exports = rewardsController
