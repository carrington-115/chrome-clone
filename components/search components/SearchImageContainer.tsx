"use client";
import styled from "styled-components";
import { data } from "../../constants/types/appTypes";
import { useEffect, useState } from "react";
import { pullImageFromAxios } from "../../constants/data/fetchFromAPIS";

const testSetData: data[] = [];

export default function SearchImageContainer() {
  const [imageActiveState, setimageActiveState] = useState<data>();
  useEffect(() => {
    pullImageFromAxios();
  });
  return (
    <Container>
      <div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci
          quo doloremque. Id inventore mollitia cumque velit nesciunt voluptate
          magni optio, soluta ad dolorem quo impedit esse delectus sunt illo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          placeat eaque voluptate saepe omnis vero nisi libero nemo eveniet,
          sequi ad minus voluptas praesentium beatae ut aperiam nam soluta! Modi
          harum corporis nihil sed dolorem, quia, animi autem ex repudiandae
          doloribus deserunt iusto optio provident vitae molestias fuga corrupti
          exercitationem hic aspernatur perferendis nam necessitatibus
          architecto! Itaque, aliquam animi. Eligendi quibusdam dolores
          aspernatur dolorem, soluta cum dicta ratione incidunt aliquid
          repudiandae reprehenderit laudantium possimus commodi ullam reiciendis
          aperiam sit dolorum! Eum dolor officia dolore eaque exercitationem
          nemo culpa ab. Molestiae consequatur dignissimos dolore recusandae
          voluptates delectus illum suscipit, natus laboriosam doloribus numquam
          dolorem nostrum dolor earum ratione amet! Alias praesentium quibusdam
          quam eligendi nesciunt nobis saepe soluta vel quos. Commodi sequi,
          nostrum quisquam cum incidunt neque fugit aut vel, laborum enim illo
          quo soluta error voluptate eveniet eaque laudantium, molestias natus
          rerum illum aliquid! Quibusdam itaque voluptatum facere? Magni!
        </h4>
      </div>
      <section className="inner-section">
        {testSetData.map(() => (
          <div className="image-item"></div>
        ))}
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
