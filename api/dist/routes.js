"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preLaunch_1 = require("./app/controllers/preLaunch");
var router = require('express').Router();
/**
 * =============================================
 *  API ROUTES
 * =============================================
 */
router.post('/join-mailing-list', preLaunch_1.subscribeToMailingList);
module.exports = router;
