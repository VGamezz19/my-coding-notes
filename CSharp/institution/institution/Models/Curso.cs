using System;
using System.Collections.Generic;
using System.Text;

namespace institution.Models
{
    struct CursoStruct
    {
		const string NOMBRE_DEFECTO_ASIGNADO = "NO ASIGNADA";
		public string Curso { get; set; }
		public short max_capacidad;

		public CursoStruct(short max_capa)
		{
			max_capacidad = max_capa;
			Curso = NOMBRE_DEFECTO_ASIGNADO;
		}
	}
}
