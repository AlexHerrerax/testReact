

describe('Pruebas en el archivo demo.test.js', () =>{

    test('Deben ser iguales los String', () => {

        //Inicializacion
        const mensaje1="Hola mundo"  
    
        //Estimulo
        const mensaje2="Hola mundo" 
    
        //Observar el comportamiento
        expect(mensaje1).toBe(mensaje2)
    })
})
