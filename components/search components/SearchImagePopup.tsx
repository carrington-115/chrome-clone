"use client";
import styled from "styled-components";
import "../../public/styles/constants.css";
// import { useSelector, useDispatch } from "react-redux";
// import { closeSideBar } from "../../src/app/global/features/sideBarSlice";

type testDataType = {
  imageUrl: string;
  username: string;
  anchorLink: string;
  profileLetter: string;
};

const otherSuggestions: string[] = [
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
  "/images/search-images/image-1.jpeg",
];

export default function SearchImagePopup({
  profileLetter,
  username,
  imageUrl,
  anchorLink,
}: testDataType) {
  // const sideBarState = useSelector((state: any) => state.sidebar.showSideBar);
  // const dispatch = useDispatch();
  // const sideBarActivity = sideBarState
  //   ? "set-sidebar-active"
  //   : "set-sidebar-inactive";

  // console.log(sideBarActivity);
  return (
    <Container>
      <div className="close-btn">
        <img src="/images/close.svg" alt="" />
      </div>
      <div className="pop-up">
        <div className="top-pop-up">
          <span className="profile-logo">
            <h1>{profileLetter}</h1>
          </span>
          <h3 className="user-name">{username}</h3>
        </div>

        <div className="main-image">
          <img src={imageUrl} alt={username} />
        </div>
        <div className="alternate-suggestion">
          <section className="inn-section">
            <h3>Other Suggestions</h3>
            <div className="image-container">
              {otherSuggestions.map((imageItem, index) => {
                return (
                  <div className="image-item" key={index}>
                    <img src={imageItem} alt={`image-${index + 1}`} />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  z-index: 20;
  background-color: #2b2a2a;
  overflow-y: scroll;
  overflow-x: hidden;
  .close-btn {
    left: 20px;
    top: 5px;
    cursor: pointer;
    margin-right: 200px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 1rem;
    border-radius: 50%;
    position: absolute;
    &:hover {
      background-color: black;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pop-up {
    display: flex;
    flex-direction: column;
    width: 100%;
    .top-pop-up {
      display: flex;
      justify-content: center;
      margin: 1.5rem 0 1rem 0;
      align-items: center;
      gap: 3rem;
      .profile-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 1rem;
        border-radius: 50%;
        background-color: white;
        h1 {
          font-size: 2rem;
          color: darkblue;
        }
      }
      .user-name {
        font-size: 1.5rem;
        color: white;
      }
    }
    .main-image {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .alternate-suggestion {
      margin-top: 1rem;
      .inn-section {
        width: 100%;
        h3 {
          font-size: 1.5rem;
          color: white;
          text-align: center;
        }
        .image-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 0.05rem;
          gap: 0.5rem;
          margin-top: 1rem;
          .image-item {
            width: 30%;
            height: fit-content;
            cursor: pointer;
            &:hover {
              img {
                border-radius: 0;
              }
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;
