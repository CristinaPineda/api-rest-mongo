# API-REST-MONGO

## Aplicação para cadastro de usuários

Crie requests usando os endpoints dessa aplicação para realizar operações com persistência de banco de dados (Mongodb Atlas) e usando o padrão Rest de Apis.

Consulte a documentação completa desse serviço aqui :point_down:
<a href="https://documenter.getpostman.com/view/12775850/UUy7Zipm#5680bc7d-8612-4c1d-bab4-1237ebb39ed5"><p>Api-rest-mongo - documentação</p></a>

### Endpoints utilizados:

* Método GET:

endpoit: http://localhost:3000/user (Retorna todos os usuários cadastrados no banco)

http://localhost:3000/user/idUser (Retorna o usuario correspondente ao parâmetro passado)

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Método POST:

endpoint: http://localhost:3000/user

Corpo da requisição: 
```
{
    "nome": "Pato_Donald",
    "nomeUsuario": "Donald",
    "senha": 567890
}
```
*(Os parametros idUser e dataAcesso são omitidos na criação pois são inseridos de forma automatica no banco de dados)*

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Método PATCH (update)

endpoint: http://localhost:3000/user

Corpo da requisição: 
```
{
    <campo que deseja mudar> : <valor que deseja mudar>
}
```

*(Nesta requisição aplique as mudanças necessárias, não é preciso enviar todos os dados do usuário novamente, basta enviar o campo que deseja trocar, caso queira fazer mudanças em todos os campos do cadastro sugiro a utilização do método DELETE e logo após o método POST para insersão dos novos dados)*

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Método DELETE

endpoint: http://localhost:3000/user

*(Use o ideUser do ususario que deseja apagar do banco de dados)*

------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Note que o padrão REST nos permite usar endpoints iguais e mudar somente o método da requisição.

Para testar suas requisições pode-se usar o POSTMAN ou o INSOMNIA.

Na documentação da Api há um link que leva até o POSTMAN online onde os endpoints dessa aplicação estão salvos e pode-se fazer um teste da aplicação.

<a href="https://documenter.getpostman.com/view/12775850/UUy7Zipm#5680bc7d-8612-4c1d-bab4-1237ebb39ed5"><p>Api-rest-mongo - documentação</p></a>

<br>
<br>

# INSTRUÇÕES PARA RODAR ESSA APLICAÇÃO

* Faça um clone da aplicação:

SSH:
`git@github.com:CristinaPineda/api-rest-mongo.git`

ou

HTTPS: 
`https://github.com/CristinaPineda/api-rest-mongo.git`

ou ainda com: 

GitHub CLI:
`gh repo clone CristinaPineda/api-rest-mongo`
<br>
<br>

* Em seu terminal dê o comando: 

`npm install`  para instalar as dependencias do projeto
<br>
<br>

* Depois de concluido de um start na aplicação com:

`npm start`
<br>
<br>

* Entre no postman ou insomnia e faça sua requisições!
<br>
<br>

<a href="https://cristinapineda.github.io/#/" target="_blank">Conheça meu portifólio</a> <spam>:dart:<spam>

<a href="www.linkedin.com/in/cristina-pineda" target="_blank">Conecte-se comigo no Linkedin</a> <spam>:dart:<spam>
