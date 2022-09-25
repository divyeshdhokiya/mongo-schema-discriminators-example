# mongoose-schema-discriminators-example
The repository has an example code of using two different schema with validation in a same modal.
Since, this is just for testing `discriminators` feature of mongoose, I have used a basic express app to demonstrate. more details [here](https://mongoosejs.com/docs/discriminators.html).

I am assuming you have mongodb running on `127.0.0.1:27017`


### To Run the Code
```sh
npm i
npx nodemon ./bin/www
```

Finally, hit `localhost:3000/employee` and check the mongoDB collection to see the added records.
