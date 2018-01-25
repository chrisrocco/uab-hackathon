import {subscribeToMailingList} from "./app/controllers/preLaunch";

const router = require('express').Router();


/**
 * =============================================
 *  API ROUTES
 * =============================================
 */

router.post('/join-mailing-list', subscribeToMailingList);


module.exports = router;