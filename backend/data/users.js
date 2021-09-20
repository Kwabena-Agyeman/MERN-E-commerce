/** @format */

import bycrpyt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bycrpyt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johnexample.com",
    password: bycrpyt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bycrpyt.hashSync("123456", 10),
  },
];

export default users;
