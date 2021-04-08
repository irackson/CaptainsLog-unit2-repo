//! create our new router
const router = require('express').Router();
const { index, show, getCreate, createSubmit } = require('../controllers/logs');
const { isAuthenticated } = require('../utils/auth');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

////////////////////////////////
//! Router Specific Routes
////////////////////////////////

//* INDEX PAGE
router.get('/', index);

//* CREATE PAGE
router.get('/create', isAuthenticated, getCreate);

//* CREATE SUBMIT
router.post('/create', isAuthenticated, createSubmit);

//* SHOW PAGE
router.get('/:id', show);

////////////////////////////////
//! Export the Router
////////////////////////////////

module.exports = router;
