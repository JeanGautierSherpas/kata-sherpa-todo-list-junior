import InputTodo from "../input/input";
import Todo from "../todo/todo";
import Button from "../button/button";
import { FC, useState } from "react";

type Todo = {
    id: string;
    input: string;
    isCompleted: boolean;
}


const TodoList: FC = () => {
const [todos,setTodos] = useState<Todo[]>([])

const changeList = (id) => {
    console.log('toto',id)
    const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
      setTodos(newTodos)
}
const onSubmit = (todo: Todo) => {
    setTodos((prevState) => [...prevState,todo])
}
const clickNotCOmpleted = () => {
    const newTodos = [...todos]
    newTodos.sort(todo => {
        if(!todo.isCompleted){
            return 1
        }else{
            return -1
        }
    });
    setTodos(newTodos);

};

  return (
      <>
      <InputTodo buttonLabel="Submit todo" texteInput="Add an Item : " onSubmit={onSubmit}/>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo.input} isCompleted={todo.isCompleted} onClick={() => changeList(todo.id)}/>
      ))}
    </ul>
    <Button onClick={clickNotCOmpleted} color="Chocolate">sort by not completed</Button>
      </>
    
  );
};

export default TodoList;
