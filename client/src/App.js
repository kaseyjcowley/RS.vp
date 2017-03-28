import React, {Component} from 'react';
import url from 'url';
import { RsvpForm } from './components/RsvpForm';
import { Http } from './utils/http';
import { AFFIRMATIVE, NEUTRAL, NEGATIVE } from './utils/constants';
import './styles/App.css';

class App extends Component {
  state = { checked: null, event: null }

  componentDidMount() {
    const params = url.parse(window.location.href, true).query;

    if (params.hasOwnProperty('eid')) {
      Http.get(`event/${params.eid}`).then(({data: event}) => {
        setTimeout(() => this.setState({event}), 1000);
      });
    }
  }

  checkRadio = (type) => {
    this.setState({checked: type});
  }

  submit = () => {
    const {checked, event} = this.state;

    if (!checked) {
      return;
    }

    const data = this.stateToData();

    Http.post('rsvp', {...data, eventId: event.id})
      .then(() => this.setState({submitted: true}));
  }

  stateToData = () => {
    switch (this.state.checked) {
      case AFFIRMATIVE:
        return {attending: 1};
      case NEUTRAL:
        return {maybe: 1};
      case NEGATIVE:
        return {notAttending: 1};
      default:
    }
  }

  render() {
    return (
      <RsvpForm
        event={this.state.event}
        submitted={this.state.submitted}
        checkRadio={this.checkRadio}
        checked={this.state.checked}
        submit={this.submit}
      />
    );
  }
}

export default App;
