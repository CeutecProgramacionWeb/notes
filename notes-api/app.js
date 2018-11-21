var express = require("express");
var app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

var notas = [];
notas.push({ id: 1, titulo: "Nota 1 api", descripcion: "Esto es una nota", categoria: 2 });
let categorias = [{ id: 1, descripcion: 'Categoria1' }, { id: 2, descripcion: 'Categoria2' }, { id: 3, descripcion: 'Categoria3' }];

app.get("/notas", (req, res, next) => {

    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].id === notas[0].categoria) {
            let resultado = [{ id: notas[0].id, titulo: notas[0].titulo, descripcion: notas[0].descripcion, categoria: notas[0].categoria, categoriaDescripcion: categorias[i].descripcion }]
            res.json(resultado);
            return;
        }
    }
    res.json({error: 'No se encntro'});

});

app.put("/notas/:id", (req, res, next) => {
    let id = Number(req.params.id);
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let categoria = req.body.categoria;
 
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id === id) {
            notas[i].titulo = titulo;
            notas[i].descripcion = descripcion;
            notas[i].categoria = Number(categoria);
            res.json(notas[i]);
            return;
        }

    }
    res.json({error: 'No se encntro'});
    
});

app.get('/categorias', (req, res) => {
    res.send(categorias);
});