using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
     public abstract class Person: IEnteInstitution
	{
		public static int CountPersons = 0;
		
		public int Id { get; set; }
		public string Name { get; set; }
		public string Lastname { get; set; }
		public short Years { get; set; }
		public string Phone { get; set; }
		protected string Title { get; set; }

		public virtual string FullName {
			get {

				// return Name + " " + Lastname;
				// return string.Format("{0} {1}", Name, Lastname);
				return $"{Name} {Lastname}";
			}
		}

		public string InternalCode { get; set; }

		// ctor Constructor;
		// Public CTOR - se ejecutara cadavez que creemos una persona
		// Static CTOR - Solo se ejecutara una vez.
		public Person() {
			CountPersons++;
		}

		// Modificadores

		// Private --> Solo accesible dentro de la Clas
		// Public --> accesible en todos los sitios
		// Protected --> los hijos que hereden un atrivuto protected, podran acceder como si fuera
		// una propiedad privada. (y su padre igual)
		// Static --> afecta al conjunto de la Clase, no a la instancia de ella.
		// Public sealed class Person --> al añadir sealed, estamos sellando la clase, y no podremos heredarla.

		public abstract string BuildResum();

		public string ConstructSecretKey(string name)
		{
			var rnd = new Random();

			if (rnd.GetType() == typeof(Random))
			{

			}

			return rnd.Next(1, 99999).ToString();
		}
	}
}
