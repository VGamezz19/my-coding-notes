using System;

namespace helloWorl
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = new Program();

            test.penis = "Penises";
            
            Console.WriteLine("Hello World!", test.penis);
            
        }

        public string penis { get; set; }
    }
}
