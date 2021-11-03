import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    
    test('getSludo retornar hola Alex ', () => {
        
        const nombre="Alex";
        const saludo = getSaludo(nombre)

        expect (saludo).toBe("Hola " + nombre)

    })


    test('getSludo retornar Carlos ', () => {
        
        
        const saludo = getSaludo()

        expect (saludo).toBe("Hola Carlos")

    })
})



    
    










