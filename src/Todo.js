import { memo } from "react"


const Todo = memo(({ todo, setTodo, removeTodo }) => {
    return (
        <div>
            <input
                value={todo.value}
                onChange={(evn) => {
                    setTodo(evn.target.value, todo.id)
                }}
            />
            <button 
            onClick={() => {
                removeTodo(todo.id)
            }}
            >x</button>
        </div>
    )
})

export { Todo }
