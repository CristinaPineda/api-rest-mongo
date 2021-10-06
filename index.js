const express = require('express');
const app = express();

// ler json
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// rota inicializa
app.get("/", (req, res) => {

  // requisição
  res.json({ message: "oi express" })

})

//porta
app.listen(3000);

// mongodb+srv://cristina:130913@api-cluster.srsr0.mongodb.net/bancodaapi?retryWrites=true&w=majority
//usuario mongo atlas: cristina
//senha mongo atlas: 130913