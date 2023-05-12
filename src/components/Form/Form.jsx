import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

export default class Form extends Component {
    state = {
      name: '',
      number: ''
  };
  // Відповідає за оновлення стану
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      id: nanoid(),
      ...this.state
    }

    this.props.addContact(contact);
    this.setState({
      name: '',
      number: ''
    })
  };
//---------------------------------------------------------
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name" 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        {' '}
        <TextField
            id="outlined-basic"
            label="Telephone number" 
            type="text"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.number}
            onChange={this.handleChange} />
          {' '}
        <Button
          variant="contained"
          type="submit"
          >Add contact</Button>
        </form>
    );
  }
}