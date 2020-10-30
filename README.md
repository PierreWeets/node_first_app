# node_first_app

# Installation: &nbsp;
install [Postman](www.postman.com)

# Initialize NPM and install node_modules
For this app, our Node dependancies will be managed with use of NPM.  
To initiate NPM onto our project there is a simple command which is, from the root of your project:  
'npm init'

# Launch application
In the root directory containing the code , launch app :  
'node index.js'

# use of Postman
With Postman : URL = 'GET http://localhost:5000/users':   
reads the content of the file './DB/users.json'.

With Postman : URL = 'POST http://localhost:5000/users/new' & body = { "email":"test2@example.com","username": "test2"}:  
From the body content , writes a new record, with email="test2@example.com" & "username="test2", into the file './DB/users.json'.

With Postman : URL = 'POST http://localhost:5000/users/delete' & body = {"email":"test2@example.com"}:  
From the body content, deletes the record, with email="test2@example.com", in the file './DB/users.json'.

With Postman : URL = 'PUT http://localhost:5000/user?email=test2@example.com' & body = {"username":"test2"}:  
From the body content, updates the record, where email="test2@example.com", with username="test2".

With Postman : URL = 'GET http://localhost:5000/user?email=test2@example.com':  
gets the record, with email="test2@example.com", from the file './DB/users.json'.
