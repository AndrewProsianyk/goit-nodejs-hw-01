const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json')


function getData() {
    return fs.readFile(contactsPath, 'utf8')
        .then(data => JSON.parse(data))
        .catch(error=> console.log(error))
}

function listContacts() {
  getData()
    .then((data)=>console.log(data))
    .catch(error=> console.log(error))
}

function getContactById(contactId) {
    getData()
      .then((data) => {
          const contact = data.find(item => contactId == item.id)
          console.log(contact)
      })
    .catch(error=> console.log(error.message))
}

function removeContact(contactId) {
    getData()
        .then(data => {
            fs.writeFile(contactsPath, JSON.stringify(
                data.filter(contact => contactId !== contact.id), 'utf8'
            ))
    }).catch(error=> console.log(error))
}

function addContact(name, email, phone) {
    getData()
        .then(data => {
            const newContact = {
                id: data.length + 1,
                name,
                email,
                phone
            }
            data.push(newContact)
            fs.writeFile(contactsPath, JSON.stringify(data), 'utf8')
        })
        .catch(error=>console.log(error));

}
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
// listContacts()
// getContactById(3)
// removeContact(3)
// listContacts()
// addContact('Andrew', 'nonameznoone@gmail.com', '380732215085')
// listContacts()