import {  Button } from "./style";

interface ActionButtonProps {
  text: string,
  action: () => void;
}

export default function ActionButton({ text, action }:ActionButtonProps) {
  return (
    <>
      <Button onClick={ () => action() }>{text}</Button>
    </>
  );
}