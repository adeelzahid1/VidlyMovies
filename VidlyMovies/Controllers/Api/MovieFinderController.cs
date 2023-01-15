using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VidlyMovies.Models;

namespace VidlyMovies.Controllers.Api
{
    public class MovieFinderController : ApiController
    {
        private ApplicationDbContext _context;

        public MovieFinderController()
        {
            _context = new ApplicationDbContext();
        }

        //GET /api/Movies get list of all movies
        public IEnumerable GetMovies(string query)
        {
            var moviesQuery = _context.Movies.Include(m => m.Genre).Where(m => m.Name.Contains(query)).ToList();

            return moviesQuery;
        }
    }
}
