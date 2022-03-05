# RODANDO PROJETO #
- Para rodar o projeto execute o comando para subir um container docker de mysql. Execute no terminal: <br>
`docker run --cap-add=sys_nice  -it -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=db --name db_nest -p 3307:3306 mysql:8.0`.
- Depois disso, você pode deixa-lo rodando. Agora execute a instalação das dependencias. Execute no terminal: <br> `npm install`
- Agora podemos prosseguir com a execução do prisma e suas migrations. Execute no terminal:  <br>`npx prisma migrate dev --name init` 

## CRUD 

> Primeiraramente antes de tudo, deve saber que o back, só tem dois pontos. Create e FindOne. É uma coisa muita simples, mas pode ajudar alguns. 

- Create: <br> 
    `username`: string <br>
    `email`: string <br>
    `password`: string <br>
<br>
- FindOne: <br>
    `id`: number <br>
    `username`: string <br>
    `email`: string <br>
    `password`: string <br>
<br>

## Finalizando

- Agora que terminamos pelo lado do back é so executar o front e começar e criar usuario e logar com esse usuario criado. 

> Fim do dia galerinha. É uma API muito basica, então não quero meritos por ela. Desenvolvi porque estava com tempo, então, é nois espero ter ajudado alguem.

