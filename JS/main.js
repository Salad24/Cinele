let movieAnswer = {};
let movieGuess = {};
let movieId;
let movieAnswerGenres = [];
let movieGuessGenres = [];
let currentMovieIndex = 0;
let guessedMovieCount = 0;
let haveGuessed = false;
const API_KEY = "f7a6d5bf4a00273d6cda5447d0fce446";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";
const now = new Date();
const firstDate = new Date(2022, 4, 7, 0, 0, 0, 0);
const desiredCurrentMovieIndex = Math.floor(
  Number(now - firstDate) / 1000 / 60 / 60 / 24
);

const possibleMovieAnswers = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "The Avengers",
  "Deadpool",
  "Avatar",
  "Avengers: Infinity War",
  "Guardians of the Galaxy",
  "Fight Club",
  "Pulp Fiction",
  "Iron Man",
  "Forrest Gump",
  "Harry Potter and the Philosopher's Stone",
  "Django Unchained",
  "The Matrix",
  "The Shawshank Redemption",
  "Titanic",
  "Avengers: Endgame",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Joker",
  "Shutter Island",
  "Avengers: Age of Ultron",
  "Captain America: Civil War",
  "The Wolf of Wall Street",
  "The Lord of the Rings: The Return of the King",
  "The Dark Knight Rises",
  "Iron Man 3",
  "Mad Max: Fury Road",
  "The Hunger Games",
  "Black Panther",
  "Doctor Strange",
  "Suicide Squad",
  "Inglourious Basterds",
  "Captain America: The First Avenger",
  "Spider-Man: Homecoming",
  "Guardians of the Galaxy Vol. 2",
  "Harry Potter and the Chamber of Secrets",
  "Thor",
  "The Lord of the Rings: The Two Towers",
  "Jurassic World",
  "Iron Man 2",
  "Harry Potter and the Prisoner of Azkaban",
  "Inside Out",
  "Wonder Woman",
  "Batman Begins",
  "Thor: Ragnarok",
  "Pirates of the Caribbean: The Curse of the Black Pearl",
  "Harry Potter and the Deathly Hallows: Part 2",
  "Star Wars",
  "Harry Potter and the Goblet of Fire",
  "Up",
  "Ant-Man",
  "Se7en",
  "Star Wars: The Force Awakens",
  "The Martian",
  "Back to the Future",
  "It",
  "Finding Nemo",
  "Harry Potter and the Order of the Phoenix",
  "Harry Potter and the Half-Blood Prince",
  "Captain America: The Winter Soldier",
  "Harry Potter and the Deathly Hallows: Part 1",
  "The Hobbit: An Unexpected Journey",
  "The Godfather",
  "Batman v Superman: Dawn of Justice",
  "WALL·E",
  "John Wick",
  "Coco",
  "Spider-Man",
  "Monsters, Inc.",
  "Toy Story",
  "The Lion King",
  "The Incredibles",
  "Gladiator",
  "The Hunger Games: Catching Fire",
  "The Amazing Spider-Man",
  "Thor: The Dark World",
  "The Truman Show",
  "Deadpool 2",
  "Bohemian Rhapsody",
  "The Imitation Game",
  "The Maze Runner",
  "Kill Bill: Vol. 1",
  "Kingsman: The Secret Service",
  "La La Land",
  "Frozen",
  "Beauty and the Beast",
  "The Empire Strikes Back",
  "Get Out",
  "Dunkirk",
  "Zootopia",
  "Ratatouille",
  "The Green Mile",
  "Shrek",
  "Big Hero 6",
  "Parasite",
  "The Hunger Games: Mockingjay - Part 1",
  "Jurassic Park",
  "Pirates of the Caribbean: Dead Man's Chest",
  "Venom",
  "The Silence of the Lambs",
  "Baby Driver",
  "Rogue One: A Star Wars Story",
  "Man of Steel",
  "Despicable Me",
  "Star Wars: The Last Jedi",
  "Captain Marvel",
  "Saving Private Ryan",
  "The Prestige",
  "Ready Player One",
  "Schindler's List",
  "Return of the Jedi",
  "Spider-Man 2",
  "Charlie and the Chocolate Factory",
  "Catch Me If You Can",
  "Spider-Man: Far From Home",
  "Toy Story 3",
  "The Departed",
  "Memento",
  "Whiplash",
  "Star Wars: Episode I - The Phantom Menace",
  "Alice in Wonderland",
  "The Hateful Eight",
  "Pirates of the Caribbean: At World's End",
  "The Hobbit: The Battle of the Five Armies",
  "Pirates of the Caribbean: On Stranger Tides",
  "Reservoir Dogs",
  "Aquaman",
  "Jumanji: Welcome to the Jungle",
  "Kill Bill: Vol. 2",
  "Maleficent",
  "Alien",
  "Men in Black",
  "Edge of Tomorrow",
  "Cars",
  "Toy Story 2",
  "Life of Pi",
  "Spider-Man 3",
  "A Quiet Place",
  "Brave",
  "Spider-Man: No Way Home",
  "Blade Runner",
  "Star Wars: Episode III - Revenge of the Sith",
  "Justice League",
  "Spider-Man: Into the Spider-Verse",
  "American Sniper",
  "Ant-Man and the Wasp",
  "Ice Age",
  "The Hobbit: The Desolation of Smaug",
  "The Amazing Spider-Man 2",
  "Star Wars: Episode II - Attack of the Clones",
  "Incredibles 2",
  "How to Train Your Dragon",
  "Hacksaw Ridge",
  "Blade Runner 2049",
  "Wreck-It Ralph",
  "The Shape of Water",
  "Back to the Future Part II",
  "Finding Dory",
  "The Hunger Games: Mockingjay - Part 2",
  "The Terminator",
  "Moana",
  "Once Upon a Time… in Hollywood",
  "Terminator 2: Judgment Day",
  "A Star Is Born",
  "John Wick: Chapter 2",
  "Pirates of the Caribbean: Dead Men Tell No Tales",
  "Raiders of the Lost Ark",
  "GoodFellas",
  "The Social Network",
  "Shrek 2",
  "Rise of the Planet of the Apes",
  "Jurassic World: Fallen Kingdom",
  "Despicable Me 2",
  "The Incredible Hulk",
  "Ocean's Eleven",
  "1917",
  "No Country for Old Men",
  "Aladdin",
  "Good Will Hunting",
  "The Godfather: Part II",
  "The Sixth Sense",
  "Dawn of the Planet of the Apes",
  "E.T. the Extra-Terrestrial",
  "Cast Away",
  "Tangled",
  "2001: A Space Odyssey",
  "Taxi Driver",
  "Fast & Furious 6",
  "Scarface",
  "Prisoners",
  "Bruce Almighty",
  "Madagascar",
  "Die Hard",
  "Dead Poets Society",
  "Monsters University",
  "Green Book",
  "The Matrix Reloaded",
  "Slumdog Millionaire",
  "Jumanji",
  "Home Alone",
  "Nightcrawler",
  "The Lost World: Jurassic Park",
  "Wonder",
  "The Breakfast Club",
  "Sing",
  "Fantastic Four: Rise of the Silver Surfer",
  "The Simpsons Movie",
  "Wonder Woman 1984",
  "Indiana Jones and the Kingdom of the Crystal Skull",
  "The Fate of the Furious",
  "Men in Black 3",
  "Looper",
  "Maze Runner: The Scorch Trials",
  "21 Jump Street",
  "Knives Out",
  "Star Trek",
  "Back to the Future Part III",
  "Kingsman: The Golden Circle",
  "Aladdin",
  "One Flew Over the Cuckoo's Nest",
  "The Usual Suspects",
  "Full Metal Jacket",
  "The Lion King",
  "Beauty and the Beast",
  "Men in Black II",
  "Zodiac",
  "Braveheart",
  "Jaws",
  "Ice Age: The Meltdown",
  "Mission: Impossible - Ghost Protocol",
  "The Wolverine",
  "The Pursuit of Happyness",
  "Frozen II",
  "The Fast and the Furious",
  "Indiana Jones and the Last Crusade",
  "The Greatest Showman",
  "How to Train Your Dragon 2",
  "The Matrix Revolutions",
  "Fantastic Four",
  "Independence Day",
  "Mulan",
  "Toy Story 4",
  "Soul",
  "John Wick: Chapter 3 - Parabellum",
  "The Da Vinci Code",
  "District 9",
  "Godzilla vs. Kong",
  "Sonic the Hedgehog",
  "Star Wars: The Rise of Skywalker",
  "The Bourne Identity",
  "Home Alone 2: Lost in New York",
  "Aliens",
  "Zack Snyder's Justice League",
  "Godzilla",
  "Shazam!",
  "The Big Short",
  "Black Widow",
  "Indiana Jones and the Temple of Doom",
  "Shrek the Third",
  "Hotel Transylvania",
  "Jojo Rabbit",
  "War for the Planet of the Apes",
  "Ghostbusters",
  "Mission: Impossible - Rogue Nation",
  "The Pianist",
  "Mean Girls",
  "The Secret Life of Pets",
  "Spotlight",
  "The Jungle Book",
  "Argo",
  "Alien: Covenant",
  "Minority Report",
  "Ocean's Eight",
  "Tenet",
  "Solo: A Star Wars Story",
  "Mission: Impossible",
  "Venom: Let There Be Carnage",
  "Sicario",
  "Ice Age: Dawn of the Dinosaurs",
  "Jumanji: The Next Level",
  "22 Jump Street",
  "Shaun of the Dead",
  "About Time",
  "Dune",
  "The Good, the Bad and the Ugly",
  "The Lego Movie",
  "King Kong",
  "Mission: Impossible - Fallout",
  "Apocalypse Now",
  "The Little Mermaid",
  "The Bourne Ultimatum",
  "Ice Age: Continental Drift",
  "Maze Runner: The Death Cure",
  "The Terminal",
  "Percy Jackson & the Olympians: The Lightning Thief",
  "Groundhog Day",
  "The Bourne Supremacy",
  "Batman",
  "Cinderella",
  "Cars 2",
  "Blood Diamond",
  "The Boss Baby",
  "Ralph Breaks the Internet",
  "Shang-Chi and the Legend of the Ten Rings",
  "Luca",
  "Rocky",
  "Ocean's Twelve",
  "Encanto",
  "Sully",
  "Despicable Me 3",
  "The Suicide Squad",
  "Creed",
  "Fast & Furious",
  "Shrek Forever After",
  "How the Grinch Stole Christmas",
  "2 Fast 2 Furious",
  "The Girl with the Dragon Tattoo",
  "Captain Phillips",
  "Jack Reacher",
  "Pitch Perfect",
  "Jurassic Park III",
  "Fast & Furious Presents: Hobbs & Shaw",
  "Superbad",
  "Madagascar: Escape 2 Africa",
  "Lion",
  "RED",
  "Olympus Has Fallen",
  "Ford v Ferrari",
  "Cinderella",
  "Mulan",
  "Yes Man",
  "Pokémon Detective Pikachu",
  "A Good Day to Die Hard",
  "The 40 Year Old Virgin",
  "Rio",
  "Free Guy",
  "Ghostbusters",
  "Heat",
  "Mamma Mia!",
  "Horrible Bosses",
  "Terminator 3: Rise of the Machines",
  "Mission: Impossible III",
  "The Irishman",
  "The Fast and the Furious: Tokyo Drift",
  "Top Gun",
  "Pearl Harbor",
  "Ocean's Thirteen",
  "The Jungle Book",
  "Mission: Impossible II",
  "One Hundred and One Dalmatians",
  "Independence Day: Resurgence",
  "Jackie Brown",
  "Gremlins",
  "Don't Look Up",
  "Batman Returns",
  "Fantastic Four",
  "How to Train Your Dragon: The Hidden World",
  "The Hitman's Bodyguard",
  "Madagascar 3: Europe's Most Wanted",
  "Contagion",
  "Rain Man",
  "Mrs. Doubtfire",
  "The Blind Side",
  "Space Jam",
  "The Game",
  "Dumb and Dumber",
  "Die Hard: With a Vengeance",
  "Onward",
  "Meet the Parents",
  "Alice in Wonderland",
  "The Karate Kid",
  "Jason Bourne",
  "Tropic Thunder",
  "King Arthur: Legend of the Sword",
  "The Godfather: Part III",
  "The Bourne Legacy",
  "Speed",
  "Central Intelligence",
  "Cloudy with a Chance of Meatballs",
  "Hotel Transylvania 2",
  "Pitch Perfect 2",
  "Godzilla: King of the Monsters",
  "Hulk",
  "Little Women",
  "Ace Ventura: Pet Detective",
  "Inside Man",
  "RoboCop",
  "Total Recall",
  "Monty Python and the Holy Grail",
  "Training Day",
  "Die Hard 2",
  "School of Rock",
  "The Good Dinosaur",
  "Total Recall",
  "The Hurt Locker",
  "The Untouchables",
  "The Italian Job",
  "Black Hawk Down",
  "Stand by Me",
  "The Invisible Man",
  "The Wizard of Oz",
  "Cars 3",
  "Peter Pan",
  "Casino",
  "Nobody",
  "Apollo 13",
  "First Man",
  "Percy Jackson: Sea of Monsters",
  "American Gangster",
  "The Aviator",
  "Collateral",
  "Batman Forever",
  "Happy Feet",
  "Romeo + Juliet",
  "Casablanca",
  "Face/Off",
  "Jungle Cruise",
  "Creed II",
  "Halloween",
  "Skyscraper",
  "A Quiet Place Part II",
  "There's Something About Mary",
  "Dumbo",
  "The Lego Batman Movie",
  "The Gentlemen",
  "Panic Room",
  "Bee Movie",
  "Terminator: Dark Fate",
  "The Town",
  "White House Down",
  "Chicken Run",
  "Jack Reacher: Never Go Back",
  "Moneyball",
  "Meet the Fockers",
  "A Nightmare on Elm Street",
  "Mary Poppins",
  "RoboCop",
  "The Founder",
  "Men in Black: International",
  "Ferris Bueller's Day Off",
  "No Time to Die",
  "L.A. Confidential",
  "Halloween",
  "Hannibal",
  "Ice Age: Collision Course",
  "Dumbo",
  "The Lion King II: Simba's Pride",
  "El Camino: A Breaking Bad Movie",
  "Snowden",
  "Hell or High Water",
  "Field of Dreams",
  "Misery",
  "The Fugitive",
  "Unforgiven",
  "Downfall",
  "The Help",
  "Scent of a Woman",
  "The Sandlot",
  "Red Notice",
  "The Guilty",
  "¡Three Amigos!",
  "Toy Soldiers",
  "Blue Miracle",
  "For Love of the Game",
  "The Way Back",
  "Hillbilly Elegy",
  "Draft Day",
  "Worth",
  "Napoleon Dynamite",
  "Step Brothers",
  "The Other Guys",
  "The Natural",
  "The Rookie",
  "Million Dollar Arm",
  "Rookie of the Year",
  "Uncle Buck",
  "Logan Lucky",
  "What About Bob?",
  "Rush Hour",
  "Happy Gilmore",
  "The Upside",
  "Austin Powers: International Man of Mystery",
  "Coming to America",
  "The Negotiator",
  "Antwone Fisher",
  "True Lies",
  "Beverly Hills Cop",
  "A League of Their Own",
  "Coach Carter",
  "Dirty Rotten Scoundrels",
  "Rudy",
  "United 93",
  "My Cousin Vinny"

];

const movieAnswers = [
  "Mission: Impossible - Fallout",
  "Interstellar",
  "Frozen II",
  "Hotel Transylvania 2",
  "How to Train Your Dragon 2",
  "Unforgiven",
  "Cars",
  "Contagion",
  "Free Guy",
  "A Nightmare on Elm Street",
  "The Hobbit: The Battle of the Five Armies",
  "2 Fast 2 Furious",
  "The Lion King II: Simba's Pride",
  "Dunkirk",
  "For Love of the Game",
  "Monsters University",
  "La La Land",
  "Uncle Buck",
  "A Star Is Born",
  "Moneyball",
  "Shrek Forever After",
  "The Prestige",
  "Star Trek",
  "Black Widow",
  "Dawn of the Planet of the Apes",
  "Pokémon Detective Pikachu",
  "The Simpsons Movie",
  "Beauty and the Beast",
  "Tenet",
  "Indiana Jones and the Last Crusade",
  "Full Metal Jacket",
  "Up",
  "Back to the Future Part II",
  "Alien",
  "Bohemian Rhapsody",
  "Harry Potter and the Goblet of Fire",
  "The Godfather: Part III",
  "Toy Soldiers",
  "Rookie of the Year",
  "The Martian",
  "Captain America: Civil War",
  "Rocky",
  "Chicken Run",
  "One Hundred and One Dalmatians",
  "Captain Phillips",
  "Harry Potter and the Philosopher's Stone",
  "Madagascar",
  "The Terminal",
  "Creed II",
  "Die Hard: With a Vengeance",
  "United 93",
  "The Gentlemen",
  "Finding Nemo",
  "A Good Day to Die Hard",
  "Harry Potter and the Deathly Hallows: Part 2",
  "The Imitation Game",
  "How to Train Your Dragon: The Hidden World",
  "Taxi Driver",
  "Aladdin",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Spider-Man: Far From Home",
  "The Suicide Squad",
  "Saving Private Ryan",
  "Ocean's Eleven",
  "A Quiet Place Part II",
  "Fantastic Four",
  "The Bourne Legacy",
  "Toy Story 4",
  "The Godfather: Part II",
  "The Lord of the Rings: The Two Towers",
  "No Country for Old Men",
  "Justice League",
  "Whiplash",
  "The Greatest Showman",
  "The Fast and the Furious: Tokyo Drift",
  "Ant-Man and the Wasp",
  "Argo",
  "Jumanji: Welcome to the Jungle",
  "Back to the Future Part III",
  "Jurassic World: Fallen Kingdom",
  "Fantastic Four",
  "The Other Guys",
  "The Fast and the Furious",
  "Kingsman: The Secret Service",
  "Cars 2",
  "Speed",
  "Bee Movie",
  "Baby Driver",
  "E.T. the Extra-Terrestrial",
  "Men in Black 3",
  "Fast & Furious Presents: Hobbs & Shaw",
  "Inside Out",
  "Beauty and the Beast",
  "Rudy",
  "Romeo + Juliet",
  "Top Gun",
  "Kill Bill: Vol. 2",
  "Pirates of the Caribbean: Dead Men Tell No Tales",
  "Frozen",
  "The Incredible Hulk",
  "The Sixth Sense",
  "John Wick",
  "The Help",
  "Independence Day: Resurgence",
  "Jurassic World",
  "Die Hard",
  "The Negotiator",
  "Shutter Island",
  "Django Unchained",
  "Jumanji: The Next Level",
  "The Matrix",
  "Get Out",
  "Apollo 13",
  "Percy Jackson & the Olympians: The Lightning Thief",
  "Back to the Future",
  "Mission: Impossible - Rogue Nation",
  "Shazam!",
  "Jaws",
  "Despicable Me",
  "Brave",
  "Rush Hour",
  "Scent of a Woman",
  "The Hunger Games: Catching Fire",
  "The Dark Knight",
  "Ice Age: Continental Drift",
  "Forrest Gump",
  "The Matrix Reloaded",
  "1917",
  "Spider-Man: No Way Home",
  "Suicide Squad",
  "Ice Age: Dawn of the Dinosaurs",
  "Star Wars: The Rise of Skywalker",
  "Green Book",
  "Schindler's List",
  "Ghostbusters",
  "Blood Diamond",
  "Collateral",
  "Madagascar 3: Europe's Most Wanted",
  "Ace Ventura: Pet Detective",
  "Men in Black",
  "Lion",
  "Mean Girls",
  "The Bourne Supremacy",
  "RED",
  "The Lion King",
  "The Matrix Revolutions",
  "The Hunger Games: Mockingjay - Part 1",
  "Million Dollar Arm",
  "First Man",
  "Rain Man",
  "Pulp Fiction",
  "Hillbilly Elegy",
  "Ferris Bueller's Day Off",
  "Despicable Me 2",
  "Dead Poets Society",
  "Mary Poppins",
  "Mulan",
  "Napoleon Dynamite",
  "The Hunger Games: Mockingjay - Part 2",
  "The Hateful Eight",
  "The Lion King",
  "The Game",
  "Catch Me If You Can",
  "The Usual Suspects",
  "The Aviator",
  "Ocean's Eight",
  "Austin Powers: International Man of Mystery",
  "Godzilla vs. Kong",
  "Dumb and Dumber",
  "Wonder",
  "Jackie Brown",
  "Raiders of the Lost Ark",
  "Ice Age: Collision Course",
  "The Lost World: Jurassic Park",
  "WALL·E",
  "My Cousin Vinny",
  "Black Panther",
  "Yes Man",
  "Slumdog Millionaire",
  "Batman v Superman: Dawn of Justice",
  "Joker",
  "The Jungle Book",
  "Kingsman: The Golden Circle",
  "Halloween",
  "Scarface",
  "Nobody",
  "The Little Mermaid",
  "Meet the Parents",
  "Return of the Jedi",
  "Jurassic Park",
  "Batman Begins",
  "El Camino: A Breaking Bad Movie",
  "2001: A Space Odyssey",
  "Ant-Man",
  "Thor: Ragnarok",
  "The Departed",
  "Dumbo",
  "The Truman Show",
  "Batman",
  "Pirates of the Caribbean: On Stranger Tides",
  "The Fate of the Furious",
  "Memento",
  "Happy Gilmore",
  "Sing",
  "Ocean's Thirteen",
  "John Wick: Chapter 3 - Parabellum",
  "The Bourne Identity",
  "Central Intelligence",
  "Monsters, Inc.",
  "Step Brothers",
  "Mission: Impossible - Ghost Protocol",
  "Pitch Perfect",
  "Spider-Man: Homecoming",
  "Mamma Mia!",
  "Maze Runner: The Death Cure",
  "The Social Network",
  "Blade Runner 2049",
  "The Boss Baby",
  "The Good Dinosaur",
  "Venom",
  "The Pursuit of Happyness",
  "Pitch Perfect 2",
  "Cinderella",
  "The Sandlot",
  "Godzilla",
  "Kill Bill: Vol. 1",
  "Ice Age",
  "Don't Look Up",
  "One Flew Over the Cuckoo's Nest",
  "The Maze Runner",
  "Maze Runner: The Scorch Trials",
  "Godzilla: King of the Monsters",
  "Zootopia",
  "Home Alone 2: Lost in New York",
  "Star Wars: Episode II - Attack of the Clones",
  "The Town",
  "Mission: Impossible",
  "Beverly Hills Cop",
  "Hell or High Water",
  "Inglourious Basterds",
  "War for the Planet of the Apes",
  "Alice in Wonderland",
  "Harry Potter and the Half-Blood Prince",
  "Parasite",
  "Hannibal",
  "Casino",
  "Looper",
  "School of Rock",
  "Alice in Wonderland",
  "Harry Potter and the Order of the Phoenix",
  "Little Women",
  "The Green Mile",
  "About Time",
  "Rise of the Planet of the Apes",
  "Spider-Man 2",
  "Creed",
  "Rio",
  "Zack Snyder's Justice League",
  "Guardians of the Galaxy",
  "Wreck-It Ralph",
  "Mrs. Doubtfire",
  "Avengers: Infinity War",
  "Halloween",
  "Dumbo",
  "Bruce Almighty",
  "Ready Player One",
  "Zodiac",
  "Spider-Man: Into the Spider-Verse",
  "Shang-Chi and the Legend of the Ten Rings",
  "The Fugitive",
  "Charlie and the Chocolate Factory",
  "Olympus Has Fallen",
  "How to Train Your Dragon",
  "Wonder Woman",
  "The Wolf of Wall Street",
  "Thor",
  "Avengers: Endgame",
  "Fantastic Four: Rise of the Silver Surfer",
  "The Bourne Ultimatum",
  "Titanic",
  "The Shape of Water",
  "Logan Lucky",
  "White House Down",
  "Spotlight",
  "Aliens",
  "Happy Feet",
  "Ratatouille",
  "The Hunger Games",
  "Man of Steel",
  "The Italian Job",
  "Indiana Jones and the Temple of Doom",
  "Inside Man",
  "Maleficent",
  "The Silence of the Lambs",
  "The Wizard of Oz",
  "Coming to America",
  "Captain Marvel",
  "Red Notice",
  "Se7en",
  "Pirates of the Caribbean: The Curse of the Black Pearl",
  "Aquaman",
  "The Guilty",
  "The Shawshank Redemption",
  "Star Wars: The Last Jedi",
  "Apocalypse Now",
  "Total Recall",
  "The Hitman's Bodyguard",
  "Hacksaw Ridge",
  "The Da Vinci Code",
  "The Avengers",
  "Mulan",
  "Panic Room",
  "It",
  "Blue Miracle",
  "The Karate Kid",
  "Dune",
  "Gladiator",
  "Worth",
  "Edge of Tomorrow",
  "Finding Dory",
  "¡Three Amigos!",
  "Iron Man 2",
  "Braveheart",
  "Aladdin",
  "21 Jump Street",
  "Incredibles 2",
  "Jungle Cruise",
  "District 9",
  "Sicario",
  "Toy Story",
  "King Kong",
  "Thor: The Dark World",
  "The Good, the Bad and the Ugly",
  "Dirty Rotten Scoundrels",
  "Mission: Impossible II",
  "L.A. Confidential",
  "Cast Away",
  "The Founder",
  "Inception",
  "Monty Python and the Holy Grail",
  "The Breakfast Club",
  "Jojo Rabbit",
  "Ice Age: The Meltdown",
  "Jumanji",
  "The Lego Movie",
  "Harry Potter and the Deathly Hallows: Part 1",
  "Harry Potter and the Prisoner of Azkaban",
  "Big Hero 6",
  "Home Alone",
  "The Lego Batman Movie",
  "The Natural",
  "Avatar",
  "Star Wars: The Force Awakens",
  "Superbad",
  "The Godfather",
  "Coach Carter",
  "Black Hawk Down",
  "The Hurt Locker",
  "Avengers: Age of Ultron",
  "Onward",
  "Ralph Breaks the Internet",
  "Shrek 2",
  "King Arthur: Legend of the Sword",
  "Nightcrawler",
  "Heat",
  "John Wick: Chapter 2",
  "No Time to Die",
  "Harry Potter and the Chamber of Secrets",
  "Deadpool",
  "Wonder Woman 1984",
  "Blade Runner",
  "A League of Their Own",
  "Field of Dreams",
  "True Lies",
  "The Empire Strikes Back",
  "The Wolverine",
  "Spider-Man",
  "The Upside",
  "Meet the Fockers",
  "Toy Story 2",
  "Alien: Covenant",
  "Knives Out",
  "Face/Off",
  "Terminator 3: Rise of the Machines",
  "Men in Black II",
  "RoboCop",
  "Jack Reacher: Never Go Back",
  "Reservoir Dogs",
  "Madagascar: Escape 2 Africa",
  "The Girl with the Dragon Tattoo",
  "The Pianist",
  "Soul",
  "Batman Returns",
  "Batman Forever",
  "Doctor Strange",
  "Draft Day",
  "Captain America: The Winter Soldier",
  "Once Upon a Time… in Hollywood",
  "The Terminator",
  "Spider-Man 3",
  "Iron Man 3",
  "Snowden",
  "Jason Bourne",
  "Terminator: Dark Fate",
  "Cars 3",
  "Downfall",
  "Encanto",
  "The Big Short",
  "Despicable Me 3",
  "Luca",
  "Cloudy with a Chance of Meatballs",
  "Tangled",
  "The Secret Life of Pets",
  "GoodFellas",
  "The Hobbit: An Unexpected Journey",
  "Shrek",
  "Antwone Fisher",
  "Coco",
  "Rogue One: A Star Wars Story",
  "American Sniper",
  "The Invisible Man",
  "22 Jump Street",
  "American Gangster",
  "Fast & Furious 6",
  "Mission: Impossible III",
  "How the Grinch Stole Christmas",
  "Skyscraper",
  "Pearl Harbor",
  "Ford v Ferrari",
  "Shrek the Third",
  "Shaun of the Dead",
  "Guardians of the Galaxy Vol. 2",
  "Peter Pan",
  "The Lord of the Rings: The Return of the King",
  "Pirates of the Caribbean: Dead Man's Chest",
  "The Amazing Spider-Man",
  "Sully",
  "Horrible Bosses",
  "Minority Report",
  "Ocean's Twelve",
  "Solo: A Star Wars Story",
  "Prisoners",
  "What About Bob?",
  "Jurassic Park III",
  "Gremlins",
  "Star Wars: Episode III - Revenge of the Sith",
  "Groundhog Day",
  "Hulk",
  "The Blind Side",
  "Deadpool 2",
  "The Irishman",
  "The Rookie",
  "Moana",
  "Hotel Transylvania",
  "Ghostbusters",
  "Jack Reacher",
  "Star Wars",
  "Misery",
  "A Quiet Place",
  "Fast & Furious",
  "Captain America: The First Avenger",
  "Pirates of the Caribbean: At World's End",
  "Star Wars: Episode I - The Phantom Menace",
  "Venom: Let There Be Carnage",
  "The 40 Year Old Virgin",
  "Good Will Hunting",
  "Space Jam",
  "Die Hard 2",
  "Mad Max: Fury Road",
  "The Untouchables",
  "Independence Day",
  "The Jungle Book",
  "Fight Club",
  "Toy Story 3",
  "The Hobbit: The Desolation of Smaug",
  "Life of Pi",
  "The Incredibles",
  "Training Day",
  "Total Recall",
  "Indiana Jones and the Kingdom of the Crystal Skull",
  "Iron Man",
  "Tropic Thunder",
  "Casablanca",
  "Percy Jackson: Sea of Monsters",
  "Men in Black: International",
  "RoboCop",
  "Cinderella",
  "The Amazing Spider-Man 2",
  "There's Something About Mary",
  "Sonic the Hedgehog",
  "Stand by Me",
  "The Dark Knight Rises",
  "Terminator 2: Judgment Day",
  "The Way Back"
];

let movie = movieAnswers[currentMovieIndex];

initLocalStorage();
checkIfPlayedYesterday();
initHowToPlayModal();
initStatsModal();
initCreditModal();
loadHowToPlay();
loadLocalStorage();
getMovieAnswer(SEARCH_API + movie + "&include_adult=false");

function initLocalStorage() {
  const storedcurrentMovieIndex =
    window.localStorage.getItem("currentMovieIndex");
  if (!storedcurrentMovieIndex) {
    window.localStorage.setItem("currentMovieIndex", desiredCurrentMovieIndex);
  } else {
    currentMovieIndex = Number(storedcurrentMovieIndex);
    movie = movieAnswers[currentMovieIndex];
  }

  const storedHaveGuessed = window.localStorage.getItem("haveGuessed");
  if (!storedHaveGuessed) {
    window.localStorage.setItem("haveGuessed", haveGuessed);
  } else {
    haveGuessed = storedHaveGuessed;
  }
}

function loadLocalStorage() {
  currentMovieIndex =
    Number(window.localStorage.getItem("currentMovieIndex")) ||
    currentMovieIndex;
  guessedMovieCount =
    Number(window.localStorage.getItem("guessedMovieCount")) ||
    guessedMovieCount;
  movie = movieAnswers[currentMovieIndex];

  haveGuessed = window.localStorage.getItem("haveGuessed") || haveGuessed;

  const storedBoardContainer = window.localStorage.getItem("table");
  if (storedBoardContainer) {
    document.getElementById("table").innerHTML = storedBoardContainer;
  }
}

function checkIfPlayedYesterday() {
  if (desiredCurrentMovieIndex > currentMovieIndex) {
    clearBoard();
    resetGameState();
    currentMovieIndex = desiredCurrentMovieIndex;
    window.localStorage.setItem("currentMovieIndex", currentMovieIndex);
    movie = movieAnswers[currentMovieIndex];
  }
  else if ((desiredCurrentMovieIndex + 1) < currentMovieIndex) {
    clearBoard();
    resetGameState();
    currentMovieIndex = desiredCurrentMovieIndex;
    window.localStorage.setItem("currentMovieIndex", currentMovieIndex);
    movie = movieAnswers[currentMovieIndex];
  }
}

function loadHowToPlay() {
  const totalGames = Number(window.localStorage.getItem("totalGames"));
  guessedMovieCount = Number(window.localStorage.getItem("guessedMovieCount"));
  if (!totalGames && !guessedMovieCount) {
    const howToPlayModal = document.getElementById("how-to-play-modal");

    // Get the <span> element that closes the modal
    const span = document.getElementById("close-how-to-play");

    // Open the modal
    howToPlayModal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
      howToPlayModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
      if (event.target == howToPlayModal) {
        howToPlayModal.style.display = "none";
      }
    });
  }
}

if (desiredCurrentMovieIndex === currentMovieIndex && haveGuessed == "false") {
  //This is the case whenever a movie has not been guessed

  //Should run when the indexes are the same and there is no guess
  clearBoard();
  resetGameState();
}

if (desiredCurrentMovieIndex != currentMovieIndex) {
  document.getElementById("input").style.visibility = "hidden";
  document.getElementsByClassName("list")[0].style.visibility = "hidden";
  const finalResultEl = document.getElementById("final-score");
  const currentStreak = window.localStorage.getItem("currentStreak") || 0;
  if (currentStreak == 0) {
    finalResultEl.textContent =
      "Cinedle #" + (desiredCurrentMovieIndex + 1) + " - Unsuccessful Today!";
  } else {
    finalResultEl.textContent =
      "Cinedle #" + (desiredCurrentMovieIndex + 1) + " - You Win!";
  }
}

function resetGameState() {
  window.localStorage.removeItem("guessedMovieCount");
  window.localStorage.removeItem("table");
  window.localStorage.removeItem("haveGuessed");
}

function preserveGameState() {
  const boardContainer = document.getElementById("table");
  window.localStorage.setItem("table", boardContainer.innerHTML);
}

function updateTotalGames() {
  const totalGames = window.localStorage.getItem("totalGames") || 0;
  window.localStorage.setItem("totalGames", Number(totalGames) + 1);
}

function showWinningResult() {
  const finalResultEl = document.getElementById("final-score");
  finalResultEl.textContent =
    "Cinedle " + (desiredCurrentMovieIndex + 1) + " - You Win!";

  const totalWins = window.localStorage.getItem("totalWins") || 0;
  window.localStorage.setItem("totalWins", Number(totalWins) + 1);

  const currentStreak = window.localStorage.getItem("currentStreak") || 0;
  window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
}

function showLosingResult() {
  const finalResultEl = document.getElementById("final-score");
  finalResultEl.textContent =
    "Cinedle " + (desiredCurrentMovieIndex + 1) + " - Unsuccessful Today!";

  window.localStorage.setItem("currentStreak", 0);
}

function clearBoard() {
  document.getElementById("input").style.visibility = "visible";
  document.getElementsByClassName("list")[0].style.visibility = "visible";
  document.getElementById("table-body").remove();
  let tableBody = document.createElement("tbody");
  tableBody.setAttribute("id", "table-body");
  document.getElementById("table").append(tableBody);
}

function updateMovieIndex() {
  currentMovieIndex += 1;
  window.localStorage.setItem("currentMovieIndex", currentMovieIndex);
}

function updateCinedleStatus() {
  haveGuessed = true;
  window.localStorage.setItem("haveGuessed", haveGuessed);
}

const input = document.getElementById("input");

async function displayMovies({ title, id, release_date, vote_average }) {
  input.value = title;
  guess = input.value;
  movieId = id;
  movieGuess.title = title;
  movieGuess.id = id;
  movieGuess.releaseDate = release_date;
  movieGuess.rating = vote_average;
  await getMovieGuessDetails(
    "https://api.themoviedb.org/3/movie/" +
      movieId +
      "?api_key=" +
      API_KEY +
      "&language=en-US"
  );
  await getMovieGuessCredits(
    "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/credits?api_key=" +
      API_KEY +
      "&language=en-US"
  );
  removeElements();
  submitGuess();
}

function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

async function getMovieAnswer(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  for (let i = 0; i < respData.results.length; i++) {
    if (movie === respData.results[i].title) {
      let { title, id, release_date, vote_average, overview } = respData.results[i];
      if (release_date) {
        release_date = parseInt(release_date.substring(0, 4));
      }
      movieAnswer.title = title;
      movieAnswer.id = id;
      movieAnswer.releaseDate = release_date;
      movieAnswer.rating = vote_average;
      movieAnswer.synopsis = overview.split(" ")
      await getMovieAnswerDetails(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=" +
          API_KEY +
          "&language=en-US"
      );
      await getMovieAnswerCredits(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "/credits?api_key=" +
          API_KEY +
          "&language=en-US"
      );
      break;
    }
  }
}

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  showMovies(respData.results);
}

function showMovies(movies) {
  removeElements();
  movies.forEach((movie) => {
    let { title, id, release_date, vote_average } = movie;
    if (release_date) {
      release_date = parseInt(release_date.substring(0, 4));
    }
    //Create li element
    let listItem = document.createElement("li");
    //One common class name
    listItem.classList.add("list-items");
    listItem.style.cursor = "pointer";
    listItem.onclick = () =>
      displayMovies({
        title,
        id,
        release_date,
        vote_average,
      });
    //Display the value in the array
    listItem.textContent = title + " (" + release_date + ") ";
    if (document.querySelectorAll(".list-items").length <= 5) {
      document.querySelector(".list").appendChild(listItem);
    }
  });
}

async function getMovieAnswerDetails(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  respData.genres.forEach(function (genre) {
    movieAnswerGenres.push(Object.values(genre)[1]);
  });
  movieAnswer.genres = movieAnswerGenres;
  movieAnswer.studio = respData.production_companies[0].name;
}

async function getMovieGuessDetails(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  movieGuessGenres = [];
  respData.genres.forEach(function (genre) {
    movieGuessGenres.push(Object.values(genre)[1]);
  });
  movieGuess.genres = movieGuessGenres;
  movieGuess.studio = respData.production_companies[0].name;
}

async function getMovieAnswerCredits(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  movieAnswer.leadActor = respData.cast[0].name;
  movieAnswer.director = respData.crew.find(
    ({ job }) => job === "Director"
  ).name;
  movieAnswerLeadActorFirstName = movieAnswer.leadActor
    .toLowerCase()
    .split(" ")[0];
  movieAnswerLeadActorFirstNameFirstLetter =
    movieAnswerLeadActorFirstName.charAt(0);
  movieAnswerLeadActorLastName = movieAnswer.leadActor
    .toLowerCase()
    .substring(movieAnswerLeadActorFirstName.length)
    .trim();
  movieAnswerLeadActorLastNameFirstLetter =
    movieAnswerLeadActorLastName.charAt(0);
  movieAnswerDirectorFirstName = movieAnswer.director
    .toLowerCase()
    .split(" ")[0];
  movieAnswerDirectorFirstNameFirstLetter =
    movieAnswerDirectorFirstName.charAt(0);
  movieAnswerDirectorLastName = movieAnswer.director
    .toLowerCase()
    .substring(movieAnswerDirectorFirstName.length)
    .trim();
  movieAnswerDirectorLastNameFirstLetter =
    movieAnswerDirectorLastName.charAt(0);
}

async function getMovieGuessCredits(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  movieGuess.leadActor = respData.cast[0].name;
  movieGuess.director = respData.crew.find(
    ({ job }) => job === "Director"
  ).name;
  movieGuessLeadActorFirstName = movieGuess.leadActor
    .toLowerCase()
    .split(" ")[0];
  movieGuessLeadActorFirstNameFirstLetter =
    movieGuessLeadActorFirstName.charAt(0);
  movieGuessLeadActorLastName = movieGuess.leadActor
    .toLowerCase()
    .substring(movieGuessLeadActorFirstName.length)
    .trim();
  movieGuessLeadActorLastNameFirstLetter =
    movieGuessLeadActorLastName.charAt(0);
  movieGuessDirectorFirstName = movieGuess.director.toLowerCase().split(" ")[0];
  movieGuessDirectorFirstNameFirstLetter =
    movieGuessDirectorFirstName.charAt(0);
  movieGuessDirectorLastName = movieGuess.director
    .toLowerCase()
    .substring(movieGuessDirectorFirstName.length)
    .trim();
  movieGuessDirectorLastNameFirstLetter = movieGuessDirectorLastName.charAt(0);
}

input.addEventListener("input", function () {
  removeElements();
  guess = input.value;
  if (guess) {
    getMovies(SEARCH_API + guess + "&include_adult=false");
  }
});

function submitGuess() {
  updateCinedleStatus();
  input.value = "";
  let tableRow = document.createElement("tr");
  document.querySelector("#table-body").appendChild(tableRow);
  nameCell = tableRow.insertCell(0);
  nameCell.textContent = movieGuess.title;
  nameCell.style.padding = "32px 1px";
  if (movieGuess.title === movieAnswer.title) {
    nameCell.style.backgroundColor = "rgb(14 159 110)";
  }
  releaseDateCell = tableRow.insertCell(1);
  releaseDateCell.textContent = movieGuess.releaseDate;
  releaseDateCell.style.padding = "32px 1px";
  if (movieGuess.releaseDate === movieAnswer.releaseDate) {
    releaseDateCell.style.backgroundColor = "rgb(14 159 110)";
  } else if (Math.abs(movieGuess.releaseDate - movieAnswer.releaseDate) <= 5) {
    releaseDateCell.style.backgroundColor = "rgb(252, 202, 21)";
  } else {
    releaseDateCell.style.backgroundColor = "rgb(226 232 240)";
  }
  genresCell = tableRow.insertCell(2);
  if (movieGuess.genres.length === 1) {
    genresCell.textContent = movieGuess.genres[0];
  } else {
    genresCell.textContent = movieGuess.genres.join("/");
  }
  genresCell.style.padding = "32px 1px";
  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  function findCommonElements(a, b) {
    return a.some((element) => b.includes(element));
  }

  if (arrayEquals(movieGuess.genres.sort(), movieAnswer.genres.sort())) {
    genresCell.style.backgroundColor = "rgb(14 159 110)";
  } else if (findCommonElements(movieGuess.genres, movieAnswer.genres)) {
    genresCell.style.backgroundColor = "rgb(252, 202, 21)";
  } else {
    genresCell.style.backgroundColor = "rgb(226 232 240)";
  }
  leadActorCell = tableRow.insertCell(3);
  leadActorCell.textContent = movieGuess.leadActor;
  leadActorCell.style.padding = "32px 1px";
  if (movieGuess.leadActor === movieAnswer.leadActor) {
    leadActorCell.style.backgroundColor = "rgb(14 159 110)";
  } else if (
    movieGuessLeadActorFirstNameFirstLetter ===
      movieAnswerLeadActorFirstNameFirstLetter ||
    movieGuessLeadActorLastNameFirstLetter ===
      movieAnswerLeadActorLastNameFirstLetter
  ) {
    leadActorCell.style.backgroundColor = "rgb(252, 202, 21)";
  } else {
    leadActorCell.style.backgroundColor = "rgb(226 232 240)";
  }
  directorCell = tableRow.insertCell(4);
  directorCell.textContent = movieGuess.director;
  directorCell.style.padding = "32px 1px";
  if (movieGuess.director === movieAnswer.director) {
    directorCell.style.backgroundColor = "rgb(14 159 110)";
  } else if (
    movieGuessDirectorFirstNameFirstLetter ===
      movieAnswerDirectorFirstNameFirstLetter ||
    movieGuessDirectorLastNameFirstLetter ===
      movieAnswerDirectorLastNameFirstLetter
  ) {
    directorCell.style.backgroundColor = "rgb(252, 202, 21)";
  } else {
    directorCell.style.backgroundColor = "rgb(226 232 240)";
  }
  studioCell = tableRow.insertCell(5);
  studioCell.textContent = movieGuess.studio;
  studioCell.style.padding = "32px 1px";
  if (movieGuess.studio === movieAnswer.studio) {
    studioCell.style.backgroundColor = "rgb(14 159 110)";
  } else {
    studioCell.style.backgroundColor = "rgb(226 232 240)";
  }
  ratingCell = tableRow.insertCell(6);
  ratingCell.textContent = movieGuess.rating;
  ratingCell.style.padding = "32px 1px";
  if (movieGuess.rating === movieAnswer.rating) {
    ratingCell.style.backgroundColor = "rgb(14 159 110)";
  } else if (Math.abs(movieGuess.rating - movieAnswer.rating) <= 0.5) {
    ratingCell.style.backgroundColor = "rgb(252, 202, 21)";
  } else {
    ratingCell.style.backgroundColor = "rgb(226 232 240)";
  }
  synopsisCell = tableRow.insertCell(7);
  synopsisCell.textContent = "";
  if (movieAnswer.synopsis.length > guessedMovieCount + 1) {
    for (i = 0; i <= guessedMovieCount; i++) {
        synopsisCell.textContent += " "
        synopsisCell.textContent += movieAnswer.synopsis[i];
    }
    synopsisCell.textContent += "..."
  }
  else {
    synopsisCell.textContent = movieAnswer.synopsis.join(" ");
  }

  if (guess === movie) {
    synopsisCell.textContent = movieAnswer.synopsis.join(" ");
  }

  if (guessedMovieCount >= 6 && guess != movie) {
    synopsisCell.textContent = movieAnswer.synopsis.join(" ");
  }
  
  guessedMovieCount += 1;
  window.localStorage.setItem("guessedMovieCount", guessedMovieCount);

  preserveGameState();

  if (guess === movie) {
    initWinModal();
    showWinningResult();
    updateMovieIndex();
    updateTotalGames();
    haveGuessed = false;
    window.localStorage.setItem("haveGuessed", haveGuessed);
    document.getElementById("input").style.visibility = "hidden";
    document.getElementsByClassName("list")[0].style.visibility = "hidden";
  }

  if (guessedMovieCount >= 7 && guess != movie) {
    initLostModal();
    showLosingResult();
    updateMovieIndex();
    updateTotalGames();
    haveGuessed = false;
    window.localStorage.setItem("haveGuessed", haveGuessed);
    document.getElementById("input").style.visibility = "hidden";
    document.getElementsByClassName("list")[0].style.visibility = "hidden";
  }
}

function initHowToPlayModal() {
  const howToPlayModal = document.getElementById("how-to-play-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("how-to-play-button");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-how-to-play");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    howToPlayModal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    howToPlayModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == howToPlayModal) {
      howToPlayModal.style.display = "none";
    }
  });
}

function updateStatsModal() {
  const currentStreak = window.localStorage.getItem("currentStreak");
  const totalWins = window.localStorage.getItem("totalWins");
  const totalGames = window.localStorage.getItem("totalGames");

  document.getElementById("total-played").textContent = totalGames;
  document.getElementById("total-wins").textContent = totalWins;
  document.getElementById("current-streak").textContent = currentStreak;

  const winPct = Math.round((totalWins / totalGames) * 100) || 0;
  document.getElementById("win-pct").textContent = winPct;
}

function initStatsModal() {
  const statsModal = document.getElementById("stats-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("stats-button");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    updateStatsModal();
    statsModal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    statsModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == statsModal) {
      statsModal.style.display = "none";
    }
  });
}

function initCreditModal() {
  const creditModal = document.getElementById("credit-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("credit-button");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-credit");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    creditModal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    creditModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == creditModal) {
      creditModal.style.display = "none";
    }
  });
}

function initWinModal() {
  document.getElementById("correct-movie").textContent =
    "You correctly guessed the movie!";

  const winModal = document.getElementById("win-modal");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-win");

  // Open the modal
  winModal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    winModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == winModal) {
      winModal.style.display = "none";
    }
  });
}

function initLostModal() {
  document.getElementById("incorrect-movie").textContent =
    "The correct movie was " + movie + ". Try again tomorrow!";

  const lostModal = document.getElementById("lost-modal");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-lost");

  // Open the modal
  lostModal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    lostModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == lostModal) {
      lostModal.style.display = "none";
    }
  });
}

function shareWinResult() {
  let string = "Cinele #" + (desiredCurrentMovieIndex + 1) + " - " + guessedMovieCount + "/7\n";
  for (let i = 0; i < guessedMovieCount; i++) {
    string += "\n";
    for (let j = 0; j < 7; j++) {
      if (
        document.getElementById("table-body").rows[i].cells[j].style
          .backgroundColor === "rgb(14, 159, 110)"
      ) {
        string += "\uD83D\uDFE9";
      } else if (
        document.getElementById("table-body").rows[i].cells[j].style
          .backgroundColor === "rgb(252, 202, 21)"
      ) {
        string += "\uD83D\uDFE8";
      } else {
        string += "\u2B1C";
      }
    }
  }
  navigator.clipboard.writeText(string).then(function () {
    const shareTexts = document.querySelectorAll(".share-text");
    for (let i = 0; i < shareTexts.length; i++) {
      shareTexts[i].style.visibility = "visible";
    }
  });
}
function shareLostResult() {
  let string = "Cinele #" + (desiredCurrentMovieIndex + 1) + " - " + "X/7\n";
  for (let i = 0; i < guessedMovieCount; i++) {
    string += "\n";
    for (let j = 0; j < 7; j++) {
      if (
        document.getElementById("table-body").rows[i].cells[j].style
          .backgroundColor === "rgb(14, 159, 110)"
      ) {
        string += "\uD83D\uDFE9";
      } else if (
        document.getElementById("table-body").rows[i].cells[j].style
          .backgroundColor === "rgb(252, 202, 21)"
      ) {
        string += "\uD83D\uDFE8";
      } else {
        string += "\u2B1C";
      }
    }
  }
  navigator.clipboard.writeText(string).then(function () {
    const shareTexts = document.querySelectorAll(".share-text");
    for (let i = 0; i < shareTexts.length; i++) {
      shareTexts[i].style.visibility = "visible";
    }
  });
}