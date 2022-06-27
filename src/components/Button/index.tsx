import {  MenuButton } from "./style";

interface ActionButtonProps {
  text: string,
  url: string,
  action?: () => void;
}

export function ActionButton({ text, url }:ActionButtonProps) {
  return (
    <>
      <MenuButton href={url}>{text}</MenuButton>
    </>
  );
}