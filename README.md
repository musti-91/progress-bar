# @codereview/progress-bar

> Progress bar on scroll the page

[![NPM](https://img.shields.io/npm/v/@codereview/progress-bar.svg)](https://www.npmjs.com/package/@codereview/progress-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Node.js Package](https://github.com/musti-91/progress-bar/actions/workflows/npm-publish-github-packages.yml/badge.svg)](https://github.com/musti-91/progress-bar/actions/workflows/npm-publish-github-packages.yml)

![demo](example.gif)

## [Demo](https://codesandbox.io/s/naughty-bouman-px6mt)


## Install

```bash
npm install --save @codereview/progress-bar
```

Or

```bash
yarn add --dev @codereview/progress-bar
```

## Usage

```tsx
import * as React from "react";

import ScrollProgress from "@codereview/progress-bar";

const props = {
  rtl: "left",
  color: "red",
  width: "50%",
  height: "1em"
};

class Example extends React.Component {
  render() {
    return <ScrollProgress {...props} />;
  }
}
```

### Props


| Name   |  Type  | default |          description |
| ------ | :----: | ------: | -------------------: |
| rtl    | string |   right |        right to left |
| color  | string |    #000 |        showing color |
| width  | string |    100% |  width of scroll bar |
| height | string |   0.3em | height of scroll bar |

## License

MIT © [musti-91](https://github.com/musti-91)
