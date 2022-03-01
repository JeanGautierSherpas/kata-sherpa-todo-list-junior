import {FC, useState} from "react";

type Props = {
  texteInput: string
  buttonLabel: string
}

const InputTodo: FC<Props> = ({texteInput, buttonLabel}) => {
    const [input, setInput] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if(!input.trim()){
            return
        }else{
          // DO A FUNCTION FOR HANDLE INPUT
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
