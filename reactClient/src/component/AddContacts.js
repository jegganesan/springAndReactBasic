import React, {Component} from 'react';

export default class AddContacts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
    }

    handleFirstNameChange(event) {
        this.setState ( { firstName: event.target.value
        })
        console.log(this.state)
    }

    handleLastNameChange(event) {
        this.setState ( { lastName: event.target.value
        })
        console.log(this.state)
    }

    handleEmailChange(event) {
        this.setState ( { email: event.target.value
        })
        console.log(this.state)
    }

    submitContact(event) {
        event.preventDefault()
        let contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        }
        console.log(JSON.stringify(contact))
    
        fetch('http://localhost:8080/api/contacts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then(response => response.json())
        window.location.reload()
    
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" ref="firstName" type="text" className="validate" onChange={this.handleFirstNameChange}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref="lastName" type="text" className="validate" onChange={this.handleLastNameChange}/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="email" type="email" className="validate" onChange={this.handleEmailChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
          </div>        
        )
    }
}