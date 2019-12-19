import * as React from "react";

import ScrollProgress from ".";

describe("ScrollProgress", () => {
  /**
   * snapshot: [default]
   */
  it("should match snapshot default", () => {
    expect(<ScrollProgress />).toMatchSnapshot();
  });
  /**
   * snapshot [props]
   */
  it("should match snapshot with Props", () => {
    expect.assertions(1);

    const props = {
      rtl: "left",
      width: "30%",
      height: "100px",
      color: "green"
    };

    expect(<ScrollProgress {...props} />).toMatchSnapshot();
  });
});
