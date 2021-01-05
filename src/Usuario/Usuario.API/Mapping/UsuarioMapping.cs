using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Usuario.Core.Entities;
using Usuario.Core.Entities.DTO;

namespace Usuario.API.Mapping
{
    public class UsuarioMapping : Profile
    {
        public UsuarioMapping()
        {
            CreateMap<UsuarioModel, UsuarioDTO>().ReverseMap();
        }
    }
}
