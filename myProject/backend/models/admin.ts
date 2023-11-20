import { Admin } from "./../types/Admin";
import { db } from "../db";
import bcryptjs from "bcryptjs";
import { OkPacket, RowDataPacket } from "mysql2";

// Get all 
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM admins`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: Admin[] = [];
    rows.forEach((row) => {
      const user: Admin = {
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

// Get one 
export const findOne = (adminId: number, callback: Function) => {
  const queryString = `SELECT * FROM admins WHERE id=?`;
  db.query(queryString, adminId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: Admin = {
      id: row.id,
      username: row.username,
      password: row.password,
      email: row.email,
      master: row.master,
    };
    callback(null, user);
  });
};


export const create = (user: Admin, callback: Function) => {
  //Verificam daca exista user cu aceasta adresa de email
  const sql = "SELECT * FROM admins WHERE email = ?";
  
  db.query(sql, [user.email], (err, result) => {
    const row = (<RowDataPacket>result)[0];
    if (row !== null && row !== undefined) {
      callback("User already exists!." + err?.message);
    } else {
      const queryString =
        "INSERT INTO admins (username, password, email, master) VALUES (?, ?, ?, ?)";
      console.log("insert",user);
      
      let saltRounds = bcryptjs.genSaltSync(10);
      let password_hash = bcryptjs.hashSync(user.password!, saltRounds);
      try {
        db.query(
          queryString,
          [user.username, password_hash, user.email, user.master],
          (err, result) => {
            if (<OkPacket>result !== undefined) {
              
              const insertId = (<OkPacket>result).insertId;
              callback(null, insertId);
            } else {
              
              console.log("error email", err);
              //callback(err, 0);
            }
          }
        );
      } catch (error) {
        callback(error);
      }
    }
  });
};



// delete user
export const deleteUser = (user: string, callback: Function) => {
  console.log('deleteUser', user);
  const queryString = `DELETE FROM admins WHERE username=?`;

  db.query(queryString, [user], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};

//login  example
export const veifyPassword = (user: Admin, callback: Function) => {
    const queryString = `SELECT id, username, password, email, master from admins where email=? AND username=? LIMIT 1;`;
    const passwordUser = user.password;
    db.query(queryString, [user.email, user.username], (err, result) => {
      if (err) {
        callback(err);
      }

      if ((result as any).length == 1) {
        console.log("result as any",result )
        const row = (<RowDataPacket>result)[0];
        console.log("passwordUser",passwordUser)
        console.log("row.password",row.password)
        var password_hash = row.password;
        const verified = bcryptjs.compareSync(passwordUser!, password_hash);
        if (verified) {
          const user: Admin = {
            id: row.id,
            username: row.username,
            password: row.password,
            email: row.email,
            master: row.master,
            
          };
          callback(null, user);
        } else {
          
          console.log("Password doesn't match!");
          callback("Invalid Password!" + err?.message);
        }
      } else {
        callback("User Not found." + err?.message);
      }
    });
  };
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