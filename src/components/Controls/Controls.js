import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({
  handelClickNext,
  handelClickPrev,
  handelDisabledNext,
  handelDisabledPrev,
}) => (
  <section className={s.controls}>
    <button
      disabled={handelDisabledPrev}
      onClick={handelClickPrev}
      type="button"
      className={s.button}
    >
      Назад
    </button>
    <button
      disabled={handelDisabledNext}
      onClick={handelClickNext}
      type="button"
      className={s.button}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
