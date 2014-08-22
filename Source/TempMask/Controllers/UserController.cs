using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;

namespace TempMask.Controllers
{
    public class UserController : ApiController
    {

        [Route("Par")]
        public dynamic Get()
        {
            var user = new User();
            user.FirstName = "Antonio";

            return JsonConvert.SerializeObject(user);
        }

    }

    internal class User
    {
        public string FirstName { get; set; }

    }
}
