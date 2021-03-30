import styled from "styled-components";

const Ticker = ({ className }) => {
  return (
    <div className={className}>
      <div className="ticker-wrapper">
        <span className="ticker-text">
          Super long text that needs to scroll
        </span>
      </div>
    </div>
  );
};

export default styled(Ticker)`
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: transparent;
  padding-left: 100%;
  box-sizing: content-box;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 15%,
    #000 85%,
    transparent
  );

  @keyframes move {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker-wrapper {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    animation: move 10s 2s linear infinite;
  }

  .ticker-text {
    display: inline-block;
    color: white;

    padding: 0 2rem;
    font-size: 2rem;
  }
`;
