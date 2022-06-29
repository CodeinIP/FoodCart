import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <div>
        {
          todos?.map((ele)=>(
            <TodoItem todo={ele} />
          ))
        }
    </div>
  )
}

export default TodoList