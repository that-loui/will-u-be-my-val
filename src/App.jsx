import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fff0f3;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Heart = styled.div`
  font-size: 100px;
  animation: ${pulse} 1.5s infinite;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #ff4d6d;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background-color: #ff4d6d;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c9184a;
  }
`;

export default function ValentineApp() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Container>
      <Heart onClick={() => setAccepted(true)}>❤️</Heart>
      
      {!accepted ? (
        <>
          <Title>Will you be my Valentine?</Title>
          <ButtonGroup>
            <Button onClick={() => setAccepted(true)}>Yes</Button>
            <Button onMouseOver={(e) => {
              // Simple "No" button dodge logic
              e.target.style.position = 'absolute';
              e.target.style.top = Math.random() * 80 + '%';
              e.target.style.left = Math.random() * 80 + '%';
            }}>No</Button>
          </ButtonGroup>
        </>
      ) : (
        <Title>Yay! See you on the 14th! 🌹</Title>
      )}
    </Container>
  );
}