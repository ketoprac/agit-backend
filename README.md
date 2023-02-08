# REST API with JWT Authentication using ExpressJS, PostgreSQL and Sequelize
This is a simple REST API project built using ExpressJS, PostgreSQL and Sequelize, which includes authentication using JSON Web Tokens (JWT). This project is intended for use as a technical test.

## Features
- REST API built using ExpressJS
- Data storage using PostgreSQL
- ORM for database operations using Sequelize
- JWT authentication for secure user authentication

## API Endpoints
### /api/positions
- GET /: Retrieves all positions with optional query parameters for filtering (description, location, full_time, page, limit).
- GET /:id: Retrieves a single position by its id.
### /api/users
- POST /login Used for user authentication, returning token.
- POST /signup Used for user registration.


## Built With
- ExpressJS - The web framework used
- PostgreSQL - Database system
- Sequelize - ORM for database operations
- JWT - JSON Web Tokens for authentication
