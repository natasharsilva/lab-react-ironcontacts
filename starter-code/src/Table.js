import React, { Component } from 'react'
import jsonContacts from './contacts.json';

class Table extends Component {
    constructor (props){
        super(props)
        this.state = {
            contacts: jsonContacts.slice(0,5)
        }
        this.addRandom = this.addRandom.bind(this)
        this.sortByName = this.sortByName.bind(this)
        this.sortByPopularity = this.sortByPopularity.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
    }

    addRandom() {
        let randomIndex = Math.floor(Math.random()*jsonContacts.length)
        let randomContact = jsonContacts[randomIndex]
        // Solution 1
        // let newContacts = this.state.contacts.slice()
        // newContacts.push(randomContact)
        // this.setState({
        //     contacts: newContacts
        // })

        // Solution 2
        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }

    sortByName() {
        let newContacts = [...this.state.contacts].sort((a, b) => {
            if (a.name < b.name) return -1
            else return 1
          })
        this.setState({
            contacts: newContacts
        })
        }

    sortByPopularity() {
        let newContacts = [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
        this.setState({
            contacts: newContacts
            })
        }

    deleteContact(indexToRemove) {
        let newContacts = [...this.state.contacts]
        newContacts.splice(indexToRemove, 1)
        this.setState({
            contacts: newContacts
        })
        }
    
    render(){
        return(
            <div className='Table'>
                <div>
                <button onClick={this.addRandom}>Add random contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>
            <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.contacts.map((contact, i) => <tr key={i}>
                <td><img src={contact.pictureUrl} alt=''/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.deleteContact(i)}>Delete</button></td></tr>)}</tbody>          
          </table>
          </div>
        )
    }
}

export default Table