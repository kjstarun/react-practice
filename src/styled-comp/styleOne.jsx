// import { Container, Text } from "./style";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  padding: 12px;
  margin: 12px;
`;

export const Text = styled.p`
  color: #e7e7e7;
`;

const StyleOne = () => {
  return (
    <Container>
      <Text>Hello I'm from With Out Styled Component Example</Text>
    </Container>
  );
};

export default StyleOne;
