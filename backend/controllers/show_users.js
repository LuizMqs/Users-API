const FileHandler = require("../modules/file_handler")

class ShowUsers {
    async handler(req, res) {
        const users = JSON.parse(await FileHandler.readFile("users.json"));
        const filtered_users = users.filter((user) => !user.deleted);

        res.json(filtered_users);
    }
}

module.exports = ShowUsers;
