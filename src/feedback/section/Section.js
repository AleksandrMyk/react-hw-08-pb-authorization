import React, { Children } from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
