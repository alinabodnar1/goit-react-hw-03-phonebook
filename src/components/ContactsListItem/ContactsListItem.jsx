import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class ContactsListItem extends Component {
    state = {
        name: this.props.contact.name,
        number: this.props.contact.number,
        id: nanoid(), 
    }
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    //-------------------------------------------------
    render() {
        const { contact, onDelete } = this.props;
        return (
            <li key={contact.id}>
                {contact.name} {' '}
                {contact.number} {' '}
                <Button
                    variant="outlined"
                    type="button"
                    onClick={() => onDelete(contact.id)}
                >    
                    DELETE
                </Button>
            </li>
        )
    }
}
ContactsListItem.propTypes = {
    contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,    
        }),
    onDelete: PropTypes.func.isRequired,
}