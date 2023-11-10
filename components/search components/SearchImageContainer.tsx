"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { pullImageFromAxios } from "../../constants/data/fetchFromAPIS";
import { get } from "http";

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

get;

export default function SearchImageContainer() {
  const [imageActiveState, setimageActiveState] = useState<testDataType>({
    imageUrl: "",
    username: "",
    anchorLink: "",
    profileLetter: "",
  });

  return (
    <Container>
      <section className="inner-section">
        {testDataSet.map((imageItem, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={imageItem.imageUrl} alt={`image-${index + 1}`} />
            </div>
            <div className="user-section">
              <span>
                <h1>{imageItem.profileLetter}</h1>
                <h3>{imageItem.username}</h3>
              </span>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  .inner-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .image-item {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
