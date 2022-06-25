/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {
  text?: string,
  to: string,
};

function Back({ text = 'Назад', to = '/' } : Props) {
  return (
    <Link to={to}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={{ marginRight: '5px' }}
      />
      {text}
    </Link>
  );
}

export default Back;
