<p align="center">
  <img src="https://res.cloudinary.com/dqqh1oigi/image/upload/v1594992537/Challenge%20Gostack%2006/GoStack_b27dh5.png" /> </br>
</p>

<h3 align="center">
  Desafio 05: Primeiro Projeto Node.js
</h3>

<p align="center">
  <a href="#Introdução-memo"> Introdução </a>
   | 
  <a href="#Visualização-mag"> Visualização </a>
   | 
  <a href="#Execução-rocket"> Execução </a>
   | 
  <a href="#Tecnologias-computer"> Tecnologias </a>
</p>

## Introdução :memo:

Este projeto foi motivado pelo desafio 05 do [Bootcamp GoStack](https://rocketseat.com.br/gostack) e consiste em uma API RESTful para gerência
de transações financeiras. Os clientes da API (ex.: aplicações web e mobile) usufruirão das seguintes funcionalidades:

<p>
  <ol>
    <li> Criar transações financeiras fornecendo título, tipo (entrada ou saída) e valor; </li>
    <li> Listar transações financeiras e realizar o balanço de entradas, saídas e total em caixa. </li>
  </ol>
</p>

## Visualização :mag:

Para acesso às rotas da API, foi utilizado o software [Insomnia Core](https://insomnia.rest/). 

Acessando a rota de criação de uma transação e passando as informações no formato JSON, a API se encarregará de criar uma nova transação 
com as informações repassadas e retornará um objeto com o molde disposto abaixo.

<h6 align="center"> Figura 01 - Rota create transaction </h6>
<p align="center">
  <img src="https://res.cloudinary.com/dqqh1oigi/image/upload/v1596146092/Challenge%20GoStack%2005/listTransactions05_nxgem7.png" /> </br>
</p>

Acessando a rota de listagem de transações, a API irá listar as transações criadas e realizar o balanço, considerando as entradas, saídas 
e o total em caixa.

<h6 align="center"> Figura 02 - Rota list transactions </h6>
<p align="center">
  <img src="https://res.cloudinary.com/dqqh1oigi/image/upload/v1596146250/Challenge%20GoStack%2005/listTransactions05_e9lcv7.png" /> </br>
</p>

## Execução :rocket:

Para executar a API, siga as instruções:

<p>
  <ol>
    <li> Instalar dependências de projeto através do comando <b>yarn</b> </li>
    <li> Inicializar API no servidor através do comando <b>yarn dev:server</b> </li>
  </ol>
</p>

## Tecnologias :computer:

Este projeto foi desenvolvido com a seguinte tecnologia:

- [TypeScript](https://www.typescriptlang.org/)
