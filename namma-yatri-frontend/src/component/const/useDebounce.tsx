import React,{useEffect,useState} from 'react'

export const useDebounce =(value:object,miliseconds:number)=>{
    const [debouncedValue,setDebouncedValue]=useState(value)

    
    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebouncedValue(value)
        },miliseconds)

        return()=>{
            clearTimeout(handler)
        };
    },[value,miliseconds])
 
    return debouncedValue
}