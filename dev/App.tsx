import React, { Component } from 'react';

import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  addLinkSnippet,
} from '../index';
import { addUserMessage } from '..';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage(
      "↵    Current Status on COVID-19 in Worldwide as on 26-January-2021:<br>↵    - <b>Total cases:</b> 17660523<br>↵    - <b>Today's cases:</b> 262929<br>↵    - <b>Total Deaths:</b> 680894<br>↵    - <b>Death Today:</b> 5851<br><br>↵    Current Status on COVID-19 in Pakistan as on 26-January-2021:<br>↵    - <b>Total cases:</b> 278305<br>↵    - <b>Today's cases:</b> 0<br>↵    - <b>Total Deaths:</b> 5951<br>↵    - <b>Death Today:</b> 0<br><br>↵    <b>Novel Coronavirus (COVID-19) Situation dashboard</b><br>↵    This interactive dashboard/map provides the latest global numbers and numbers by country of COVID-19 cases on a daily basis.↵<a href='https://covid19.who.int' target='_blank'>https://covid19.who.int</a> <br>",
      new Date('2020-12-08T16:43:31.000Z'),
    );
    addLinkSnippet({ link: 'https://google.com', title: 'Google' });
    addResponseMessage(
      '![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)',
    );
    addResponseMessage(
      '![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)',
    );
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([
          { label: 'Apple', value: 'apple' },
          { label: 'Orange', value: 'orange' },
          { label: 'Pear', value: 'pear' },
          { label: 'Banana', value: 'banana' },
        ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  };

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  };

  handleSubmit = (msgText: string) => {
    if (msgText.length < 80) {
      addUserMessage('Uh oh, please write a bit more.');
      return false;
    }
    return true;
  };

  render() {
    return (
      <div>
        <button
          style={{ position: 'absolute', right: 40, bottom: 150 }}
        >
          test
        </button>
        <Widget
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
