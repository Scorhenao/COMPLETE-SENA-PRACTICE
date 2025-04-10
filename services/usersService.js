class UsersService {
  constructor() {
    this.users = [];
  }

  async create(data) {
    const newUser = {
      id: this.users.length + 1,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async login(email, password) {
    const user = this.users.find(
      (item) => item.email === email && item.password === password,
    );
    if (!user) {
      throw new Error("Invalid credentials");
    }
    return user;
  }
}

const service = new UsersService();
module.exports = service;