using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
	class Teacher: Person {
		public string Knowledge { get; set; }

		public override string BuildResum() {

			return $"{FullName}, {Knowledge}, {Years}";
		}
	}
}
