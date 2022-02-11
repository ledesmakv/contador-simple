import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  height: 100vh;
`;

export const Substract = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f54b4b;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
  border: 0;
`;

export const Sum = styled.button`
  width: 50px;
  height: 50px;
  background-color: #4baa4b;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
  border: 0;
`;

export const Restart = styled.button`
  padding: 10px;
  height: 40px;
  margin-left: 20px;
  font-size: 14px;
  background-color: grey;
  border: 0;
`;

export const NumberBox = styled.div`
  padding: 0 60px;
  font-size: 48px;
  margin: auto 0;
  &.positive {
    color: green;
  }
  &.negative {
    color: #f00;
  }
  &.neutral {
    color: #000;
  }
`;

export const Title = styled.h1`
  padding-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
`;
