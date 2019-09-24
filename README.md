#Back-End Endpoints:

<!-- Authorization  -->
#REGISTER
POST to /api/auth/register

{
"username": "Reese",
"password": "password",
"lastName": "Kunz",
"firstName": "Reese",
"email": "email@email.com",
"phone": "19191919"
}

#LOGIN
POST to /api/auth/login

{
"username": "Reese",
"password": "password"

}

# GET to /api/stories
This is what is returned:

  {
    "id": 1,
    "title": "Tester story 1",
    "description": "This is a great story about tester ones experience",
    "created_at": "2019-09-24 21:30:58",
    "user_id": 1,
    "country_name": "Madagascar"
  },

# GET User, stories and countries stories are associated with
/api/users/:id
This is what is returned:

{
  "username": "testUser1",
  "lastName": "McTest",
  "firstName": "Tester",
  "email": "email1@email.com",
  "phone": "1-888-888-8888",
  "stories": [
    {
      "title": "Tester story 1",
      "description": "This is a great story about tester ones experience",
      "created_at": "2019-09-24 21:30:58",
      "country_id": 12
    },
    {
      "title": "this is my lovely story",
      "description": "it's the lovliest story ever",
      "created_at": "2019-09-24 21:54:10",
      "country_id": 8
    }
  ],
  "country": [
    {
      "country_name": "Madagascar"
    },
    {
      "country_name": "Guatemala"
    }
  ]
}

#POST Stories
/api/stories/:id

{
	"user_id": "1",
	"country_id": "8",
	"title": "this is my lovely story",
	"description": "it's the lovliest story ever"
}

NOTE: please supply the corresponding countries list id that matches the country name selected by the user

#PUT Stories
/api/stories/:id

{
	"user_id": "1",
	"country_id": "8",
	"title": "this is my lovely story",
	"description": "it's the lovliest story ever"
}

#DELETE Stories
/api/stories/:id


#GET Countries
/api/countries
[
    {
        "id": 1,
        "country_name": "Bolivia"
    },
    {
        "id": 2,
        "country_name": "Brazil"
    }
... etc. 
]