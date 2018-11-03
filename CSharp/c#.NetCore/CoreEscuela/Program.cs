using System;

namespace CoreEscuela
{
    class Escuela
    {
        public string nombre { get; set; }
        public string direccion { get; set; }
        public int anyoFundacion { get; set; }
        public string creo { get; set; }

        public void Timbrar()
        {
            // Todo
            /*
                CONSOLE.BEEP(Frecuencia, Duracion del pitido)

                Plays the sound of a beep of a specified frequency and duration through the console speaker.
                Parameters:
                frequency: The frequency of the beep, ranging from 37 to 32767 hertz.
                duration: The duration of the beep measured in milliseconds.
                Exceptions:

                System.ArgumentOutOfRangeException: frequency frequency is less than 37 or more than 32767 hertz. addsf sdfds fsdf
            */
            Console.WriteLine("Beep...Beeepp....");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");

            var miEscuela = new Escuela() {
                nombre = "Platzi Academy",
                direccion = "Cr 9 calle 72",
                anyoFundacion = 2012
            };
            

            Console.WriteLine("TIMBRE");
            miEscuela.Timbrar();
        }
    }
}
