using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Usuario.API.Config
{
    public static class SerializationConfig
    {
        public static IServiceCollection JsonSerializationConfig(this IServiceCollection services)
        {
            services.AddMvc()
                .AddNewtonsoftJson(options => {
                    options.SerializerSettings.Converters.Add(new StringEnumConverter());
                });
            return services;
        }
    }
}
