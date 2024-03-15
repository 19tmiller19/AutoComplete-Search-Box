let availableKeywords = [
    'html', 'CSS','easy', 'New York Jets', 'New York Giants', 'Dallas Cowboys', 'Chicago Bears', 'Tennesse Titans', 'Los Angelos Chargers',
    'Philidelphia Eagles',' Washington Commanders', 'Buffalo Bills', 'New England Patriots', 'Houston Texans', 'Kansas City Chiefs',
    'Jacksonville Jaquars', 'Tampa Bay Bucceneers','Carolina Panthers', 'Minnesota Vikings', 'Los Angelos Rams', 'Miami Dolphins',
    'Cleveland Browns','Atlanta Falcons', 'Pittsburgh Steelers', 'New Orlean Saints', 'Las Vegas Raiders','Detroit Lions','San Francisco 49ers',
    'Arizona Cardinals','Seattle Seahawks', 'Indionapolis Colts', 'Baltimore Ravens','Denver Broncos','Cincinati Bengals', 'Green Bay Packers'

];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() { // when we start typing the function will be executed
    let result =[]; // will create one array to store all filtered keywords
    let input = inputBox.value;  // will store input apllicaple in the input box

    if(input.length){ // if input has some value then it will store the data in result
        result = availableKeywords.filter((keyword)=>{//keyword will get each value one by one in the array
            return keyword.toLowerCase().includes(input.toLowerCase());//All input values will be in lower case
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

//function to display the reult:
function display(result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this)>" + list +"</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}