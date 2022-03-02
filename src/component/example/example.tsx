import { makeStyles } from "@material-ui/core";
import {FC} from "react";

type Props = {
  texteLabel: string
  buttonLabel: string
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  label: {
    color: "red"
  },
  button: {
    color: 'green'
  }
}));

const Example: FC<Props> = ({texteLabel, buttonLabel}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <h1 className={classes.label}>{texteLabel}</h1>
        <button className={classes.button}>{buttonLabel}</button>
      </div>
  )
};

export default Example;
