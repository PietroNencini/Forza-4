
const ROWS = 6;
const COLS = 7;

const COLOR_1 = "red";
const COLOR_2 = "yellow"

let red_img = "./images/red.png";
let yellow_img = "./images/yellow.png";

let turno_rosso = true;

let game_table = document.getElementById("tabella_gioco");
let logical_table = [ 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0] ];

function piazza_pedina(column) {
    for(let i = 5; i >= 0; i--) {
        if(logical_table[i][column-1] == 0) {
            logical_table[i][column-1] = turno_rosso ? 1 : 2;

            let game_rows = game_table.getElementsByTagName("tr");
            let riga_dove_piazzare = game_rows[i+1];
            let game_cols = riga_dove_piazzare.getElementsByTagName("td");
            let colonna_dove_piazzare = game_cols[column -1];
            
            //colonna_dove_piazzare.style.backgroundColor = turno_rosso ? COLOR_1 : COLOR_2;
            colonna_dove_piazzare.innerHTML = "";
            colonna_dove_piazzare.appendChild();
            turno_rosso = !turno_rosso;
            break;
        }
    }
    check_winner();
}

function check_winner() {
    
}