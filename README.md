# U02P02

## Server end Repo


# Project Title : 
## Interior Designers Platform 




## Description : 

This platform will connect between Interior Designers and Clients , also Designers with eachothers .. 
by reviewing their projects in Explore page , and post some advices , ideas , expert in decore in blog page.
the user will cannot reach to the explore or the blog unless he has an account in the website 


## Technologies : 

- JS
- React 
- Node js
- Express
- MongoDB 
- CSS


## Tools : 

- Git
- GitHub 
- postman 
- GoogleFonts

# MongoDB: 
i used **MongoDB**to build Schemas and store the data ..
MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.


# installation: 

i have installed mongoose and some packages for express node js. 

first install the Express in your project folder to build your server 

```language
npm init -y 
npm i express
npm i nodemon --global 
```

now install mongoose to build your database and connect it with server
```
npm i mongoose

```
then install axios to make HTTP requests to the API or Database  
```language
npm i axios
```

the install CORS package ... CORS is providing a Connect/Express middleware that can be used to enable CORS with various options.

```language
npm i cors 
```
install dotenv to give a secret keys to your application 
```language
npm i dotenv
```

# functions:

this is an example to how to get the data from mongoDB 
```javascript
const getdesigners = async (req, res) => {
  try {
    designerSchema.find({}).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.json({ error });
  }
};

```

# PORT 
you need to assigne your port to run your program , example: PORT=5000; 
this PORT variable will be in dotenv file .

# Test 
 to run your backend program you should write command : 

```language
npm run dev
```

 to run your frontend program: 

```language
npm start
```

# Links 

- [MongoDB Doc](https://docs.mongodb.com/manual/installation/)
- [Express Doc](https://expressjs.com/en/starter/installing.html)
- [React Doc](https://reactjs.org)
- [Postman](https://www.postman.com/downloads/)


## Timemanagement:

## Server end trello : https://trello.com/b/kikool0F/project2