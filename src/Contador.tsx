import { FunctionComponent, useState } from "react";
import {
  Container,
  NumberBox,
  Restart,
  Substract,
  Sum,
  Title,
  Wrapper,
} from "./styles";

export const Contador: FunctionComponent = () => {
  const [number, setNumber] = useState<number>(0);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const substractNumber = () => {
    setNumber(number - 1);
  };

  const restartNumber = () => {
    setNumber(0);
  };

  // esto es super sencillo? si, pero fui capaz de hacerlo sola AAAAA GOKU 🛐🛐🛐
  return (
    <Wrapper>
      <Title>Contador</Title>
      <Container>
        <Substract onClick={substractNumber}>-</Substract>
        <NumberBox
          className={
            number > 0 ? "positive" : number < 0 ? "negative" : "neutral"
          }
        >
          {number}
        </NumberBox>
        <Sum onClick={addNumber}>+</Sum>
        <Restart onClick={restartNumber}>Reset</Restart>
      </Container>
    </Wrapper>
  );
};
