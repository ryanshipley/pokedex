const express = require("express");
const app = express();
const pokemon = require("./pokedex/models/pokemon.js");

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));