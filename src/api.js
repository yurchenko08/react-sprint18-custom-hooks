const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",

    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",

    "phone": "010-692-6593 x09125",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",

    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",

    "phone": "1-770-736-8031 x56442",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",

    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",

    "phone": "1-463-123-4447",
  },
];

export function fetchUsers() {
  return new Promise(resolve =>
    setTimeout(() => resolve(users), 2000))
}

export function fetchUser(id) {
  return new Promise(resolve =>
    setTimeout(() => resolve(users.filter(item => item.id === id)[0]), 2000))
}
