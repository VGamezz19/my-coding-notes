using System;
using CoreEscuela.Domine;

namespace CoreEscuela
{
    class Program
    {
        static void Main(string[] args)
        {
            var escuela = new Escuela("Platzi Academy", 2012);

            Console.WriteLine(escuela.Nombre);
        }
    }
}
