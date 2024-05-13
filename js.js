const author = {
    AuthorID: "123",
    Name: "John Doe",
    Address: {
        houseNo: "12A",
        Street: "Main",
        County: "Kings",
        Postcode: "12345"
    },
    URL: "www.johndoe.com"

};

console.log(author.AuthorID)
console.log(author.Name)
console.log(author.Address)
console.log(author.Address.houseNo)
console.log(author.Address.Street)
console.log(author.Address.County)
console.log(author.Address.Postcode)
console.log(author.URL)