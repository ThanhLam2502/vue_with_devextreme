#Vue_with_devextreme


#json-server-auth:
###Install both JSON Server and JSON Server Auth :
```
# NPM 
npm install -D json-server json-server-auth
# Yarn 
yarn add -D json-server json-server-auth
```
Create a data.json file with a users collection :
```
{
  "users": []
}
```
###Start JSON serve
```
json-server db.json -m ./node_modules/json-server-auth
# With cli
json-server-auth data.json
```

###Router
Any of the following routes registers a new user :
```
POST /register
POST /signup
POST /users
```
#json-server:
###Install JSON Server
```
npm install -g json-server
```
###Start JSON Server
```
json-server --watch data.json
```
###Routes
Properties API:
```
GET    /properties
GET    /properties/{id}
POST   /properties
PUT    /properties/{id}
PATCH  /properties/{id}
DELETE /properties/{id}
```
>Also when doing requests, it's good to know that:
>* If you make POST, PUT, PATCH or DELETE requests, 
>changes will be automatically and safely saved to db.json using lowdb.
>* Your request body JSON should be object enclosed, 
>just like the GET output. (for example {"name": "Foobar"})
>* Id values are not mutable. 
>Any id value in the body of your PUT or PATCH request will be ignored.
> Only a value set in a POST request will be respected, but only if not already taken.
>* A POST, PUT or PATCH request should include
> a Content-Type: application/json header to use the JSON in the request body. 
>Otherwise it will return a 2XX status code, but without changes being made to the data.

###Database
```
GET /db
```
###Filter
Use **.** to access deep properties
```
GET /properties?id=1&id=2
GET /user?userName=lamlamlam
```
###Paginate
_10 items are returned by default_
```
GET /properties?_page=1
GET /properties?_page=1&_limit=5
```

####Run serve mock
json-server <name>.js
```
json-server property.mock.js
```
[Github source - JSON Server](https://github.com/typicode/json-server)
