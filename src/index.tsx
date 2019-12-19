import * as React from "react";
/**
 **  Type Props
 */
export type ProgressTypes = {
  rtl?: string;
  width?: string;
  height?: string;
  color?: string;
};
/**
 ** Type State
 */
type State = {
  progress: number;
};

class ScrollProgress extends React.Component<ProgressTypes, State> {
  constructor(props: ProgressTypes) {
    super(props);
    /**
     **  state
     */
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.onScroll();
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      // @ts-ignore [documentElement: is possibly null]
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      // @ts-ignore [documentElement: is possibly null]
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      // @ts-ignore [documentElement: is possibly null]
      document.documentElement.clientHeight
    );
  };

  onScroll = () => {
    document.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = this.getDocHeight();

      const totalDocScroll = docHeight - winHeight;

      const scrollPosition = Math.floor((scrollTop / totalDocScroll) * 100);
      this.setState(() => ({
        progress: scrollPosition
      }));
    });
  };

  render() {
    const { width, height, color, rtl } = this.props;
    const { progress } = this.state;
    return (
      <div
        style={{
          position: "fixed",
          zIndex: 3,
          opacity: ".9",
          top: 0,
          left: 0,
          width: width ? width : "100%",
          height: height ? height : ".3em",
          background: `linear-gradient(
            to ${rtl ? rtl : "right"},
            ${color ? color : "#000"} ${progress}%,
            transparent 0
          )`
        }}
      />
    );
  }
}
export default ScrollProgress;
