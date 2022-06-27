import { ReactNode } from "react";
import { Container } from "./style";

interface DefaultScreenGridsProps {
  children: ReactNode
}

export default function DefaultScreenGrids ({children}: DefaultScreenGridsProps) {
  return <Container>
    {children}
  </Container>
}