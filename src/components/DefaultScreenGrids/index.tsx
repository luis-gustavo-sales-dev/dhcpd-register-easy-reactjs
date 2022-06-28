import { useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { Container } from "./style";

interface DefaultScreenGridsProps {
  children: ReactNode
}

export default function DefaultScreenGrids ({children}: DefaultScreenGridsProps) {

  const [animate, setAnimate] = useState("no-animation")


  useEffect( () => {
    setAnimate("animation")
    console.log(animate)
  }, []);

  return <Container className={animate}>
    {children}
  </Container>
}