const FileHandler = require("../modules/file_handler")

class DeleteUsers {
  async handler(req, res) {
    const users = JSON.parse(await FileHandler.readFile("users.json"));
    const id = Number(req.params.id_usuario);

    const user_pos = users.indexOf(users.find((element) => element.id == id));

    if (user_pos != -1) {
      if (users[user_pos].deleted) {
        res.json({ error: "ID não encontrado" });
      }

      users[user_pos].deleted = true;
    } else {
      res.json({ error: "ID não encontrado" });
    }

    await FileHandler.writeFile("users.json", JSON.stringify(users));

    res.json({ message: "Dados deletados com sucesso" });
  }
}

module.exports = DeleteUsers;
