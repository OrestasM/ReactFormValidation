import React, { Component } from 'react';
import './App.css';
import Form from './Form/form';
import SimpleTable from './Table/table';

class App extends Component {

  state = {
    data: [],
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={submission=>this.setState({
          data: [...this.state.data, submission]
        })}/>
        <SimpleTable 
        header={[
          {
            name:'User Name',
            prop:'username'
          },
          {
            name:'First Name',
            prop:'firstname'
          },
          {
            name:'Last Name',
            prop:'lastname'
          },
          {
            name:'Email',
            prop:'email'
          },
          {
            name:'Password',
            prop:'password'
          }
      
          ]}
        data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
