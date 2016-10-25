import React, {Component, PropTypes} from 'react';
import Truncate from './Truncate';

class ReadMore extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      readMore: true
    };

    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      readMore: !this.state.readMore
    });

    this.props.onShowMore && this.props.onShowMore(event);
  }
 
  render() {
    let {children, text, lines} = this.props;

    return (
      <Truncate
        ellipsis={(
           <span>... <a href='#' onClick={this.toggleLines}>{text}</a></span>
        )}
        lines={this.state.readMore && lines}
        options={this.props.options}>
        {children}
      </Truncate>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  text: 'Read more',
  options: {}
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.node,
  options: PropTypes.object,
  onShowMore: PropTypes.func,
  lines: PropTypes.number
};

export default ReadMore;
