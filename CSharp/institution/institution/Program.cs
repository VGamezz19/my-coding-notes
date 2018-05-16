using institution.Models;
using System;
using System.Collections;

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

			Console.WriteLine("E N U M S");

			var studenState = new Student("Pedro", "Gamez")
			{
				Id = 1,
				Years = 21,
				Phone = "673414332",
				Email = "pictor.games30@gmail.com",

				Status = StudentStatus.Egresado
				//Casting, nos permite convertir de un tipo a otro, cuando el tipo es compatible y tenemos la certeza que se puede hacer la conversion
				//Status = (StudentStatus) 98
			};

			Console.WriteLine($"Estado del Alumno {studenState.Status}");
			Console.WriteLine($"Type { typeof(StudentStatus)}");
			Console.WriteLine($"Type { typeof(Int32)}");
			Console.WriteLine($"Type { studenState.GetType()}");
			Console.WriteLine($"Nombre { nameof(Student)}");
			Console.WriteLine($"Tamaño { sizeof(int)}");

			Console.WriteLine("C A S T");

			//-32.000 + 32.000
			short s = 32000;
			int i = 33000;

			//El compilador lanza un error, ya que el tipo Short no puede tener más de 32000.
			//s = i;
			//
			//Pero podemos "forzar" que C# ejecute el tipo de dato, añadiendole el casting.
			Console.WriteLine(i); // 33000
			s = (short)i;
			Console.WriteLine(s); // - 32536

			// Sale un valor totalmente diferente porque perdimos informacion. Esta perdida de informacion
			// para el tipo Short se representa en negativo.
			// pudimos hacer la igualacion, porque "forzamos" la ejecucion

			float f = 2.35f;
			Console.WriteLine(f); // 2.35
			i = (int)f;

			if (int.TryParse("15", out var result))
			{
				Console.WriteLine(result);
			}

			Console.WriteLine(i); // 2

			Person[] arrayPerson = new Person[5];

			var tam = arrayPerson.Length;

			arrayPerson[0] = new Student("V", "G");
			arrayPerson[1] = new Teacher() { Name = "P", Lastname = "L" };
			arrayPerson[2] = new Student("V3", "G3");
			arrayPerson[3] = new Teacher() { Name = "P2", Lastname = "L1" };
			arrayPerson[4] = new Student("Vaaa", "Gsss");


			//arrayPerson[5] = new Teacher() { Name = "Pddddd", Lastname = "Lsss" };

			for (int x = 0; x < tam; x++)
			{
				if (arrayPerson[x] is Student)
				{
					var al = arrayPerson[x];
					Console.WriteLine(al.FullName);
				}
			}

			string testString = "Pedro";
			string Name = "Pedro";


			ArrayList listPersons = new ArrayList();

			listPersons.Add(new Student("CC", "G"));
			listPersons.Add(new Student("CC", "G"));
			listPersons.Add(new Student("CC", "G"));
			listPersons.Add(new Student("CC", "G"));
			listPersons.Add(new Student("CC", "G"));

			for (int x = 0; x < listPersons.Count; x++)
			{
				if (listPersons[i] is Student al)
				{
					Console.WriteLine(al.FullName);
				}
			}

			Console.ReadLine();
		}
	}
}
