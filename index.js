const contacts = require('./contacts.js');

const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        contacts.listContacts()
        break;

    case 'get':
        contacts.getContactById(id)
        break;

    case 'add':
        contacts.addContact(name, email, phone)
        console.log(`Contact ${name}//${email}//${phone} succesfully added!`)
        break;
      
    case 'remove':
          contacts.removeContact(id);
        break;

    default:
        console.warn('\x1B[31m Unknown action type!');
    };
};

invokeAction(argv);