import {  Button } from "./style";

interface ActionButtonProps {
  text: string,
  action: () => void;
}

export function ActionButton({ text, action }:ActionButtonProps) {
  return (
    <>
      <Button onClick={ () => action() }>{text}</Button>
    </>
  );
}