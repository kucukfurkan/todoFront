/* eslint-disable no-undef */
const { Pact } = require('@pact-foundation/pact')
const { getTodos, createTodo} = require('../api');
import { like } from "@pact-foundation/pact/src/dsl/matchers";
import "babel-polyfill";



jest.setTimeout(60000);

//let baseURL = "http://localhost:8086/";

describe('Todo Api', () => {
    const provider = new Pact({
        port: 8086,
        consumer: 'todo',
        provider: 'todo-backend',
        cors: true
    })

    beforeAll(() => provider.setup());
    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());

    describe('Get todo items', () => {
        it("Should return all todo items", async() => {
            const expectedResponse = [{ "_id": "62234346c2a65768f2c03ca5", "status": 0, "text": "drink water" }, { "_id": "6225bfaec2a65768f2c03ca6", "status": 0, "text": "bla bla" }]

            provider.addInteraction({
                state: "there are already exists todos",
                uponReceiving: 'request for geting todos',
                withRequest: {
                    path: '/GetTodoElements',
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                },
                willRespondWith: {
                    status: 200,
                    body: like(expectedResponse),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            })
            let theBaseURL = provider.mockService.baseUrl
           await getTodos(theBaseURL);
            //expect(response.data).toEqual(expectedResponse);

        })
    })

    describe("Create a todo", () => {
        it('Should add an element to todo list', async() => {

            const requestBody = { "status": 0, "text": "new todo element" }

            provider.addInteraction({
                state: "a todo item is created",
                uponReceiving: "create item request",
                withRequest: {
                    method: "POST",
                    path: "/CreateTodo",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: like(requestBody)
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            })
            let theBaseURL = provider.mockService.baseUrl
            await createTodo(theBaseURL, requestBody);
            //const myJSON = JSON.stringify(response.statusText);
           // expect(myJSON).toEqual("\"Created \"");
        })
    })
})