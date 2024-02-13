let puzzle_array = [1,2,3,4,5,6,7,8,' '];
let width = 3;

shuffle();

function shuffle()
{
    for(let i = puzzle_array.length -1; i > 0; i--)
    {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        [puzzle_array[i], puzzle_array[randomIndex]] = [puzzle_array[randomIndex], puzzle_array[i]]
    }    

    
}

function numberOfInversions()
{
    let numberInversions = 0;

    for(let i = 0; i < puzzle_array.length - 1; i++)
    {
        if(puzzle_array[i] == ' ') continue;
        
        for (let j = i+1; j < puzzle_array.length; j++) {
            if ((puzzle_array[i] > puzzle_array[j]) && (puzzle_array[j] != ' '))
                numberInversions++;
        }

        return numberInversions;
    }    
}

function GetRowNumberFromBelow()
{
    let row = puzzle_array.findIndex(' ') / 3;
 
    return width - row;
}
 
function isSlidePuzzleSolvable()
{

    if (width % 2 != 0)
        return (numberOfInversions % 2 == 0);
 
    let rowNumber = GetRowNumberFromBelow();
 
    if (rowNumber % 2 != 0)
        return (numberOfInversions % 2 == 0);
    else
        return (numberOfInversions % 2 != 0);
}

function display()
{
    var doc = document.querySelectorAll("#asd div");

    for(let i = 0; i < doc.length; i++)
    {
        doc[i].innerText = puzzle_array[i];           
    } 
}

