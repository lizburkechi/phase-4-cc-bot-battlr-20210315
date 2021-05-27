import React, { Component } from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";

class BotsPage extends Component {
  state = {
    bots: [],
    // enlistBots: [],
  };

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then((res) => res.json())
      .then((bots) => this.setState({ bots }));
  }

  enlistBot = (bot) => {
    const newBot = { ...bot, enlisted: true };
    this.setState({ bots: this.state.bots.map((b) => (b === bot ? newBot : b)) });
  };

  dischargeBot = (bot) => {
    // this.setState({
    //   enlistBots: [...this.state.enlistBots.filter((b) => b !== bot)],
    // });
  }

  scrapBot = (bot) => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
    })
    .then(() =>
    this.setState({
      bots: [...this.state.bots.filter((b) => b !== bot)],
    })
    )
    .catch((err) => console.error(err));
  };


  render() {
    return (
      <div>
        <BotArmy 
        handleClick={this.dischargeBot} 
        handleScrap={this.scrapBot} 
        bots={this.state.bots.filter((bot) => bot.enlisted)} />
        <BotCollection 
        handleClick={this.enlistBot} 
        handleScrap={this.scrapBot} 
        bots={this.state.bots} />
      </div>
    );
  }
}

export default BotsPage;
