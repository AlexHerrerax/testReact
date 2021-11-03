import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas de 07-deses-arr', () => {

    test('Debe retornar un String y un numero ', () => {
        
        const [letra, numero] = retornaArreglo()

        //expect(arr).toEqual(['ABC', 123])

        expect(typeof letra).toBe("string")
        expect(typeof numero).toBe("number")

    })
    
    
})
