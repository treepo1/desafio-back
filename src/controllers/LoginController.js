const LoginService = require('../services/LoginService');


module.exports = {

    searchAll: async (req,res) => {

        let json = {error:'', result: []}

        let users = await LoginService.searchAll();

        for (let user in users) {
            json.result.push({
                id: users[user].id,
                nome: users[user].nome,
                pass: users[user].pass,
                organizacao: users[user].organizacao
            });
        }
        res.json(json)
    },

    searchUserById: async (req,res) => {

        let json = {error:'', result: {}};

        let id = req.params.id;

        let user = await LoginService.searchUserById(id);

        if (user){
            json.result = user;
        }

        res.json(json);
    },

    insertUser: async (req,res) => {

        let json = {error:'', result:{}}

        let nome = req.body.nome;
        let pass = req.body.pass;
        let organizacao = req.body.organizacao;

        if(nome && pass && organizacao){
            let UserId = await LoginService.insertUser(nome,pass,organizacao);
            json.result = {
                id: UserId,
                nome,
                pass,
                organizacao
            };
        }else {
            json.error = 'Campos não enviados'
        }

        res.json(json)

        
    },

    updateUser: async (req, res) => {
        
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let pass = req.body.pass;
        let organizacao = req.body.organizacao;

        if (id && nome && pass && organizacao) {
            await LoginService.updateUser(id,nome,pass,organizacao);
            json.result = {
                id,
                nome,
                pass,
                organizacao
            }
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    deleteUser: async (req, res) => {
        
        let json = {error:'', result:{}};

        let id = req.params.id;

        if (id) {
            await LoginService.deleteUser(id);
            json.result = {
                id
            }
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    login: async (req, res) => {
        let json = {error:'', result: {}};

        let name = req.body.name;
        let pass = req.body.pass;

        if (name && pass){
            const data = await LoginService.login(name,pass);
            if (data.length == 0){
                json.error = 'Usuário não encontrado'
            }
        }
        else{
            json.error = 'Usuário não encontrado';
        }
        res.json(json)
    }

}