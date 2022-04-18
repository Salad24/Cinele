import {API_KEY} from 'index.js';
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";
let movieAnswer = {};
let movieGuess = {};
let movieId;
let movieAnswerGenres = [];
let movieGuessGenres = [];
let movieAnswerLeadActorFirstName;
let movieAnswerLeadActorFirstNameFirstLetter;
let movieAnswerLeadActorLastName;
let movieAnswerLeadActorLastNameFirstLetter;
let movieAnswerDirectorFirstName;
let movieAnswerDirectorFirstNameFirstLetter;
let movieAnswerDirectorLastName;
let movieAnswerDirectorLastNameFirstLetter;
let movieGuessLeadActorFirstName;
let movieGuessLeadActorFirstNameFirstLetter;
let movieGuessLeadActorLastName;
let movieGuessLeadActorLastNameFirstLetter;
let movieGuessDirectorFirstName;
let movieGuessDirectorFirstNameFirstLetter;
let movieGuessDirectorLastName;
let movieGuessDirectorLastNameFirstLetter;
let currentMovieIndex = 0;
let guessedMovieCount = 0;
let haveGuessed = false;
let now = new Date();
let firstDate = new Date(2022, 3, 18, 0, 0, 0, 0);
let desiredCurrentMovieIndex = Math.floor(Number(now - firstDate) / 1000 / 60 / 60 / 24);

let movieAnswers = [
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
    "Logan",
    "Back to the Future",
    "Fantastic Beasts and Where to Find Them",
    "It",
    "Finding Nemo",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Captain America: The Winter Soldier",
    "Harry Potter and the Deathly Hallows: Part 1",
    "The Hobbit: An Unexpected Journey",
    "The Godfather",
    "Batman v Superman: Dawn of Justice",
    "The Revenant",
    "Gone Girl",
    "WALL·E",
    "John Wick",
    "Coco",
    "Spider-Man",
    "Monsters, Inc.",
    "Toy Story",
    "The Lion King",
    "The Incredibles",
    "Gladiator",
    "Arrival",
    "Split",
    "The Hunger Games: Catching Fire",
    "The Amazing Spider-Man",
    "Thor: The Dark World",
    "The Truman Show",
    "Deadpool 2",
    "The Intouchables",
    "Bohemian Rhapsody",
    "The Imitation Game",
    "The Maze Runner",
    "Kill Bill: Vol. 1",
    "The Hangover",
    "The Shining",
    "Kingsman: The Secret Service",
    "La La Land",
    "Frozen",
    "Beauty and the Beast",
    "The Empire Strikes Back",
    "Get Out",
    "Lucy",
    "Dunkirk",
    "Zootopia",
    "Ratatouille",
    "The Green Mile",
    "Shrek",
    "Now You See Me",
    "Big Hero 6",
    "Parasite",
    "The Hunger Games: Mockingjay - Part 1",
    "Skyfall",
    "Jurassic Park",
    "X-Men: Days of Future Past",
    "Pirates of the Caribbean: Dead Man's Chest",
    "Gravity",
    "I Am Legend",
    "Venom",
    "The Silence of the Lambs",
    "Baby Driver",
    "Rogue One: A Star Wars Story",
    "Man of Steel",
    "Despicable Me",
    "World War Z",
    "Star Wars: The Last Jedi",
    "Captain Marvel",
    "Saving Private Ryan",
    "The Prestige",
    "Ready Player One",
    "Spirited Away",
    "Schindler's List",
    "Return of the Jedi",
    "Spider-Man 2",
    "Charlie and the Chocolate Factory",
    "Catch Me If You Can",
    "Spider-Man: Far From Home",
    "Toy Story 3",
    "The Departed",
    "Black Swan",
    "The Grand Budapest Hotel",
    "Eternal Sunshine of the Spotless Mind",
    "Memento",
    "Sherlock Holmes",
    "V for Vendetta",
    "Whiplash",
    "Star Wars: Episode I - The Phantom Menace",
    "Alice in Wonderland",
    "Her",
    "The Hateful Eight",
    "Léon: The Professional",
    "Pirates of the Caribbean: At World's End",
    "The Hobbit: The Battle of the Five Armies",
    "Pirates of the Caribbean: On Stranger Tides",
    "Reservoir Dogs",
    "Aquaman",
    "Jumanji: Welcome to the Jungle",
    "Kill Bill: Vol. 2",
    "300",
    "Alien",
    "Maleficent",
    "Men in Black",
    "Edge of Tomorrow",
    "Spider-Man: No Way Home",
    "Cars",
    "Toy Story 2",
    "Spider-Man 3",
    "A Quiet Place",
    "Life of Pi",
    "Brave",
    "Twilight",
    "Blade Runner",
    "Passengers",
    "Star Wars: Episode III - Revenge of the Sith",
    "Justice League",
    "X-Men: Apocalypse",
    "Birdman or (The Unexpected Virtue of Ignorance)",
    "Divergent",
    "Ex Machina",
    "Spider-Man: Into the Spider-Verse",
    "American Sniper",
    "Ant-Man and the Wasp",
    "Ice Age",
    "X-Men: First Class",
    "Life Is Beautiful",
    "The Hobbit: The Desolation of Smaug",
    "The Amazing Spider-Man 2",
    "Star Wars: Episode II - Attack of the Clones",
    "Incredibles 2",
    "How to Train Your Dragon",
    "Edward Scissorhands",
    "Hacksaw Ridge",
    "The Curious Case of Benjamin Button",
    "Blade Runner 2049",
    "A Clockwork Orange",
    "Wreck-It Ralph",
    "The Shape of Water",
    "Back to the Future Part II",
    "Finding Dory",
    "Ted",
    "The Hunger Games: Mockingjay - Part 2",
    "Pacific Rim",
    "Silver Linings Playbook",
    "The Great Gatsby",
    "2012",
    "The Terminator",
    "Moana",
    "Once Upon a Time… in Hollywood",
    "Zombieland",
    "Donnie Darko",
    "Terminator 2: Judgment Day",
    "Drive",
    "A Star Is Born",
    "Prometheus",
    "Fifty Shades of Grey",
    "American Beauty",
    "Call Me by Your Name",
    "John Wick: Chapter 2",
    "Pirates of the Caribbean: Dead Men Tell No Tales",
    "Kick-Ass",
    "Raiders of the Lost Ark",
    "Me Before You",
    "GoodFellas",
    "The Devil Wears Prada",
    "The Fault in Our Stars",
    "The Social Network",
    "I, Robot",
    "Fury",
    "Shrek 2",
    "Rise of the Planet of the Apes",
    "Jurassic World: Fallen Kingdom",
    "Despicable Me 2",
    "The Incredible Hulk",
    "Ocean's Eleven",
    "Amélie",
    "1917",
    "12 Years a Slave",
    "No Country for Old Men",
    "Aladdin",
    "Good Will Hunting",
    "The Godfather: Part II",
    "X-Men",
    "American History X",
    "In Time",
    "The Notebook",
    "The Sixth Sense",
    "Dawn of the Planet of the Apes",
    "Taken",
    "E.T. the Extra-Terrestrial",
    "Cast Away",
    "Now You See Me 2",
    "Tangled",
    "The Conjuring",
    "2001: A Space Odyssey",
    "Transformers",
    "Taxi Driver",
    "The Theory of Everything",
    "Kung Fu Panda",
    "The Big Lebowski",
    "Fast & Furious 6",
    "Minions",
    "Oblivion",
    "Scarface",
    "Prisoners",
    "Bruce Almighty",
    "Furious 7",
    "Madagascar",
    "Die Hard",
    "Spectre",
    "Dead Poets Society",
    "Fantastic Beasts: The Crimes of Grindelwald",
    "Monsters University",
    "Green Book",
    "The Matrix Reloaded",
    "Limitless",
    "Slumdog Millionaire",
    "Sherlock Holmes: A Game of Shadows",
    "Gran Torino",
    "Jumanji",
    "X-Men Origins: Wolverine",
    "Home Alone",
    "The Fifth Element",
    "Kong: Skull Island",
    "The Perks of Being a Wallflower",
    "Nightcrawler",
    "Pan's Labyrinth",
    "Insurgent",
    "The Fate of the Furious",
    "The Hangover Part II",
    "Casino Royale",
    "Men in Black 3",
    "Looper",
    "Maze Runner: The Scorch Trials",
    "21 Jump Street",
    "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    "Knives Out",
    "Miss Peregrine's Home for Peculiar Children",
    "Star Trek",
    "Back to the Future Part III",
    "Night at the Museum",
    "Your Name.",
    "Kingsman: The Golden Circle",
    "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "X2",
    "One Flew Over the Cuckoo's Nest",
    "Aladdin",
    "Mr. & Mrs. Smith",
    "The Usual Suspects",
    "Full Metal Jacket",
    "Three Billboards Outside Ebbing, Missouri",
    "A Beautiful Mind",
    "Troy",
    "The Lion King",
    "Beauty and the Beast",
    "The Mask",
    "Men in Black II",
    "Zodiac",
    "(500) Days of Summer",
    "Braveheart",
    "Bird Box",
    "Murder on the Orient Express",
    "Jaws",
    "Ice Age: The Meltdown",
    "Mission: Impossible - Ghost Protocol",
    "Into the Wild",
    "The Wolverine",
    "The Pursuit of Happyness",
    "X-Men: The Last Stand",
    "Frozen II",
    "The Fast and the Furious",
    "Trainspotting",
    "Psycho",
    "Indiana Jones and the Last Crusade",
    "The Greatest Showman",
    "How to Train Your Dragon 2",
    "Hancock",
    "The Matrix Revolutions",
    "Requiem for a Dream",
    "Snowpiercer",
    "Fantastic Four",
    "Independence Day",
    "Mulan",
    "Star Trek Into Darkness",
    "Room",
    "Toy Story 4",
    "Soul",
    "Million Dollar Baby",
    "John Wick: Chapter 3 - Parabellum",
    "The Twilight Saga: New Moon",
    "The Da Vinci Code",
    "District 9",
    "Godzilla vs. Kong",
    "American Psycho",
    "Sonic the Hedgehog",
    "Unbreakable",
    "Star Wars: The Rise of Skywalker",
    "The Bourne Identity",
    "Home Alone 2: Lost in New York",
    "Hidden Figures",
    "Zack Snyder's Justice League",
    "The Twilight Saga: Breaking Dawn - Part 2",
    "Aliens",
    "A Bug's Life",
    "Watchmen",
    "Godzilla",
    "To All the Boys I've Loved Before",
    "The Twilight Saga: Breaking Dawn - Part 1",
    "Shazam!",
    "The Twilight Saga: Eclipse",
    "We're the Millers",
    "The Nightmare Before Christmas",
    "Elysium",
    "Alita: Battle Angel",
    "The Big Short",
    "The King's Speech",
    "Black Widow",
    "Indiana Jones and the Temple of Doom",
    "Saw",
    "The Mummy",
    "Shrek the Third",
    "The Hangover Part III",
    "Hotel Transylvania",
    "Jojo Rabbit",
    "War for the Planet of the Apes",
    "Snatch",
    "Dallas Buyers Club",
    "Ghostbusters",
    "Mission: Impossible - Rogue Nation",
    "Howl's Moving Castle",
    "The Pianist",
    "The Equalizer",
    "Terminator Genisys",
    "The Purge",
    "San Andreas",
    "Mean Girls",
    "The Secret Life of Pets",
    "Spotlight",
    "The Jungle Book",
    "Corpse Bride",
    "Annihilation",
    "Argo",
    "Alien: Covenant",
    "After",
    "Transformers: Revenge of the Fallen",
    "Minority Report",
    "Ocean's Eight",
    "Ghost in the Shell",
    "Tenet",
    "Solo: A Star Wars Story",
    "Lady Bird",
    "Mission: Impossible",
    "Snow White and the Huntsman",
    "Bad Boys for Life",
    "Baywatch",
    "Glass",
    "Transformers: Dark of the Moon",
    "Venom: Let There Be Carnage",
    "Sicario",
    "Cruella",
    "Ice Age: Dawn of the Dinosaurs",
    "22 Jump Street",
    "About Time",
    "Shaun of the Dead",
    "Jumanji: The Next Level",
    "Crazy, Stupid, Love.",
    "Source Code",
    "Fifty Shades Freed",
    "It Chapter Two",
    "War of the Worlds",
    "Chappie",
    "Twelve Monkeys",
    "The Lost World: Jurassic Park",
    "Wonder",
    "Assassin's Creed",
    "Friends with Benefits",
    "The Conjuring 2",
    "The Breakfast Club",
    "Sing",
    "Fantastic Four: Rise of the Silver Surfer",
    "Sin City",
    "The Simpsons Movie",
    "Wonder Woman 1984",
    "Focus",
    "Dune",
    "Indiana Jones and the Kingdom of the Crystal Skull",
    "Fifty Shades Darker",
    "Fast Five",
    "Transformers: Age of Extinction",
    "Tomb Raider",
    "365 Days",
    "Real Steel",
    "Oldboy",
    "The Good, the Bad and the Ugly",
    "10 Cloverfield Lane",
    "The Day After Tomorrow",
    "Armageddon",
    "The Lego Movie",
    "King Kong",
    "Quantum of Solace",
    "Mission: Impossible - Fallout",
    "The Secret Life of Walter Mitty",
    "The Cabin in the Woods",
    "The Kissing Booth",
    "The Expendables",
    "Apocalypse Now",
    "Nocturnal Animals",
    "Pride & Prejudice",
    "Pixels",
    "American Pie",
    "The Little Mermaid",
    "10 Things I Hate About You",
    "The Bourne Ultimatum",
    "The Nice Guys",
    "Ice Age: Continental Drift",
    "BlacKkKlansman",
    "Maze Runner: The Death Cure",
    "The Terminal",
    "12 Angry Men",
    "127 Hours",
    "Pretty Woman",
    "Valerian and the City of a Thousand Planets",
    "Fargo",
    "Percy Jackson & the Olympians: The Lightning Thief",
    "Scott Pilgrim vs. the World",
    "Groundhog Day",
    "The Bourne Supremacy",
    "The Help",
    "American Hustle",
    "The Exorcist",
    "Batman",
    "Princess Mononoke",
    "Cinderella",
    "Cars 2",
    "Midnight in Paris",
    "Blood Diamond",
    "The Boss Baby",
    "Sausage Party",
    "Shang-Chi and the Legend of the Ten Rings",
    "Ralph Breaks the Internet",
    "Dark Shadows",
    "Green Lantern",
    "Snow White and the Seven Dwarfs",
    "Ted 2",
    "Luca",
    "Tomorrowland",
    "Hot Fuzz",
    "The Mummy",
    "Life",
    "Nerve",
    "Neighbors",
    "Hugo",
    "Hercules",
    "Predator",
    "Cloud Atlas",
    "Don't Breathe",
    "Juno",
    "My Neighbor Totoro",
    "Big Fish",
    "Moonlight",
    "Rocky",
    "Grease",
    "The Butterfly Effect",
    "Encanto",
    "Ocean's Twelve",
    "50 First Dates",
    "Sully",
    "TRON: Legacy",
    "Despicable Me 3",
    "The Croods",
    "The Suicide Squad",
    "Wanted",
    "Lost in Translation",
    "Creed",
    "Fast & Furious",
    "Easy A",
    "Shrek Forever After",
    "How the Grinch Stole Christmas",
    "Bridge of Spies",
    "2 Fast 2 Furious",
    "Oz the Great and Powerful",
    "Hansel & Gretel: Witch Hunters",
    "Jupiter Ascending",
    "Rush",
    "8 Mile",
    "Teenage Mutant Ninja Turtles",
    "Rampage",
    "Night at the Museum: Battle of the Smithsonian",
    "Click",
    "Cloverfield",
    "The Meg",
    "The Boy in the Striped Pyjamas",
    "Prince of Persia: The Sands of Time",
    "The Girl with the Dragon Tattoo",
    "Captain Phillips",
    "Hellboy",
    "Angels & Demons",
    "Seven Pounds",
    "Jack Reacher",
    "After Earth",
    "Pitch Perfect",
    "Jurassic Park III",
    "Children of Men",
    "Us",
    "Allegiant",
    "Warcraft",
    "City of God",
    "Fast & Furious Presents: Hobbs & Shaw",
    "Superbad",
    "Hereditary",
    "Star Trek Beyond",
    "Madagascar: Escape 2 Africa",
    "The Mummy Returns",
    "The Expendables 2",
    "Lion",
    "RED",
    "Brokeback Mountain",
    "Coraline",
    "Olympus Has Fallen",
    "Marriage Story",
    "Ford v Ferrari",
    "Super 8",
    "mother!",
    "Little Miss Sunshine",
    "xXx: Return of Xander Cage",
    "Taken 2",
    "Cinderella",
    "Mulan",
    "Yes Man",
    "Rise of the Guardians",
    "Train to Busan",
    "Hachi: A Dog's Tale",
    "Megamind",
    "Tarzan",
    "Pokémon Detective Pikachu",
    "Kung Fu Panda 2",
    "A Good Day to Die Hard",
    "The Last Samurai",
    "The Intern",
    "Constantine",
    "The Purge: Anarchy",
    "The 40 Year Old Virgin",
    "The Legend of Tarzan",
    "Alice Through the Looking Glass",
    "Rio",
    "300: Rise of an Empire",
    "Inferno",
    "Free Guy",
    "Love Actually",
    "Sleepy Hollow",
    "Scary Movie",
    "The Age of Adaline",
    "Insidious",
    "Ghostbusters",
    "Heat",
    "Gangs of New York",
    "The Emperor's New Groove",
    "Mamma Mia!",
    "Love, Rosie",
    "Horrible Bosses",
    "The Witch",
    "Shark Tale",
    "The Proposal",
    "Ad Astra",
    "Warm Bodies",
    "Terminator 3: Rise of the Machines",
    "Lock, Stock and Two Smoking Barrels",
    "Captain Fantastic",
    "Atomic Blonde",
    "The Impossible",
    "This Is the End",
    "Terminator Salvation",
    "Beetlejuice",
    "The Platform",
    "Noah",
    "Mission: Impossible III",
    "The Irishman",
    "Love, Simon",
    "Top Gun",
    "The Tomorrow War",
    "The Fast and the Furious: Tokyo Drift",
    "28 Days Later",
    "Clash of the Titans",
    "The Chronicles of Narnia: Prince Caspian",
    "Pearl Harbor",
    "Ocean's Thirteen",
    "The Man from U.N.C.L.E.",
    "Eternals",
    "Mission: Impossible II",
    "The Jungle Book",
    "Rango",
    "F9",
    "Predestination",
    "Kick-Ass 2",
    "The Thing",
    "Spy",
    "One Hundred and One Dalmatians",
    "Dracula Untold",
    "Independence Day: Resurgence",
    "Raya and the Last Dragon",
    "National Treasure",
    "Jackie Brown",
    "Gremlins",
    "Don't Look Up",
    "What Happened to Monday",
    "Lara Croft: Tomb Raider",
    "Mystic River",
    "Dark Phoenix",
    "Underworld",
    "Batman Returns",
    "Happy Death Day",
    "The Nun",
    "It Follows",
    "Annabelle",
    "The Others",
    "The Danish Girl",
    "Bad Boys",
    "Red Sparrow",
    "Resident Evil",
    "A.I. Artificial Intelligence",
    "Project X",
    "Fantastic Four",
    "There Will Be Blood",
    "The Lone Ranger",
    "The 5th Wave",
    "How to Train Your Dragon: The Hidden World",
    "Dirty Dancing",
    "The Hitman's Bodyguard",
    "Madagascar 3: Europe's Most Wanted",
    "Rear Window",
    "Contagion",
    "The Babadook",
    "Mr. Nobody",
    "Rain Man",
    "Gattaca",
    "The Polar Express",
    "Mrs. Doubtfire",
    "The Book of Eli",
    "Space Jam",
    "The Blind Side",
    "The Magnificent Seven",
    "Scream",
    "Flight",
    "The Game",
    "Maleficent: Mistress of Evil",
    "The Ring",
    "The Accountant",
    "Dumb and Dumber",
    "Night at the Museum: Secret of the Tomb",
    "Bolt",
    "The Girl on the Train",
    "Die Hard: With a Vengeance",
    "Onward",
    "Lilo & Stitch",
    "Transformers: The Last Knight",
    "Meet the Parents",
    "Bumblebee",
    "Ender's Game",
    "Alice in Wonderland",
    "The Karate Kid",
    "Sweeney Todd: The Demon Barber of Fleet Street",
    "First Blood",
    "Grown Ups",
    "The Lobster",
    "Notting Hill",
    "Jason Bourne",
    "The Interview",
    "Bright",
    "Tropic Thunder",
    "King Arthur: Legend of the Sword",
    "The Godfather: Part III",
    "Speed",
    "The Bourne Legacy",
    "Taken 3",
    "Collateral Beauty",
    "Mulholland Drive",
    "Central Intelligence",
    "Cloudy with a Chance of Meatballs",
    "Moonrise Kingdom",
    "G.I. Joe: Retaliation",
    "Manchester by the Sea",
    "Ghost Rider",
    "Hitch",
    "Pinocchio",
    "Hotel Transylvania 2",
    "Pocahontas",
    "Game Night",
    "Live Free or Die Hard",
    "The Dictator",
    "Van Helsing",
    "I, Tonya",
    "From Dusk Till Dawn",
    "Pitch Perfect 2",
    "Jumper",
    "Godzilla: King of the Monsters",
    "Hulk",
    "Enemy",
    "Blade",
    "Paul",
    "Little Women",
    "Eyes Wide Shut",
    "Five Feet Apart",
    "Annabelle: Creation",
    "Southpaw",
    "John Carter",
    "Midsommar",
    "Transcendence",
    "The Chronicles of Narnia: The Voyage of the Dawn Treader",
    "Ace Ventura: Pet Detective",
    "Bambi",
    "Paper Towns",
    "Inside Man",
    "Moon",
    "The Goonies",
    "RoboCop",
    "The Tourist",
    "Just Go with It",
    "The Devil's Advocate",
    "Total Recall",
    "Kung Fu Panda 3",
    "Monty Python and the Holy Grail",
    "Training Day",
    "Die Hard 2",
    "Who Framed Roger Rabbit",
    "Battleship",
    "School of Rock",
    "Interview with the Vampire",
    "The Good Dinosaur",
    "Total Recall",
    "The Hurt Locker",
    "Anastasia",
    "Les Misérables",
    "Due Date",
    "Salt",
    "Mortal Kombat",
    "Enchanted",
    "Non-Stop",
    "The Untouchables",
    "Vertigo",
    "After We Collided",
    "Ghost",
    "The Italian Job",
    "The Adventures of Tintin",
    "Black Hawk Down",
    "Stand by Me",
    "Liar Liar",
    "The Island",
    "The Invisible Man",
    "The Wizard of Oz",
    "Signs",
    "Brother Bear",
    "Cars 3",
    "The Iron Giant",
    "The Kissing Booth 2",
    "Peter Pan",
    "Casino",
    "The Purge: Election Year",
    "Nobody",
    "Apollo 13",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "The World's End",
    "Mars Attacks!",
    "Zombieland: Double Tap",
    "First Man",
    "Percy Jackson: Sea of Monsters",
    "Extraction",
    "Bad Boys II",
    "Boyhood",
    "Lady and the Tramp",
    "Hook",
    "Alien³",
    "The Princess and the Frog",
    "The Shallows",
    "The Machinist",
    "Citizen Kane",
    "The Favourite",
    "True Grit",
    "Apocalypto",
    "Enola Holmes",
    "Sinister",
    "The Conjuring: The Devil Made Me Do It",
    "Gifted",
    "Final Destination",
    "Chronicle",
    "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
    "Jack the Giant Slayer",
    "American Gangster",
    "The Aviator",
    "Knowing",
    "Darkest Hour",
    "Lemony Snicket's A Series of Unfortunate Events",
    "Collateral",
    "Sleeping Beauty",
    "17 Again",
    "Cowboys & Aliens",
    "The Transporter",
    "The Dark Tower",
    "Escape Plan",
    "Hellboy II: The Golden Army",
    "National Treasure: Book of Secrets",
    "Gemini Man",
    "Bloodshot",
    "Crimson Peak",
    "The Great Wall",
    "Batman Forever",
    "The Sorcerer's Apprentice",
    "13 Going on 30",
    "Happy Feet",
    "Romeo + Juliet",
    "Casablanca",
    "The Huntsman: Winter's War",
    "Face/Off",
    "Bridget Jones's Diary",
    "Daredevil",
    "The Aristocats",
    "Jungle Cruise",
    "Saw II",
    "Love & Other Drugs",
    "Creed II",
    "Halloween",
    "The Hunchback of Notre Dame",
    "Skyscraper",
    "A Quiet Place Part II",
    "Paranormal Activity",
    "Everest",
    "Once Upon a Time in America",
    "There's Something About Mary",
    "Batman & Robin",
    "Wind River",
    "Dumbo",
    "The Princess Diaries",
    "The Expendables 3",
    "Dredd",
    "The Holiday",
    "American Pie 2",
    "The Lego Batman Movie",
    "Death Proof",
    "The Place Beyond the Pines",
    "Man on Fire",
    "Grave of the Fireflies",
    "The Gentlemen",
    "The Mule",
    "Orphan",
    "The Illusionist",
    "Panic Room",
    "Bad Teacher",
    "Fantastic Mr. Fox",
    "Bee Movie",
    "Journey to the Center of the Earth",
    "The Town",
    "Terminator: Dark Fate",
    "The Giver",
    "I Am Number Four",
    "White House Down",
    "The Mortal Instruments: City of Bones",
    "No Strings Attached",
    "Chicken Run",
    "High School Musical",
    "Jack Reacher: Never Go Back",
    "The DUFF",
    "In Bruges",
    "Law Abiding Citizen",
    "Pacific Rim: Uprising",
    "Moneyball",
    "Meet the Fockers",
    "Bram Stoker's Dracula",
    "London Has Fallen",
    "The Post",
    "The Equalizer 2",
    "Sucker Punch",
    "Marley & Me",
    "Mary Poppins",
    "A Nightmare on Elm Street",
    "RoboCop",
    "Allied",
    "The Mist",
    "Miracle in Cell No. 7",
    "Geostorm",
    "The Founder",
    "G.I. Joe: The Rise of Cobra",
    "Exodus: Gods and Kings",
    "Men in Black: International",
    "Ferris Bueller's Day Off",
    "Atlantis: The Lost Empire",
    "War Dogs",
    "Meet Joe Black",
    "Neighbors 2: Sorority Rising",
    "The A-Team",
    "The Circle",
    "No Time to Die",
    "Déjà Vu",
    "The Golden Compass",
    "21",
    "Isle of Dogs",
    "Power Rangers",
    "Perfect Strangers",
    "Casper",
    "Blue Is the Warmest Color",
    "Into the Woods",
    "The Visit",
    "Robin Hood",
    "Bridge to Terabithia",
    "Carrie",
    "Shooter",
    "The Book Thief",
    "L.A. Confidential",
    "Mortal Engines",
    "If I Stay",
    "Spirit: Stallion of the Cimarron",
    "Blade II",
    "Halloween",
    "Monsters vs Aliens",
    "Alien Resurrection",
    "Hush",
    "Moulin Rouge!",
    "American Reunion",
    "Rocketman",
    "The Lovely Bones",
    "Robots",
    "Antz",
    "Bridesmaids",
    "A Christmas Carol",
    "The Adjustment Bureau",
    "Dirty Grandpa",
    "Burn After Reading",
    "Cube",
    "Starship Troopers",
    "Deepwater Horizon",
    "Hannibal",
    "Ice Age: Collision Course",
    "Dumbo",
    "The Commuter",
    "The Lion King II: Simba's Pride",
    "Zero Dark Thirty",
    "El Camino: A Breaking Bad Movie",
    "Don Jon",
    "The Predator",
    "Escape Room",
    "Insomnia",
    "Snowden",
    "Pain & Gain",
    "6 Underground",
    "Fear and Loathing in Las Vegas",
    "Hell or High Water",
    "The Princess Bride"
];
/*let k = []

for (let i = 0; i < 200; i++) {
    k.push()
}*/

let movie = movieAnswers[currentMovieIndex]

initLocalStorage();
checkIfPlayedYesterday();
initHowToPlayModal();
initStatsModal();
initCreditModal();
loadHowToPlay();
loadLocalStorage();
getMovieAnswer(SEARCHAPI + movie);

function initLocalStorage() {
    const storedcurrentMovieIndex =
        window.localStorage.getItem("currentMovieIndex");
    if (!storedcurrentMovieIndex) {
        window.localStorage.setItem("currentMovieIndex", desiredCurrentMovieIndex);
    } else {
        currentMovieIndex = Number(storedcurrentMovieIndex);
        movie = movieAnswers[currentMovieIndex];
    }

    const storedHaveGuessed =
        window.localStorage.getItem("haveGuessed");
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

    haveGuessed =
        window.localStorage.getItem("haveGuessed") ||
        haveGuessed;

    const storedBoardContainer = window.localStorage.getItem("table");
    if (storedBoardContainer) {
        document.getElementById("table").innerHTML =
            storedBoardContainer;
    }
}

function checkIfPlayedYesterday() {
    if (desiredCurrentMovieIndex > currentMovieIndex) {
        currentMovieIndex = desiredCurrentMovieIndex;
        window.localStorage.setItem("currentMovieIndex", currentMovieIndex);
        movie = movieAnswers[currentMovieIndex]
    }
}

function loadHowToPlay() {
    const totalGames =
        Number(window.localStorage.getItem("totalGames"));
    guessedMovieCount =
        Number(window.localStorage.getItem("guessedMovieCount"));
    if (!totalGames && !guessedMovieCount) {
        const howToPlayModal = document.getElementById("how-to-play-modal");

        // Get the <span> element that closes the modal
        const span = document.getElementById("close-how-to-play");

        // Open the modal
        howToPlayModal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function() {
            howToPlayModal.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
            if (event.target == howToPlayModal) {
                howToPlayModal.style.display = "none";
            }
        });
    }
}

if (desiredCurrentMovieIndex === currentMovieIndex && haveGuessed == "false") {
    //This is the case whenever the word has not been guessed

    //Should run at when the indexes are the same and there is no guess
    clearBoard();
    resetGameState();
}

if (desiredCurrentMovieIndex != currentMovieIndex) {
    document.getElementById("input").style.visibility = "hidden";
    document.getElementsByClassName("list")[0].style.visibility = "hidden"
    const finalResultEl = document.getElementById("final-score");
    const currentStreak = window.localStorage.getItem("currentStreak") || 0;
    if (currentStreak == 0) {
        finalResultEl.textContent = "Moviele " + (desiredCurrentMovieIndex + 1) + " - Unsuccessful Today!";
    } else {
        finalResultEl.textContent = "Moviele " + (desiredCurrentMovieIndex + 1) + " - You Win!";
    }
}

function resetGameState() {
    window.localStorage.removeItem("guessedWordCount");
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
    finalResultEl.textContent = "Moviele " + (desiredCurrentMovieIndex + 1) + " - You Win!";

    const totalWins = window.localStorage.getItem("totalWins") || 0;
    window.localStorage.setItem("totalWins", Number(totalWins) + 1);

    const currentStreak = window.localStorage.getItem("currentStreak") || 0;
    window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
}

function showLosingResult() {
    const finalResultEl = document.getElementById("final-score");
    finalResultEl.textContent = "Moviele " + (desiredCurrentMovieIndex + 1) + " - Unsuccessful Today!";;

    window.localStorage.setItem("currentStreak", 0);
}

function clearBoard() {
    document.getElementById("input").style.visibility = "visible";
    document.getElementsByClassName("list")[0].style.visibility = "visible"
    document.getElementById("table-body").remove();
    let tableBody = document.createElement("tbody");
    tableBody.setAttribute("id", "table-body");
    document.getElementById("table").append(tableBody);
}

function updateWordIndex() {
    currentMovieIndex += 1;
    window.localStorage.setItem("currentMovieIndex", currentMovieIndex);
}

function updateMovieleStatus() {
    haveGuessed = true;
    window.localStorage.setItem("haveGuessed", haveGuessed);
}

let input = document.getElementById("input");

async function displayMovies({
    title,
    id,
    release_date,
    vote_average
}) {

    input.value = title;
    guess = input.value;
    movieId = id;
    movieGuess.title = title;
    movieGuess.id = id;
    movieGuess.releaseDate = release_date;
    movieGuess.rating = vote_average;
    await getMovieGuessDetails("https://api.themoviedb.org/3/movie/" + movieId + "?" + API_KEY+"&language=en-US");
    await getMovieGuessCredits("https://api.themoviedb.org/3/movie/" + movieId + "/credits?" + API_KEY + "&language=en-US");
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
    let {
        title,
        id,
        release_date,
        vote_average
    } = respData.results[0];
    if (release_date) {
        release_date = parseInt(release_date.substring(0, 4));
    }
    movieAnswer.title = title;
    movieAnswer.id = id;
    movieAnswer.releaseDate = release_date;
    movieAnswer.rating = vote_average;
    await getMovieAnswerDetails("https://api.themoviedb.org/3/movie/" + id + "?" + API_KEY+"&language=en-US");
    await getMovieAnswerCredits("https://api.themoviedb.org/3/movie/" + id + "/credits?" + API_KEY + "&language=en-US");
}

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    showMovies(respData.results);
}

function showMovies(movies) {
    removeElements();
    movies.forEach((movie) => {
        let {
            title,
            id,
            release_date,
            vote_average
        } = movie;
        if (release_date) {
            release_date = parseInt(release_date.substring(0, 4));
        }
        //Create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.onclick = () => displayMovies({
            title,
            id,
            release_date,
            vote_average
        });
        //Display the value in the array
        listItem.textContent = title + " (" + release_date + ") ";
        if (document.querySelectorAll(".list-items").length <= 5) {
            document.querySelector(".list").appendChild(listItem);
        }
    })
}

async function getMovieAnswerDetails(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    respData.genres.forEach(function(genre) {
        movieAnswerGenres.push(Object.values(genre)[1]);
    })
    movieAnswer.genres = movieAnswerGenres;
    movieAnswer.studio = respData.production_companies[0].name;
}

async function getMovieGuessDetails(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    respData.genres.forEach(function(genre) {
        movieGuessGenres.push(Object.values(genre)[1]);
    })
    movieGuess.genres = movieGuessGenres;
    movieGuess.studio = respData.production_companies[0].name;
}

async function getMovieAnswerCredits(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    movieAnswer.leadActor = respData.cast[0].name;
    movieAnswer.director = respData.crew[0].name;
    movieAnswerLeadActorFirstName = movieAnswer.leadActor.toLowerCase().split(" ")[0];
    movieAnswerLeadActorFirstNameFirstLetter = movieAnswerLeadActorFirstName.charAt(0);
    movieAnswerLeadActorLastName = movieAnswer.leadActor.toLowerCase().substring(movieAnswerLeadActorFirstName.length).trim();
    movieAnswerLeadActorLastNameFirstLetter = movieAnswerLeadActorLastName.charAt(0);
    movieAnswerDirectorFirstName = movieAnswer.director.toLowerCase().split(" ")[0];
    movieAnswerDirectorFirstNameFirstLetter = movieAnswerDirectorFirstName.charAt(0);
    movieAnswerDirectorLastName = movieAnswer.director.toLowerCase().substring(movieAnswerDirectorFirstName.length).trim();
    movieAnswerDirectorLastNameFirstLetter = movieAnswerDirectorLastName.charAt(0);
}

async function getMovieGuessCredits(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    movieGuess.leadActor = respData.cast[0].name;
    movieGuess.director = respData.crew[0].name;
    movieGuessLeadActorFirstName = movieGuess.leadActor.toLowerCase().split(" ")[0];
    movieGuessLeadActorFirstNameFirstLetter = movieGuessLeadActorFirstName.charAt(0);
    movieGuessLeadActorLastName = movieGuess.leadActor.toLowerCase().substring(movieGuessLeadActorFirstName.length).trim();
    movieGuessLeadActorLastNameFirstLetter = movieGuessLeadActorLastName.charAt(0);
    movieGuessDirectorFirstName = movieGuess.director.toLowerCase().split(" ")[0];
    movieGuessDirectorFirstNameFirstLetter = movieGuessDirectorFirstName.charAt(0);
    movieGuessDirectorLastName = movieGuess.director.toLowerCase().substring(movieGuessDirectorFirstName.length).trim();
    movieGuessDirectorLastNameFirstLetter = movieGuessDirectorLastName.charAt(0);
}

input.addEventListener('input', function() {
    guess = input.value;
    if (guess) {
        getMovies(SEARCH_API + guess);
    }
})

function submitGuess() {
    updateMovieleStatus();
    input.value = "";
    let tableRow = document.createElement("tr");
    document.querySelector("#table-body").appendChild(tableRow);
    nameCell = tableRow.insertCell(0);
    nameCell.textContent = movieGuess.title;
    nameCell.style.padding = "32px 1px";
    if (movieGuess.title === movieAnswer.title) {
        nameCell.style.backgroundColor = "rgb(14 159 110)";
    }
    releaseDateCell = tableRow.insertCell(1)
    releaseDateCell.textContent = movieGuess.releaseDate;
    releaseDateCell.style.padding = "32px 1px";
    if (movieGuess.releaseDate === movieAnswer.releaseDate) {
        releaseDateCell.style.backgroundColor = "rgb(14 159 110)";
    } else if (Math.abs(movieGuess.releaseDate - movieAnswer.releaseDate <= 5)) {
        releaseDateCell.style.backgroundColor = "rgb(252, 202, 21)";
    }
    else {
        releaseDateCell.style.backgroundColor = "rgb(226 232 240)";
    }
    genresCell = tableRow.insertCell(2);
    if (movieGuess.genres.length === 1) {
        genresCell.textContent = movieGuess.genres[0];
    }
    else {
        genresCell.textContent = movieGuess.genres.join("/");
    }
    genresCell.style.padding = "32px 1px";
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
        }

    function findCommonElements(a, b) {
        return a.some(element => b.includes(element))
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
    } else if (movieGuessLeadActorFirstNameFirstLetter === movieAnswerLeadActorFirstNameFirstLetter || movieGuessLeadActorLastNameFirstLetter === movieAnswerLeadActorLastNameFirstLetter) {
        leadActorCell.style.backgroundColor = "rgb(252, 202, 21)";
    } else {
        leadActorCell.style.backgroundColor = "rgb(226 232 240)";
    }
    directorCell = tableRow.insertCell(3);
    directorCell.textContent = movieGuess.director;
    directorCell.style.padding = "32px 1px";
    if (movieGuess.director === movieAnswer.director) {
        directorCell.style.backgroundColor = "rgb(14 159 110)";
    } else if (movieGuessDirectorFirstNameFirstLetter === movieAnswerDirectorFirstNameFirstLetter || movieGuessDirectorLastNameFirstLetter === movieAnswerDirectorLastNameFirstLetter) {
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
    ratingCell.textContent = movieAnswer.rating;
    ratingCell.style.padding = "32px 1px";
    if (movieGuess.rating === movieAnswer.rating) {
        ratingCell.style.backgroundColor = "rgb(14 159 110)";
    } else if (Math.abs(movieGuess.rating - movieAnswer.rating) <= 0.5) {
        ratingCell.style.backgroundColor = "rgb(252, 202, 21)";
    } else {
        ratingCell.style.backgroundColor = "rgb(226 232 240)";
    }

    guessedMovieCount += 1;
    window.localStorage.setItem("guessedMovieCount", guessedMovieCount);

    preserveGameState();

    if (guess === movie) {
        setTimeout(() => {
            alert("You correctly guessed the movie!");
            showWinningResult();
            updateWordIndex();
            updateTotalGames();
            haveGuessed = false;
            window.localStorage.setItem("haveGuessed", haveGuessed);
            document.getElementById("input").style.visibility = "hidden";
            document.getElementsByClassName("list")[0].style.visibility = "hidden"
            return;
        }, 1000);
    }

    if (guessedMovieCount >= 6 && guess != movie) {
        setTimeout(() => {
            alert("The correct movie was " + movie);
            showLosingResult();
            updateWordIndex();
            updateTotalGames();
            haveGuessed = false;
            window.localStorage.setItem("haveGuessed", haveGuessed);
            document.getElementById("input").style.visibility = "hidden";
            document.getElementsByClassName("list")[0].style.visibility = "hidden"
            return;
        }, 1000);
    }
}

function initHowToPlayModal() {
    const howToPlayModal = document.getElementById("how-to-play-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("how-to-play-button");

    // Get the <span> element that closes the modal
    const span = document.getElementById("close-how-to-play");

    // When the user clicks on the button, open the modal
    btn.addEventListener("click", function() {
        howToPlayModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        howToPlayModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
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
    btn.addEventListener("click", function() {
        updateStatsModal();
        statsModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        statsModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
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
    btn.addEventListener("click", function() {
        creditModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
        creditModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
        if (event.target == creditModal) {
            creditModal.style.display = "none";
        }
    });
}