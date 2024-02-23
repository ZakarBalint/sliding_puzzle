let puzzle_array = [1,2,3,4,5,6,7,8,' '];
const sorted_array = [1,2,3,4,5,6,7,8,' '];
let width = 3;
let moves = 0;

do
{
    shuffle();
}
while(!isPuzzleSolveable(puzzle_array));

//puzzle_array = [1,2,3,4,5,6,7,' ',8]

display();

function shuffle()
{
    for(let i = puzzle_array.length -1; i > 0; i--)
    {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        [puzzle_array[i], puzzle_array[randomIndex]] = [puzzle_array[randomIndex], puzzle_array[i]]
    }    
}

function isPuzzleSolveable(puzzle)
{
    let parity = 0;
    let gridWidth = Math.sqrt(puzzle.length);
    let row = 0; // the current row we are on
    let blankRow = 0; // the row with the blank tile

    for (let i = 0; i < puzzle.length; i++)
    {
        if (i % gridWidth == 0) { // advance to next row
            row++;
        }
        if (puzzle[i] == 0) { // the blank tile
            blankRow = row; // save the row on which encountered
            continue;
        }
        for (let j = i + 1; j < puzzle.length; j++)
        {
            if (puzzle[i] > puzzle[j] && puzzle[j] != 0)
            {
                parity++;
            }
        }
    }

    if (gridWidth % 2 == 0) { // even grid
        if (blankRow % 2 == 0) { // blank on odd row; counting from bottom
            return parity % 2 == 0;
        } else { // blank on even row; counting from bottom
            return parity % 2 != 0;
        }
    } else { // odd grid
        return parity % 2 == 0;
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
        if(isPuzzleMoveable(selected_puzzle_index, empty_puzzle_index))
        {
            [puzzle_array[selected_puzzle_index], puzzle_array[empty_puzzle_index]] = [puzzle_array[empty_puzzle_index], puzzle_array[selected_puzzle_index]];            
            display();
            moves++;

            if(isPuzzleSolved())
            {
                puzzleSolved();
            }
        }
    }
}

function isPuzzleMoveable(selected_puzzle_index, empty_puzzle_index)
{
    if(selected_puzzle_index + 1 == empty_puzzle_index || selected_puzzle_index - 1 == empty_puzzle_index ||
        selected_puzzle_index + 3 == empty_puzzle_index || selected_puzzle_index - 3 == empty_puzzle_index)
        {
            return true;
        }
        else
        {            
            return false;
        }
}

function isPuzzleSolved()
{
    return JSON.stringify(puzzle_array) === JSON.stringify(sorted_array);
}

function puzzleSolved()
{
    var mezok = document.querySelectorAll("#tabla div");

    for(let i = 0; i < mezok.length; i++)
    {        
        mezok[i].removeEventListener("click", movePuzzle);
    }

    document.getElementById("num_moves").innerText += moves;
    document.getElementById("win_div").style.display = "block";   
}

const new_game_btn = document.getElementById("new_game_btn")

new_game_btn.addEventListener("click", function() {
    location.reload();
})