"use client";
import styled from "styled-components";
import { imageSuggestions } from "../../constants/data/constants";
import { useEffect, useState } from "react";

export default function ImageSuggestions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const horizontalScrollElement = document.getElementById("horizontal-gallery");

  const goForward = () => {
    setCurrentIndex(currentIndex + 200);
    const maxScroll =
      horizontalScrollElement && horizontalScrollElement?.scrollWidth;
    if (horizontalScrollElement && maxScroll && currentIndex > maxScroll) {
      setCurrentIndex(maxScroll);
    }
  };
  const goBackward = () => {
    setCurrentIndex(currentIndex - 200);
    if (currentIndex < 0) {
      setCurrentIndex(0);
    }
  };

  horizontalScrollElement?.addEventListener("scroll", goForward);
  horizontalScrollElement?.addEventListener("scroll", goBackward);

  useEffect(() => {
    horizontalScrollElement?.scrollBy(currentIndex, 0);
  }, [currentIndex]);

  return (
    <Container>
      <div className="image-carousel">
        <main className="inner-section" id="horizontal-gallery">
          <button className="right-arrow" onClick={goForward}>
            <img src="/images/arrow.svg" alt="right-arrow-icon" />
          </button>
          <button onClick={goBackward} className="left-arrow">
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
      padding: 1rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      bottom: 35%;

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
    .right-arrow {
      transform: rotateY(180deg);
      right: 2%;
    }
    .left-arrow {
      left: 2%;
    }
    .inner-section {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      display: flex;
      gap: 1rem;
      &::-webkit-scrollbar {
        display: none;
      }
      .image-item {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        img {
          width: 200px;
          height: auto;
          border-radius: 20px;
        }
        span {
          h3 {
            font-size: 0.8rem;
            margin: 0.25rem 0;
          }
          a {
            font-size: 0.5rem;
            color: #000000;
            text-decoration: none;
          }
        }
      }
    }
  }
`;
