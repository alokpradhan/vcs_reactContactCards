import React from 'react'
import PersonCard from './PersonCard'

const ContactCards = ({people}) => {
  const cards = people.map((person) => ( // Why is it a () and not a {} i.e. function(person)() doesn need {} when a value has to be returned?
    <PersonCard person={person} key={person.name} />
  ))

  return (
    <div className='ContactCards container'>
      {cards}
    </div>
  )
}

export default ContactCards