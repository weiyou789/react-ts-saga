import { API_USER } from '@src/api'
import { myFetch } from '@src/utils'


export const fetchInfo = () => myFetch(API_USER)

/*
export const fetchTest = (Id: string):object => {

    return {
        demoStore:{
            languageName:'test',
            enthusiasmLevel:22
        }
    }
}*/
