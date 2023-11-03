"use client";
import styled from "styled-components";
import {
  searchSuggestions,
  imageSuggestions,
} from "../../../constants/data/constants";

export default function Page() {
  return (
    <Container>
      <section className="content">
        <div className="left-content">
          {searchSuggestions.map((suggestion, index) => {
            return (
              <a href={suggestion.url} className="item" key={index}>
                <span className="suggestion-header">
                  <img src={suggestion.image} alt={suggestion.shortName} />
                  <span className="header-title">
                    <h3>{suggestion.shortName}</h3>
                    <a className="head-link" href={suggestion.url}>
                      {suggestion.url}
                    </a>
                  </span>
                </span>
                <span className="suggestion-body">
                  <h2>{suggestion.name}</h2>
                  <p>{suggestion.description}</p>
                </span>
              </a>
            );
          })}
        </div>
        <aside>right</aside>
      </section>
    </Container>
  );
}

const Container = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 80%;
    .left-content {
      width: 60%;
      border-radius: 0.5rem;
      color: white;
      margin-left: 2cm;
      .item {
        cursor: pointer;
        margin: 2rem 0;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        width: fit-content;
        max-width: 80%;
        &:hover {
        }
        .suggestion-header {
          display: flex;
          align-items: flex-start;
          img {
            width: 1rem;
            height: 1rem;
            padding: 0.5rem;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
          }
          .header-title {
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;

            h3 {
              font-size: 1.5rem;
              font-weight: normal;
              margin: 0;
              &:hover {
                text-decoration: underline;
              }
            }
            .head-link {
              font-size: 0.8rem;
              margin: 0;
              text-decoration: none;
              color: #c7c7c7;
              margin-top: 5px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        .suggestion-body {
          padding-left: 3rem;
          margin: 0;
          h2 {
            font-size: 1.5rem;
            font-weight: normal;
            color: blue;
            &:hover {
              text-decoration: underline;
            }
          }
          p {
            font-size: 0.8rem;
            color: grey;
            text-align: normal;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    aside {
      width: 35%;
      margin-left: 1em;
      background-color: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
      color: black;
    }
  }
`;
