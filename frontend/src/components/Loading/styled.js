import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  background: rgba(0, 0, 0, 0.8);

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  span {
    z-index: 2;
  }

  #preloader5 {
    position: relative;
    width: 30px;
    height: 30px;
    background: #3498db;
    border-radius: 50px;
    animation: preloader_5 1.5s infinite linear;
  }
  #preloader5:after {
    position: absolute;
    width: 50px;
    height: 50px;
    border-top: 10px solid #9b59b6;
    border-bottom: 10px solid #9b59b6;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-radius: 50px;
    content: '';
    top: -20px;
    left: -20px;
    animation: preloader_5_after 1.5s infinite linear;
  }
  @keyframes preloader_5 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
      background: #2ecc71;
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes preloader_5_after {
    0% {
      border-top: 10px solid #9b59b6;
      border-bottom: 10px solid #9b59b6;
    }
    50% {
      border-top: 10px solid #3498db;
      border-bottom: 10px solid #3498db;
    }
    100% {
      border-top: 10px solid #9b59b6;
      border-bottom: 10px solid #9b59b6;
    }
  }
`;
