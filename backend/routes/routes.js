const express = require('express')

const controllers = require('../controllers')

const routes = function () {
  const apiRoute = express.Router()

  const rewardsController = controllers.rewardsController()

  apiRoute.route('/rewards/get').post(rewardsController.getRewards)

  return apiRoute
}

module.exports = routes
