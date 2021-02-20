import styled from "styled-components";

export const UserCardContainer = styled.div`
  border-top: 1px solid #000;
  text-align: left;
  padding-left: 130px;
  padding-right: 10px;
  position: relative;
  min-height: 120px;
  background-color: rgb(219, 214, 214);

  img {
    position: absolute;
    left: 0;
    width: 120px;
    height: 120px;
  }

  .username {
    position: relative;
    .followers {
      position: absolute;
      right: 0px;
    }
    span {
      margin-left: 8px;
    }
  }

  .location {
    font-size: 0.8rem;
  }

  hr {
    margin: 0;
  }

  .bio {
    padding: 0 10px;
    font-size: 0.9rem;
    line-height: 1rem;
    margin-top: 5px;
  }

  .contact {
    width: 60%;
    font-size: 0.7rem;
    margin-top: 5px;
    /* position: absolute;
    bottom: 10px; */
    span {
      margin-right: 2%;
    }
  }
`;
