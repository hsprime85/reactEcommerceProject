import bcrypt from'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
        {
        name: 'Hyunsoo Jeon',
        email: 'hyunsoo@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Hanson Jeon',
        email: 'hanson@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;