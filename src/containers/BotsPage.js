import React, { Component } from "react";
import BotCollection from './BotCollection'

class BotsPage extends Component {
   state = {
    bots: [],
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(bots => this.setState({ bots }))
  }

  render() {
    return (
    <div>
      <BotCollection bots={this.state.bots} />
    </div>
    );
  }
}

export default BotsPage;