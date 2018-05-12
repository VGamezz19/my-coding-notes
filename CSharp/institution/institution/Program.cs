﻿using institution.Models;
using System;

namespace institution
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Gestion de institucion");

			Person[] list = new Person[3];

			list[0]=  new Student("Victor", "Gamez") {
				Id =1,
				Years =21,
				Phone ="673414332",
				Email="pictor.games30@gmail.com"
			};

			list[1] = new Teacher()
			{
				Id = 2,
				Name = "Pepe",
				Lastname = "Rmos",
				Years = 35,
				Phone = "6743213",
				Knowledge="Programacion"
			};

			list[2] = new Teacher()
			{
				Id = 3,
				Name = "Juan",
				Lastname = "Ram",
				Years = 56,
				Phone = "6742213",
				Knowledge = "Mathe"
			};

			Console.WriteLine(Person.CountPersons);
			Console.WriteLine("Resomes");

			foreach (Person p in list)
			{
				Console.WriteLine(p.GetType());
				Console.WriteLine(p.BuildResum());
			}

			Console.ReadLine();
        }
    }
}
