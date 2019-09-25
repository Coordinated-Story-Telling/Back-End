#Back-End Endpoints:

<!-- Authorization  -->
#REGISTER
POST to /api/auth/register
- credentials NOT required

https://coordinated-stories.herokuapp.com/api/auth/register

{
"username": "Reese",
"password": "password",
"lastName": "Kunz",
"firstName": "Reese",
"email": "email@email.com",
"phone": "19191919"
}

Successful request returns a token

#LOGIN
POST to /api/auth/login
- credentials NOT required

https://coordinated-stories.herokuapp.com/api/auth/login

{
"username": "Reese",
"password": "password"

}

Successful request returns a token

# GET to /api/stories
- credentials NOT required
https://coordinated-stories.herokuapp.com/api/stories

Successful request returns a list of stories: 

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

- credentials required
https://coordinated-stories.herokuapp.com/api/users/1


Successful req returns:


{
  "id": 1,
  "username": "testUser1",
  "lastName": "McTest",
  "firstName": "Tester",
  "email": "email1@email.com",
  "phone": "1-888-888-8888",
  "stories": [
    {
      "id": 3,
      "title": "Telling another story",
      "description": "Let me tell you about telling stories",
      "created_at": "2019-09-25T03:02:45.719Z",
      "country_id": 8,
      "country_name": "Guatemala"
    },
    {
      "id": 1,
      "title": "this is our new test title fun",
      "description": "This is a great story about tester ones experience",
      "created_at": "2019-09-25T01:52:43.239Z",
      "country_id": 12,
      "country_name": "Madagascar"
    },
    {
      "id": 4,
      "title": "Telling even more stories",
      "description": "Let me tell you about telling stories",
      "created_at": "2019-09-25T04:41:40.043Z",
      "country_id": 8,
      "country_name": "Guatemala"
    }
  ]
}

#POST Stories
/api/stories

- credentials required
https://coordinated-stories.herokuapp.com/api/stories


{
	"user_id": "1",
	"title": "Telling even more stories",
	"description": "Let me tell you about telling stories",
	"country_id": "8"
}

NOTE: please supply the corresponding countries list id that matches the country name selected by the user

Successful update will return the index of the added story in the array:

[
  5
]

#PUT Stories
/api/stories/:id

- credentials required
https://coordinated-stories.herokuapp.com/api/stories/2

The id in these examples below are for the actual story id, which means the :id in the url parameter you are sending us the user id, and then in the body of the request we get from you you give us the actual id of the story you want updated.

example 1: 
{
	"id": "1",
	"country_id": "8",
	"title": "this is my lovely story",
	"description": "it's the lovliest story ever"
}

If successful will return:

1 

example 2: 

{
	"id": "3",
	"title": "this is our new test title fun but funner!"
}



#DELETE Stories
/api/stories/:story_id
- credentials required 
https://coordinated-stories.herokuapp.com/api/stories/1

If successful will return: 

{
  "removed": 1
}


#GET Countries
/api/countries
- credentials required 
https://coordinated-stories.herokuapp.com/api/countries

countries and the corresponding id you would send back to us
for example in the post req above


Successful request will return list of countries: 

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