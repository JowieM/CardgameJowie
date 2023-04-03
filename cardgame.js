const fs = require('fs');

const args = process.argv.slice(2);


if (args.length !== 2) {
  console.log('Usage: node cardgame.js abc.txt xyz.txt');
  return;
}

let data = "This is a file containing a collection of movies.";
  
fs.writeFile("abc.txt", data,
  {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("Player1:QC,6H,7H,4C,AH \n");
	  console.log("Player2:8D,10C,8C,KD,7S\n");
	  console.log("Player3:10H,10H,QS,KC,QS\n");
	  console.log("Player4:7H,5H,3D,5S,6H\n");
	  console.log("Player5:5C,7D,QC,7C,4C\n");
	  conole.log("Player6:6D,2S,9S,6S,3S\n");
	  
	  
	  
      console.log(fs.readFileSync('abc.txt', 'utf8'));
    }
});


const inputFilePath = args[0];
const outputFilePath = args[1];

try {
  const lines = fs.readFileSync('abc.txt', 'utf-8').split('\n');

  // Parse input data and calculate scores
  const players = parseInput(lines);
  calculateScores(players);

  // Determine winner(s)
  const winners = determineWinners(players);

  // Write output file
  writeOutput(winners, outputFilePath);
  
  
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('Error: Input file not found.');
  } else {
	  
    console.error(`Error: ${err.message}`);
  }
}

  
// Use fs.readFile() method to read the file
fs.readFile('xyz.txt', 'utf8', function(err, data){
      
    // Display the file content
    console.log(data);
});
  
console.log('readFile called');


function parseInput(lines) {
  // TODO: Implement input parsing
}

function calculateScores(players) {
  // TODO: Implement score calculation
}

function determineWinners(players) {
  // TODO: Implement winner determination
}

function writeOutput( winners,outputFilePath )
 {
    const winnerNames = winners.map(winner => winner.Name);
  const output = `Winner(s): ${winnerNames.join(', ')
  }`;
  

  fs.writeFileSync(outputFilePath, output);
 
  
}
