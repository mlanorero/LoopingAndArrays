contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

contact.fullname = 'John Doe'
contact.phone = '123-123-2134'
contact.email = 'test@nowhere.com'

for(key in contact){
    // Code goes here
    console.log(key + ":" + " " + contact[key])
}