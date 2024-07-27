Para rodar o projeto: 

- Back end:
- Configurar MySQL:
-   Criar arquivo .env na pasta principal do projeto, imitando o arquivo .env.example;
-   Preencher o arquivo .env com os dados necessários (host, username do Mysql, password do Mysql, nome do banco de dados, número da porta onde o banco irá rodar);
-   Rodar o servidor com npm run dev;


- Front end:
- Configurar servidor Angular:
-   No arquivo todo.service, preencher a variável apiUrl com o endereço do servidor (padrão é http://localhost:3001/todos);
-   Rodar o servidor com ng serve;

 
    -----------------------------


Este é um projeto criado como requisito final da pós-graduação em desenvolvimento web full stack da faculdade Descomplica. 

Trata-se de um to-do list simples em Angular com Sequelize, banco de dados MySQL. 
A biblioteca de estilos utilizada foi Angular Material - https://material.angular.io


