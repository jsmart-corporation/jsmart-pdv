using api.Context;
using api.Exeption;
using api.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace api.Services
{
    public class ProdutoService
    {
        private readonly AppDbContext _context;

        public ProdutoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> GetAllProdutos() => await _context.Produtos.Where(x => !x.Deletado).Include(x => x.Categoria).Take(50).ToListAsync();
        public async Task<dynamic> PostProdutoAsync(Produto produto)
        {
            var find = await _context.Produtos
            .Where(x => (x.Nome == produto.Nome || (produto.Codigo != "" && x.Codigo == produto.Codigo) || (produto.CodBalanca != "0" && x.CodBalanca == produto.CodBalanca)) && !x.Deletado)
            .FirstOrDefaultAsync();

            if (find != null)
            {
                if(find.Nome == produto.Nome)
                    throw new AplicationRequestExeption("Produto com esse nome já cadastrado", HttpStatusCode.BadRequest);
                if (find.Codigo == produto.Codigo)
                    throw new AplicationRequestExeption("Produto com esse codigo de barras já cadastrado", HttpStatusCode.BadRequest);
                if (find.CodBalanca == produto.CodBalanca)
                    throw new AplicationRequestExeption("Produto com esse codigo de terminal já cadastrado", HttpStatusCode.BadRequest);
            }
            await _context.AddAsync(produto);
            await _context.SaveChangesAsync();
            return produto;
        }
        public async Task<dynamic> PatchProdutoAsync(Produto produto)
        {
            var find = await _context.Produtos
            .Where(x => (x.Nome == produto.Nome || (produto.Codigo != "" && x.Codigo == produto.Codigo) || (produto.CodBalanca != "0" && x.CodBalanca == produto.CodBalanca)) && !x.Deletado && x.Id != produto.Id)
            .FirstOrDefaultAsync();

            if (find != null)
            {
                if (find.Nome == produto.Nome)
                    throw new AplicationRequestExeption("Produto com esse nome já cadastrado", HttpStatusCode.BadRequest);
                if (find.Codigo == produto.Codigo)
                    throw new AplicationRequestExeption("Produto com esse codigo de barras já cadastrado", HttpStatusCode.BadRequest);
                if (find.CodBalanca == produto.CodBalanca)
                    throw new AplicationRequestExeption("Produto com esse codigo de terminal já cadastrado", HttpStatusCode.BadRequest);
            }

            _context.Produtos.Update(produto);
            await _context.Produtos.Entry(produto).Reference(x => x.Categoria).LoadAsync();
            await _context.SaveChangesAsync();
            return produto;
        }
        public async Task<dynamic> DeleteProdutoAsync(int codProduto)
        {
            var find = await _context.Produtos.Where(x => x.Id == codProduto).FirstOrDefaultAsync();
            if (find == null)
            {
                throw new AplicationRequestExeption("Produto não encotrado", HttpStatusCode.BadRequest);
            }
            find.Deletado = true;
            find.DeletadoEm = DateTime.Now;
            _context.Produtos.Update(find);
            await _context.SaveChangesAsync();
            return find;
        }
        public async Task<dynamic> GetRecomendadosAsync() => await _context.Produtos.Where(x => x.Recomendado && !x.Deletado).ToListAsync();

        public async Task<dynamic> GetProdutoCodigoBarra(string codBarra)
        {
            var find = await _context.Produtos.Where(x => x.Codigo == codBarra && !x.Deletado).FirstOrDefaultAsync();
            if(find == null)
            {
                throw new AplicationRequestExeption("Produto com esse codigo de barras não encontrado",HttpStatusCode.BadRequest);
            }
            return find;
        }
    }
}
