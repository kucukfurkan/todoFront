# Todo-Frontend
Todo application client for Modanisa assignment.
# Demo

URL: https://todo-vue-2cac8.web.app/
## Scripts

- npm install 

To run project 
- npm run serve

To ru unit tests
- npm run test:unit

To run consumer tests
- npm run test:consumer

To test lint
- npm run lint

## Solutions

In case of "regeneration runtime exception" 
- npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
- and import "babel-polyfill";

## Pipeline
This repo published to gitlab CI/CD pipeline. It does not contain acceptance test in pipeline, because there is an error that could not be solved yet.

![Alt text](todo/screenshots/Screen%20Shot%202022-03-23%20at%2018.11.31.png "Optional Title")

## Related repositories
- Acceptance Test Repo: https://gitlab.com/furkan.moda/todo-acceptance-test 
  Tests are pass in this repo when its runned locally but not in the pipeline because of chromium error.
- Back-end Repo: https://gitlab.com/furkan.moda/todo-backend 

## Author
- Furkan Küçük (https://www.linkedin.com/in/furkan-k%C3%BC%C3%A7%C3%BCk-11b84b21b/)

