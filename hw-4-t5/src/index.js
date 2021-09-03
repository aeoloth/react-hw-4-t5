import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Car(props) {

  const classes = ['card']

  
  if (props.car.marked) {
    classes.push('marked')
  }

  return (
    <div className={classes.join('  ')} onClick={props.onMark}>
      <div className="card-img">
        <img
          src={props.car.img}
          alt={props.car.name} />
      </div>
      <h3>{props.car.name}</h3>
      <p>{props.car.price}</p>
    </div>
  )
}

class App extends React.Component {
  state = {
    cars: [
      {marked: false, name: 'BMW M2 Coupe', price: 20000, img: 'https://ag-spots-2017.o.auroraobjects.eu/2017/07/10/other/2880-1800-crop-bmw-m2-coupe-f87-c872010072017173625_1.jpg'},
      {marked: false, name: 'AUDI TT', price: 15000, img: 'https://a.d-cd.net/rMye3d1H2fUcgk7zQKclkPdKpOk-1920.jpg'},
      {marked: false, name: 'Rolls Royce', price: 50000, img: 'http://otzyvy-avtovladelcev.ru/img/auto-body-image/5867/95556.jpg'},
      {marked: false, name: 'Mercedes amg coupe', price: 18000, img: 'https://images.caricos.com/m/mercedes-benz/2018_mercedes-benz_e-class_coupe/images/2560x1440/2018_mercedes-benz_e-class_coupe_300_2560x1440.jpg'}
    ]
  }

  handleMarked(name) {
    const cars = this.state.cars.concat()

    const car  =  cars.find(c => c.name ===  name)
    car.marked  = !car.marked

    this.setState({ cars })
  }

  renderCars() {
    return this.state.cars.map(car => {
      return (
        <Car car={car}
        key={car.name + Math.random()} 
        onMark={this.handleMarked.bind(this, car.name)}
        />
      )
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list">

          { this.renderCars() }

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))