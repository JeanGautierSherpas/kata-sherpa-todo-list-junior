import {FC, useState} from "react";
import uniqid from 'uniqid';

type Todo = {
  id: string;
  input: string;
  isCompleted: boolean;
}

type Props = {
  texteInput: string
  buttonLabel: string
  onSubmit: (todo: Todo) => void;
}

const InputTodo: FC<Props> = ({texteInput, buttonLabel, onSubmit}) => {
    const [input, setInput] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if(!input.trim()){
            return
        }else{
          onSubmit({id: uniqid(),input, isCompleted: false })
        }
    };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>{texteInput}</label>
        <input type="text" name="todo-list" onChange={(e) => setInput(e.target.value)} placeholder="input-text"/>
      </div>
      <div>
        <input type="submit" value={buttonLabel} />
      </div>
    </form>
  );
};

export default InputTodo;
