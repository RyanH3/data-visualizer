// declaring global variables
const screenWidth = 842;
const screenHeight = 463;
const diameter = 5;

let button;
let img;
let artists;

// load in background image and object list of artists
// and samples of their songs
function preload()
{
  img = loadImage('Music Map.png');
  
  artists = 
  [
    {
      name: '2 Mello',
      location: 'Lexington, Kentucky, USA',
      x: screenWidth * 0.361,
      y: screenHeight * 0.799,
      amt: 38,
      image: '/Images/2 Mello.jpg',
      sound: loadSound('/Sounds/2 Mello - Ba-da-Ba Sample.mp3')
    },
    {
      name: '21 Savage',
      location: 'London, United Kingdom',
      x: screenWidth * 0.672,
      y: screenHeight * 0.486,
      amt: 20,
      image: '/Images/21 Savage.jpg',
      sound: loadSound('/Sounds/21 Savage - 4L Sample.mp3')
    },
    {
      name: 'Anderson .Paak',
      location: 'Oxnard, CA, USA',
      x: screenWidth * 0.141,
      y: screenHeight * 0.795,
      amt: 18,
      image: '/Images/Anderson .Paak.jpg',
      sound: loadSound('/Sounds/Anderson .Paak - Tints Sample.mp3')
    },
    {
      name: 'bbno$',
      location: 'Vancouver, Canada',
      x: screenWidth * 0.160,
      y: screenHeight * 0.579,
      amt: 26,
      image: '/Images/bbno$.jpg',
      sound: loadSound('/Sounds/bbno$ - jack money bean Sample.mp3')
    },
    {
      name: 'Bill Clifton',
      location: 'Ruxton, Towson, MD, USA',
      x: screenWidth * 0.401,
      y: screenHeight * 0.771,
      amt: 1,
      image: '/Images/Bill Clifton.jpg',
      sound: loadSound('/Sounds/Bill Clifton - Walking In My Sleep Sample.mp3')
    },
    {
      name: 'Bruno Mars',
      location: 'Honolulu, HI, USA',
      x: screenWidth * 0.049,
      y: screenHeight * 0.788,
      amt: 3,
      image: '/Images/Bruno Mars.jpg',
      sound: loadSound('/Sounds/Silk Sonic - Skate Sample.mp3')
    },
    {
      name: 'Childish Gambino',
      location: 'Edwards Air Force Base, CA, USA',
      x: screenWidth * 0.153,
      y: screenHeight * 0.795,
      amt: 1,
      image: '/Images/Childish Gambino.jpg',
      sound: loadSound('/Sounds/Childish Gambino - 12.38 Sample.mp3')
    },
    {
      name: 'Chromeo',
      location: 'Montreal, Quebec, Canada',
      x: screenWidth * 0.405,
      y: screenHeight * 0.667,
      amt: 17,
      image: '/Images/Chromeo.jpg',
      sound: loadSound('/Sounds/Chromeo - Clorox Wipe Sample.mp3')
    },
    {
      name: 'Don Toliver',
      location: 'Houston, TX, USA',
      x: screenWidth * 0.286,
      y: screenHeight * 0.920,
      amt: 9,
      image: '/Images/Don Toliver.jpg',
      sound: loadSound('/Sounds/Don Toliver - Backend Sample.mp3')
    },
    {
      name: 'Dynamic Duo',
      location: 'Seoul, South Korea',
      x: screenWidth * 0.838,
      y: screenHeight * 0.467,
      amt: 29,
      image: '/Images/Dynamic Duo.jpg',
      sound: loadSound('/Sounds/Dynamic Duo - 거품 안 넘치게 따라줘 (Life Is Good) Sample.mp3')
    },
    {
      name: 'Esperanza Spalding',
      location: 'Portland, OR, USA',
      x: screenWidth * 0.148,
      y: screenHeight * 0.629,
      amt: 12,
      image: '/Images/Esperanza Spalding.jpg',
      sound: loadSound('/Sounds/Esperanza Spalding - Ponta De Areia Sample.mp3')
    },
    {
      name: 'Eve',
      location: 'Japan',
      x: screenWidth * 0.923,
      y: screenHeight * 0.449,
      amt: 9,
      image: '/Images/Eve.jpg',
      sound: loadSound('/Sounds/Eve MV - ラストダンス Sample.mp3')
    },
    {
      name: 'Flatt & Scruggs',
      location: 'Overton County, TN, USA',
      x: screenWidth * 0.357,
      y: screenHeight * 0.823,
      amt: 2,
      image: '/Images/Flatt & Scruggs.jpg',
      sound: loadSound('/Sounds/Flatt & Scruggs - Cripple Creek Sample.mp3')
    },
    {
      name: 'Free Nationals',
      location: 'Los Angeles, CA, USA',
      x: screenWidth * 0.150,
      y: screenHeight * 0.823,
      amt: 5,
      image: '/Images/Free Nationals.jpg',
      sound: loadSound('/Sounds/Free Nationals - RENE (Audio) Sample.mp3')
    },
    {
      name: 'FreeTempo',
      location: 'Miyagi, Japan',
      x: screenWidth * 0.935,
      y: screenHeight * 0.393,
      amt: 12,
      image: '/Images/FreeTempo.jpg',
      sound: loadSound('/Sounds/FreeTempo - Vamous A Bailar Sample.mp3')
    },
    {
      name: 'Haywyre',
      location: 'Lafayette, IN, USA',
      x: screenWidth * 0.347,
      y: screenHeight * 0.769,
      amt: 10,
      image: '/Images/Haywyre.jpg',
      sound: loadSound('/Sounds/Haywyre - Smooth Criminal Sample.mp3')
    },
    {
      name: 'JORDANN',
      location: 'Montreal, Canada',
      x: screenWidth * 0.388,
      y: screenHeight * 0.663,
      amt: 1,
      image: '/Images/JORDANN.jpg',
      sound: loadSound('/Sounds/JORDANN - Funk Olympics Sample.mp3')
    },
    {
      name: 'Louvin Brothers',
      location: 'Henagar, AL, USA',
      x: screenWidth * 0.350,
      y: screenHeight * 0.855,
      amt: 1,
      image: '/Images/Louvin Brothers.jpg',
      sound: loadSound('/Sounds/Louvin Brothers - Great Atomic Power Sample.mp3')
    },
    {
      name: 'Marty Robbins',
      location: 'Glendale, AZ, USA',
      x: screenWidth * 0.183,
      y: screenHeight * 0.829,
      amt: 1,
      image: '/Images/Marty Robbins.jpg',
      sound: loadSound('/Sounds/Marty Robbins - Big Iron Sample.mp3')
    },
    {
      name: 'Masego',
      location: 'Kingston, Jamaica',
      x: screenWidth * 0.519,
      y: screenHeight * 0.886,
      amt: 17,
      image: '/Images/Masego.jpg',
      sound: loadSound("/Sounds/Masego - Send Yo' Rita! Sample.mp3")
    },
    {
      name: 'MAX',
      location: 'Manhattan, NY, USA',
      x: screenWidth * 0.419,
      y: screenHeight * 0.739,
      amt: 3,
      image: '/Images/MAX.jpg',
      sound: loadSound('/Sounds/MAX - New Life Sample.mp3')
    },
    {
      name: 'Metallica',
      location: 'Los Angeles, CA, USA',
      x: screenWidth * 0.160,
      y: screenHeight * 0.825,
      amt: 14,
      image: '/Images/Metallica.jpg',
      sound: loadSound('/Sounds/Metallica - Jump In The Fire Sample.mp3')
    },
    {
      name: 'm-flo',
      location: 'Japan',
      x: screenWidth * 0.899,
      y: screenHeight * 0.479,
      amt: 11,
      image: '/Images/m-flo.jpg',
      sound: loadSound('/Sounds/m-flo - Toxic Sweet Sample.mp3')
    },
    {
      name: 'Michael Jackson',
      location: 'Gary, IN, USA',
      x: screenWidth * 0.342,
      y: screenHeight * 0.738,
      amt: 33,
      image: '/Images/Michael Jackson.jpg',
      sound: loadSound('/Sounds/Michael Jackson - Superfly Sister Sample.mp3')
    },
    {
      name: 'Migos',
      location: 'Lawrenceville, GA, USA',
      x: screenWidth * 0.368,
      y: screenHeight * 0.866,
      amt: 21,
      image: '/Images/Migos.jpg',
      sound: loadSound('/Sounds/Migos - Stir Fry Sample.mp3')
    },
    {
      name: 'Mr. Scruff',
      location: 'Stretford, Great Manchester, UK',
      x: screenWidth * 0.656,
      y: screenHeight * 0.408,
      amt: 3,
      image: '/Images/Mr. Scruff.jpg',
      sound: loadSound('/Sounds/Mr. Scruff - Music Takes Me Up Sample.mp3')
    },
    {
      name: 'Post Malone',
      location: 'Syracuse, NY, USA',
      x: screenWidth * 0.404,
      y: screenHeight * 0.715,
      amt: 4,
      image: '/Images/Post Malone.jpg',
      sound: loadSound('/Sounds/Post Malone - 92 Explorer Sample.mp3')
    },
    {
      name: 'Ralph Stanley',
      location: 'McClure, VA, USA',
      x: screenWidth * 0.375,
      y: screenHeight * 0.810,
      amt: 1,
      image: '/Images/Ralph Stanley.jpg',
      sound: loadSound('/Sounds/Ralph Stanley - One Drop Of Water Sample.mp3')
    },
    {
      name: 'Reno & Smiley',
      location: 'Buffalo, SC, USA',
      x: screenWidth * 0.380,
      y: screenHeight * 0.847,
      amt: 2,
      image: '/Images/Reno & Smiley.jpg',
      sound: loadSound("/Sounds/Reno & Smiley - I'm Using My Bible for a Roadmap Sample.mp3")
    },
    {
      name: 'Sade',
      location: 'Ibadan, Nigeria, Africa',
      x: screenWidth * 0.709,
      y: screenHeight * 0.832,
      amt: 1,
      image: '/Images/Sade.jpg',
      sound: loadSound('/Sounds/Sade - Smooth Operator Sample.mp3')
    },
    {
      name: 'Smino',
      location: 'St. Louis, MO, USA',
      x: screenWidth * 0.316,
      y: screenHeight * 0.793,
      amt: 9,
      image: '/Images/Smino.jpg',
      sound: loadSound('/Sounds/Smino - Trina Sample.mp3')
    },
    {
      name: 'Smokey River Boys',
      location: 'Cleveland County, NC, USA',
      x: screenWidth * 0.363,
      y: screenHeight * 0.832,
      amt: 1,
      image: '/Images/Smokey River Boys.jpg',
      sound: loadSound('/Sounds/Smokey River Boys - Foggy Mountain Breakdown Sample.mp3')
    },
    {
      name: 'Soggy Bottom Boys',
      location: 'Rutland, VT, USA',
      x: screenWidth * 0.419,
      y: screenHeight * 0.695,
      amt: 1,
      image: '/Images/Soggy Bottom Boys.jpg',
      sound: loadSound('/Sounds/Soggy Bottom Boys - I Am A Man Of Constant Sorrow Sample.mp3')
    },
    {
      name: 'Solange',
      location: 'Houston, TX, USA',
      x: screenWidth * 0.280,
      y: screenHeight * 0.901,
      amt: 4,
      image: '/Images/Solange.jpg',
      sound: loadSound('/Sounds/Solange - Stay Flo Sample.mp3')
    },
    {
      name: 'The Chicks',
      location: 'Dallas, TX, USA',
      x: screenWidth * 0.281,
      y: screenHeight * 0.873,
      amt: 1,
      image: '/Images/The Chicks.jpg',
      sound: loadSound('/Sounds/The Chicks - Long Time Gone Sample.mp3')
    },
    {
      name: 'The Stanley Brothers',
      location: 'Dickenson County, VA, USA',
      x: screenWidth * 0.373,
      y: screenHeight * 0.793,
      amt: 2,
      image: '/Images/The Stanley Brothers.jpg',
      sound: loadSound('/Sounds/The Stanley Brothers - Mountain Dew Sample.mp3')
    },
    {
      name: 'The Whites',
      location: 'Fort Worth, TX, USA',
      x: screenWidth * 0.266,
      y: screenHeight * 0.873,
      amt: 1,
      image: '/Images/The Whites.jpg',
      sound: loadSound('/Sounds/The Whites - Keep On The Sunny Side Sample.mp3')
    },
    {
      name: 'Thundercat',
      location: 'Los Angeles, CA, USA',
      x: screenWidth * 0.164,
      y: screenHeight * 0.801,
      amt: 8,
      image: '/Images/Thundercat.jpg',
      sound: loadSound('/Sounds/Thundercat - Them Changes Sample.mp3')
    },
    {
      name: 'Unknown Mortal Orchestra',
      location: 'Auckland, New Zealand',
      x: screenWidth * 0.932,
      y: screenHeight * 0.753,
      amt: 1,
      image: '/Images/Unknown Mortal Orchestra.jpg',
      sound: loadSound('/Sounds/Unknown Mortal Orchestra - Hunnybee Sample.mp3')
    },
    {
      name: 'Worthikids',
      location: 'USA',
      x: screenWidth * 0.270,
      y: screenHeight * 0.769,
      amt: 6,
      image: '/Images/Worthikids.jpg',
      sound: loadSound('/Sounds/Worthikids - Wizard - Hexilate! Sample.mp3')
    },
    {
      name: 'Yung Gravy',
      location: 'Rochester, MN, USA',
      x: screenWidth * 0.306,
      y: screenHeight * 0.708,
      amt: 18,
      image: '/Images/Yung Gravy.jpg',
      sound: loadSound('/Sounds/Yung Gravy - Steppin On The Beat Sample.mp3')
    }
  ];
}

// create canvas (same size as background image)
// draw red circles for every artist's place of origin
function setup()
{
  createCanvas(screenWidth, screenHeight);
  image(img, 0, 0);
  
  fill(255, 0, 0);
  for(let artist of artists)
  {
    circle(artist.x, artist.y, diameter + (artist.amt/2));
  }
}

// turn the circle green if user is hovering over it
// and turn it back red when mouse moves
function draw()
{
  print(mouseX + ", " + mouseY);
  for (let artist of artists)
  {
    if ((mouseX >= artist.x - (diameter + (artist.amt/2)) / 2) && (mouseX <= artist.x + (diameter + (artist.amt/2)) / 2) &&
        (mouseY >= artist.y - (diameter + (artist.amt/2)) / 2) && (mouseY <= artist.y + (diameter + (artist.amt/2)) / 2))
    {
      fill(0, 255, 0);
      circle(artist.x, artist.y, diameter + (artist.amt/2));
    }
    else
    {
      fill(255, 0, 0);
      circle(artist.x, artist.y, diameter + (artist.amt/2));
    }
  }
}

// display artist stats and a sample button when user
// clicks on their place of origin
// play a sample when user clicks 'Play Sample' button
function mouseClicked()
{
  for (let artist of artists)
  {
    if ((mouseX >= artist.x - (diameter + (artist.amt/2)) / 2) && (mouseX <= artist.x + (diameter + (artist.amt/2)) / 2) &&
        (mouseY >= artist.y - (diameter + (artist.amt/2)) / 2) && (mouseY <= artist.y + (diameter + (artist.amt/2)) / 2))
    {
      removeElements();
      createImg(artist.image, "").size(88, 88).position(40, screenHeight);
      createP(`${artist.name}: ${artist.location}`).position(176, screenHeight);
      button = createButton('Play Sample');
      button.position(176 + 50, screenHeight + 50);
      button.mousePressed(function () {artist.sound.play();})
    }
  }
}