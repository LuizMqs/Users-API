const FileHandler = require("../modules/file_handler")

class InsertUsers {
    async handler(req, res) {
        const users = JSON.parse(await FileHandler.readFile("users.json"));

        if (req.body.nome && req.body.email) {
            users.push({ ...req.body, id: users.length + 1, deleted: false });
        } else {
            res.json({ error: "nome ou email não informados" });
        }
        await FileHandler.writeFile("users.json", JSON.stringify(users));

        res.json({ message: "Usuário adicionado com sucesso" });
    }
}

module.exports = InsertUsers;
