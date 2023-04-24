
import React, { Component } from "react";
import GuestList from './GuestList';
import Counter from './Counter'
import Styles from './catalogue.module.css'
export class Catalogue extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Iman",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Aatheesh",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Ahnaf",
        isConfirmed: false,
        isEditing: false
      }
    ]
  };
  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = index => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    })
  }

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered })
  }

  handleNameInput = (e) => {
    this.setState({
      pendingGuest: e.target.value
    })
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests // populates the new guests array with the previous guests array
      ],
      pendingGuest: ''
    })
  }

  getTotalInvited = () => this.state.guests.length;


  getAttendedGuests = () =>
    this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0)
  //getUnconfirmedGuests = () =>

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendedGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="cat">
        <header>
          <div className="submit">
          <form onSubmit={this.newGuestSubmitHandler}>
            <input className="student-input" type="text"
              onChange={this.handleNameInput}
              value={this.state.pendingGuest} placeholder="Add Student" />
            <button className="student-button" type="submit" name="submit" value="submit">
              Submit
            </button>
            <div class="dropdown">
              <button class="dropbtn">COURSE CODE</button>
               <div class="dropdown-content">
                <a href="#">CSPC 41</a>
                <a href="#">CSPE 41</a>
                <a href="#">CSPC 43</a>
                <a href="#">HSIR 13</a>
                <a href="#">CSLR 42</a>
                <a href="#">CSPE 43</a>

               </div>
            </div>            
          </form>
          </div>
        </header>
        <div className="main">
          <div>
            <h2>Students</h2>
            <label>
              <input className="check"
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't responded
            </label>
          </div>
          <div className="count">
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed} />
            <div className="guest">
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalogue;
