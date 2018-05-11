using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HelloWorldBackEnd.Models;
using WebApplication2.Models;

namespace HelloWorldBackEnd.Controllers
{
    public class ApprenticesController : ApiController
    {
        private HelloWorldBackEndContext db = new HelloWorldBackEndContext();

        // GET: api/Apprentices
        public IQueryable<Apprentice> GetApprentices()
        {
            return db.Apprentices;
        }

        // GET: api/Apprentices/5
        [ResponseType(typeof(Apprentice))]
        public IHttpActionResult GetApprentice(int id)
        {
            Apprentice apprentice = db.Apprentices.Find(id);
            if (apprentice == null)
            {
                return NotFound();
            }

            return Ok(apprentice);
        }

        // PUT: api/Apprentices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutApprentice(int id, Apprentice apprentice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != apprentice.Id)
            {
                return BadRequest();
            }

            db.Entry(apprentice).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApprenticeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Apprentices
        [ResponseType(typeof(Apprentice))]
        public IHttpActionResult PostApprentice(Apprentice apprentice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Apprentices.Add(apprentice);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = apprentice.Id }, apprentice);
        }

        // DELETE: api/Apprentices/5
        [ResponseType(typeof(Apprentice))]
        public IHttpActionResult DeleteApprentice(int id)
        {
            Apprentice apprentice = db.Apprentices.Find(id);
            if (apprentice == null)
            {
                return NotFound();
            }

            db.Apprentices.Remove(apprentice);
            db.SaveChanges();

            return Ok(apprentice);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApprenticeExists(int id)
        {
            return db.Apprentices.Count(e => e.Id == id) > 0;
        }
    }
}