"use client";
import styled from "styled-components";
import { data } from "../../constants/types/appTypes";
import { useState } from "react";

type pullData = data;

export default function ImageComponent(props: pullData[]) {
  const [imageActiveState, setimageActiveState] = useState<pullData>();
  return (
    <Container>
      <section className="inner-section">
        {props.map((image) => {
          return <div className="image-item"></div>;
        })}
      </section>
    </Container>
  );
}

const Container = styled.section`
  .inner-section {
    .image-item {
    }
  }
`;
