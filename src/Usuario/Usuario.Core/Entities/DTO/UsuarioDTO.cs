using System;
using System.Collections.Generic;
using System.Text;
using Usuario.Core.Entities.Enums;

namespace Usuario.Core.Entities.DTO
{
    public class UsuarioDTO
    {
        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public string Email { get; set; }

        public DateTime Data { get; set; }

        public EscolaridadeEnum Escolaridade { get; set; }
    }
}
