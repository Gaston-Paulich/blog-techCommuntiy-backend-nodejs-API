## Get logged In User Info
To get the information of loggedin user

**URL**: `localhost:3000/user/me`

**Method**: `GET

**Authentication**: Required

## Request body
**Required fields:**

**Optional fields:** 

**Data**:
```bash

```

## Success response
**Code**: `200 OK`

**Content**:
```bash
{
    "role": "blogger",
    "joined": "08 Apr 2021",
    "_id": "606efbba17e43a04cce0286d",
    "first_name": "Gaston",
    "last_name": "Paulich",
    "email": "g@gmail.com",
    "about": "I am a node js developer",
    "address": "calle falsa 123",
    "job": "Programador"
}
```

## Error response
**Condition**: If `accessToken` in absent.

**Code**: `401 Unauthorized`

**Content**:
```bash
{
    "error": {
        "status": 401,
        "message": "JsonWebTokenError"
    }
}
```