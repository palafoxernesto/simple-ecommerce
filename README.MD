# simple-ecommerce

This is a simple e-commerce monorepo written in JS (emascript 6) for node.js

## Prerequisites

You most have node.js, docker & docker-compose installed and running in your machine

## Usage

- In the root of the project type:

```
docker-compose up
```
This should setup a postgres instance with default credentials

- In another terminal go to the folder simple-ecommerce-db and type:
```
npm -i && npm run setup
```
