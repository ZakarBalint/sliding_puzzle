let puzzle_array = [1,2,3,4,5,6,7,8," "];

shuffle();

function shuffle()
{
    for(let i = puzzle_array.length -1; i > 0; i--)
    {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        [puzzle_array[i], puzzle_array[randomIndex]] = [puzzle_array[randomIndex], puzzle_array[i]]
    }

    display();
}

const asd_div = document.getElementById("asd");

function display()
{
    var doc = document.querySelectorAll("#asd span");

    for(let i = 0; i < 8; i++)
    {
        asd_div.childNodes[i].innerText = puzzle_array[i];

        console.log(puzzle_array[i]);
    } 
}
