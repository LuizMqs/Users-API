//Desenha a tabela inicial já contendo os usuários
try {
  draw_table();
} catch (err) {
  console.log(err);
}

//Ativa a função do botão e desabilita até a requisição ser completada
document.getElementById("myBtn").addEventListener("click", (e) => {
  e.target.disabled = true;
  insertUser(e);
});

//Atualiza a tabela com o novo usuário
async function insertUser() {
  await create_user();
  draw_table();
}

//Adiciona o novo usuário ao servidor
async function create_user() {
  const nome = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ nome, email }),
  };

  await fetch("http://localhost:8000/usuarios", options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}

//Desenha a tabela
async function draw_table() {
  const options = {
    method: "GET",
  };
  document.querySelector("tbody").innerHTML = "";
  await fetch("http://localhost:8000/usuarios", options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);

      const users = response;

      users.forEach((user, index) => {
        if (!user.deleted) {
          if (index % 2) {
            document.querySelector("tbody").innerHTML += `
              <tr class="light">
                <td class="id">${user.id}</td> 
                <td class="nome">${user.nome}</td>
                <td class="e-mail">${user.email}</td>
                <td class="editar"><img src="./images/pencil.svg" onclick="edit_btn_action(${user.id})"></td>
                <td class="deletar"><img src="./images/delete.svg" onclick="delete_btn_action(${user.id})"></td>
              </tr>
            `;
          } else {
            document.querySelector("tbody").innerHTML += `
              <tr class="dark">
                <td class="id">${user.id}</td> 
                <td class="nome">${user.nome}</td>
                <td class="e-mail">${user.email}</td>
                <td class="editar"><img src="./images/pencil.svg" onclick="edit_btn_action(${user.id})"></td>
                <td class="deletar"><img src="./images/delete.svg" onclick="delete_btn_action(${user.id})"></td>
              </tr>
            `;
          }
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("myBtn").disabled = false;
}

//Atualiza a tabela com o usuário atualizado
async function edit_btn_action(id) {
  await edit_user(id);
  draw_table();
}

//Edita o usuário
async function edit_user(id) {
  const nome = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  const options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ nome, email }),
  };

  await fetch(`http://localhost:8000/usuarios/${id}`, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}

//Atualiza a tabela retirando o usuário deletado
async function delete_btn_action(id) {
  await delete_user(id);
  draw_table();
}

//Deleta o usuário
async function delete_user(id) {
  const options = {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  };

  await fetch(`http://localhost:8000/usuarios/${id}`, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}
