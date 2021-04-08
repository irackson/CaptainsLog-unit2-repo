//! Destructure Schema and model from our connected mongoose
const { Schema, model } = require('../db/connection');

///////////////////////////////////
//! DEFINE OUR SCHEMA
///////////////////////////////////

const LogSchema = new Schema(
    {
        title: String,
        entry: String,
        shipIsBroken: { type: Boolean, default: true },
    },
    { timestamps: true }
);

///////////////////////////////////
//! DEFINE OUR MODEL
///////////////////////////////////

const Log = model('Log', LogSchema);

///////////////////////////////////
//! Export Our Model
///////////////////////////////////

module.exports = Log;
