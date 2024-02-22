let puzzle_array = [1,2,3,4,5,6,7,8,' '];
let width = 3;

let numberInversions = 0;

shuffle();

display();

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

    for(let i = 0; i < puzzle_array.length - 1; i++)
    {
        if(puzzle_array[i] == ' ') 
        {
            continue;
        }
        
        for (let j = i+1; j < puzzle_array.length; j++) 
        {
            if ((puzzle_array[i] > puzzle_array[j]) && (puzzle_array[j] != ' '))
            {
                numberInversions++;
            }                
        }        
    }
}

function GetRowNumberFromBelow()
{
    let row = puzzle_array.indexOf(' ') / 3;

    return width - row;
}
 
function isSlidePuzzleSolvable()
{
    numberInversions = numberOfInversions();

    if (width % 2 != 0)
    {
        return (numberInversions % 2 == 0);
    }        

    let rowNumber = GetRowNumberFromBelow();
 
    if (rowNumber % 2 != 0)
    {
        return (numberInversions % 2 == 0);
    }        
    else
    {
        return (numberInversions % 2 != 0);
    }
}

function display()
{
    var mezok = document.querySelectorAll("#tabla div");

    for(let i = 0; i < mezok.length; i++)
    {
        mezok[i].innerText = puzzle_array[i];
        mezok[i].addEventListener("click", movePuzzle);
    }
}

function movePuzzle()
{
    let selected_puzzle_index = puzzle_array.indexOf(parseInt(this.innerText));
    let empty_puzzle_index = puzzle_array.indexOf(' ');

    if(selected_puzzle_index != -1)
    {
        if(isPuzzleMovable(selected_puzzle_index, empty_puzzle_index))
        {

        }
    }

}

function isPuzzleMovable(selected_puzzle_index, empty_puzzle_index)
{
    if(selected_puzzle_index++ == empty_puzzle_index || selected_puzzle_index-- == empty_puzzle_index ||
        selected_puzzle_index - 3 == empty_puzzle_index || selected_puzzle_index + 3 == empty_puzzle_index)
        {
            return true;
        }
        else
        {
            return false;
        }
}