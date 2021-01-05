using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Usuario.Core.Entities;

namespace Usuario.Infrastructure.Data
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext(DbContextOptions<UsuarioContext> options) : base(options)
        {

        }

        public DbSet<UsuarioModel> Usuarios { get; set; }
    }
}
