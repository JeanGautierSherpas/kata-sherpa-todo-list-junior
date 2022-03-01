import { makeStyles } from "@material-ui/core";
import React, { FC, ReactEventHandler } from "react";

type StyleProps = {
    withMargin: boolean;
    color: string;
    disabled: boolean;
}

type Props = {
    active?: boolean;
    onClick: ReactEventHandler;
    children: string;
    withMargin?: boolean;
    color?: string;
}

const useStyles = makeStyles(() => ({
    root: ({ withMargin,
        color,
        disabled }: StyleProps) => ({
            marginLeft: withMargin ? "4px" : "0",
            backgroundColor: color && !disabled ? color  : "white",
            borderColor: color && !disabled  ? color  : "white",
            color: color && disabled  ? "white"  : "black",
            borderRadius: color && disabled  ? "4px"  : "4px",
    }),
  }));

const Button: FC<Props> = ({active,onClick,children,withMargin,color}) => {
    const classes = useStyles({color,disabled: active, withMargin})
  return (
    <button
      onClick={onClick}
      className={classes.root}
    >
      {children}
    </button>
  );
};

export default Button;
