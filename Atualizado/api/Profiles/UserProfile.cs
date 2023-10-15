using api.DTO.User;
using api.Model;
using AutoMapper;

namespace api.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDTO, User>()
                .ForPath(dest => dest.Name, opts => opts.MapFrom(x => x.Name))
                .ForPath(dest => dest.Email, opts => opts.MapFrom(x => x.Email))
                .ForPath(dest => dest.Password, opts => opts.MapFrom(x => x.Password));
        }
    }
}
