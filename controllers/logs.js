const { log } = require('mercedlogger');

////////////////////////
//! Import Models
////////////////////////
const User = require('../models/User');

///////////////////////////
//! Controller Functions
///////////////////////////

const index = async (req, res) => {
    res.render('logs/index', {
        //object here
    });
};

const getCreate = async (req, res) => {
    res.render('logs/new', {
        //object here
    });
};

const createSubmit = async (req, res) => {
    res.redirect('/');
};

const show = async (req, res) => {
    res.render('logs/show', {
        //object here
    });
};

//////////////////////////////
//! Export Controller
//////////////////////////////
module.exports = {
    index,
    show,
    getCreate,
    createSubmit,
};
