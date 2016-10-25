# React Read More

Read more React component

This package re-distribute from [React-Truncate](https://github.com/One-com/react-truncate) (Copyright (c) 2016, One.com)

## Install
```
npm install react-read-more
```

## Usage
```js
import {Truncate} from 'react-read-more';

// ...

class Foo extends Component {
    render() {
        return (
            <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>Read more</a></span>}>
                {longText}
            </Truncate>
        );
    }
}
```

```js
import {ReadMore} from 'react-read-more';

// ...

class Foo extends Component {
    render() {
        return (
            <ReadMore lines={3} onShowMore={this.props.onChange} text="more">
                {longText}
            </ReadMore>
        );
    }
}
```

## API
| Prop | Type | Default | Description | Example |
| ---- | ---- | ------- | ----------- | ------- |
| lines | integer, boolean {false} | 1 | Specifies how many lines of text should be preserved until it gets truncated. `false` and any integer < 1 will result in the text not getting clipped at all. | (`false`, `-1`, `0`), `1`, ...  |
| ellipsis | string, React node | '…' | An ellipsis that is added to the end of the text in case it is truncated. | `'...'`, `<span>...</span>`, `<span>... <a href='#' onClick={someHandler}>Read more</a></span>`, `[<span key='some'>Some</span>, <span key='siblings'>siblings<span>]`
| children | string, React node | | The text to be truncated. Anything that can be evaluated as text. | `'Some text'`, `<p>Some paragraph <a/>with other text-based inline elements<a></p>`, `<span>Some</span><span>siblings</span>` |
| onTruncate | function | | Gets invoked on each render. Gets called with `true` when text got truncated and ellipsis was injected, and with `false` otherwise. | `isTruncated => isTruncated !== this.state.isTruncated && this.setState({ isTruncated })` |

## Developing
Install system libraries needed for development dependencies
- https://github.com/Automattic/node-canvas#installation

Install development dependencies
```
npm install
```

Run tests
```
npm test
```

Run code linter
```
npm run lint
```

Compile to ES5 from /src to /lib
```
npm run compile
```
