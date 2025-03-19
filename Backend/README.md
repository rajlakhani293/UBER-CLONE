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

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

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

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}
```

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

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

```json
{
  "message": "Logged out successfully"
}
```

## `/captains/register` Endpoint

### Description

Registers a new captain with vehicle information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters)
  - `lastname` (string, optional): Captain's last name
- `email` (string, required): Captain's email address (must be a valid email)
- `password` (string, required): Captain's password (minimum 6 characters)
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters)
  - `plate` (string, required): Vehicle plate number (minimum 3 characters)
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1)
  - `vehicleType` (string, required): Type of vehicle (must be "car", "motorcycle", or "auto")

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response

```json
{
  "token": "jwt_token_here",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Validation Rules

- Email must be valid.
- First name must be at least 3 characters long.
- Last name is optional.
- Password must be at least 6 characters long.
- Vehicle color must be at least 3 characters long.
- Vehicle plate must be at least 3 characters long.
- Vehicle capacity must be at least 1.
- `status` is by default `inactive`.
- Vehicle type must be one of: "car", "motorcycle", "auto".
- All fields are required unless marked optional.
