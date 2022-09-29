import React, { useContext, useEffect, useState } from "react";

export const API_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext()

//we need to create a provider function

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: false, mess: ""});
    const [query, setQuery] = useState("titanic")

    const getMovies = async(url) => {
        try{
            setIsLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if(data.Response === 'True'){
                setIsLoading(false);
                setIsError({
                    show: false,
                    mess: "",
                })
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show: true,
                    mess: data.Error,
                })
            }

        }
        catch(error){
            console.log(error); 
        }
    };
    useEffect(() => {
        var timerOut = setTimeout(()=>{
            getMovies(`${API_url}&s=${query}`);
        },400);
        
        return()=>{
            clearTimeout(timerOut);
        console.log("clear");
    }

    },[query]);

    return <AppContext.Provider value={{isLoading, movie, isError, query, setQuery, setIsLoading, setIsError,setMovie}}>{children}</AppContext.Provider>
};

//global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};