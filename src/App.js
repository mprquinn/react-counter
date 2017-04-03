import React from 'react';
import Counter from './components/Counter';
// import Store from './components/Store';
import Item from './components/Item';

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
      items: []
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

  buyItem (item, cost) {
    console.log(item, cost);
    console.log('test');

    this.setState({
      mult: item,
      units: this.state.units - cost
    });
  }

  render() {
    return (
      <div className="app">
        <Counter units={this.state.units} />

        <button className="add-unit" onClick={(e) => this.updateCount(1)}>Add Unit!</button>

        <div className="Store">
              <h3>Items</h3>

              <ul className="store__items">
                  <li className="store__item">

                    <Item name="Milk" cost={50} buy={this.buyItem} bank={this.state.units} />
                  </li>
                </ul>
          </div>
      </div>
    );
  }
}

export default App;

