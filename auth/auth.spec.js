const request = require("supertest");
const Users = require("../users/users-model");
const db = require("../data/dbConfig");
const bcrypt = require("bcryptjs");
const server = require("../api/server.js");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

//   it("should set environment to testing", () => {
//     expect(process.env.DB_ENV).toBe("test");
//   });

  //   console.log(Users, "Users");
  //   console.log(db.schema);

  describe("insert()", () => {
    it("should insert user record into the db", async () => {
      await Users.add({
        username: "Jack",
        password: bcrypt.hashSync("icecream", 2),
        lastName: "Nicholson",
        firstName: "Jack",
        email: "email@email",
        phone: "555-555-5555"
      });

      let users = await db("users");
      console.log("users", users);
      expect(users).toHaveLength(1);
    });

    it("should insert user record into the db", async () => {
      let { id } = await Users.add({
        username: "Cathy",
        password: bcrypt.hashSync("burgers", 2),
        lastName: "Nicholson",
        firstName: "Cathy",
        email: "email1@email",
        phone: "555-555-5555"
      });

      let user = await db("users")
        .where({ id })
        .first();
      expect(user.username).toBe("Cathy");
    });

        it('should add a user and login the user into the db', async () => {
            let { id } = await Users.add({
                username: "Cathy",
                password: bcrypt.hashSync("burgers", 2),
                lastName: "Nicholson",
                firstName: "Cathy",
                email: "email1@email",
                phone: "555-555-5555"
              }
            );
            let user = await Users.findBy({username: 'Cathy'}).first()
            expect(user.username).toBe('Cathy')

        })

        it('should add a user, login a user, return a list of users from db and check length', async () => {
            await Users.add({
                username: "Cathy",
                password: bcrypt.hashSync("burgers", 2),
                lastName: "Nicholson",
                firstName: "Cathy",
                email: "email1@email",
                phone: "555-555-5555"
              })
            await Users.add({
                username: "Jack",
                password: bcrypt.hashSync("burgers", 2),
                lastName: "Nicholson",
                firstName: "Jack",
                email: "email2@email",
                phone: "555-555-5555"
              })
            await Users.add({
                username: "Reese",
                password: bcrypt.hashSync("tacos", 2),
                lastName: "Kunz",
                firstName: "Reese",
                email: "testing@testing",
                phone: "999-999-9999"
              })

            let users = await Users.find()
            expect(users).toHaveLength(3)

        })

        it('should add a user, login a user, return a list of users from db and assert usernames', async () => {
            await Users.add({
                username: "Cathy",
                password: bcrypt.hashSync("burgers", 2),
                lastName: "Nicholson",
                firstName: "Cathy",
                email: "email1@email",
                phone: "555-555-5555"
              })
            await Users.add({
                username: "Jack",
                password: bcrypt.hashSync("burgers", 2),
                lastName: "Nicholson",
                firstName: "Jack",
                email: "email2@email",
                phone: "555-555-5555"
              })
            await Users.add({
                username: "Reese",
                password: bcrypt.hashSync("tacos", 2),
                lastName: "Kunz",
                firstName: "Reese",
                email: "testing@testing",
                phone: "999-999-9999"
              })

            let users = await Users.find()
            expect(users[0].username).toEqual('Cathy')
            expect(users[1].username).toEqual('Jack')
            expect(users[2].username).toEqual('Reese')

        })
  });
});
