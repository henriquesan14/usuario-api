using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Usuario.Core.Entities;
using Usuario.Core.Entities.Enums;

namespace Usuario.Infrastructure.Data
{
    public class UsuarioContextSeed
    {
        public static async Task SeedAsync(UsuarioContext usuarioContext, ILoggerFactory loggerFactory, int? retry = 0)
        {
            int retryForAvailability = retry.Value;

            try
            {
                usuarioContext.Database.Migrate();

                if (!usuarioContext.Usuarios.Any())
                {
                    usuarioContext.Usuarios.AddRange(GetPreconfiguredOrders());
                    await usuarioContext.SaveChangesAsync();
                }
            }
            catch (Exception exception)
            {
                if (retryForAvailability < 3)
                {
                    retryForAvailability++;
                    var log = loggerFactory.CreateLogger<UsuarioContextSeed>();
                    log.LogError(exception.Message);
                    await SeedAsync(usuarioContext, loggerFactory, retryForAvailability);
                }
            }
        }

        private static IEnumerable<UsuarioModel> GetPreconfiguredOrders()
        {
            return new List<UsuarioModel>
            {
                new UsuarioModel() {Nome = "Henrique", Sobrenome = "Santos", Data = DateTime.Now, Email = "henrique@gmail.com", Escolaridade = EscolaridadeEnum.SUPERIOR}
            };
        }
    }
}
