// zorgt ervoor dat we verder kunnen wanneer heel het document geladen is.
$(document).ready(function () {
    //het id van de input waarin we gaan zoeken, met een keyup function zodat het begint te werken
    // op moment dat we beginnen met typen en een callback function
    $('#search').on('keyup', function (e) {
    
            let name = e.target.value;
            console.log(name)
            let pokename = name.toLowerCase()

        // Willen een ajax request naar de API, waar we de info vandaan halen.
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokename

            // de done want we krijgen een response
        }).done(function (name) {
            console.log(name)
            // we willen de info die we verkrijgen in de HTML krijgen.
            $('#picture').html(` <img src=${name.sprites.front_shiny}>`);
            $('#stats').html(`
           
<strong>name</strong>: ${name.name}<br>
<strong>id</strong>: ${name.id}<br>
<strong>moves</strong>:<ol>
           <li>  ${name.moves[0].move.name}</li>
<li>  ${name.moves[1].move.name}</li>
<li>  ${name.moves[2].move.name}</li>
<li>  ${name.moves[3].move.name}</li>
</ol>
`)
        });
     });
});