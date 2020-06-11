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

    const handleDeletion = (e, index) => {
        console.log(index)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>TODO List</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">

                    <div className="card text-left">
                        <div className="card-body mx-none px-0 py-0">
                            <ul className="list-group">
                                <input type="text" className="list-group-item" placeholder="What needs to be done?" onKeyPress={handleInput} />

                                {
                                    todoList.length > 0 &&
                                    todoList.map((elemento, index) => {
                                        return (
                                            <li key={index} className="list-group-item">
                                                {elemento}
                                                <button type="button" className="close" aria-label="Close" >
                                                    <span aria-hidden="true" onClick={(e)=>handleDeletion(e, index)}>&times;</span>
                                                </button>
                                            </li>)
                                    })
                                    /* :
                                    <li className="list-group-item">No hay elementos en la lista</li> */
                                }
                            </ul>
                        </div>
                        <div className="card-footer text-muted">
                            {
                                todoList.length > 0 ?
                                    <>
                                        <span>Task left </span>
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
