//! import router
const router = require('express').Router();
const UsersRouter = require('./users');
const LogsRouter = require('./logs');

///////////////////////////////
//! Router Specific Middleware
////////////////////////////////

router.use('/users', UsersRouter);
router.use('/logs', LogsRouter);

////////////////////////////////
//! Router Specific Routes
////////////////////////////////

router.get('/', (req, res) => {
    res.render('home', {});
});

////////////////////////////////
//! Export the Router
////////////////////////////////

module.exports = router;
