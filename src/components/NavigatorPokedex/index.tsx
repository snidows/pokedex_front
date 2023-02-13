import { Container, PageShow } from "./styles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
export const NavigatorPokedex = ({
  page,
  next,
  back,
}: {
  page: number;
  next: Function;
  back: Function;
}): JSX.Element => {
  return (
    <Container>
      <AiOutlineArrowLeft size={"30px"} onClick={()=>back()}/>
      <PageShow>{page}</PageShow>
      <AiOutlineArrowRight size={"30px"} onClick={()=>next()}/>
    </Container>
  );
};
