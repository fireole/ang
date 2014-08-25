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

            return user;

        }
    }

    internal class User
    {

        public User()
        {
            CurrentStat = new CurrentStat();
        }
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public CurrentStat CurrentStat { get; set; }

        public List<MealPlan> MealPlans { get; set; }

    }

    internal class MealPlan
    {
        public string Name { get; set; }
        public double TotalCalories { get; set; }
        public int Multiplier { get; set; }
        public List<Macro> Macros { get; set; }
    }

    internal class Macro
    {
        public string Name { get; set; }
        public double PercentRatio { get; set; }
        public int CaloriePerGram { get; set; }
        public double Grams { get; set; }
        public double Calories { get; set; }
    }

    internal class CurrentStat
    {
        public CurrentStat()
        {
            BodyWeight = 200;
            BodyFatPercent = 24.5;
        }
        public double BodyFatPercent { get; set; }
        public double LeanBodyMass { get; set; }
        public double FatWeight { get; set; }
        public double BodyWeight { get; set; }
    }


}
