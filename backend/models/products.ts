import { Products } from "./../types/Products";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

// Get all products

export const findAllP = (callback: Function) => {
  const queryString = `SELECT * FROM products`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const products: Products[] = [];
    rows.forEach((row) => {
      const product: Products = {
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
// get category products

export const findCategoryP = (categoryP: string ,callback: Function) => {
    const queryString = `SELECT * FROM products WHERE categorie_produs=?`;
    db.query(queryString, categoryP, (err, result) => {
      if (err) {
        callback(err);
      }
      const rows = <RowDataPacket[]>result;
      const productsC: Products[] = [];
      rows.forEach((row) => {
        const productC: Products = {
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
// Get one product

export const findOneP = (productId: number, callback: Function) => {
  const queryString = `SELECT * FROM products WHERE id=?`;
  db.query(queryString, productId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const product: Products = {
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

// add product
export const createP = (product: Products, callback: Function) => {
  const queryString =
    "INSERT INTO products (nume_produs, descriere_produs, poza_url, categorie_produs, pret_produs) VALUES (?, ?, ?, ?, ?)";
    console.log(product);
  db.query(
    queryString,
    [product.nume_produs, product.descriere_produs, product.poza_url, product.categorie_produs, product.pret_produs],
    (err, result) => {
      if (err) {
        callback(err);
      }
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

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