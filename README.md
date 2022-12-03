# mongodb-nodejs-api

## prerequisite

you need docker installed and run the command `yarn install` to install dependencies.

## how to test it

### using redis
first make sure you have docker installed, then run this command:
```text
docker run -d -p 6379:6379 redis:latest
```
### using mongodb
first make sure you have docker installed, then run this command:
```text
docker run -d -p 27017:27017 mongo:latest
```

then you can launch the api by executing the command:
```text
yarn start
```

## Links
- https://medium.com/geekculture/using-redis-with-docker-and-nodejs-express-71dccd495fd3
