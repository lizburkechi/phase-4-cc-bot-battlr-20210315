import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            handleClick={this.props.handleClick} 
            handleScrap={this.props.handleScrap} />
          ))}
        </div>
      </div>
    );
  } 
}

export default BotCollection;
