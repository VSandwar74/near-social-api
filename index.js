const { resolveEnvPrefix } = require('vite');

const express = require('express');
const app = express()
const PORT = 5173;
// http://127.0.0.1:5173/

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`its alive at http://127.0.0.1:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'x',
        size: 'hi',
    })
})

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `hello ${logo} and ${id}`
    })


})
