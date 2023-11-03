"use client";
import styled from "styled-components";
import { imageSuggestions } from "../../constants/data/constants";
import { useState } from "react";

export default function ImageSuggestions() {
  const [backward, setBackward] = useState(false);
  const [forward, setForward] = useState(false);
  return (
    <Container>
      <div className="image-carousel">
        <main className="inner-section">
          <button className="right-arrow">
            <img src="/images/arrow.svg" alt="right-arrow-icon" />
          </button>
          <button className="left-arrrow">
            <img src="/images/arrow.svg" alt="left-arrow-icon" />
          </button>
          {imageSuggestions.map((suggestion, index) => {
            return (
              <a href={suggestion.link} className="image-item" key={index}>
                <img src={suggestion.url} alt={suggestion.description} />
                <span>
                  <h3>{suggestion.description}</h3>
                  <a href={suggestion.link}>Learn more</a>
                </span>
              </a>
            );
          })}
        </main>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-carousel {
    width: 80%;
    height: 100%;
    padding: 1rem 2rem;
    border-radius: 20px;
    background: #ffffff;
    position: relative;
    .left-arrow,
    .right-arrow {
      position: absolute;
    }
    .right-arrow {
      img {
        right: 0;
        bottom: 50%;
        transform: rotateX(180deg);
      }
    }
    .left-arrow {
      left: 0;
      bottom: 50%;
      img {
      }
    }
    .inner-section {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      display: flex;
      &::-webkit-scrollbar {
        display: none;
      }
      .image-item {
        display: flex;
        flex-direction: column;
        text-decoration: none;
      }
    }
  }
`;
