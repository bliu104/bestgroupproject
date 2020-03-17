import React, { Component } from "react";
import { render } from "react-dom";
import { Redirect } from "react-router-dom";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  handleChange = event => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        Search Bar
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          {this.state.input.length > 0 && (
            <Redirect
              to={{
                pathname: "/Search",
                state: { input: this.state.input }
              }}
            />
          )}
        </form>
      </div>
    );
  }
}

export default Search;
