"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.findOne = exports.findAllCategories = exports.findAll = void 0;
const db_1 = require("../db");
// Get all posts
const findAll = (callback) => {
    const queryString = `SELECT * FROM posts`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const posts = [];
        rows.forEach((row) => {
            const post = {
                id: row.id,
                titlu: row.titlu,
                continut: row.continut,
                categorie_id: row.categorie_id,
                user_id: row.user_id,
                data_adaugare: row.data_adaugare,
            };
            posts.push(post);
        });
        callback(null, posts);
    });
};
exports.findAll = findAll;
const findAllCategories = (callback) => {
    const queryString = `SELECT * FROM categories`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const categories = [];
        rows.forEach((row) => {
            const category = {
                id: row.id,
                nume: row.nume
            };
            categories.push(category);
        });
        callback(null, categories);
    });
};
exports.findAllCategories = findAllCategories;
// Get one user
const findOne = (postId, callback) => {
    const queryString = `SELECT * FROM posts AS p INNER JOIN categories AS c ON p.categorie_id = c.id WHERE p.id=?`;
    db_1.db.query(queryString, postId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const post = {
            id: row.id,
            titlu: row.titlu,
            continut: row.continut,
            categorie_id: row.categorie_id,
            user_id: row.user_id,
            data_adaugare: row.data_adaugare,
            poza: row.poza,
        };
        callback(null, post);
    });
};
exports.findOne = findOne;
// create post
const addPost = (post, callback) => {
    const queryString = "INSERT INTO posts (titlu, continut, poza, categorie_id, user_id) VALUES (?, ?, ? , ?, ?)";
    console.log(post);
    try {
        let sqldeb = db_1.db.query(queryString, [post.titlu, post.continut, post.poza, post.categorie_id, post.user_id], (err, result) => {
            if (err) {
                callback(err);
            }
            if (result !== undefined) {
                const insertId = result.insertId;
                callback(null, insertId);
            }
            else {
                console.log('error insert');
                callback(null, 0);
            }
        });
        console.log(sqldeb.sql);
    }
    catch (error) {
        callback(error);
    }
};
exports.addPost = addPost;
