using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
    class Student: Person
    {
		public string Email { get; set; }

		private int Ausents { get; set; }

		public string TestProtected() {

			return Title.ToString();
		}

		public string ListAus() {

			return Ausents.ToString();
		}

		public Student(string name, string lastname)
		{
			Name = name;
			Lastname = lastname;
		}

	}
}
