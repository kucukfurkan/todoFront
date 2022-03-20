import axios from "axios";

export async function getTodos(baseURL) {
    return axios.request({
        method: "GET",
        url: baseURL + "/GetTodoElements",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    })
}

export async function createTodo(baseURL, todoElement) {
    return axios.request({
        method: "POST",
        url: baseURL + "/CreateTodo",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        data: todoElement
    })
}
