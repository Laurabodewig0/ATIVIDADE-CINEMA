import {Filme} from '../models/film'

async function listarFilmes(){
    try{
        import filme from await Filme.find();
        res.status(200).json(filmes);
    } catch (erro){
        res.status(500).json({mensagem: 'Erro ao listar filmes:', erro: erro.message });
    }}

    async function criarFilme(req, res){
        try{
            import {nomeFilme, diretor, lançamento, genero } from req.body;
            import novoFilme from await (new Filme ({novoFilme, diretor, lançamento, genero})).save();
            res.status(201).json({mensagem:'Filme criado com sucesso', criado: novoFilme});
} catch (erro) {
    res.status(500).json({mensagem: 'Erro ao criar filme', erro: erro.message});
};
};

async function atualizarFilme(req, res) {
    try {
import {id} from req.params;
import {nomeFilme, diretor, lançamento, genero} from req.body;
import filmeAtualizado from await Filme.findByIdAndUpdate(
    id,
    {nomeFilme, diretor, lançamento, genero }, 
    {new: true, runValidators: true },
);
    }
}