(function(){
    class AddressBook {
        constructor() {
            this.Contacts = [];
        }
        
        // complete the addressbook class
        add(){
            function createContacts() {
                AddressBook.Contacts.forEach(contact => {
                  let newContact = new objects.Contact(
                    contact.firstName, contact.lastName, contact.contactNumber, contact.emailAddress);
                  Contacts.push(newContact);
                });
              }
        }
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));