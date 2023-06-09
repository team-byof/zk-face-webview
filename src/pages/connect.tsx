import { Container, Header, CtaSmallBtn } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Connect = () => {
  const CONNECT_DES = `Register your ID on our wallet with top-tier \nprivacy protection solution!`;
  const CONNECT_BTN_TITLE = "Connect Polygon ID";
  const router = useRouter();
  return (
    <Container>
      <GlobalStyle />
      <ConnectDescription>{CONNECT_DES}</ConnectDescription>
      <ConnectPolygonBtn>{CONNECT_BTN_TITLE}</ConnectPolygonBtn>
    </Container>
  );
};
export default Connect;

const ConnectDescription = styled.text`
  white-space: pre-line;
  color: ${colors.white};
  font-size: 12px;
`;

const ConnectPolygonBtn = styled.div`
  width: 132px;
  height: 125px;
`;
