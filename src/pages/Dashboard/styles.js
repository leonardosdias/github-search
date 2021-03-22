import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 60px;
  font-weight:700;
`;

export const Repositories = styled.div`
  margin-top: 20px;
  text-align:justify;
  
  a {
    min-height: 154px;
    border: 2px solid #1890ff;
    border-radius: 2px;
    background: #fff;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 5px;
    }

    &:hover {
      transform: translateX(7px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d3d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #3d3d3d;
    }
  }
`;