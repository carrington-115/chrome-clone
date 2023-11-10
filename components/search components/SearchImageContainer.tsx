"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchImagePopup from "./SearchImagePopup";

function getFirstLetter(string: string) {
  return string.charAt(0);
}

type testDataType = {
  imageUrl: string;
  username: string;
  anchorLink: string;
  profileLetter: string;
};

const testDataSet: testDataType[] = [
  {
    imageUrl: "/images/search-images/image-1.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
  {
    imageUrl: "/images/search-images/image-2.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
  {
    imageUrl: "/images/search-images/image-3.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
  {
    imageUrl: "/images/search-images/image-4.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
  {
    imageUrl: "/images/search-images/image-5.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
  {
    imageUrl: "/images/search-images/image-6.jpeg",
    username: "Mark Carrington",
    anchorLink: "https://www.google.com/",
    profileLetter: getFirstLetter("Mark"),
  },
];

export default function SearchImageContainer() {
  const [imageActiveState, setimageActiveState] = useState<testDataType>({
    imageUrl: "",
    username: "",
    anchorLink: "",
    profileLetter: "",
  });

  function sendImageData(imageData: testDataType) {
    setimageActiveState(imageData);
  }

  useEffect(() => {
    console.log(imageActiveState);
  }, [imageActiveState]);

  return (
    <Container>
      <SearchImagePopup
        imageUrl={imageActiveState.imageUrl}
        username={imageActiveState.username}
        anchorLink={imageActiveState.anchorLink}
        profileLetter={imageActiveState.profileLetter}
      />
      <section className="inner-section">
        {testDataSet.map((imageItem, index) => {
          return (
            <div
              className="image-item"
              key={index}
              onClick={() => sendImageData(imageItem)}
            >
              <div className="image-container">
                <img src={imageItem.imageUrl} alt={`image-${index + 1}`} />
              </div>
              <div className="user-section">
                <span>
                  <h1>{imageItem.profileLetter}</h1>
                </span>
                <h3>{imageItem.username}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </Container>
  );
}

const Container = styled.section`
  max-width: 100%;
  padding: 2rem 1rem;
  .inner-section {
    max-width: 100%;
    display: block;
    column-count: 3;
    column-gap: 1rem;
    .image-item {
      display: inline-block;
      width: 100%;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: all 2s 250 cubic-bezier(0.64, 0.14, 0.56, 0.88);
      .image-container {
        width: 100%;
        height: auto;
        &:hover {
          img {
            border-radius: 0;
          }
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }
      .user-section {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1cm;
        align-items: center;
        margin-top: 1rem;
        span {
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          padding: 1rem;
          border-radius: 50%;
          h1 {
            font-size: 1.5rem;
            font-weight: bold;
            color: darkblue;
          }
        }
        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
