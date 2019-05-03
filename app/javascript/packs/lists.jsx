import React from 'react'
import ReactDOM from 'react-dom'

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lists: [] };
      }

    render() {
      return (
        <ul>
          {this.state.lists.map(list => (
          <li key={list.id}>{list.title}</li>
        ))}
        </ul>
      );
    }

    componentDidMount() {
        fetch('/lists.json')
          .then(response => response.json())
          .then(lists => this.setState({ lists }));
      }
  }
  
  ReactDOM.render(
    <Lists />,
    document.getElementById('lists')
  );