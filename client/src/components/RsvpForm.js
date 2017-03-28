import React from 'react';
import moment from 'moment';
import { Spinner } from './Spinner';
import { Radio } from './Radio';
import { AFFIRMATIVE, NEUTRAL, NEGATIVE } from '../utils/constants';
import smiley from '../images/smiley.svg';

export function RsvpForm(props) {
  if (!props.event) {
    return <Spinner />;
  }

  if (props.submitted) {
    return (
      <div className="RSVP">
        <img src={smiley} className="RSVP__smiley" alt="Smiley Emoji" />
        <h1>Thank you for your RSVP!</h1>
      </div>
    );
  }

  const {event} = props;
  const when = moment(event.when);

  return (
    <div className="RSVP">
      <h1 className="RSVP__heading">RSVP</h1>

      <div className="RSVP__details">
        <h4>Will you be attending the {event.name}?</h4>
        <h4>
          When: {when.format('MMMM Do, YYYY')} @ {when.format('h:mma')}
        </h4>
        <h4>
          Where: {event.location}
        </h4>
      </div>

      <Radio
        heading="Attending"
        subtitle="Yes, I will be attending"
        onClick={props.checkRadio.bind(null, AFFIRMATIVE)}
        checked={props.checked === AFFIRMATIVE}
        affirmative
      />
      <Radio
        heading="Maybe"
        subtitle="Not sure I will be attending"
        onClick={props.checkRadio.bind(null, NEUTRAL)}
        checked={props.checked === NEUTRAL}
        neutral
      />
      <Radio
        heading="Not Attending"
        subtitle="No, I will not be attending"
        onClick={props.checkRadio.bind(null, NEGATIVE)}
        checked={props.checked === NEGATIVE}
        negative
      />

      <button
        className="RSVP__button"
        onClick={props.submit}
      >
        Submit My RSVP
      </button>
    </div>
  );
}