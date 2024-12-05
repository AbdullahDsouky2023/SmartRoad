import api from ".."
export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
    role: string
  }
  
  export interface Hair {
    color: string
    type: string
  }
  
  export interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
  }
  
  export interface Coordinates {
    lat: number
    lng: number
  }
  
  export interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  
  export interface Company {
    department: string
    name: string
    title: string
    address: Address2
  }
  
  export interface Address2 {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates2
    country: string
  }
  
  export interface Coordinates2 {
    lat: number
    lng: number
  }
  
  export interface Crypto {
    coin: string
    wallet: string
    network: string
  }
  
export const getAllUsers = async ()=>{
    try{
      const response = await  api.get('users') //sync    
      return response?.data?.users
    }catch(error){
        console.error('Error  get all users',error)
            //error
    }
}
export const StoreUser = async ( name:string,
    national_number:number,
    password:string)=>{
    try{
        const FormData = require('form-data');
        let data = new FormData();
        data.append('name',name);
        data.append('national_number', national_number);
        data.append('password', password);

      const response = await  api.post('users', data)    
      return response?.data
    }catch(error){
        console.error('Error  get all users',error)
            //error
    }
}
export const LoginUser = async ( 
    national_number:number,
    password:string)=>{
    try{
        const FormData = require('form-data');
        let data = new FormData();
        data.append('national_number', national_number);
        data.append('password', password);

      const response = await  api.post('users', data)    
      return response?.data
    }catch(error){
        console.error('Error  get all users',error)
            //error
    }
}



export const getUserData = async (id:number)=>{
    try{
      const response = await  api.get(`users/${id}`) //sync    
      return response?.data
    }catch(error){
        console.error('Error  get all users',error)
            //error
    }
}