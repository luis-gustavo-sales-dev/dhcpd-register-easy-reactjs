import styled from "styled-components";

export const Container = styled.div`
  display: grid ;
  grid-template-rows: 1fr 3fr 1fr 1fr;
  row-gap: 6px ;
`

export const ContentActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end ;
  position: relative;
`

export const MoveButton = styled.div`
  position: absolute;

`

export const ContentMACs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const ContentGroups = styled.div`
  display: flex;
  flex-wrap: wrap ;
  gap: 2px;
  align-items: center;
`

export const ContentTypeOfDevices = styled.div`
  display: flex;
  flex-wrap: wrap ;
  gap: 2px;
  align-items: center;
`

