import { Button } from "@mantine/core";
import React from "react";

interface Props{
  onClick:()=>void;
  children:React.ReactNode;
}

const CustomBotton : React.FC<Props> = ({onClick,children}) => {
  return (
    <Button
      c={"white"}
      color="#3B71FE"
      radius={"xl"}
      fz={"16px"}
      fw={"500"}
      size="md"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomBotton;
