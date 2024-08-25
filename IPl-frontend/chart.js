
const iplData = {
   "2020": {
    "Most Runs": [
      {
        "name": "KL Rahul",
        "runs": "670"
      },
      {
        "name": "Shikhar Dhawan",
        "runs": "618"
      },
      {
        "name": "David Warner",
        "runs": "548"
      },
      {
        "name": "Shreyas Iyer",
        "runs": "519"
      },
      {
        "name": "Ishan Kishan",
        "runs": "516"
      },
      {
        "name": "Quinton de Kock",
        "runs": "503"
      },
      {
        "name": "Suryakumar Yadav",
        "runs": "480"
      },
      {
        "name": "Devdutt Padikkal",
        "runs": "473"
      },
      {
        "name": "Virat Kohli",
        "runs": "466"
      },
      {
        "name": "AB de Villiers",
        "runs": "454"
      }
    ]
  },
  "2021": {
    "Most Runs": [
      {
        "name": "Ruturaj Gaikwad",
        "runs": "635"
      },
      {
        "name": "Faf du Plessis",
        "runs": "633"
      },
      {
        "name": "KL Rahul",
        "runs": "626"
      },
      {
        "name": "Shikhar Dhawan",
        "runs": "587"
      },
      {
        "name": "Glenn Maxwell",
        "runs": "513"
      },
      {
        "name": "Sanju Samson",
        "runs": "484"
      },
      {
        "name": "Prithvi Shaw",
        "runs": "479"
      },
      {
        "name": "Shubman Gill",
        "runs": "478"
      },
      {
        "name": "Mayank Agarwal",
        "runs": "441"
      },
      {
        "name": "Rishabh Pant",
        "runs": "419"
      }
    ]
  },
  "2022": {
    "Most Runs": [
      {
        "name": "Jos Buttler",
        "runs": "863"
      },
      {
        "name": "K L Rahul",
        "runs": "616"
      },
      {
        "name": "Quinton De Kock",
        "runs": "508"
      },
      {
        "name": "Hardik Pandya",
        "runs": "487"
      },
      {
        "name": "Shubman Gill",
        "runs": "483"
      },
      {
        "name": "David Miller",
        "runs": "481"
      },
      {
        "name": "Faf Du Plessis",
        "runs": "468"
      },
      {
        "name": "Shikhar Dhawan",
        "runs": "460"
      },
      {
        "name": "Sanju Samson",
        "runs": "458"
      },
      {
        "name": "Deepak Hooda",
        "runs": "451"
      }
    ]
  },
  "2023": {
    "Most Runs": [
      {
        "name": "Shubman Gill",
        "runs": "890"
      },
      {
        "name": "Faf Du Plessis",
        "runs": "730"
      },
      {
        "name": "Devon Conway",
        "runs": "672"
      },
      {
        "name": "Virat Kohli",
        "runs": "639"
      },
      {
        "name": "Yashasvi Jaiswal",
        "runs": "625"
      },
      {
        "name": "Suryakumar Yadav",
        "runs": "605"
      },
      {
        "name": "Ruturaj Gaikwad",
        "runs": "590"
      },
      {
        "name": "David Warner",
        "runs": "516"
      },
      {
        "name": "Rinku Singh",
        "runs": "474"
      },
      {
        "name": "Ishan Kishan",
        "runs": "454"
      }
    ]
  },
  "2024": {
    "Most Runs": [
      {
        "name": "Virat Kohli",
        "runs": "741"
      },
      {
        "name": "Ruturaj Gaikwad",
        "runs": "583"
      },
      {
        "name": "Riyan Parag",
        "runs": "573"
      },
      {
        "name": "Travis Head",
        "runs": "567"
      },
      {
        "name": "Sanju Samson",
        "runs": "531"
      },
      {
        "name": "Sai Sudharsan",
        "runs": "527"
      },
      {
        "name": "K L Rahul",
        "runs": "520"
      },
      {
        "name": "Nicholas Pooran",
        "runs": "499"
      },
      {
        "name": "Sunil Narine",
        "runs": "488"
      },
      {
        "name": "Abhishek Sharma",
        "runs": "484"
      }
    ]
  }
  };
  
 
  const seasons = Object.keys(iplData);
  const playersData = seasons.map(season => {
      return iplData[season]["Most Runs"].map(player => ({
          season,
          name: player.name,
          runs: parseInt(player.runs)
      }));
  }).flat();
  
 
  const uniquePlayers = [...new Set(playersData.map(player => player.name))];
  
  
  const datasets = uniquePlayers.map(player => {
      return {
          label: player,
          data: seasons.map(season => {
              const playerData = playersData.find(p => p.season === season && p.name === player);
              return playerData ? playerData.runs : 0;
          }),
          fill: false,
          borderColor: getRandomColor(), 
          tension: 0.1
      };
  });
  
  function getRandomColor() {
      return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }


const ctx = document.getElementById('iplChart').getContext('2d');

const iplChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: seasons,
        datasets: datasets
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Runs'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Season'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'IPL Most Runs by Player (2020-2024)'
            }
        }
    }
});
  