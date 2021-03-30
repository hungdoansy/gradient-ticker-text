import styled from "styled-components";

const Ticker = ({ className }) => {
  return (
    <div className={className}>
      <div className="ticker-gradient-layer">
        <div className="ticker-another-layer">
          <div className="ticker-wrapper">
            <span className="ticker-text">
              Super long text that
              {/* needs to scroll */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Ticker)`
  position: fixed;
  left: 200px;
  bottom: 0;
  width: 150px;
  overflow: hidden;
  height: 4rem;
  box-sizing: content-box;
  background-color: transparent;

  @keyframes move {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker-gradient-layer {
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-color: transparent;

    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      #000 15%,
      #000 85%,
      transparent
    );
  }

  .ticker-another-layer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-left: 100%;
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
