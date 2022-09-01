const express = require("express");
const app = express();
const methodOverride = require("method-override");
const pokemon = require("./pokedex/models/pokemon.js");

app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

app.get("/pokemon", (req, res)=>{
    res.render("index_views.ejs", {
        pokemons : pokemon,
    });
});

app.get("/pokemon/new", (req, res)=>{
    res.render("new.ejs")
});

app.delete("/pokemon/:id", (req, res)=>{
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon");
})
app.post("/pokemon", (req, res)=>{
    pokemon.push(req.body);
    res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res)=>{
    res.render("show_views.ejs", {
        pokemon : pokemon[req.params.id],
    });
});

app.listen(3000);