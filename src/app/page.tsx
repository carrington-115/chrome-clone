"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <SearchComponent />
    </Container>
  );
}

function SearchComponent() {
  return (
    <SearchContainer>
      <div className="logo">
        <h1>Google</h1>
      </div>
      <div className="search">
        <span>
          <img src="/images/search.svg" alt="search" />
        </span>
        <input type="text" placeholder="Search Google or type a URL" />
        <span>
          <img src="/images/camera.svg" alt="camera" />
        </span>
        <span>
          <img src="/images/microphone.svg" alt="mic" />
        </span>
      </div>
      <div className="apps"></div>
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  .logo {
    h1 {
      font-size: 70px;
      font-weight: 400;
    }
  }
  .search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    span {
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .apps {
  }
`;

const Container = styled.section`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
