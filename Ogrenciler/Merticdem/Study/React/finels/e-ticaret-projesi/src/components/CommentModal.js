import styled from "styled-components";
import { useState } from "react";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function CommentModal({ onClose }) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Yorum gönderme işlemleri
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Title>Leave a Comment</Title>
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </ModalContent>
    </ModalContainer>
  );
}
