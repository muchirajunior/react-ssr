import { useState } from "react";
import type { Todo } from "./todo";

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    async function fetchTodos() {
        'use server';
        setLoading(true);
        
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setTodos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
                setLoading(false);
            });
    }
    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h2 className="text-center">Todos</h2>  
                <button className="btn btn-primary " onClick={fetchTodos} >Get Todos</button>
            </div>

            {
                loading ? (
                    <div className="text-center my-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <ul className="list-group list-group-flush">
                        {todos.map(todo => (
                            <li key={todo.id} className="list-group-item d-flex align-items-center">
                                <h5>{todo.title}</h5>
                                <span className={`badge mx-4 ${todo.completed ? 'bg-success' : 'bg-danger'}`}>
                                    {todo.completed ? "Completed" : "Pending"}
                                </span>
                            </li>
                        ))}
                    </ul>
                )
            }
        
        </div>
    )
}
