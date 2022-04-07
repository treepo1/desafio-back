const { json } = require('express/lib/response');
const db = require('../db');

module.exports = {

    searchAll: () => {

        return new Promise((acepted, rejected) => {

            db.query('SELECT * FROM USERS', (error,results) => {
                if(error) { rejected(error); return; }
                acepted(results);
            });
        });
    },

    login: (name,pass) => {
        return new Promise((acepted,rejected) => {
            db.query('SELECT * FROM users WHERE nome = ? AND pass = ?',
            [name,pass],(error,results) => {
                if (error) { console.log(error);rejected(error); return;}
                if (results.length > 0){
                    acepted(results);
                }else{
                    acepted([])
                }
            })
        })
    },
    searchUserById: (id) => {

        return new Promise((acepted, rejected) => {

            db.query('SELECT * FROM users WHERE id = ?', [id], (error,results) => {
                if(error) { rejected(error); return; }
                if (results.length > 0){
                    acepted(results[0]);
                }else{
                    acepted(false);
                };
            });
        });
    },

    insertUser: (nome,pass,organizacao) => {
        return new Promise((acepted, rejected) => {
            db.query('INSERT INTO users (nome,pass,organizacao) VALUES (?,?,?)', 
            [nome,pass,organizacao], 
            (error, results)=>{
                if (error) {rejected(error); return;}
                acepted(results.insertid);
            });
        });
    },

    updateUser: (id,nome,pass,organizacao) => {
        return new Promise((acepted,rejected) =>{
            
            db.query('UPDATE users SET nome = ?, pass = ?, organizacao = ? WHERE id = ?',
            [nome,pass,organizacao,id],
            (error,results)=>{
                if (error) {rejected(error); return;}
                acepted(results)
            })
        })
    },

    deleteUser: (id) => {
        return new Promise((acepted,rejected) =>{
            
            db.query('DELETE FROM users WHERE id = ?',
            [id],
            (error,results)=>{
                if (error) {rejected(error); return;}
                acepted(results)
            })
        })
    }



};