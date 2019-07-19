using System;

namespace helloWorl
{
    class Program
    {
        static void Main(string[] args)
        {
            var test = new Program();

            test.penis = 2.20;

            Console.WriteLine("Hello World!", test.penis);

        }

        public double penis { get; set; }
    }
}
