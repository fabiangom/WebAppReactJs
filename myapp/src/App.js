import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Empleado extends Component {
  render() {
    return (
      <li>
        {this.props.nombre} - {this.props.email}
      </li>
    );
  }
}

class ListaEmpleados extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.empleados.map(empleado => {
            return (
              <Empleado
                key={empleado.id}
                nombre={empleado.nombre}
                email={empleado.email}
              />
            );
          })}
        </ul>
        <form onSubmit={this.props.onAddEmployee}>
          <input type="text" placeholder="Nombre" name="nombre"></input>
          <input type="email" placeholder="Email" name="email"></input>
          <input type="submit" value="Guardar"></input>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      empleados: [
        {id: 1, nombre: 'pepe', email: 'pepe@gmail.com'},
        {id: 2, nombre: 'paco', email: 'paco@gmail.com'}
      ]
    };
  }

  handleOnAddEmployee(event) {
    event.preventDefault();
    let empleado = {
      nombre: event.target.nombre.value,
      email: event.target.email.value
    };
    this.setState({
      empleados: this.state.empleados.concat([empleado])
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My App with React</h2>
        </div>
        <div>
          <ListaEmpleados
            empleados={this.state.empleados}
            onAddEmployee={this.handleOnAddEmployee.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
