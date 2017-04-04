import React from 'react';
import Counter from './components/Counter';
// import Store from './components/Store';
import Item from './components/Item';
import { number_format } from './helpers';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.updateCount = this.updateCount.bind(this);
    this.buyItem = this.buyItem.bind(this);
    // set state

    this.state = {
      units: 0,
      mult: 1,
      items: {}
    }
  }

  componentDidMount() {
    setInterval(this.updateCount, 1000);
  }

  componentWillUpdate() {
    // console.log(this.state);
    // console.log(this.state);
  }

  updateCount (mult) {
    var units = this.state.units;

    units = units + this.state.mult;

    this.setState({
      units
    });

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
        <Counter units={number_format(Math.round(this.state.units))} cleanNumber={Math.round(this.state.units)} />

        <button className="add-unit" onClick={(e) => this.updateCount(1)}>Add Unit!</button>

        <div className="Inventory">
          <h3>Your Inventory</h3>
          {
            Object.keys(this.state.items).map(key => 
              <li key={key}>{this.state.items[key].name}: {this.state.items[key].count}</li>
            )
          }
        </div>

        <div className="Store">
              <h3>Items</h3>

              <ul className="store__items">
                  <li className="store__item">

                    <Item name="Bunk" mult={1.2} cost={5} buy={this.buyItem} bank={this.state.units} />

                    <Item name="Barracks" mult={1.5} cost={20} buy={this.buyItem} bank={this.state.units} />
                  </li>
                </ul>
          </div>
      </div>
    );
  }
}

export default App;

