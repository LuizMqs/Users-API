const FileHandler = require("../modules/file_handler")

class EditUsers {
  async handler(req, res) {
    const users = JSON.parse(await FileHandler.readFile("users.json"));
    const id = Number(req.params.id_usuario);

    if (req.body.nome && req.body.email) {
      const user_pos = users.indexOf(users.find((element) => element.id == id));
      if (user_pos != -1) {
        if (users[user_pos].deleted) {
          res.json({ error: "ID não encontrado" });
        }
        users[user_pos].nome = req.body.nome;
        users[user_pos].email = req.body.email;
      } else {
        res.json({ error: "ID não encontrado" });
      }
    } else {
      res.json({ error: "Nome ou email não informados" });
    }

    await FileHandler.writeFile("users.json", JSON.stringify(users));

    res.json({ message: "Dados modificados com sucesso" });
  }
}

module.exports = EditUsers;