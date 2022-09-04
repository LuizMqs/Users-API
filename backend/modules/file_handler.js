const fs = require("fs");
const fsPromisses = fs.promises

module.exports = {
    readFile: async (file) => {
        const data = await fsPromisses.readFile(file);
        return data
    },
    writeFile: async (file, json) => {
        const data = await fsPromisses.writeFile(file, json);
        return data
    }
}