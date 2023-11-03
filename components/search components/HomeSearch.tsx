"use client";
import styled from "styled-components";
import { appsContent } from "../../constants/data/constants";

export default function SearchComponent() {
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
      <div className="apps">
        {appsContent.map((item, index) => (
          <a target="_blank" href={item.link} key={index}>
            <span>
              <h3>{item.logo}</h3>
            </span>
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 0.5cm;
  .logo {
    h1 {
      font-size: 85px;
      font-weight: 450;
    }
  }
  .search {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 30px;
    input {
      width: 80%;
      height: 95%;
      font-size: 20px;
      outline: none;
      border: none;
    }
    span {
      width: 24px;
      height: 24px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .apps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: auto;
    gap: 3%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      text-decoration: none;
      color: white;
      padding: 0.25cm 0.5cm;
      gap: 0.5cm;
      border-radius: 15px;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      span {
        border-radius: 50%;
        background-color: #302f2f;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        h3 {
          font-size: 24px;
        }
      }
      p {
        text-align: center;
        font-size: 15px;
      }
    }
  }
`;
