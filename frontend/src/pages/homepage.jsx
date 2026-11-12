import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {

    //state convention: [stateName, stateFun (which allows you to update the state)]
    //whenever the state changes below component will update and rerender
    //and we have to connect state to the component
    const [searchQuery, setSearchQuery] = useState()
    const movies = [
        { id: 1, title: "3 idiots", released_date: "2016" },
        { id: 2, title: "Bahubali", released_date: "20220" },
        { id: 3, title: "Ramayan", released_date: "2026" }
    ];

    //arrow function 
    const handleSearch = (e) => {
        //clicking search or submit button on default refresh the component or do refresh later i will know so search box item will be gone
        //to avoid this i should do 
        e.preventDefault()
        alert(searchQuery)
        //setsearchQuery garda state update huncha ra search query ma naya value bascha aba so view rerender huncha,
        // search query ma value naya aai sakyo ani re-render hune bela placeholder ma searchquery ko value -------- auncha
        setSearchQuery("--------")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movies...."
                    className="search-input"
                    value={searchQuery}
                    //inline arrow function
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLocaleLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    );
}

export default Home