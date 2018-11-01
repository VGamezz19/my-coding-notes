using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
    interface IEnteInstitution
    {
		string InternalCode { get; set; }

		string ConstructSecretKey(string name);
	}
}
