using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
    class Dumy
    {									// For create a random text
		public string DummyId { get => Guid.NewGuid().ToString(); }
	}
}
