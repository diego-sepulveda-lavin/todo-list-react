import React, { useState } from 'react';

const App = () => {

    const [todoList, setTodoList] = useState([])

    const handleInput = (e) => {
        if (e.target.value !== '' && e.key === 'Enter') {
            let data = [
                e.target.value]
            setTodoList(prevState => {
                return [...prevState, ...data]
            })
            e.target.value = ''
        }
    }

    const handleDeletion = (index) => {
        setTodoList(todoList.filter(item => item !== todoList[index]))
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h1 id="titulo" className="animate__animated animate__bounce text-center">TODO List</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card text-left paper">
                        <div className="card-body mx-none px-0 py-0">
                            <ul className="list-group">
                                <input type="text" id="input" className="list-group-item" placeholder="What needs to be done?" onKeyPress={handleInput} />

                                {
                                    todoList.length > 0 &&
                                    todoList.map((elemento, index) => {
                                        return (
                                            <li key={index} className="list-group-item" id="tarea">
                                                {elemento}
                                                <button type="button" className="close" aria-label="Close" onClick={() => handleDeletion(index)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </li>)
                                    })
                                }

                            </ul>
                        </div>
                        <div className="card-footer text-muted">
                            {
                                todoList.length > 0 ?
                                    <>
                                        <span>Tasks left </span>
                                        <span className="badge badge-warning badge-pill">{todoList.length}</span>
                                    </>
                                    : `There is no pending tasks`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
