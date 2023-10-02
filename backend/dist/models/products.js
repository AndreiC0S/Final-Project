"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createP = exports.findOneP = exports.findCategoryP = exports.findAllP = void 0;
const db_1 = require("../db");
// Get all products
const findAllP = (callback) => {
    const queryString = `SELECT * FROM products`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const products = [];
        rows.forEach((row) => {
            const product = {
                id: row.id,
                nume_produs: row.nume_produs,
                descriere_produs: row.descriere_produs,
                poza_url: row.poza_url,
                categorie_produs: row.categorie_produs,
                pret_produs: row.pret_produs,
                actiune: "",
            };
            products.push(product);
        });
        callback(null, products);
    });
};
exports.findAllP = findAllP;
// get category products
const findCategoryP = (categoryP, callback) => {
    const queryString = `SELECT * FROM products WHERE categorie_produs=?`;
    db_1.db.query(queryString, categoryP, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const productsC = [];
        rows.forEach((row) => {
            const productC = {
                id: row.id,
                nume_produs: row.nume_produs,
                descriere_produs: row.descriere_produs,
                poza_url: row.poza_url,
                categorie_produs: row.categorie_produs,
                pret_produs: row.pret_produs,
                actiune: "",
            };
            productsC.push(productC);
        });
        callback(null, productsC);
    });
};
exports.findCategoryP = findCategoryP;
// Get one product
const findOneP = (productId, callback) => {
    const queryString = `SELECT * FROM products WHERE id=?`;
    db_1.db.query(queryString, productId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const product = {
            id: row.id,
            nume_produs: row.nume_produs,
            descriere_produs: row.descriere_produs,
            poza_url: row.poza_url,
            categorie_produs: row.categorie_produs,
            pret_produs: row.pret_produs,
            actiune: "",
        };
        callback(null, product);
    });
};
exports.findOneP = findOneP;
// add product
const createP = (product, callback) => {
    const queryString = "INSERT INTO products (nume_produs, descriere_produs, poza_url, categorie_produs, pret_produs) VALUES (?, ?, ?, ?, ?)";
    console.log(product);
    db_1.db.query(queryString, [product.nume_produs, product.descriere_produs, product.poza_url, product.categorie_produs, product.pret_produs], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.createP = createP;
// // update user
// export const update = (user: User, callback: Function) => {
//   const queryString = `UPDATE jsusers SET nume=?, prenume=? WHERE id=?`;
//   db.query(queryString, [user.nume, user.prenume, user.id], (err, result) => {
//     if (err) {
//       callback(err);
//     }
//     callback(null);
//   });
// };
// // delete user
// export const deleteUser = (user: User, callback: Function) => {
//   const queryString = `DELETE FROM jsusers WHERE id=?`;
//   db.query(queryString, [user.id], (err, result) => {
//     if (err) {
//       callback(err);
//     }
//     callback(null);
//   });
// };
