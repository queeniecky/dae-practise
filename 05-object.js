let user1 = {}
user1.id = 10
user1.name = 'Alice'
//console.log('user' + user1.id + ' is ' + user1.name)

let user2 = {}
user2.id = 11
user2.name = 'Bob'
//console.log('user' + user2.id + ' is ' + user2.name)

let user3 = {}
user3.id = 12
user3.name = 'Charlie'
//console.log('user' + user3.id + ' is ' + user3.name)

function report(user) {
 console.log('User' + user.id + ' is ' + user.name)
}

report(user1)
report(user2)
report(user3)