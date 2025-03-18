# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 4 characters).
  - `lastname` (string, optional)
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 4 characters).
    - `lastname` (string, optional)
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description

Logs in an existing user and returns a JWT token for authentication.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address.
- `password` (string, required): User's password.

### Example Response

- `token` (string): JWT token for authentication.
- `user` (object): User object containing user information.

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 4 characters).
    - `lastname` (string, optional)
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Response

Returns the user object containing profile information:

- `user` (object):
  - `fullname` (object)
    - `firstname` (string): User's first name
    - `lastname` (string): User's last name
  - `email` (string): User's email address

## `/users/logout` Endpoint

### Description

Logs out the currently authenticated user by invalidating their JWT token.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token either in:
- Cookie named 'token'
- Authorization header: `Authorization: Bearer <token>`

### Response

Status 200 with message:
```json
{
    "message": "Logout successfully"
}