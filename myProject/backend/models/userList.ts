import { UserList } from "./../types/UserList";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";


// Get all users
export const findAll = (callback: Function) => {
    const queryString = `SELECT * FROM users_list`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      }
      const rows = <RowDataPacket[]>result;
      const users: UserList[] = [];
      rows.forEach((row) => {
        const user: UserList = {
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
  
  // Get one user
  export const findOne = (id: number, callback: Function) => {
    const queryString = `SELECT * FROM users_list WHERE id=?`;
    db.query(queryString, id, (err, result) => {
      if (err) {
        callback(err);
      }
  
      const row = (<RowDataPacket>result)[0];
      const user: UserList = {
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
  
  // create user
  export const create = (user: UserList, callback: Function) => {
    const queryString =
      "INSERT INTO users_list (user_nume, user_prenume, user_email, user_password, user_data_nastere) VALUES (?, ?, ?, ?, ?)";
      console.log(user);
    db.query(
      queryString,
      [user.user_nume, user.user_prenume, user.user_email, user.user_password, user.user_data_nastere],
      (err, result) => {
        if (err) {
          callback(err);
        }
          const insertId = (<OkPacket>result).insertId;
          callback(null, insertId);
        
      }
    );
  };
  
  // update user
  export const update = (user: UserList, callback: Function) => {
    const queryString = `UPDATE users_list SET user_nume=?, user_prenume=?, user_email=?, user_password=?, user_data_nastere=?  WHERE id=?`;
  
    db.query(queryString, [user.user_nume, user.user_prenume,user.user_email,user.user_password, user.id], (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null);
    });
  };
  
  // delete user
  export const deleteUser = (user: UserList, callback: Function) => {
    const queryString = `DELETE FROM users_list WHERE id=?`;
  
    db.query(queryString, [user.id], (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null);
    });
  };