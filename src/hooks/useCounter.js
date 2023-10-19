import { useState } from 'react'

export const useCounter = (id, stock, quantity) => {

    const [count, setCount] = useState(quantity)

    const increment = () => stock > count ? setCount(count + 1) : undefined
    const decrement = () => count > 1 && setCount(count - 1)
    
    return {
        count,
        increment,
        decrement,
    }
}