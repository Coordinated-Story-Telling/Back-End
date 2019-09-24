# Back-End

Endpoints:

REGISTER
/api/auth/register

{
"username": "Reese",
"password": "password",
"lastName": "Kunz",
"firstName": "Reese",
"email": "email@email.com",
"phone": "19191919"
}

LOGIN
/api/auth/login

{
"username": "Reese",
"password": "password"

}

GET Stories
/api/stories
This is what is returned:
{
"id": 1,
"title": "test story",
"description": "this is a really sad sorry",
"date": null
},

GET Stories by Id
/api/stories/:id
This is what is returned:
{
"id": 4,
"title": "test story two",
"description": "this is another really sad story",
"date": null,
"user_id": 2
},

POST Stories
/api/stories/:id

{
"user_id": "2",
"title": "test story two",
"description": "this is another really sad story"
}

PUT Stories
/api/stories/:id

{
"user_id": "2",
"title": "test story two",
"description": "this is another really even sadder story"
}

DELETE Stories
/api/stories/:id
