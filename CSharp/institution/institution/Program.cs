using institution.Models;
using System;

namespace institution
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Gestion de institucion");

			var student1 = new Student("Victor", "Gamez") {
				Id =1,
				Years =21,
				Phone ="673414332",
				Email="pictor.games30@gmail.com"
			};

			var teacher1 = new Teacher()
			{
				Id = 1,
				Name = "Pepe",
				Lastname = "Rmos",
				Years = 35,
				Phone = "6743213",
				Knowledge="Programacion"
			};

			Person a = teacher1;

			Person b = student1;
			// private
			//  student1.Aus;
			// protected
			// student1.Title;

			Console.WriteLine(Person.CountPersons);

			Console.ReadLine();
        }
    }
}
