"use client";
import styled from "styled-components";

export default function ImageSuggestions() {
  return (
    <Container>
      <div className="Image-carousel"></div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-carousel {
  }
`;
