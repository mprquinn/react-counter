import React from 'react';
import Counter from './components/Counter';
import Win from './components/Win';
// import Store from './components/Store';
import Item from './components/Item';
import { number_format, toHHMMSS } from './helpers';

import { Button, Jumbotron, Col, Well } from 'react-bootstrap';

import './css/styles.css';


class App extends React.Component {

  constructor() {
    super();

    this.updateCount = this.updateCount.bind(this);
    this.buyItem = this.buyItem.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    // set state

    this.state = {
      units: 0,
      mult: 1,
      items: {},
      win: false,
      timer: 0,
      winState: 1000000000
    }
  }

  componentDidMount() {
    setInterval(this.updateCount, 1000);
    setInterval(this.updateTimer, 1000);
  }

  componentWillUpdate() {
    // console.log(this.state);
    // console.log(this.state);
  }

  updateTimer() {
    if (this.state.units < this.state.winState) {
      var timer = this.state.timer;
      timer++;
      this.setState({
        timer
      });
    }
  }

  updateCount(mult) {

    if (this.state.units < this.state.winState) {
      var units = this.state.units;

      units = units + this.state.mult;

      this.setState({
        units
      });

    } else if (this.state.units > this.state.winState) {
      this.setState({
        win: true
      })
    }
  }

  buyItem (item, cost, name) {
    console.log(item);
    this.setState(({items, mult, units}) => ({
      items: { ...items, [name]: {
        name,
        count: items[name] ? (items[name].count + 1) : 1
      }},
      mult: mult * item,
      units: units - cost
    })) 
}

  render() {
    return (
      <div className="app">
        <Jumbotron>
          <h1>Click The Button</h1>
          <h3>Click this beautiful button 1 million times.</h3>
          <h5>You've been playing this dumb thing for {toHHMMSS(this.state.timer)}</h5>
        </Jumbotron>
        <Counter units={number_format(Math.round(this.state.units))} cleanNumber={Math.round(this.state.units)} />

        <Button className="add-unit btn-success" bsSize="large" onClick={(e) => this.updateCount(1)}>Beautiful Button</Button>

        <Well className="inventory">
          <h3>Cool things you've bought</h3>
          {
            Object.keys(this.state.items).map(key => 
              <li key={key}>{this.state.items[key].name}: {this.state.items[key].count}</li>
            )
          }
        </Well>

        <div className="store">
          <h3>Cool things to buy for clicks</h3>

          <ul className="store__items">
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
        

        <p className="disclaimer">
          Built by Mike in order to wrap my head around React.
        </p>
      </div>
    );
  }
}

export default App;

