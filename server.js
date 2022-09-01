const express = require("express");
const app = express();
const methodOverride = require("method-override");
const pokemon = require("./pokedex/models/pokemon.js");

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

app.get("/pokedex", (req, res)=>{
    res.render("index_views.ejs", {
        pokemons : pokemon,
    });
});

app.listen(3000);