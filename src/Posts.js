import React from "react";

const Postsnfo = [
  { id: "1", title: "Claudia", body: "Se agrega una nueva amiga" },
  { id: "2", title: "Laura", body: "Se escribe" },
  { id: "3", title: "Monica", body: "Lo dejo de seguir" },
  { id: "4", title: "Pablo", body: "felicita por su nuevo trabajo" },



class Posts extends React.Component {
  state = {
    user: "",
    posts: [],
    isLoading: false
  };

  componentDidMount() {
    this.getPostByUser();
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getPostByUser();
    }
  }

  getPostByUser() {
    // esta función debe:
    // 1. obtener el id proveniente del objeto match
    // 2. realizar el fetch con los posts
    // 3. setear en el estado los posts
    // 4. cambiar el valor de la variable isLoading

    const id = this.props.match.params.id;
    const { descripcion } = posts.find(red => user.id === id);
    this.setState({ body });
  }

  render() {
    return (
      <>
        {/**
          Debemos implementar un mecanismo para limpiar los posts mostrados
        */}
        {!this.state.isLoading && (
          <div className="post-container">
            Aquí van los posts. Una vez en el estado, deberemos iterar sobre
            ellos.
          </div>
        )}
      </>
    );
  }
}

export default Posts;
