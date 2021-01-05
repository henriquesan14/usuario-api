using System;
using System.Collections.Generic;
using System.Text;
using Usuario.Core.Entities;
using Usuario.Core.Repositories;
using Usuario.Infrastructure.Data;
using Usuario.Infrastructure.Repositories.Base;

namespace Usuario.Infrastructure.Repositories
{
    public class UsuarioRepository : Repository<UsuarioModel>, IUsuarioRepository
    {
        public UsuarioRepository(UsuarioContext dbContext) : base(dbContext)
        {
        }
    }
}
