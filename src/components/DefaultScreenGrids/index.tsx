import { useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { Container } from "./style";

interface DefaultScreenGridsProps {
  children: ReactNode;
  colums: string;
}

export default function DefaultScreenGrids ({children, colums}: DefaultScreenGridsProps) {

  const [animate, setAnimate] = useState("no-animation")


  useEffect( () => {
    setAnimate("animation")
  }, []);

  useEffect( () => {
    console.log("animate: " + animate)
  }, [animate])

  return <Container className={animate} colums={colums}>
    {children}
  </Container>
}