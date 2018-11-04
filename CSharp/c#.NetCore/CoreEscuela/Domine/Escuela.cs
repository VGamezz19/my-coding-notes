namespace CoreEscuela.Domine // CoreEscuela/Domine/**
{
    public class Escuela
    {
        public string Nombre { get; set; }
        /*
        Esto --> public string Nombre { get; set; }
        
        Es exactamente igual que esto -->
            string nombrec   <-- esta en private
            public string Nombre {
                get { return nombre; }
                set {nombre = value;}
            }
         */
        public int AñoDeCreacion { get; set; }
        public string Pais { get; set; }
        public string Ciudad { get; set; }

        // public Escuela(string _nombre, int _año) { //En el constructor añadiremos lo minimo para la clase
        //     this.Nombre = _nombre;
        //     this.AñoDeCreacion = _año;
        // }
        // Lo mismo que lo de arriba
        public Escuela(string _nombre, int _año) => (Nombre, AñoDeCreacion) = (_nombre, _año);
    }
}