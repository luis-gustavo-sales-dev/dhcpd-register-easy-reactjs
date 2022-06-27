import {  MenuLink } from "./style";

interface ActionButtonProps {
  text: string,
  url: string,
  action?: () => void;
}

export function ActionButton({ text, url }:ActionButtonProps) {
  return (
    <>
      <MenuLink to={url}>{text}</MenuLink>
    </>
  );
}