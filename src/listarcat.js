const listarCategorias = async (req, res) => {
    const { usuarios } = req;
    const { categorias } = req.query;

    try {
        
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'})
    }
}