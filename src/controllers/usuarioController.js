import * as usuario from "../models/usuarioModel.js";

// CREATE
export async function criar(req, res) {
  try {
    const { nome, email } = req.body;

    console.log(nome, email)

    const usuarios = await usuario.criarUsuario(nome, email);

    res.status(201).json(usuarios);

  } catch (e) {
    res.status(500).json({
      erro: "Falha ao criar usuário"
    });
  }
}


// READ
export async function listar(req, res) {
  try {
    const usuarios = await usuario.listarUsuarios();

    res.json(usuarios);

  } catch (e) {
    res.status(500).json({
      erro: "Falha ao listar usuários"
    });
  }
}


// UPDATE
export async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    const result = await usuario.atualizarUsuario(
      id,
      nome,
      email
    );

    if (!result.affectedRows) {
      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    res.json({
      mensagem: "Atualizado com sucesso"
    });

  } catch (e) {
    res.status(500).json({
      erro: "Falha ao atualizar usuário"
    });
  }
}


// DELETE
export async function deletar(req, res) {
  try {
    const { id } = req.params;

    const result = await usuario.deletarUsuario(id);

    if (!result.affectedRows) {
      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    res.json({
      mensagem: "Deletado com sucesso"
    });

  } catch (e) {
    res.status(500).json({
      erro: "Falha ao deletar usuário"
    });
  }
}