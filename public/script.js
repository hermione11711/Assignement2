

function surprise(){
    console.log("btn pressed !");
    var entryFname = document.getElementById("fname").value;

    if (entryFname != ""){  
        var xhttp = new XMLHttpRequest();
        const fist_name = `fname=${entryFname}`

        xhttp.open("GET", "getLength?" + fist_name, true);
        xhttp.send();
        console.log("AJAX request sent : " + fist_name);

        xhttp.addEventListener('load', function(){
            if (xhttp.status === 200 && xhttp.readyState === 4){
                var response = JSON.parse(xhttp.responseText);
                console.log("AJAX response : " + xhttp.responseText);
                document.getElementById("demo").innerHTML = `Welcome ${response.fname}! You are well connected ! ( by the server)`;
                document.getElementById("fname").value = "";
                document.getElementById("password").value = "";
            } else {
                console.error("Bad request");
            }

        })
    }
}