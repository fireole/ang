using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TempMask.Startup))]
namespace TempMask
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
