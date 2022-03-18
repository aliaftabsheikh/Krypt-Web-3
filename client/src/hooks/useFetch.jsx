import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ()=>{
    const [gifUrl, setGifUrl] = useState("")

    const fetchGifs =()=>{
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api/key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            
        } catch (error) {
            
        }
    }
}