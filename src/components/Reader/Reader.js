import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import PropTypes from 'prop-types';
import s from './Reader.module.css';

class Reader extends Component {
  state = {
    index: 0,
  };

  handleNext = () => {
    this.setState(state => {
      return {
        index: state.index + 1,
      };
    });
  };

  handlePrev = () => {
    this.setState(state => {
      return {
        index: state.index - 1,
      };
    });
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const prevIsActive = index === 0;
    const nextIsActive = items.length - 1 === index;
    return (
      <div className={s.reader}>
        <Controls
          handelDisabledNext={nextIsActive}
          handelDisabledPrev={prevIsActive}
          handelClickNext={this.handleNext}
          handelClickPrev={this.handlePrev}
        />
        <Counter index={index + 1} />
        <Publication
          numberPage={index + 1}
          title={items[index].title}
          text={items[index].text}
        />
      </div>
    );
  }
}

export default Reader;
