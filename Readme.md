Desafio Operand - Solução de Matheus Henrique dos Santos (finalizado em 12/04/2021)

Neste projeto foi implementado um CRUD de usuários utilizando as seguintes tecnologias: 

-------------------------------------------------------------------

Back-end: NodeJS, Express, Knex e MySQL.

  Passo a passo para a execução do back-end: 

  1. Antes de executar o servidor, certifique-se que as suas  configurações do banco de dados e conexão com o mesmo estejam de acordo com o projeto, este foi baseado em MySQL, então é necessário configurar um schema local no seu ambiente. Para efetuar a criação do schema e tabela utilizados no projeto, basta executar o script "operand.sql" que está no diretório raiz do projeto em alguma SQL TAB, Query TAB, no meu caso, utilizei a QueryTab fornecida pela aplicação MySQL WorkBench.
  
  2. Agora que o banco está configurado, é necessário reconfigurar o arquivo connection.js que está no diretório: backend/database/connection.js, neste arquivo você deve configurar o "host", "user" e "password" de acordo acordo com a sua conexão no banco de dados. (A que eu utilizo é a padrão: host: localhost, user: root e password: '')

  3. Tendo concluído esses dois passos, podemos entrar no diretório backend e executar o comando no terminal:
    - npm i
  Este comando irá instalar todas as dependecias utilizadas no backend

  4. Tendo as dependencias instaladas, execute o comando no terminal:
    - npm run dev
  Este comando irá colocar o servidor on-line, mantenha o servidor on-line durante toda a execução do frontend

-------------------------------------------------------------------

Front-end: VueJs, VueRouter, Vuex, Vuelidate, Vuetify, eslint, jest e babel.

  Passo a passo para a execução do front-end:
  
  1. Abra outro terminal (deixe o terminal com o servidor backend rodando), entre no diretório frontend/operand-challenge e execute o comando no terminal:
    - npm i
  Este comando irá instalar todas as dependecias utilizadas no front-end

  2. Agora, com as dependencias instaladas, execute o comando no terminal:
    - npm run serve
  Este comando irá compilar e executar o projeto VueJs. 
  Então, basta abrir uma pagina no seu navegador incluindo a url - Local ou Netword fornecida no terminal...
  Lhe sera apresentado algo como:

  ---------------------------------------------------

    DONE  Compiled successfully

    App running at:
    - Local:   http://localhost:8080/
    - Network: http://192.168.1.2:8080/

    Note that the development build is not optimized.
    To create a production build, run npm run build.

  ---------------------------------------------------
