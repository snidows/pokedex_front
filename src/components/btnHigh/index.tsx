import { Container } from "./styles"

export const BtnHigh=({text,action}:{text:string,action:Function}):JSX.Element=>{
    return<Container onClick={()=>action()}>{text}</Container>
}