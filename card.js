$(document).ready(function() {

  var teamData = [
    {
      id:"1",
      "teamName" : "CSK",
      "teamIcon" : "",
      "playerCount" : "22",
      "topBatsmen": "Faf du Plessis",
      "topBowler": "Dwayne Bravo",
      "champoinshipWonCount": "3"
    },
    {
      id:"2",
      "teamName" : "RCB",
      "teamIcon" : "",
      "playerCount" : "18",
      "topBatsmen": "Virat Kohli",
      "topBowler": "Harshal Patel",
      "champoinshipWonCount": "0"
    },
    {
      id:"3",
      "teamName" : "KKR",
      "teamIcon" : "",
      "playerCount" : "17",
      "topBatsmen": "Shubman Gill",
      "topBowler": "Pat Cummins",
      "champoinshipWonCount": "2"
    },
    {
      id:"4",
      "teamName" : "PUNJAB",
      "teamIcon" : "",
      "playerCount" : "20",
      "topBatsmen": "KL Rahul",
      "topBowler": "Mohammad Shami",
      "champoinshipWonCount": "0"
    },
    {
      id:"5",
      "teamName" : "DC",
      "teamIcon" : "",
      "playerCount" : "21",
      "topBatsmen": "Shikhar Dhawan",
      "topBowler": "Avesh Khan",
      "champoinshipWonCount": "0"
    },
    {
      id:"6",
      "teamName" : "SRH",
      "teamIcon" : "",
      "playerCount" : "17",
      "topBatsmen": "Jonny Bairstow",
      "topBowler": "Rashid Khan",
      "champoinshipWonCount": "1"
    },
    {
      id:"7",
      "teamName" : "RR",
      "teamIcon" : "",
      "playerCount" : "24",
      "topBatsmen": "Sanju Samson",
      "topBowler": "Chris Morris",
      "champoinshipWonCount": "1"
    },
    {
      id:"8",
      "teamName" : "MI",
      "teamIcon" : "",
      "playerCount" : "22",
      "topBatsmen": "Rohit Sharma",
      "topBowler": "Rahul Chahar",
      "champoinshipWonCount": "5"
    }
  ];

let playerArr=[

  {
    id:"52",
    "isPlaying":true,

"fullName":"MS Dhoni (c)",
    "from":"dccsk",
    "price":"10cr",
    "PlayingStates":"Playing",
    "photo":"https://static.iplt20.com/players/210/1.png",
    "role":"batsmanBatsman"
},{
    
  id:"53", 
  "isPlaying":true,
  "fullName":"Robin uthappa",
    "from":"dccsk",
    "price":"5cr",
    "PlayingStates":"Playing",
    "photo":"https://static.iplt20.com/players/210/127.png",
    "role":"batsmanBatsman"
},{
    
  id:"54",
  "isPlaying":true, 
  "fullName":"Ruturaj GaikWad",
    "from":"dccsk",
    "price":"3cr",
    "PlayingStates":"Playing",
    "photo":"https://static.iplt20.com/players/210/5443.png",
    "role":"batsman All-rounder"
}, {
    
  id:"55",
  "isPlaying":true, 
  "fullName":"Ravindra Jadeja",
    "from":"dccsk",
    "price":"3cr",
    "PlayingStates":"Playing",
    "photo":"https://static.iplt20.com/players/210/9.png",
    "role":"batsman All-rounder"
 },
//  {
    
//   id:"56",
//   "isPlaying":true, 
//   "fullName":"Suresh Raina",
//     "from":"dccsk",
//     "price":"3cr",
//     "PlayingStates":"Playing",
//     "photo":"https://static.iplt20.com/players/210/14.png",
//     "role":"batsmanbatsman"
// },{
    
//   id:"57",
//   "isPlaying":true, 
//   "fullName":"sam curran",
//     "from":"dccsk",
//     "price":"3cr",
//     "PlayingStates":"Playing",
//     "photo":"https://static.iplt20.com/players/210/2939.png",
//     "role":"batsmanall rounder"
// },{
    
//   id:"58",
//   "isPlaying":true, 
//   "fullName":"sardul thakur",
//     "from":"dccsk",
//     "price":"3cr",
//     "PlayingStates":"Playing",
//     "photo":"https://static.iplt20.com/players/210/1745.png",
//     "role":"batsmanbowler"
// },{
    
//   id:"59",
//   "isPlaying":true, 
//   "fullName":"Ambati Rayudu",
//     "from":"dccsk",
//     "price":"5cr",
//     "PlayingStates":"playing",
//     "photo":"https://static.iplt20.com/players/210/100.png",
//     "role":"batsmanbatsman"
// },{
    
//   id:"60",
//   "isPlaying":false, 
//   "fullName":"Mitchell Santner",
//     "from":"dccsk",
//     "price":"1.5cr",
//     "PlayingStates":"on-banch",
//     "photo":"https://static.iplt20.com/players/210/1903.png",
//     "role":"batsmanall rounder"
// },{
    
//   id:"61", 
//   "isPlaying":false,
//   "fullName":"c pujara",
//     "from":"dccsk",
//     "price":"1cr",
//     "PlayingStates":"on-banch",
//     "photo":"https://static.iplt20.com/players/210/156.png",
//     "role":"batsmanbatsman"
// },{
    
//   id:"62",
//   "isPlaying":true, 
//   "fullName":"moeen ali",
//     "from":"dccsk",
//     "price":"8cr",
//     "PlayingStates":"playing",
//     "photo":"https://static.iplt20.com/players/210/1735.png",
//     "role":"batsmanall rounder"
// }, {
    
//   id:"63",
//   "isPlaying":false, 
//   "fullName":"Lungi Ngidi",
//     "from":"dccsk",
//     "price":"",
//     "PlayingStates":"on-banch",
//     "photo":"https://static.iplt20.com/players/210/3746.png",
//     "role":"batsmanbowler"
// }, {
    
//   id:"64", 
//   "isPlaying":true,
//   "fullName":"Ruturaj Gaikwad",
//     "from":"dccsk",
//     "price":"3cr",
//     "PlayingStates":"playing",
//     "photo":"https://static.iplt20.com/players/210/5443.png",
//     "role":"batsmanbatsman"
// }, 


    {
      id:"1",

      "isPlaying":true,
" fullName" : "Sanju Samson",
      "photo": "https://static.iplt20.com/players/284/258.png",
      "team" : "RR",
      "price": "8 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"2",

      "isPlaying":true,
" fullName" : "Ben Stokes",
      "photo": "https://static.iplt20.com/players/284/1154.png",
      "team" : "RR",
      "price": "12.5 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"3",
      "isPlaying":true,

" fullName" : "Jos Buttler",
      "photo": "https://static.iplt20.com/players/284/509.png",
      "team" : "RR",
      "price": "4.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"4",

      "isPlaying":true,
" fullName" : "Rahul Tewatia",
      "photo": "https://static.iplt20.com/players/284/1749.png",
      "team" : "RR",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"5",
      "isPlaying":false,

" fullName" : "Jaydev Unadkat",
      "photo": "https://static.iplt20.com/players/284/86.png",
      "team" : "RR",
      "price": "3 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"6",
      "isPlaying":true,

" fullName" : "Christopher Morris",
      "photo": "https://static.iplt20.com/players/284/836.png",
      "team" : "RR",
      "price": "16.25 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"7",
      "isPlaying":true,

" fullName" : "Shivam Dube",
      "photo": "https://static.iplt20.com/players/284/5431.png",
      "team" : "RR",
      "price": "4.4  Crores",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"8",

      "isPlaying":true,
" fullName" : "Andrew Tye",
      "photo": "https://static.iplt20.com/players/284/1480.png",
      "team" : "RR",
      "price": "1 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"9",
      "isPlaying":true,

" fullName" : "David Miler",
      "photo": "https://static.iplt20.com/players/284/187.png",
      "team" : "RR",
      "price": "75 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"10",
      "isPlaying":true,

" fullName" : "Mahipal Lomror",
      "photo": "https://static.iplt20.com/players/284/2970.png",
      "team" : "RR",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"11",
      "isPlaying":true,

" fullName" : "Shreyas Gopal",
      "photo": "https://static.iplt20.com/players/284/1748.png",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
//     {
//       id:"12",

//       "isPlaying":true,
// " fullName" : "Chetan Sakariya",
//       "photo": "https://static.iplt20.com/players/284/11062.png",
//       "team" : "RR",
//       "price": "1.2 crore",
//       "playingStatus": "On-bench",
//       "role": "Bowler",
//     },
//     {
//       id:"13",

//       "isPlaying":true,
// " fullName" : "Mustafizur Rahman",
//       "photo": "https://static.iplt20.com/players/284/1594.png",
//       "team" : "RR",
//       "price": "1 crore",
//       "playingStatus": "On-bench",
//       "role": "Bowler",
//     },
//     {
//       id:"14",
//       "isPlaying":true,

// " fullName" : "Liam Livingstone",
//       "photo": "https://static.iplt20.com/players/284/3644.png",
//       "team" : "RR",
//       "price": "75 Lacs",
//       "playingStatus": "On-bench",
//       "role": "Batsman",
//     },
//     {
//       id:"15",
//       "isPlaying":false,

// " fullName" : "Yashasvi Jaiswal",
//       "photo": "https://static.iplt20.com/players/284/13538.png",
//       "team" : "RR",
//       "price": "2.4 Crores",
//       "playingStatus": "On-bench",
//       "role": "Batsman",
//     },
//     {
//       id:"16",
//       "isPlaying":false,

// " fullName" : "Kartik Tyagi",
//       "photo": "https://static.iplt20.com/players/284/10059.png",
//       "team" : "RR",
//       "price": "1.3 Crores",
//       "playingStatus": "On-bench",
//       "role": "Bowler",
//     },
//     {
//       id:"17",
//       "isPlaying":true,

// " fullName" : "Mayank Markande",
//       "photo": "https://static.iplt20.com/players/284/4951.png",
//       "team" : "RR",
//       "price": "20 Lacs",
//       "playingStatus": "Playing",
//       "role": "Bowler",
//     }
,
    {id:"18",
    "isPlaying":true,      
    "fullName" : "Rohit Sharma",
    "photo": "https://static.iplt20.com/players/210/107.png",
    "team" : "MI",
    "price": "15 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"19",
    "isPlaying":true,
    "fullName" : "Hardik Pandya",
    "photo": "https://static.iplt20.com/players/210/2740.png",
    "team" : "MI",
    "price": "11 Crores",
    "playingStatus": "Playing",
    "role": "All-Rounder",
  },
  {
    id:"20",
    "isPlaying":true,
    "fullName" : "Krunal Pandya",
    "photo": "https://static.iplt20.com/players/210/3183.png",
    "team" : "MI",
    "price": "8.8 Crores",
    "playingStatus": "Playing",
    "role": "All-Rounder",
  },
  {
    id:"21",
    "isPlaying":true,
    "fullName" : "Jasprit Bumrah",
    "photo": "https://static.iplt20.com/players/210/1124.png",
    "team" : "MI",
    "price": "7 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"22",
    "isPlaying":false,
    "fullName" : "Ishan Kishan",
    "photo": "https://static.iplt20.com/players/210/2975.png",
    "team" : "MI",
    "price": "6.2 Crores",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"23",
    "isPlaying":true,

    "fullName" : "Kieron Pollard",
    "photo": "https://static.iplt20.com/players/210/210.png",
    "team" : "MI",
    "price": "5.4 Crores",
    "playingStatus": "Playing",
    "role": "All-rounder",
  },
  {
    id:"24",
    "isPlaying":true,
    "fullName" : "Suryakumar Yadav",
    "photo": "https://static.iplt20.com/players/210/108.png",
    "team" : "MI",
    "price": "3.2  Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"25",
    "isPlaying":true,
    "fullName" : "Quinton de Kock",
    "photo": "https://static.iplt20.com/players/210/834.png",
    "team" : "MI",
    "price": "2.8 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"26",
    "isPlaying":true,
    "fullName" : "Trent Boult",
    "photo": "https://static.iplt20.com/players/210/969.png",
    "team" : "MI",
    "price": "2.2 crore",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  // {
  //   id:"27",
  //   "isPlaying":true,
  //   "fullName" : "Rahul Chahar",
  //   "photo": "https://static.iplt20.com/players/210/3763.png",
  //   "team" : "MI",
  //   "price": "1.9 Crores",
  //   "playingStatus": "Playing",
  //   "role": "Bowler",
  // },
  // {
  //   id:"28",
  //   "isPlaying":true,
  //   "fullName" : "Chris Lynn",
  //   "photo": "https://static.iplt20.com/players/210/179.png",
  //   "team" : "MI",
  //   "price": "2 Crores",
  //   "playingStatus": "Playing",
  //   "role": "Batsman",
  // },
  // {
  //   id:"29",
  //   "isPlaying":false,
  //   "fullName" : "Anmolpreet Singh",
  //   "photo": "https://static.iplt20.com/players/210/2965.png",
  //   "team" : "MI",
  //   "price": "80 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "Batsman",
  // },
  // {
  //   id:"30",
  //   "isPlaying":false,
  //   "fullName" : "Anukul Roy",
  //   "photo": "https://static.iplt20.com/players/210/3774.png",
  //   "team" : "MI",
  //   "price": "20 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "All-Rounder",
  // },
  // {
  //   id:"31",
  //   "isPlaying":false,
  //   "fullName" : "Aditya Tare",
  //   "photo": "https://static.iplt20.com/players/210/99.png",
  //   "team" : "MI",
  //   "price": "20 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "Batsman",
  // },
  // {
  //   id:"32",
  //   "isPlaying":false,
  //   "fullName" : "Dhawal Kulkarni",
  //   "photo": "https://static.iplt20.com/players/210/101.png",
  //   "team" : "MI",
  //   "price": "75 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "Bowler",
  // },
  // {
  //   id:"33",
  //   "isPlaying":false,
  //   "fullName" : "Jayant Yadav",
  //   "photo": "https://static.iplt20.com/players/210/1740.png",
  //   "team" : "MI",
  //   "price": "20 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "Bowler",
  // },
  // {
  //   id:"34",
  //   "isPlaying":true,
  //   "fullName" : "Mohsin Khan",
  //   "photo": "https://static.iplt20.com/players/210/4952.png",
  //   "team" : "MI",
  //   "price": "20 Lacs",
  //   "playingStatus": "Playing",
  //   "role": "Bowler",
  // },
    {
        
      id:"35",
      "isPlaying":true,
             "fullName" : "ViratKohli",
             "photo": "https://static.iplt20.com/players/284/164.png",
             "team" : "RCB",
             "price": "17 Crores",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           {
             
      id:"36",
      "isPlaying":true,
             "fullName" : "AB de Villiers",
             "photo": "https://static.iplt20.com/players/284/233.png",
             "team" : "RCB",
             "price": "11 Crores",
             "playingStatus": "Playing",
             "role": "Batsman",
           },
           {
             
      id:"37",
      "isPlaying":true,
             "fullName" : "Yuzvendra Chahal",
             "photo": "https://static.iplt20.com/players/284/111.png",
             "team" : "RCB",
             "price": "6 Crores",
             "playingStatus": "Playing",
             "role": "Bowler",
           },
           {
             
      id:"38",
      "isPlaying":true,
             "fullName" : "Glenn Maxwell",
             "photo": "https://static.iplt20.com/players/284/282.png",
             "team" : "RCB",
             "price": "14.25 Crores",
             "playingStatus": "Playing",
             "role": "All-rounder",
           },
           {
             
      id:"39",
      "isPlaying":false,
             "fullName" : "Kane Richardson",
             "photo": "https://static.iplt20.com/players/284/798.png",
             "team" : "RCB",
             "price": "4 Crores",
             "playingStatus": "On-bench",
             "role": "Bowler",
           },
           {
             
      id:"40",
      "isPlaying":true,
             "fullName" : "Kyle Jamieson",
             "photo": "https://static.iplt20.com/players/284/1616.png",
             "team" : "RCB",
             "price": "15 Crores",
             "playingStatus": "Playing",
             "role": "All-rounder",
           },
           {
             
      id:"41",
      "isPlaying":true,
             "fullName" : "Washington Sundar",
             "photo": "https://static.iplt20.com/players/284/2973.png",
             "team" : "RCB",
             "price": "3.2  Crores",
             "playingStatus": "Playing",
             "role": "All-Rounder",
           },
           {
             
      id:"42",
      "isPlaying":true,
             "fullName" : "Navdeep Saini",
             "photo": "https://static.iplt20.com/players/284/3824.png",
             "team" : "RCB",
             "price": "3 Crores",
             "playingStatus": "Playing",
             "role": "Bowler",
           },
      //      {
             
      // id:"43",
      // "isPlaying":true,
      //        "fullName" : "Daniel Christian",
      //        "photo": "https://static.iplt20.com/players/284/181.png",
      //        "team" : "RCB",
      //        "price": "4.8 Crores",
      //        "playingStatus": "Playing",
      //        "role": "All-Rounder",
      //      },
      //      {
             
      // id:"44",
      // "isPlaying":true,
      //        "fullName" : "Adam Zampa",
      //        "photo": "https://static.iplt20.com/players/284/958.png",
      //        "team" : "RCB",
      //        "price": "1.5 Crores",
      //        "playingStatus": "Playing",
      //        "role": "Bowler",
      //      },
      //      {
             
      // id:"45",
      // "isPlaying":true,
      //        "fullName" : "Devdutt Padikkal",
      //        "photo": "https://static.iplt20.com/players/284/5430.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "Playing",
      //        "role": "Batsman",
      //      },
      //      {
             
      // id:"46",
      // "isPlaying":false,
      //        "fullName" : "Daniel Sams",
      //        "photo": "https://static.iplt20.com/players/284/4649.png",
      //        "team" : "RCB",
      //        "price": "60 Lacs",
      //        "playingStatus": "On-bench",
      //        "role": "All-rounder",
      //      },
      //      {
             
      // id:"47",
      // "isPlaying":false,
      //        "fullName" : "Sachin Baby ",
      //        "photo": "https://static.iplt20.com/players/284/1115.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "On-bench",
      //        "role": "Batsman",
      //      },
      //      {
             
      // id:"48",
      // "isPlaying":false,
      //        "fullName" : "Rajat Patidar",
      //        "photo": "https://static.iplt20.com/players/284/5471.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "On-bench",
      //        "role": "Bowler",
      //      },
      //      {
             
      // id:"49",
      // "isPlaying":false,
      //        "fullName" : "Mohammed Azharuddeen",
      //        "photo": "https://static.iplt20.com/players/284/7743.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "On-bench",
      //        "role": "Batsman",
      //      },
      //      {
             
      // id:"50",
      // "isPlaying":false,
      //        "fullName" : "Shahbaz Ahmed",
      //        "photo": "https://static.iplt20.com/players/284/13803.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "On-bench",
      //        "role": "Bowler",
      //      },
      //      {
             
      // id:"51",
      // "isPlaying":true,
      //        "fullName" : "Pavan Deshpande",
      //        "photo": "https://static.iplt20.com/players/284/4957.png",
      //        "team" : "RCB",
      //        "price": "20 Lacs",
      //        "playingStatus": "Playing",
      //        "role": "Batsman",
      //      },
           
        
    
  {
    id:"69",
    "isPlaying":true,
    "fullName" : "KL Rahul",
    "photo": "https://static.iplt20.com/players/210/1125.png",
    "team" : "PUB",
    "price": "11 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"70",
    "isPlaying":true,
    "fullName" : "Mohammad Shami",
    "photo": "https://static.iplt20.com/players/210/94.png",
    "team" : "PUB",
    "price": "4.8 Crores",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
  {
    id:"71",
    "isPlaying":true,
    "fullName" : "Nicholas Pooran",
    "photo": "https://static.iplt20.com/players/210/1703.png",
    "team" : "PUB",
    "price": "4.2 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"72",
    "isPlaying":true,
    "fullName" : "Chris Gayle",
    "photo": "https://static.iplt20.com/players/210/236.png",
    "team" : "PUB",
    "price": "2 Crores",
    "playingStatus": "Playing",
    "role": "Batsman",
  },
  {
    id:"73",
    "isPlaying":false,
    "fullName" : "Chris Jordan",
    "photo": "https://static.iplt20.com/players/210/1299.png",
    "team" : "PUB",
    "price": "3 Crores",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  // {
  //   id:"74",
  //   "isPlaying":true,
  //   "fullName" : "Ravi Bishnoi",
  //   "photo": "https://static.iplt20.com/players/210/19351.png",
  //   "team" : "PUB",
  //   "price": "2 Crores",
  //   "playingStatus": "Playing",
  //   "role": "Bowler",
  // },
  // {
  //   id:"75",
  //   "isPlaying":true,
  //   "fullName" : "Mayank Agarwal",
  //   "photo": "https://static.iplt20.com/players/210/158.png",
  //   "team" : "PUB",
  //   "price": "1 Crores",
  //   "playingStatus": "Playing",
  //   "role": "Batsman",
  // },
  // {
  //   id:"76",
  //   "isPlaying":true,
  //   "fullName" : "Deepak Hooda",
  //   "photo": "https://static.iplt20.com/players/210/1556.png",
  //   "team" : "PUB",
  //   "price": "50 Lacs",
  //   "playingStatus": "Playing",
  //   "role": "Batsman",
  // },
  // {
  //   id:"77",
  //   "isPlaying":true,
  //   "fullName" : "Murugan Ashwin",
  //   "photo": "https://static.iplt20.com/players/210/3187.png",
  //   "team" : "PUB",
  //   "price": "20 Lacs",
  //   "playingStatus": "Playing",
  //   "role": "Bowler",
  // },
  // {
  //   id:"78",
  //   "isPlaying":true,
  //   "fullName" : "Mandeep Singh",
  //   "photo": "https://static.iplt20.com/players/210/72.png",
  //   "team" : "PUB",
  //   "price": "1.4 Crores",
  //   "playingStatus": "Playing",
  //   "role": "Batsman",
  // },
  // {
  //   id:"79",
  //   "isPlaying":true,
  //   "fullName" : "Arshdeep Singh",
  //   "photo": "https://static.iplt20.com/players/210/4698.png",
  //   "team" : "PUB",
  //   "price": "20 Lacs",
  //   "playingStatus": "Playing",
  //   "role": "Bowler",
  // },
  // {
  //   id:"80",
  //   "isPlaying":false,
  //   "fullName" : "Prabhsimran Singh",
  //   "photo": "https://static.iplt20.com/players/210/5436.png",
  //   "team" : "PUB",
  //   "price": "55 Lacs",
  //   "playingStatus": "On-bench",
  //   "role": "Batsman",
  // },
  {
    id:"81",
    "isPlaying":false,
    "fullName" : "Harpreet Brar",
    "photo": "https://static.iplt20.com/players/210/5441.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"82",
    "isPlaying":false,
    "fullName" : "Ishan Porel",
    "photo": "https://static.iplt20.com/players/210/3777.png",
    "team" : "PUB",
    "price": "20 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"83",
    "isPlaying":false,
    "fullName" : "Darshan Nalkandei",
    "photo": "https://static.iplt20.com/players/210/4447.png",
    "team" : "PUB",
    "price": "30 Lacs",
    "playingStatus": "On-bench",
    "role": "Bowler",
  },
  {
    id:"84",
    "isPlaying":false,
    "fullName" : "Sarfaraz Khan",
    "photo": "https://static.iplt20.com/players/210/1564.png",
    "team" : "PUB",
    "price": "25 Lacs",
    "playingStatus": "On-bench",
    "role": "Batsman",
  },
  {
    id:"85",
    "isPlaying":true,
    "fullName" : "Jhye Richardson",
    "photo": "https://static.iplt20.com/players/210/3781.png",
    "team" : "PUB",
    "price": "14 crore",
    "playingStatus": "Playing",
    "role": "Bowler",
  },
    {
      id:"86",
      "isPlaying":true,
      "fullName" : "David Warner",
      "photo": "https://static.iplt20.com/players/210/170.png",
      "team" : "SRH",
      "price": "12 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"87",
      "isPlaying":true,
      "fullName" : "Kane Williamson",
      "photo": "https://static.iplt20.com/players/210/440.png",
      "team" : "SRH",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"88",
      "isPlaying":true,
      "fullName" : "Manish Pandey",
      "photo": "https://static.iplt20.com/players/210/123.png",
      "team" : "SRH",
      "price": "11 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"89",
      "isPlaying":true,
      "fullName" : "Rashid Khan",
      "photo": "https://static.iplt20.com/players/210/2885.png",
      "team" : "SRH",
      "price": "9 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"90",
      "isPlaying":false,
      "fullName" : "Bhuvneshwar Kumar",
      "photo": "https://static.iplt20.com/players/210/116.png",
      "team" : "SRH",
      "price": "8.5 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"91",
      "isPlaying":true,
      "fullName" : "Vijay Shankars",
      "photo": "https://static.iplt20.com/players/210/1083.png",
      "team" : "SRH",
      "price": "3.2 Crores",
      "playingStatus": "Playing",
      "role": "All-rounder",
    },
    {
      id:"92",
      "isPlaying":true,
      "fullName" : "Jonny Bairstow",
      "photo": "https://static.iplt20.com/players/210/506.png",
      "team" : "SRH",
      "price": "2.2  Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"93",
      "isPlaying":true,
      "fullName" : "Priyam Garg",
      "photo": "https://static.iplt20.com/players/210/3775.png",
      "team" : "SRH",
      "price": "1.9 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"94",
      "isPlaying":true,
      "fullName" : "Kedar Jadhav",
      "photo": "https://static.iplt20.com/players/210/297.png",
      "team" : "SRH",
      "price": "2 crore",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"95",
      "isPlaying":true,
      "fullName" : "Jason Holder",
      "photo": "https://static.iplt20.com/players/210/1075.png",
      "team" : "SRH",
      "price": "75 Lacs",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"96",
      "isPlaying":true,
      "fullName" : "Abdul Samad",
      "photo": "https://static.iplt20.com/players/210/19352.png",
      "team" : "SRH",
      "price": "20 Lacs",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"97",
      "isPlaying":false,
      "fullName" : "Abhishek Sharma",
      "photo": "https://static.iplt20.com/players/210/3760.png",
      "team" : "SRH",
      "price": "55 Lacs",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"98",
      "isPlaying":false,
      "fullName" : "Mohammad Nabi",
      "photo": "https://static.iplt20.com/players/210/618.png",
      "team" : "SRH",
      "price": "1 crore",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"99",
      "isPlaying":false,
      "fullName" : "Shreevats Goswami",
      "photo": "https://static.iplt20.com/players/210/95.png",
      "team" : "SRH",
      "price": "1 Crore",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"100",
      "isPlaying":false,
      "fullName" : "Wriddhiman Saha",
      "photo": "https://static.iplt20.com/players/210/16.png",
      "team" : "SRH",
      "price": "1.2 Crores",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"101",
      "isPlaying":false,
      "fullName" : "Mujeeb-ur-Rahman",
      "photo": "https://static.iplt20.com/players/210/4572.png",
      "team" : "SRH",
      "price": "1.5 crore",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"102",
      "isPlaying":true,
      "fullName" : "Virat Singh",
      "photo": "https://static.iplt20.com/players/210/6966.png",
      "team" : "SRH",
      "price": "1.9 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"103",
      "isPlaying":true,

"fullName":"rishabh pant",

      "from":"dc",
      "price":"10cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/2972.png",
      "role":"batsman"
  },
  {
    id:"104",
    "isPlaying":true, 
    "fullName":"ajinkya rahane",
      "from":"dc",
      "price":"4cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/135.png",
      "role":"batsman"
  },
  {
    id:"105", 
    "isPlaying":true,
    "fullName":"avesh khan",
      "from":"dc",
      "price":"2cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/1561.png",
      "role":"bowler"
  },{
    id:"106", 
    "isPlaying":true,
    "fullName":"axar patel",
      "from":"dc",
      "price":"5cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/1113.png",
      "role":"all rounder"
  },{
    id:"107", 
    "isPlaying":true,
    "fullName":"chirs woakes",
      "from":"dc",
      "price":"8cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/967.png",
      "role":"bowler"
  },{
    id:"108", 
    "isPlaying":true,
    "fullName":"kagiso rabada",
      "from":"dc",
      "price":"7cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/1664.png",
      "role":"bowler"
  },{
    id:"109", 
    "isPlaying":true,
    "fullName":"marcus stoinis",
      "from":"dc",
      "price":"10cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/964.png",
      "role":"all rounder"
  },{
    id:"110",
    "isPlaying":true, 
    "fullName":"shikhar dhawan",
      "from":"dc",
      "price":"5cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/41.png",
      "role":"batsman"
  },{
    id:"111", 
    "isPlaying":true,
    "fullName":"prithvi shaw",
      "from":"dc",
      "price":"3cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/3764.png",
      "role":"batsman"
  },{
    id:"112", 
    "isPlaying":true,
    "fullName":"shimron hetmyer",
      "from":"dc",
      "price":"8cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/1705.png",
      "role":"batsman"
  },{
    id:"113", 
    "isPlaying":true,
    "fullName":"ravichandran ashwin",
      "from":"dc",
      "price":"6cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/8.png",
      "role":"bowler"
  },{
    id:"114", 
    "isPlaying":true,
    "fullName":"steve smith",
      "from":"dc",
      "price":"2cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/271.png",
      "role":"batsman"
  },{
    id:"115", 
    "isPlaying":true,
    "fullName":"umesh yadav",
      "from":"dc",
      "price":"2cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/59.png",
      "role":"bowler"
  },{
    id:"116",
    "isPlaying":true, 
    "fullName":"tom curran",
      "from":"dc",
      "price":"3cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/3646.png",
      "role":"bowler"
  },{
    id:"117", 
    "isPlaying":true,
    "fullName":"sam billings",
      "from":"dc",
      "price":"4cr",
      "PlayingStates":"playing",
      "photo":"https://static.iplt20.com/players/210/2756.png",
      "role":"batsman"
  },
     
    {
      id:"118",
      "isPlaying":true,
      "fullName" : "Eoin Morgan",
      "photo": "https://static.iplt20.com/players/210/197.png",
      "team" : "KKR",
      "price": "5.25 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"119",
      "isPlaying":true,
      "fullName" : "Pat Cummins",
      "photo": "https://static.iplt20.com/players/210/488.png",
      "team" : "KKR",
      "price": "15.5 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"120",
      "isPlaying":true,
      "fullName" : "Sunil Narine",
      "photo": "https://static.iplt20.com/players/210/203.png",
      "team" : "KKR",
      "price": "8.5 Crores",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    },
    {
      id:"121",
      "isPlaying":true,
      "fullName" : "Dinesh Karthik",
      "photo": "https://static.iplt20.com/players/210/102.png",
      "team" : "KKR",
      "price": "7.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"122",
      "isPlaying":false,
      "fullName" : "Andre Russell",
      "photo": "https://static.iplt20.com/players/210/177.png",
      "team" : "KKR",
      "price": "7 Crores",
      "playingStatus": "On-bench",
      "role": "All-Rounder",
    },
    {
      id:"123",
      "isPlaying":true,
      "fullName" : "Kuldeep Yadav",
      "photo": "https://static.iplt20.com/players/210/261.png",
      "team" : "KKR",
      "price": "5.8 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"124",
      "isPlaying":true,
      "fullName" : "Varun Chakravarthy",
      "photo": "https://static.iplt20.com/players/210/5432.png",
      "team" : "KKR",
      "price": "4 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"125",
      "isPlaying":true,
      "fullName" : "Shubman Gill",
      "photo": "https://static.iplt20.com/players/210/3761.png",
      "team" : "KKR",
      "price": "1.8 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"126",
      "isPlaying":true,
      "fullName" : "Nitish Rana",
      "photo": "https://static.iplt20.com/players/210/2738.png",
      "team" : "KKR",
      "price": "3.4 Crores",
      "playingStatus": "Playing",
      "role": "Batsman",
    },
    {
      id:"127",
      "isPlaying":true,
      "fullName" : "Kamlesh Nagarkoti",
      "photo": "https://static.iplt20.com/players/210/3766.png",
      "team" : "KKR",
      "price": "3.2 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"128",
      "isPlaying":true,
      "fullName" : "Shivam Mavi",
      "photo": "https://static.iplt20.com/players/210/3779.png",
      "team" : "KKR",
      "price": "3 Crores",
      "playingStatus": "Playing",
      "role": "Bowler",
    },
    {
      id:"129",
      "isPlaying":false,
      "fullName" : "Lockie Ferguson",
      "photo": "https://static.iplt20.com/players/210/3729.png",
      "team" : "KKR",
      "price": "1.6 Crores",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"130",
      "isPlaying":false,
      "fullName" : "Rahul Tripathi",
      "photo": "https://static.iplt20.com/players/210/3838.png",
      "team" : "KKR",
      "price": "60 Lacs",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"131",
      "isPlaying":false,
      "fullName" : "Prasidh Krishna",
      "photo": "https://static.iplt20.com/players/210/5105.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"132",
      "isPlaying":false,
      "fullName" : "Sandeep Warrier",
      "photo": "https://static.iplt20.com/players/210/1092.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Bowler",
    },
    {
      id:"133",
      "isPlaying":false,
      "fullName" : "Tim Seifert",
      "photo": "https://static.iplt20.com/players/210/1619.png",
      "team" : "KKR",
      "price": "20 Lacs",
      "playingStatus": "On-bench",
      "role": "Batsman",
    },
    {
      id:"134",
      "isPlaying":true,
      "fullName" : "Shakib Al Hasan",
      "photo": "https://static.iplt20.com/players/210/201.png",
      "team" : "KKR",
      "price": "3.2 crore",
      "playingStatus": "Playing",
      "role": "All-Rounder",
    }
  
  ];
  

  let main=$("main")
let searchId = window.location.search.split("=")[1];


  function cards(data,n){

    let  carddiv=$("<div>").attr({"class":"card-div","id":data.id})
    main.append(carddiv)
    let cardLink=$("<a>").attr({"href":"home2.html?p="+n})
    carddiv.append(cardLink)
let imgdiv=$("<div>").attr("id","card")
let img=$("<img>").attr("src",data.teamIcon)
imgdiv.append(img)
let textdiv=$("<div>").attr("id","text-div")
let text1=$("<h4>").html("teamName : " )
text1.append($("<span>").html(data.teamName))

textdiv.append(text1)



cardLink.append(imgdiv,textdiv)

return carddiv;
  }

for(let i=0;i<teamData.length;i++){


cards(teamData[i],i)


}


localStorage.setItem("teamdata",JSON.stringify(teamData));
localStorage.setItem("playersNames",JSON.stringify(playerArr));


let localStorageData=localStorage.getItem('teamdata')==null?[]:JSON.parse(localStorage.getItem('temadata'))
let localData=localStorage.getItem('playersNames')==null?[]:JSON.parse(localStorage.getItem('playersNames'))





// console.log()





































})