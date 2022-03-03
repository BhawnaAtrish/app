function get()
{
    const search = document.getElementById('search').value;
    console.log(search);
    let url = "https://www.omdbapi.com/?t="+search+"&apikey=38682202";
    let result;
    $.post(url,
    function(data, status){
        if(data.Response=="False")
        {
            document.getElementById('show_movie').style.display="none";
        }
        else{
            Ajaxcall2(data);
            document.getElementById('show_movie').style.display="block";
            document.getElementById("title").innerHTML=data.Title;
            document.getElementById("img").src=data.Poster;
            document.getElementById("genre").innerHTML=data.Genre;
            document.getElementById("year").innerHTML=data.Year;
            document.getElementById("plot").innerHTML=data.Plot;
            document.getElementById("rating").innerHTML=data.Rated;
            document.getElementById("imdbrating").innerHTML=data.imdbRating;
            document.getElementById("imdbvotes").innerHTML=data.imdbVotes;
            document.getElementById("runtime").innerHTML=data.Runtime;
            document.getElementById("director").innerHTML=data.Director;
            document.getElementById("writer").innerHTML=data.Writer;
            document.getElementById("actor").innerHTML=data.Actors;
            document.getElementById("released").innerHTML=data.Released;
            document.getElementById('show_movie').focus();
        }
        result=data;
        console.log(result)
        
    });
   }

function Ajaxcall2(data){
    console.log("cehcking");
    $.get("http://127.0.0.1:8000/saving/",
    {
        title: data.Title,
        genre: data.Genre,
        year: data.Year,
        rated : data.Rated,
        released : data.Released,
        actor: data.Actors,
        runtime:data.Runtime,
        director:data.Director,
        writer:data.Writer,
        plot:data.Plot,
        poster:data.Poster,
        ivote:data.imdbVotes,
        irating:data.imdbRating,
    },
    function(dataa, status){
        console.log(dataa);
        console.log("checking")
        
        // if(data=="False")
        // {
        //     alert("Failed")
        // }
        // else{
        //     alert("Saved")
        // }    
    });
}