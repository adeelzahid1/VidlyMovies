using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using VidlyMovies.Dtos;
using VidlyMovies.Models;

namespace VidlyMovies.Controllers.Api
{
    public class CustomerFinderController : ApiController
    {
        private ApplicationDbContext _context;

        public CustomerFinderController()
        {
            _context = new ApplicationDbContext();
        }

        // GET /api/customers
        //public IHttpActionResult GetCustomers()
        //{
        //    var customerDtos = _context.Customers.ToList();

        //    return Ok(customerDtos);
        //}


        // GET /api/customers
        public IHttpActionResult GetCustomers(string query = null)
        {
            var customersQuery = _context.Customers
                .Include(c => c.MembershipType);

            if (!String.IsNullOrWhiteSpace(query))
                customersQuery = customersQuery.Where(c => c.Name.Contains(query));

            var customerDtos = customersQuery
                .ToList()
                .Select(Mapper.Map<Customer, CustomerDto>);

            return Ok(customerDtos);
        }






    }
}
