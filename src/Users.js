import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Posts from "./Posts";

export default class Users extends Component {
  state = {
    users: [],
    fetched: false
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    /*
     *asi se obtienen datos del endpoint
     */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userList => {
        // si se implementa solo los primeros 5 usuarios
        const users = userList.slice(0, 5);
        this.setState({ users, fetched: true });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="users user-container">
          {this.state.fetched &&
            this.state.users.map(user => {
              /**
                 * La siguiente iteracion muestra en pantalla 
                 * los/as usuarios obtenidos. 
                 * Debemos buscar una forma de transformarles 
                 * en links para acceder a sus posts.
                 /**
                  * Extra: ¿como podemos identificar cual usuaria/o 
                  * fue seleccionado? 
                  * 
                  * Tip: puedes acceder al pathname de la barra de 
                  * direccion a traves de window.location.pathname.
                  * 
                  * ¿A que debe ser igual este valor, para considerar 
                  * que la/el usuaria/o fue seleccionada/o?
                  */
              return (
                <div className="user user-name">
                  {/** esto es si solo quiero ver el nombre */}
                  {user.name.substr(0, user.name.indexOf(" "))}
                </div>
              );
            })}
        </div>
        {/* debo Agregar la ruta del usuario*/}
      </React.Fragment>
    );
  }
}
