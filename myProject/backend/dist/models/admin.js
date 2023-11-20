"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veifyPassword = exports.deleteUser = exports.create = exports.findOne = exports.findAll = void 0;
const db_1 = require("../db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Get all 
const findAll = (callback) => {
    const queryString = `SELECT * FROM admins`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
                id: row.id,
                username: row.username,
                password: row.password,
                email: row.email,
            };
            users.push(user);
        });
        callback(null, users);
    });
};
exports.findAll = findAll;
// Get one 
const findOne = (adminId, callback) => {
    const queryString = `SELECT * FROM admins WHERE id=?`;
    db_1.db.query(queryString, adminId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const user = {
            id: row.id,
            username: row.username,
            password: row.password,
            email: row.email,
            master: row.master,
        };
        callback(null, user);
    });
};
exports.findOne = findOne;
const create = (user, callback) => {
    //Verificam daca exista user cu aceasta adresa de email
    const sql = "SELECT * FROM admins WHERE email = ?";
    db_1.db.query(sql, [user.email], (err, result) => {
        const row = result[0];
        if (row !== null && row !== undefined) {
            callback("User already exists!." + (err === null || err === void 0 ? void 0 : err.message));
        }
        else {
            const queryString = "INSERT INTO admins (username, password, email, master) VALUES (?, ?, ?, ?)";
            console.log("insert", user);
            let saltRounds = bcryptjs_1.default.genSaltSync(10);
            let password_hash = bcryptjs_1.default.hashSync(user.password, saltRounds);
            try {
                db_1.db.query(queryString, [user.username, password_hash, user.email, user.master], (err, result) => {
                    if (result !== undefined) {
                        const insertId = result.insertId;
                        callback(null, insertId);
                    }
                    else {
                        console.log("error email", err);
                        //callback(err, 0);
                    }
                });
            }
            catch (error) {
                callback(error);
            }
        }
    });
};
exports.create = create;
// delete user
const deleteUser = (user, callback) => {
    console.log('deleteUser', user);
    const queryString = `DELETE FROM admins WHERE username=?`;
    db_1.db.query(queryString, [user], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteUser = deleteUser;
//login  example
const veifyPassword = (user, callback) => {
    const queryString = `SELECT id, username, password, email, master from admins where email=? AND username=? LIMIT 1;`;
    const passwordUser = user.password;
    db_1.db.query(queryString, [user.email, user.username], (err, result) => {
        if (err) {
            callback(err);
        }
        if (result.length == 1) {
            console.log("result as any", result);
            const row = result[0];
            console.log("passwordUser", passwordUser);
            console.log("row.password", row.password);
            var password_hash = row.password;
            const verified = bcryptjs_1.default.compareSync(passwordUser, password_hash);
            if (verified) {
                const user = {
                    id: row.id,
                    username: row.username,
                    password: row.password,
                    email: row.email,
                    master: row.master,
                };
                callback(null, user);
            }
            else {
                console.log("Password doesn't match!");
                callback("Invalid Password!" + (err === null || err === void 0 ? void 0 : err.message));
            }
        }
        else {
            callback("User Not found." + (err === null || err === void 0 ? void 0 : err.message));
        }
    });
};
exports.veifyPassword = veifyPassword;
// export const veifyPassword = (user: Admin, callback: Function) => {
//   const queryString = `SELECT id, username, password, email from admins where email=? LIMIT 1;`;
//   const passwordUser = user.password;
//   db.query(queryString, [user.email], (err, result) => {
//     if (err) {
//       callback(err);
//     }
//     if ((result as any).length == 1) {
//       const row = (<RowDataPacket>result)[0];
//       var password_hash = row.password;
//       const verified = bcryptjs.compareSync(passwordUser!, password_hash);
//       if (verified) {
//         const user: Admin = {
//           id: row.id,
//           username: row.username,
//           password: row.password,
//           email: row.email,
//         };
//         callback(null, user);
//       } else {
//         console.log("Password doesn't match!");
//         callback("Invalid Password!" + err?.message);
//       }
//     } else {
//       callback("User Not found." + err?.message);
//     }
//   });
// };
