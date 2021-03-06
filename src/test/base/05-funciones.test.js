import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Test en 05-funciones', () => {


    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        console.log(user);

        expect (user).toEqual(userTest)

    })

    test('getUsuarioActivo debe de retornar un objeto', () => {


        const nombre="Alex"

        const testGetUsuario = getUsuarioActivo(nombre)

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        console.log(testGetUsuario);
        
        expect (testGetUsuario).toEqual(userTest)

    })



})
