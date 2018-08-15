let objects;
(function(){
    class Contact {
        // your class definition goes here
        constructor(firstName = "", lastName = "", contactNumber = "", emailAddress ="") {
            this.firstName = firstName;
            this.lastName = lastName;
            this.contactNumber = contactNumber;
            this.emailAddress = emailAddress;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));