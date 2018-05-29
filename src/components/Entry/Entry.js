import React from 'react';
import { Link } from 'react-router-dom';

import './Entry.scss';

import entries from '../../data/entries.json';

export default (props) => {

  const id = props.match.params.id;
  const entry = entries.find(entry => entry.id === id);

  return (
    <article className="Entry">
      <span className="Entry-date">{entry.date}</span>
      <span className="Entry-id">{entry.id}</span>
      <Link to="/">
        <span className="Entry-close-button">×</span>
      </Link>
      <h1 className="Entry-title">{entry.title}</h1>
    </article>
  )
};