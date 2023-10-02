"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
const db_1 = require("../db");
// Get all users
const findAll = (callback) => {
    const queryString = `SELECT * FROM users_list`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
                id: row.id,
                user_nume: row.user_nume,
                user_prenume: row.user_prenume,
                user_email: row.user_email,
                user_password: row.user_password,
                user_data_nastere: row.user_data_nastere,
                data_adaugare: row.data_adaugare,
            };
            users.push(user);
        });
        callback(null, users);
    });
};
exports.findAll = findAll;
// Get one user
const findOne = (id, callback) => {
    const queryString = `SELECT * FROM users_list WHERE id=?`;
    db_1.db.query(queryString, id, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const user = {
            id: row.id,
            user_nume: row.user_nume,
            user_prenume: row.user_prenume,
            user_email: row.user_email,
            user_password: row.user_password,
            user_data_nastere: row.user_data_nastere,
            data_adaugare: row.data_adaugare,
        };
        callback(null, user);
    });
};
exports.findOne = findOne;
// create user
const create = (user, callback) => {
    const queryString = "INSERT INTO users_list (user_nume, user_prenume, user_email, user_password, user_data_nastere) VALUES (?, ?, ?, ?, ?)";
    console.log(user);
    db_1.db.query(queryString, [user.user_nume, user.user_prenume, user.user_email, user.user_password, user.user_data_nastere], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update user
const update = (user, callback) => {
    const queryString = `UPDATE users_list SET user_nume=?, user_prenume=?, user_email=?, user_password=?, user_data_nastere=?  WHERE id=?`;
    db_1.db.query(queryString, [user.user_nume, user.user_prenume, user.user_email, user.user_password, user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete user
const deleteUser = (user, callback) => {
    const queryString = `DELETE FROM users_list WHERE id=?`;
    db_1.db.query(queryString, [user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteUser = deleteUser;
