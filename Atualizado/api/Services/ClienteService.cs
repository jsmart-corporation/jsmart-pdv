using api.Context;
using api.Exeption;
using api.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace api.Services
{
    public class CategoriaService
    {
        private readonly AppDbContext _context;

        public CategoriaService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> GetAllCategorias() => await _context.Categorias.Where(x => !x.Deletado).ToListAsync();
        public async Task<dynamic> PostCategoriaAsync(Categoria categoria)
        {
            var find = await _context.Categorias.Where(x => x.Descricao == categoria.Descricao && !x.Deletado).FirstOrDefaultAsync();
            if (find != null)
            {
                throw new AplicationRequestExeption("Categoria já cadastrada", HttpStatusCode.BadRequest);
            }
            await _context.AddAsync(categoria);
            await _context.SaveChangesAsync();
            return categoria;
        }
        public async Task<dynamic> PatchCategoriaAsync(Categoria categoria)
        {
            var find = await _context.Categorias.Where(x => x.Descricao == categoria.Descricao && x.Id != categoria.Id).FirstOrDefaultAsync();
            if (find == null)
            {
                throw new AplicationRequestExeption("Categoria já cadastrada", HttpStatusCode.BadRequest);
            }
            _context.Categorias.Update(categoria);
            await _context.SaveChangesAsync();
            return categoria;
        }
        public async Task<dynamic> DeleteCategoriaAsync(int codCategoria)
        {
            var find = await _context.Categorias.Where(x => x.Id == codCategoria).FirstOrDefaultAsync();
            if (find == null)
            {
                throw new AplicationRequestExeption("Categoria já não encontrada", HttpStatusCode.BadRequest);
            }
            find.Deletado = true;
            find.DeletadoEm = DateTime.Now;
            _context.Categorias.Update(find);
            await _context.SaveChangesAsync();
            return find;
        }
        
    }
}
