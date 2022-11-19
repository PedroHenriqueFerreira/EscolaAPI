## Escola API
![Badge concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

## Descrição do repositório
Este projeto é uma API de escola que contém um sistema de autenticação de usuário, cada usuário cadastra alunos com vários dados e uma foto de perfil

## Primeiros passos

Primeiramente é necessário ter o `NodeJS` e o `MySQL` em sua máquina.

## Variáveis de ambiente
Crie um arquivo `.env` e substitua as seguintes variáveis que contém **XXXXXXXX**

```env
PORT=3001
DATABASE_HOST=localhost
DATABASE=school
DATABASE_USERNAME=XXXXXXXX
DATABASE_PASSWORD=XXXXXXXX
TOKEN_SECRET=XXXXXXXX
TOKEN_EXPIRATION=7d
```

## Instalação de dependências

```
$ npm install
```

## Preparação do banco de dados

```
$ npx sequelize db:migrate
```

## Execução

```
$ npm run dev
```

## Tecnologias utilizadas

- `MySQL`
- `NodeJS`
