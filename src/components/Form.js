import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "First",
    lastName: "Last",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName };
    this.sendFormData(formData)
  }

  sendFormData = data => {
    this.setState({
      submittedData: [...this.state.submittedData, data]
      }
    )
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, key) => {
      return <div key={key}><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" value="SUBMIT!" />
      </form>
      {this.listOfSubmissions()}
    </div>
    )
  }
}

export default Form;
