import React from 'react';
import {Container} from "@/components";
import { colors } from "@/constant/colors";
import styled from "styled-components";
import ZkApp from "@/components/ZkApp";
import {GlobalStyle} from "@/styles/global.style";

function ZkApps() {
  return (
    <Container>
      <GlobalStyle />
      <RegisterDescription>Register your ID on our wallet with top-tier<br/>privacy protection solution!</RegisterDescription>
      <AppsWrap>
        <ZkApp name={"ZKSwap"} />
        <ZkApp name={"ZKSwap"} />
        <ZkApp name={"ZKSwap"} />
        <ZkApp name={"ZKSwap"} />
      </AppsWrap>
    </Container>
  );
}

export default ZkApps;

const RegisterDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.white};
  
  padding-top: 100px;
  margin: 0;
`;

const AppsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  
  margin: 100px 24px 0 24px;
`;
