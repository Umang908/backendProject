**For Account Creation : **
**Request :** 
curl --location --request POST 'http://localhost:9000/api/create-account' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name" : "umang",
    "last_name" : "varshney",
    "email" : "umang12345@gmail.com",
    "phone" : "+919084549190",
    "password" : "um123",
    "birthday" : "2001/10/05"
}'

**Response : **
{
    "error": false,
    "message": "Successfully Created",
    "code": 201,
    "data": {
        "id": 7,
        "first_name": "umang",
        "last_name": "varshney",
        "email": "umang12345@gmail.com",
        "phone": "+919084549190"
    }
}

**
Account Login :**
**Request :**
curl --location --request POST 'http://localhost:9000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email" : "umang12345@gmail.com",
    "password" : "um123"
}'

**Response :**

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIxOTI5NTkwLCJleHAiOjE3MjE5MzMxOTB9.Zs4MFuvJcGqF1MTA5ZQhxcsBVQo6K9GbnimipcBytsA"
}




**Get Account Data :**
**Request :**
curl --location --request GET 'http://localhost:9000/api/get-all-account' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIxOTI5NTkwLCJleHAiOjE3MjE5MzMxOTB9.Zs4MFuvJcGqF1MTA5ZQhxcsBVQo6K9GbnimipcBytsA' \
--data-raw ''

**Response :**

[
    {
        "id": 1,
        "first_name": "umang",
        "last_name": "varshney",
        "email": "umang123@gmail.com",
        "phone": "9084549190",
        "password": "$2a$05$RcY7JZAo1SDsUFIm1doVNuYyJUnYNCtnF0nuGmuZDtCzp7blER.FG",
        "birthday": "2001-01-05",
        "created_at": "2024-07-25T17:14:43.000Z",
        "last_modified": "2024-07-25T17:14:43.000Z"
    },
    {
        "id": 6,
        "first_name": "umang",
        "last_name": "varshney",
        "email": "umang1234@gmail.com",
        "phone": "+919084549190",
        "password": "$2a$05$1MsutlwmnBaF.l9mOKdXEulkoxkvNUQlemNBzwqDpOjMSpEFRt2Ry",
        "birthday": "2001-10-05",
        "created_at": "2024-07-25T17:40:18.000Z",
        "last_modified": "2024-07-25T17:40:18.000Z"
    },
    {
        "id": 7,
        "first_name": "umang",
        "last_name": "varshney",
        "email": "umang12345@gmail.com",
        "phone": "+919084549190",
        "password": "$2a$05$rkbD9T5wBPLppCHuC2DIE.W4R5bHR6ympaJXsLSznFbEZEJqgVaIm",
        "birthday": "2001-10-05",
        "created_at": "2024-07-25T17:42:55.000Z",
        "last_modified": "2024-07-25T17:42:55.000Z"
    }
]


**Get Account By Id :**
**Request :**
curl --location --request GET 'http://localhost:9000/api/get-account-by-id/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIxOTI5NTkwLCJleHAiOjE3MjE5MzMxOTB9.Zs4MFuvJcGqF1MTA5ZQhxcsBVQo6K9GbnimipcBytsA' \
--data-raw ''

**Response :**
{
    "id": 7,
    "first_name": "umang",
    "last_name": "varshney",
    "email": "umang12345@gmail.com",
    "phone": "+919084549190",
    "password": "$2a$05$rkbD9T5wBPLppCHuC2DIE.W4R5bHR6ympaJXsLSznFbEZEJqgVaIm",
    "birthday": "2001-10-05",
    "created_at": "2024-07-25T17:42:55.000Z",
    "last_modified": "2024-07-25T17:42:55.000Z"
}

**Delete Account :**
****Request : **
curl --location --request DELETE 'http://localhost:9000/api/delete-account/7' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIxOTI5NTkwLCJleHAiOjE3MjE5MzMxOTB9.Zs4MFuvJcGqF1MTA5ZQhxcsBVQo6K9GbnimipcBytsA' \
--data-raw ''

Response : 204
