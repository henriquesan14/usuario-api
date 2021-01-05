using FluentValidation;
using System;
using Usuario.Core.Entities.DTO;

namespace Usuario.Core.Entities.Validators
{
    public class UsuarioValidator : AbstractValidator<UsuarioDTO>
    {
        public UsuarioValidator()
        {
            RuleFor(u => u.Nome).NotEmpty();
            RuleFor(u => u.Sobrenome).NotEmpty();
            RuleFor(u => u.Email).EmailAddress().NotEmpty();
            RuleFor(u => u.Data).LessThan(DateTime.Now);
            RuleFor(u => u.Escolaridade).IsInEnum();
        }
    }
}
