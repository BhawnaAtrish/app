function get()
{
    const search = document.getElementById('search').value;
    console.log(search);
    let url = "https://www.omdbapi.com/?t="+search+"&apikey=38682202";
    let result;
    $.post(url,
    function(data, status){
        console.log(status);
        // console.log(data);
        // console.log(data.Search)
        if(data.Response=="False")
        {
            document.getElementById('show_movie').style.display="none";
        }
        else{
            document.getElementById('show_movie').style.display="block";
            document.getElementById("title").innerHTML=data.Title;
            document.getElementById("img").src=data.Poster;
            document.getElementById("genre").innerHTML=data.Genre;
            document.getElementById("genre").innerHTML=data.Year;
            document.getElementById("plot").innerHTML=data.Plot;
            document.getElementById("rated").innerHTML=data.Rated;
        }
        result=data;
        console.log(result)
        
    });

   }

