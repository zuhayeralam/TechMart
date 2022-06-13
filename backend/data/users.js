import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@techmart.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tom Watson',
    email: 'tom@techmart.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Stacie Walter',
    email: 'stacie@techmart.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
