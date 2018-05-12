using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FrontEndHelloWorld.Models;

namespace FrontEndHelloWorld.Controllers
{
    public class ApprenticesController : Controller
    {
        private FrontEndHelloWorldContext db = new FrontEndHelloWorldContext();

        // GET: Apprentices
        public ActionResult Index()
        {
            return View(db.Apprentices.ToList());
        }

        // GET: Apprentices/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Apprentice apprentice = db.Apprentices.Find(id);
            if (apprentice == null)
            {
                return HttpNotFound();
            }
            return View(apprentice);
        }

        // GET: Apprentices/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Apprentices/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] Apprentice apprentice)
        {
            if (ModelState.IsValid)
            {
                db.Apprentices.Add(apprentice);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(apprentice);
        }

        // GET: Apprentices/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Apprentice apprentice = db.Apprentices.Find(id);
            if (apprentice == null)
            {
                return HttpNotFound();
            }
            return View(apprentice);
        }

        // POST: Apprentices/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] Apprentice apprentice)
        {
            if (ModelState.IsValid)
            {
                db.Entry(apprentice).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(apprentice);
        }

        // GET: Apprentices/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Apprentice apprentice = db.Apprentices.Find(id);
            if (apprentice == null)
            {
                return HttpNotFound();
            }
            return View(apprentice);
        }

        // POST: Apprentices/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Apprentice apprentice = db.Apprentices.Find(id);
            db.Apprentices.Remove(apprentice);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
