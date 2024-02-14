"use client";

import styled from "styled-components";
import InnerHeader from "../../components/InnerHeader";
import SearchComponent from "../../components/search components/HomeSearch";
import Providers from "./global/Providers";

export default function Home() {
  return (
    <Providers>
      <Container>
        <InnerHeader />
        <section className="search-bar">
          <SearchComponent />
        </section>
      </Container>
    </Providers>
  );
}

const Container = styled.section`
  max-width: 100%;
  display: block;
  align-items: center;
  .search-bar {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
