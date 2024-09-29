
const ROWS = 6;
const COLS = 7;

const COLOR_1 = "red";
const COLOR_2 = "yellow"

let turno_rosso = true;

let game_table = document.getElementById("tabella_gioco");
let logical_table = [ 
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0] ];

function updateGameTurn() {
    let turn_paragraph = document.getElementById("turn_updater");
    if(turno_rosso) {
        turn_paragraph.innerHTML = "TURNO DI <b> ROSSO </b>";
        turn_paragraph.style.color = "red";
    } else {
        turn_paragraph.innerHTML = "TURNO DI <b> GIALLO </b>";
        turn_paragraph.style.color = "yellow";
    }
    turno_rosso = !turno_rosso;
}


function piazza_pedina(column) {
    for(let i = 5; i >= 0; i--) {
        if(logical_table[i][column-1] == 0) {
            logical_table[i][column-1] = turno_rosso ? 1 : 2;

            let game_rows = game_table.getElementsByTagName("tr");
            let riga_dove_piazzare = game_rows[i+1];
            let game_cols = riga_dove_piazzare.getElementsByTagName("td");
            let colonna_dove_piazzare = game_cols[column -1];
            
            //colonna_dove_piazzare.style.backgroundColor = turno_rosso ? COLOR_1 : COLOR_2;
            let pedina_colorata = colonna_dove_piazzare.getElementsByClassName('bi')[0];
            
            pedina_colorata.style.color = turno_rosso ? "yellow" : "red";
            //pedina_colorata.classList.add(turno_rosso ? "bg-danger" : "bg-warning");
            updateGameTurn();
            break;
        }
    }
    check_winner();
}

function check_winner() {
    
}