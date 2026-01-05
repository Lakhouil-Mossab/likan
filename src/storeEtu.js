import { configureStore } from '@reduxjs/toolkit'
import sliceEtu from './slice'

const storeEtu=configureStore({
    reducer:{
        Etudiants:sliceEtu
    }
})
export default storeEtu