import React from 'react';
import Counter from './components/Counter';
import Win from './components/Win';
// import Store from './components/Store';
import Item from './components/Item';
import Scores from './components/Scores';
import { number_format, toHHMMSS } from './helpers';

import { Jumbotron, Well } from 'react-bootstrap';

import './css/styles.css';


class App extends React.Component {

  constructor() {
    super();

    this.updateCount = this.updateCount.bind(this);
    this.buyItem = this.buyItem.bind(this);
    this.autoEnable = this.autoEnable.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.winGame = this.winGame.bind(this);
    // set state

    this.state = {
      units: 0,
      auto: false,
      mult: 1,
      buttonAnim: false,
      items: {},
      win: false,
      playing: false,
      timer: 0,
      winState: 1000000000
    }
  }

  componentDidMount() {
    setInterval(this.updateTimer, 1000);  
  }

  componentWillUpdate() {
    // console.log(this.state);
    // console.log(this.state);

  }

  updateTimer() {
    if (this.state.units < this.state.winState && this.state.units > 0) {
      var timer = this.state.timer;
      timer++;
      this.setState({
        timer
      });
    }
  }

  autoEnable() {
    var units = this.state.units;

    units -= 100;

    this.setState({
      auto: true,
      units
    });
    setInterval(this.updateCount, 1000);
  }

  updateCount(e, mult) {
    if (this.state.units === 0) {
      this.setState({
        playing: true
      });
    }
    // this.buttonAnimate();
    console.log(e.keycode);
    if (this.state.units < this.state.winState) {
      var units = this.state.units;

      units += this.state.mult;

      this.setState({
        units
      });

      // this.addFace();

    } else if (this.state.units >= this.state.winState) {
      this.winGame();
    }
  }

  buyItem (item, cost, name) {
    this.setState(({items, mult, units}) => ({
      items: { ...items, [name]: {
        name,
        count: items[name] ? (items[name].count + 1) : 1
      }},
      mult: mult * item,
      units: units - cost
    })) 
  }

  winGame() {
    this.setState({
      win: true
    })
  }
 

  render() {
    return (
      <div className="app">
        <div className="faces">
          <p>&nbsp;</p>
        </div>
        <Jumbotron>
          <h1>The Button</h1>
          <h3>Click this beautiful button and get your 😎 above 1 billion.</h3>
          <h5>You've been playing this dumb thing for {toHHMMSS(this.state.timer)}</h5>
        </Jumbotron>
        
        <Counter units={number_format(Math.round(this.state.units))} cleanNumber={Math.round(this.state.units)} />

        <a className="add-unit btn-success" onClick={(e) => this.updateCount(e, 1)}>
          {this.state.playing ? '😍 Beautiful Button 😍' : '😍 Click to Start 😍'}
        </a>

        <Well className="inventory">
          <h3>Cool things you've bought</h3>
          {
            Object.keys(this.state.items).map(key => 
              <li key={key}>{this.state.items[key].name}: {this.state.items[key].count}</li>
            )
          }
        </Well>

        <div className="store">
          <h3>Cool things to buy for 😎</h3>

          <ul className="store__items">

              <li className="store__item">
                <button className="btn btn-info" onClick={() => this.autoEnable()} disabled={ this.state.units < 100 || this.state.auto ? `disabled` : ``}>Buy Auto Click for 100</button>
              </li>

              <li className="store__item">
                <Item name="Heavier Click" mult={1.2} cost={50} buy={this.buyItem} bank={this.state.units} />
              </li>

              <li className="store__item">
                <Item name="A Bit Heavier Click" mult={1.5} cost={200} buy={this.buyItem} bank={this.state.units} />
              </li>

              <li className="store__item">
                <Item name="Wildly Heavy Click" mult={1.65} cost={400} buy={this.buyItem} bank={this.state.units} />
              </li>

            </ul>
        </div>
        
        <Win won={this.state.win} timer={this.state.timer} />

        <Scores />
        

        <p className="disclaimer">
          Built by Mike in order to wrap his head around React. <a href="https://github.com/mprquinn" target="_blank">💻</a>
        </p>
      </div>
    );
  }
}

export default App;

