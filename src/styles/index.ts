import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #00d4ff;
`;

export const UploadBox = styled.div<{ dragging: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  border: 2px dashed ${({ dragging }) => (dragging ? "#ff00ff" : "#00d4ff")};
  transition: all 0.3s;
  cursor: pointer;
  width: 400px;
`;

export const UploadIcon = styled.div`
  margin-bottom: 15px;
`;

export const DragText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: #00d4ff;
  cursor: pointer;
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  display: none;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div<{ isError: boolean }>`
  background: #1a1a2e;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  color: ${({ isError }) => (isError ? "#ff4d4d" : "#00ff99")};
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const SuccessIcon = styled.div`
  margin-bottom: 15px;
`;

export const ErrorIcon = styled.div`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #00d4ff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
  &:hover {
    background: #0088cc;
  }
`;
