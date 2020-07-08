import React from "react";


class Posts extends React.Component {
  state = {
    posts: [],
    fetched: false
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

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(postList => {
        // si se implementa solo los primeros 5 usuarios
        const posts = postList.slice(0, 5);
    this.setState({ posts, fetched: true });
  }


  render() {
  return (
      <React.Fragment>
       {this.state.isLoading && (
          <div className="post-container">
            {this.state.fetched &&
            this.state.posts.map(red => {
              return (
                <Link key={red.id} to={`/redes/${red.id}`}>
                  <div className="user user-name">{red.nombre}</div>
                </Link>
              );
            })}
          </div>
        )}
        <Route path="/redes/:id" component={RedInfo} />
      </React.Fragment>
    );
  }
}

export default Posts;
