# Course Enrollment System

This is a backend API build in Nodejs for an course enrollment system. It exposes a RESTful API that will be used by the frontend developer on the frontend.

The database schema  can be found in the [REQUIREMENT.md](REQUIREMENTS.md)

## Technologies

- NodeJs
- Express
- JWT
- Bcrypt
- nodemailer
- Validator

## Installation Instructions

Install the packages

```bash
npm i
```

## Set up Database

### Create Databases

We shall create the dev and test database.

- connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create a user
  - `CREATE USER odc_user WITH PASSWORD 'password123';`
- In psql run the following to create the dev and test database
  - `CREATE DATABASE odc;`
- Connect to the databases and grant all privileges
  - Grant for dev database
    - `\c odc`
    - `GRANT ALL PRIVILEGES ON DATABASE my_store TO odc_user;`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

`db-migrate up`


## Enviromental Variables Set up

Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.

**NB:** The given values are used in developement and testing but not in production.

```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=odc
POSTGRES_USER=odc_user
POSTGRES_PORT=5432
POSTGRES_PASSWORD=password123
PORT=3000
ENV=dev
BCRYPT_PASSWORD=my-name-is-muhab
SALT_ROUNDS=10
TOKEN_SERCRET=valarmorghulis
TOKEN_TEST=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkUjJmZjZoMFQyaFU3WWF6VzFWNEtmLnZJUGZUYlYzQjVicjF4bjgwMXVBWmc4UGVOS0tMbWUifQ.Cb4fCBqV0N8YpJ8cRQlCM1VVWJDah4jgi-IEL4Li2Cw
EMAIL=youremail
EMAIL_PASS=yourPassword

```

## Start App

`yarn watch` or `npm run watch`

### Running Ports

After start up, the server will start on port `3000` and the database on port `5432`

## Endpoint Access

All endpoints are located in the [ODC.postman_collection.json](ODC.postman_collection.json) file.

## Token and Authentication

Tokens are passed along with the http header as

```
Authorization   Bearer <token>
```
Also, There are multiple authorization (student, admin, sub-admin)
Admin username: admin
Admin password: 123


## Important Notes

### Environment Variables

Environment variables are set in the `.env` file and added in `.gitignore` so that it won't be added to github. The names of the variables that need to be set above. I also provided the values that were used in development and testing.
