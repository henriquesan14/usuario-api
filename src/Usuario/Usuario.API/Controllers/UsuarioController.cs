using AutoMapper;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Usuario.Core.Entities;
using Usuario.Core.Entities.DTO;
using Usuario.Core.Entities.Validators;
using Usuario.Core.Repositories;

namespace Usuario.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly IUsuarioRepository _repository;
        private readonly IMapper _mapper;
        private readonly UsuarioValidator validator;

        public UsuarioController(IUsuarioRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            validator = new UsuarioValidator();
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UsuarioModel>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<UsuarioModel>>> GetUsuarios()
        {
            var usuarios = await _repository.GetAllAsync();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(UsuarioModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<UsuarioModel>> GetUsuario(int id)
        {
            var usuario = await _repository.GetByIdAsync(id);
            if(usuario == null)
            {
                return NotFound();
            }
            return Ok(usuario);
        }

        [HttpPost]
        [ProducesResponseType(typeof(UsuarioModel), (int)HttpStatusCode.Created)]
        public async Task<ActionResult> Save([FromBody] UsuarioDTO body)
        {
            var results = validator.Validate(body);
            if(results.Errors.Count > 0)
            {
                return BadRequest(results.Errors);
            }
            var usuario = await _repository.AddAsync(_mapper.Map<UsuarioModel>(body));
            return Created(new Uri($"{Request.Path}/{usuario.Id}", UriKind.Relative), usuario);
        }

        [HttpPut("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult> UpdateUsuario(int id, [FromBody] UsuarioDTO body)
        {
            var usuario = await _repository.GetByIdAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            var results = validator.Validate(body);
            if (results.Errors.Count > 0)
            {
                return BadRequest(results.Errors);
            }
            _mapper.Map<UsuarioDTO, UsuarioModel>(body, usuario);
            await _repository.UpdateAsync(usuario);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult> DeleteUsuario(int id)
        {
            var usuario = await _repository.GetByIdAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            await _repository.DeleteAsync(usuario);
            return NoContent();
        }

    }
}
