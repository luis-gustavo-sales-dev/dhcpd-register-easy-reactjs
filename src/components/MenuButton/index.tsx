import {  MenuLink } from "./style";

interface ActionButtonProps {
  text: string,
  url: string
}

export function MenuButton({ text, url }:ActionButtonProps) {
  return (
    <>
      <MenuLink to={url}>{text}</MenuLink>
    </>
  );
}