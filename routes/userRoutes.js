//module.exports = app => {
module.exports = function(app,file){ //'module.exports' makes this next code accessible out of this module
    //import the NPM package : 'body-parser' to get data from the request body
    const bodyParser  = require("body-parser");    
    //import the NPM package : 'jsonfile' to extract data from a json file
    const jsonfile = require("jsonfile");

    // parses the request body , to set the parameter 'req' of the fcts 'app.post("/users/new", (req, res){})' 
        // and app.delete("/users/delete", (req, res){})
    app.use(bodyParser.json());

    // the request sender uses, in the URL, the method 'GET' with paramater '/users' ex: GET http://localhost:5000/users
    app.get("/users", (req, res) => { // launches a GET procedure when URL ex: 'GET http://localhost:5000/users'
    
        console.log("fetching all users");
        
        // reading jsonfile "./DB/users.json"
        jsonfile.readFile(file, function(err, content) {
        // send the file content back to the sender
        res.send(content);
        });
    });

    // the request sender uses, in the URL, the method 'POST' ex: POST  http://localhost:5000/users/new
        // read the json file , add the new user to the json file , rewrite the entire json file , 
        // when on the active server , the URL = '[active server]/5000/users/new'
    app.post("/users/new", (req, res) => { // |-> URL "localhost:5000/users/new" 
        
        // from the request body, gets the data |-> keys 'body' & 'username' 
        let email = req.body.email;
        let username = req.body.username;
        //alternative writing : let { email, username } = req.body;

        jsonfile.readFile(file, function(err, content) {

            // add these data to the file's content 
            content.push({ email: email, username: username });


            console.log("added '" + email + "' and username '" + username + "' to DB");

            //rewrite the file with the updated content
            jsonfile.writeFile(file, content, function(err) {
                console.log(err);
            });
            // returns, to the sender , a OK status
            res.sendStatus(200);
        });
    });

    // the request sender uses, in the URL, the method 'DELETE' ex: DELETE  http://localhost:5000/users/delete
    app.delete("/users/delete", (req, res) => {    // email data, of the record to delete
        // In the request body, retrieves the email data |-> key 'email'
        let email = req.body.email;
        console.log("email : "+ email);

        jsonfile.readFile(file, function(err, content) {

            // removes the object with key 'email' == retrieved email , from the file's content    
            for (var i = content.length - 1; i >= 0; i--) {
                if (content[i].email === email) {
                console.log("removing record with email '" + content[i].email + "' from DB");
                content.pop(i);
                }
            }

            //rewrite the file
            jsonfile.writeFile(file, content, function(err) {
                console.log(err);
            });
            // returns, to the sender , a OK status
            res.sendStatus(200);
        });
    });

	//update an existing record in json file 
    // the request sender uses, in the URL, the method 'PUT'  ex: PUT http://localhost:5000/user?email=test2@example.com
    app.put("/user", (req, res) => {
        let user;
        let username = req.body.username; // |-> in the body, the key 'username'
        let email = req.query.email; // |-> in the URL, to '?email=test2@example.com'
        
        jsonfile.readFile(file, function(err, content){
            for (var i = content.length - 1; i >= 0; i--) {
                //if (content[i].email === req.query.email) {
                //    
                if (content[i].email === email) {
                //console.log("updated user " + req.query.email + " has now username : " + username);
                console.log("updated user with email '" + email + "' has now username : " + username);
        
                user = content[i];
                user.username = username;
                }
            }
    
            jsonfile.writeFile(file, content, function(err) {
            console.log(err);
            });
    
        });
        //send the added user object, back to the request sender
        res.send(user);
    }); 

    // the request sender uses, in the URL, the method 'GET'  ex: GET http://localhost:5000/user?email=test2@example.com
    app.get("/user", (req, res) => {
        let user;
        //get the email parameter (?mail=test2@example.com), in the the URL ex : GET http://localhost:5000/user?email=test2@example.com
        let email = req.query.email;
      
        jsonfile.readFile(file, function(err, content) {
          //loop in the file's content  
          for (var i = content.length - 1; i >= 0; i--) {
            // 
            if (content[i].email === email) {
                console.log("found user" + content[i]);
                console.log(content[i]);
                // retrieve the object with email = email parameter 
                user = content[i];
            }
          }
          //send the retrieved user object, back to the request sender
          res.send(user);
        });
    });
}