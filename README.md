# node_first_app


# Installation: &nbsp;
install [Postman](www.postman.com)

# Launch application
In the directory containing the code , launch app :&nbsp;
'node index.js'

With Postman : URL = 'GET http://localhost:5000/users'&nbsp;
reads the content of the file ./DB/users.json

With Postman : URL = 'POST http://localhost:5000/users/new' & body = { "email":"test2@example.com","username": "test2"}&nbsp;
From the body content , writes a new record into the file ./DB/users.json

With Postman : URL = 'POST http://localhost:5000/users/delete' & body = {"email":"test2@example.com"}&nbsp;
From the body content, deletes the record, with email="test2@example.com", in the file ./DB/users.json

With Postman : URL = 'PUT http://localhost:5000/user?email=test2@example.com' & body = {"username":"test2"}&nbsp;
From the body content, updates the record, where email="test2@example.com", with username="test2"

With Postman : URL = 'GET http://localhost:5000/user?email=test2@example.com'&nbsp;
gets the record, with email="test2@example.com", from the file ./DB/users.json
