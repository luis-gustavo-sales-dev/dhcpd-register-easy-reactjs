import {  MenuButton } from "./style";

interface ActionButtonProps {
  text: string,
  action?: () => void;
}

export function ActionButton({ text }:ActionButtonProps) {
  return (
    <>
      <MenuButton>{text}</MenuButton>
    </>
  );
}