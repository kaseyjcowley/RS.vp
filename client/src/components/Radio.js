import React, {PropTypes} from 'react';
import cx from 'classnames';

import affirmativeIcon from '../images/affirmative.svg';
import neutralIcon from '../images/neutral.svg';
import negativeIcon from '../images/negative.svg';

import '../styles/Radio.css';

function iconFromProps(props) {
  switch (true) {
    case props.affirmative:
      return affirmativeIcon;
    case props.neutral:
      return neutralIcon;
    case props.negative:
      return negativeIcon;
    default:
  }
}

export function Radio(props) {
  const icon = iconFromProps(props);
  const classNames = cx('Radio', {
    'Radio--affirmative': props.affirmative,
    'Radio--neutral': props.neutral,
    'Radio--negative': props.negative,
  });

  return (
    <div className={classNames} onClick={props.onClick}>
      <img src={icon} alt="Avatar" className="Radio__avatar" />
      <div className="Radio__content">
        <h3 className="Radio__heading">{props.heading}</h3>
        <span>{props.subtitle}</span>
      </div>
      <div>
        <div className={cx('Radio__box', {'Radio__box--checked': props.checked})}></div>
      </div>
    </div>
  );
}

Radio.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  checked: PropTypes.bool,
  affirmative: PropTypes.bool,
  neutral: PropTypes.bool,
  negative: PropTypes.bool,
  onClick: PropTypes.func,
}

Radio.defaultProps = {
  affirmative: false,
  neutral: false,
  negative: false,
};