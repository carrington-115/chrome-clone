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
              <div key={index}>
                <span className="suggestion-header">
                  <img src={suggestion.image} alt={suggestion.shortName} />
                  <span className="header-title">
                    <h3>{suggestion.shortName}</h3>
                    <p>{suggestion.url}</p>
                  </span>
                </span>
                <span className="suggestion-body">
                  <h2>{suggestion.name}</h2>
                  <p>{suggestion.description}</p>
                </span>
              </div>
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
