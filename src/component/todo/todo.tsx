import { makeStyles } from "@material-ui/core";
import { ReactEventHandler } from "react";
import {FC} from "react";

type ColorProps = {
    isCompleted: boolean
}

type Props = {
    todo: string; 
    isCompleted: boolean; 
    onClick: ReactEventHandler;
}

const useStyles = makeStyles(() => ({
    root: ({ isCompleted }: ColorProps) => ({
        color: isCompleted ? "red" : "green",
        textDecoration: isCompleted ? "line-through" : "none"
    }),
  }));

const Todo: FC<Props> = ({ todo, isCompleted, onClick }) => {
    const classes = useStyles({ isCompleted });
  return <li onClick={onClick} className={classes.root}>{todo}</li>;
};

export default Todo;
