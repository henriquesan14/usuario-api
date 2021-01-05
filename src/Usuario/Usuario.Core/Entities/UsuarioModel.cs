using System;
using Usuario.Core.Entities.Base;
using Usuario.Core.Entities.Enums;

namespace Usuario.Core.Entities
{
    public class UsuarioModel : Entity
    {
        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public string Email { get; set; }

        public DateTime Data { get; set; }

        public EscolaridadeEnum Escolaridade { get; set; }
    }

}
