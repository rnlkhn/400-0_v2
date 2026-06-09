(() => {
const EXTRA_PLAYERS = [
  {
    id: "yashpal-sharma",
    name: "Yashpal Sharma",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 81,
    bowling: 10,
    blurb: "Middle-order resilience with proper World Cup nerve.",
  },
  {
    id: "sandeep-patil",
    name: "Sandeep Patil",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 83,
    bowling: 12,
    blurb: "An aggressive stroke-maker who could flip a one-day innings.",
  },
  {
    id: "kirti-azad",
    name: "Kirti Azad",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 73,
    bowling: 64,
    blurb: "A useful hybrid option with handy middle-over spin.",
  },
  {
    id: "roger-binny",
    name: "Roger Binny",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "bowler",
    batting: 71,
    bowling: 81,
    blurb: "Seam movement and valuable lower-order runs.",
  },
  {
    id: "madan-lal",
    name: "Madan Lal",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "bowler",
    batting: 66,
    bowling: 79,
    blurb: "Competitive seam bowling with big-moment stubbornness.",
  },
  {
    id: "balwinder-sandhu",
    name: "Balwinder Sandhu",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "bowler",
    batting: 28,
    bowling: 76,
    blurb: "Swing bowling that could do damage before the batters settled.",
  },
  {
    id: "ramiz-raja",
    name: "Ramiz Raja",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 84,
    bowling: 8,
    blurb: "An opener who brought shape and tempo to ODI starts.",
  },
  {
    id: "saleem-malik",
    name: "Saleem Malik",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 86,
    bowling: 10,
    blurb: "Crafty run-scoring with late-innings flexibility.",
  },
  {
    id: "ijaz-ahmed",
    name: "Ijaz Ahmed",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 81,
    bowling: 8,
    blurb: "Explosive range when Pakistan wanted to accelerate quickly.",
  },
  {
    id: "mushtaq-ahmed",
    name: "Mushtaq Ahmed",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 22,
    bowling: 80,
    blurb: "Wrist-spin variation for a pace-heavy tournament side.",
  },
  {
    id: "arjuna-ranatunga",
    name: "Arjuna Ranatunga",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 86,
    bowling: 18,
    blurb: "Leadership and left-handed batting built for chases.",
  },
  {
    id: "roshan-mahanama",
    name: "Roshan Mahanama",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 79,
    bowling: 8,
    blurb: "Measured batting that let the hitters work around him.",
  },
  {
    id: "hashan-tillakaratne",
    name: "Hashan Tillakaratne",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 80,
    bowling: 14,
    blurb: "Compact batting and calm middle-order management.",
  },
  {
    id: "kumar-dharmasena",
    name: "Kumar Dharmasena",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 68,
    bowling: 75,
    blurb: "Useful all-round balance through tidy spin and smart batting.",
  },
  {
    id: "pramodya-wickramasinghe",
    name: "Pramodya Wickramasinghe",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 24,
    bowling: 77,
    blurb: "New-ball seam support behind the bigger stars.",
  },
  {
    id: "richie-richardson",
    name: "Richie Richardson",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 85,
    bowling: 8,
    blurb: "Top-order authority and crisp off-side scoring.",
  },
  {
    id: "stuart-williams",
    name: "Stuart Williams",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 79,
    bowling: 10,
    blurb: "Steady ODI batting with enough tempo to keep the board moving.",
  },
  {
    id: "sherwin-campbell",
    name: "Sherwin Campbell",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 78,
    bowling: 8,
    blurb: "An opener who gave the lineup sturdier starts when needed.",
  },
  {
    id: "roger-harper",
    name: "Roger Harper",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 65,
    bowling: 76,
    blurb: "Off-spin control and practical lower-order runs.",
  },
  {
    id: "mark-waugh",
    name: "Mark Waugh",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 89,
    bowling: 28,
    blurb: "Touch batting that made ODI strokeplay look effortless.",
  },
  {
    id: "shane-lee",
    name: "Shane Lee",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 72,
    bowling: 77,
    blurb: "Seam-up support with useful batting depth.",
  },
  {
    id: "tom-moody",
    name: "Tom Moody",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 78,
    bowling: 72,
    blurb: "Height, match-up flexibility, and handy seam overs.",
  },
  {
    id: "paul-reiffel",
    name: "Paul Reiffel",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 34,
    bowling: 82,
    blurb: "Steady seam bowling that kept pressure on the middle overs.",
  },
  {
    id: "gary-kirsten",
    name: "Gary Kirsten",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 88,
    bowling: 8,
    blurb: "An ODI opening organiser with strong conversion power.",
  },
  {
    id: "daryll-cullinan",
    name: "Daryll Cullinan",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 84,
    bowling: 6,
    blurb: "Classical middle-order batting with serious range square of the wicket.",
  },
  {
    id: "nicky-boje",
    name: "Nicky Boje",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 69,
    bowling: 78,
    blurb: "Left-arm spin and practical lower-order batting.",
  },
  {
    id: "steve-elworthy",
    name: "Steve Elworthy",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 28,
    bowling: 81,
    blurb: "Reliable seam support in a very deep attack.",
  },
  {
    id: "gautam-gambhir",
    name: "Gautam Gambhir",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 90,
    bowling: 8,
    blurb: "An innings builder who kept big finals from tilting.",
  },
  {
    id: "suresh-raina",
    name: "Suresh Raina",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 84,
    bowling: 68,
    blurb: "Finishing acceleration with useful part-time spin.",
  },
  {
    id: "yusuf-pathan",
    name: "Yusuf Pathan",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 82,
    bowling: 71,
    blurb: "Six-hitting muscle and occasional off-spin utility.",
  },
  {
    id: "munaf-patel",
    name: "Munaf Patel",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "bowler",
    batting: 18,
    bowling: 78,
    blurb: "Hit-the-deck seam support that held lanes well.",
  },
  {
    id: "aaron-finch",
    name: "Aaron Finch",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 89,
    bowling: 6,
    blurb: "Power and tempo that set aggressive ODI terms up front.",
  },
  {
    id: "george-bailey",
    name: "George Bailey",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 82,
    bowling: 8,
    blurb: "Middle-order management with clean hitting zones.",
  },
  {
    id: "shane-watson",
    name: "Shane Watson",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 87,
    bowling: 78,
    blurb: "Power and seam control in one sturdy ODI frame.",
  },
  {
    id: "pat-cummins",
    name: "Pat Cummins",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 34,
    bowling: 84,
    blurb: "Skiddy pace and high-pressure overs on demand.",
  },
  {
    id: "henry-nicholls",
    name: "Henry Nicholls",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 81,
    bowling: 8,
    blurb: "Left-handed stability and good rotation through the middle.",
  },
  {
    id: "colin-de-grandhomme",
    name: "Colin de Grandhomme",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 76,
    bowling: 76,
    blurb: "A complete white-ball utility piece with seam-up value.",
  },
  {
    id: "matt-henry",
    name: "Matt Henry",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 24,
    bowling: 85,
    blurb: "New-ball seam and hard-length discipline.",
  },
  {
    id: "jonny-bairstow",
    name: "Jonny Bairstow",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 91,
    bowling: 6,
    blurb: "Powerplay pressure and boundary pressure from the first over.",
  },
  {
    id: "liam-plunkett",
    name: "Liam Plunkett",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 30,
    bowling: 83,
    blurb: "A middle-overs wicket-taker who disrupted set batters.",
  },
  {
    id: "mark-wood",
    name: "Mark Wood",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 18,
    bowling: 86,
    blurb: "Express pace that changed the speed of an innings.",
  },
  {
    id: "litton-das",
    name: "Litton Das",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 83,
    bowling: 6,
    blurb: "A free-flowing bat who could lift Bangladesh's ceiling quickly.",
  },
  {
    id: "soumya-sarkar",
    name: "Soumya Sarkar",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 80,
    bowling: 26,
    blurb: "Tempo-start batting with occasional seam-up utility.",
  },
  {
    id: "mehidy-hasan-miraz",
    name: "Mehidy Hasan Miraz",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 74,
    bowling: 79,
    blurb: "A strong balance pick with off-spin and real batting value.",
  },
  {
    id: "rubel-hossain",
    name: "Rubel Hossain",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 20,
    bowling: 78,
    blurb: "Skiddy pace and wicket-taking bursts when Bangladesh needed them.",
  },
  {
    id: "virat-kohli-2023",
    name: "Virat Kohli",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 95,
    bowling: 8,
    blurb: "Chase control and ODI accumulation at all-time levels.",
  },
  {
    id: "ravichandran-ashwin",
    name: "Ravichandran Ashwin",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 66,
    bowling: 82,
    blurb: "Experience, matchup spin, and handy batting depth.",
  },
  {
    id: "kuldeep-yadav",
    name: "Kuldeep Yadav",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 18,
    bowling: 89,
    blurb: "A wrist-spinner who keeps buying wickets, not just dots.",
  },
  {
    id: "mohammed-siraj",
    name: "Mohammed Siraj",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 18,
    bowling: 87,
    blurb: "New-ball aggression with seam movement at full pace.",
  },
  {
    id: "imam-ul-haq",
    name: "Imam-ul-Haq",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 85,
    bowling: 6,
    blurb: "A left-handed ODI anchor with strong volume scoring.",
  },
  {
    id: "abdullah-shafique",
    name: "Abdullah Shafique",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 83,
    bowling: 6,
    blurb: "Elegant pace play and calm top-order tempo.",
  },
  {
    id: "mohammad-nawaz",
    name: "Mohammad Nawaz",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 75,
    bowling: 76,
    blurb: "Spin-bowling balance with genuine lower-order batting.",
  },
  {
    id: "hasan-ali",
    name: "Hasan Ali",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 38,
    bowling: 81,
    blurb: "Busy seam bowling and a knack for picking momentum wickets.",
  },
  {
    id: "rahmat-shah",
    name: "Rahmat Shah",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 8,
    blurb: "A composed ODI bat who gives Afghanistan shape around the hitters.",
  },
  {
    id: "azmatullah-omarzai",
    name: "Azmatullah Omarzai",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 78,
    bowling: 75,
    blurb: "A true white-ball all-round asset with pace-off variation.",
  },
  {
    id: "ikram-alikhil",
    name: "Ikram Alikhil",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Backup keeper-batter depth with calm accumulation.",
  },
  {
    id: "fazalhaq-farooqi",
    name: "Fazalhaq Farooqi",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 18,
    bowling: 83,
    blurb: "Left-arm seam and powerplay movement from a tough release angle.",
  },
  {
    id: "naveen-ul-haq",
    name: "Naveen-ul-Haq",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 20,
    bowling: 82,
    blurb: "Death-overs variation and wicket-taking intent.",
  },
  {
    id: "alistair-campbell",
    name: "Alistair Campbell",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 83,
    bowling: 8,
    blurb: "An organizer at the top with enough range to set ODI tempo.",
  },
  {
    id: "grant-flower",
    name: "Grant Flower",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 84,
    bowling: 66,
    blurb: "Stylish batting with useful spin when overs needed filling.",
  },
  {
    id: "andy-flower",
    name: "Andy Flower",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "wicketkeeper",
    batting: 92,
    bowling: 0,
    blurb: "A world-class keeper-batter and easily Zimbabwe's elite ODI anchor.",
  },
  {
    id: "neil-johnson",
    name: "Neil Johnson",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 87,
    bowling: 79,
    blurb: "A proper World Cup all-round force who could change matches himself.",
  },
  {
    id: "murray-goodwin",
    name: "Murray Goodwin",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 82,
    bowling: 12,
    blurb: "Smooth middle-order batting built for longer one-day innings.",
  },
  {
    id: "stuart-carlisle",
    name: "Stuart Carlisle",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 79,
    bowling: 10,
    blurb: "Steady ODI batting that could keep a chase from wobbling.",
  },
  {
    id: "guy-whittall",
    name: "Guy Whittall",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "batsman",
    batting: 76,
    bowling: 62,
    blurb: "Handy batting and support overs that made balance easier.",
  },
  {
    id: "heath-streak",
    name: "Heath Streak",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "bowler",
    batting: 71,
    bowling: 88,
    blurb: "Leader, strike seamer, and one of Zimbabwe's ODI greats.",
  },
  {
    id: "henry-olonga",
    name: "Henry Olonga",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "bowler",
    batting: 22,
    bowling: 80,
    blurb: "Skiddy pace and wicket-taking bursts when rhythm clicked.",
  },
  {
    id: "eddo-brandes",
    name: "Eddo Brandes",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "bowler",
    batting: 30,
    bowling: 77,
    blurb: "Accurate seam bowling with veteran ODI nous.",
  },
  {
    id: "paul-strang",
    name: "Paul Strang",
    squadId: "zimbabwe-1999",
    team: "Zimbabwe",
    year: 1999,
    role: "bowler",
    batting: 68,
    bowling: 79,
    blurb: "A balanced spin-bowling option with very useful batting depth.",
  },
  {
    id: "steve-tikolo",
    name: "Steve Tikolo",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "batsman",
    batting: 88,
    bowling: 28,
    blurb: "Kenya's batting brain and the center of that famous World Cup run.",
  },
  {
    id: "kennedy-otieno",
    name: "Kennedy Otieno",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Functional ODI keeper-batting that helped stabilize starts.",
  },
  {
    id: "ravindu-shah",
    name: "Ravindu Shah",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "batsman",
    batting: 79,
    bowling: 12,
    blurb: "Compact opening batting with a strong value on patience.",
  },
  {
    id: "brijal-patel",
    name: "Brijal Patel",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "batsman",
    batting: 74,
    bowling: 8,
    blurb: "A top-order option who could hold shape under pressure.",
  },
  {
    id: "hitesh-modi",
    name: "Hitesh Modi",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "batsman",
    batting: 75,
    bowling: 16,
    blurb: "Middle-order glue for attritional ODI innings.",
  },
  {
    id: "maurice-odumbe",
    name: "Maurice Odumbe",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "batsman",
    batting: 77,
    bowling: 68,
    blurb: "Off-spin utility and inventive batting in the middle overs.",
  },
  {
    id: "thomas-odoyo",
    name: "Thomas Odoyo",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "bowler",
    batting: 76,
    bowling: 77,
    blurb: "An important seam-bowling all-round piece in Kenya's structure.",
  },
  {
    id: "collins-obuya",
    name: "Collins Obuya",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "bowler",
    batting: 54,
    bowling: 80,
    blurb: "Leg-spin wicket bursts made him one of the tournament stories.",
  },
  {
    id: "martin-suji",
    name: "Martin Suji",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "bowler",
    batting: 30,
    bowling: 78,
    blurb: "Hit-the-deck seam bowling with experienced control.",
  },
  {
    id: "peter-ongondo",
    name: "Peter Ongondo",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "bowler",
    batting: 22,
    bowling: 76,
    blurb: "Powerplay seam support with honest ODI discipline.",
  },
  {
    id: "joseph-angara",
    name: "Joseph Angara",
    squadId: "kenya-2003",
    team: "Kenya",
    year: 2003,
    role: "bowler",
    batting: 20,
    bowling: 74,
    blurb: "Seam bowling depth that completed Kenya's semifinal attack.",
  },
  {
    id: "irving-romaine",
    name: "Irving Romaine",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "batsman",
    batting: 76,
    bowling: 18,
    blurb: "A captain who kept Bermuda's batting orderly and competitive.",
  },
  {
    id: "oliver-pitcher",
    name: "Oliver Pitcher",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "batsman",
    batting: 74,
    bowling: 8,
    blurb: "Top-order ballast for a historic associate qualifier.",
  },
  {
    id: "janeiro-tucker",
    name: "Janeiro Tucker",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "batsman",
    batting: 75,
    bowling: 22,
    blurb: "A busy middle-order bat who kept pressure off teammates.",
  },
  {
    id: "david-hemp",
    name: "David Hemp",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "batsman",
    batting: 82,
    bowling: 26,
    blurb: "The most polished batting name in Bermuda's World Cup side.",
  },
  {
    id: "lionel-cann",
    name: "Lionel Cann",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "batsman",
    batting: 77,
    bowling: 24,
    blurb: "A forceful hitter who brought real ODI intent.",
  },
  {
    id: "dean-minors",
    name: "Dean Minors",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "wicketkeeper",
    batting: 72,
    bowling: 0,
    blurb: "An experienced keeper who helped steady lower-order phases.",
  },
  {
    id: "malachi-jones",
    name: "Malachi Jones",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "bowler",
    batting: 34,
    bowling: 76,
    blurb: "Athletic seam bowling and some late-order hitting.",
  },
  {
    id: "dwayne-leverock",
    name: "Dwayne Leverock",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "bowler",
    batting: 38,
    bowling: 75,
    blurb: "Left-arm spin and cult-hero energy for the associate stage.",
  },
  {
    id: "kevin-hurdle",
    name: "Kevin Hurdle",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "bowler",
    batting: 28,
    bowling: 74,
    blurb: "Seam support built more on control than pace.",
  },
  {
    id: "stefan-kelly",
    name: "Stefan Kelly",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "bowler",
    batting: 24,
    bowling: 73,
    blurb: "A steady seam option in Bermuda's historic squad.",
  },
  {
    id: "saleem-mukuddem",
    name: "Saleem Mukuddem",
    squadId: "bermuda-2007",
    team: "Bermuda",
    year: 2007,
    role: "bowler",
    batting: 26,
    bowling: 72,
    blurb: "Lower-order effort and bowling depth in the associate tier.",
  },
  {
    id: "ashish-bagai",
    name: "Ashish Bagai",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "wicketkeeper",
    batting: 81,
    bowling: 0,
    blurb: "Canada's smartest batting organiser and a dependable keeper.",
  },
  {
    id: "john-davison",
    name: "John Davison",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 84,
    bowling: 64,
    blurb: "Big-hitting history and some useful off-spin on the side.",
  },
  {
    id: "rizwan-cheema",
    name: "Rizwan Cheema",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 82,
    bowling: 12,
    blurb: "A powerful bat who could alter the rate quickly.",
  },
  {
    id: "zubin-surkari",
    name: "Zubin Surkari",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 76,
    bowling: 18,
    blurb: "Middle-order batting built for rescue jobs.",
  },
  {
    id: "jimmy-hansra",
    name: "Jimmy Hansra",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 77,
    bowling: 10,
    blurb: "A left-hander who gave Canada's lineup some shape.",
  },
  {
    id: "nitish-kumar",
    name: "Nitish Kumar",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 74,
    bowling: 8,
    blurb: "A young top-order bat with long-format composure in ODI tempo.",
  },
  {
    id: "hiral-patel",
    name: "Hiral Patel",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "batsman",
    batting: 75,
    bowling: 8,
    blurb: "Aggressive intent at the top for a developing side.",
  },
  {
    id: "balaji-rao",
    name: "Balaji Rao",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "bowler",
    batting: 26,
    bowling: 79,
    blurb: "Finger-spin control with good one-day discipline.",
  },
  {
    id: "harvir-baidwan",
    name: "Harvir Baidwan",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "bowler",
    batting: 48,
    bowling: 76,
    blurb: "Useful seam-bowling all-round depth for Canada.",
  },
  {
    id: "khurram-chohan",
    name: "Khurram Chohan",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "bowler",
    batting: 24,
    bowling: 77,
    blurb: "Skiddy seam bowling with effort and wicket-taking intent.",
  },
  {
    id: "henry-osinde",
    name: "Henry Osinde",
    squadId: "canada-2011",
    team: "Canada",
    year: 2011,
    role: "bowler",
    batting: 22,
    bowling: 75,
    blurb: "Left-arm seam and hard work through the powerplay.",
  },
  {
    id: "william-porterfield",
    name: "William Porterfield",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "batsman",
    batting: 85,
    bowling: 12,
    blurb: "Captaincy and crisp ODI opening play with real substance.",
  },
  {
    id: "paul-stirling",
    name: "Paul Stirling",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "batsman",
    batting: 88,
    bowling: 18,
    blurb: "One of Ireland's most dangerous white-ball batters.",
  },
  {
    id: "ed-joyce",
    name: "Ed Joyce",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "batsman",
    batting: 84,
    bowling: 8,
    blurb: "A polished left-hander built for ODI tempo control.",
  },
  {
    id: "niall-obrien",
    name: "Niall O'Brien",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "wicketkeeper",
    batting: 80,
    bowling: 0,
    blurb: "A wicketkeeper-batter who could keep the innings moving.",
  },
  {
    id: "kevin-obrien",
    name: "Kevin O'Brien",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "batsman",
    batting: 86,
    bowling: 74,
    blurb: "World Cup legend status for the fastest ton and real seam utility.",
  },
  {
    id: "gary-wilson",
    name: "Gary Wilson",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "batsman",
    batting: 77,
    bowling: 0,
    blurb: "Flexible batting cover who deepened Ireland's options.",
  },
  {
    id: "alex-cusack",
    name: "Alex Cusack",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "bowler",
    batting: 73,
    bowling: 75,
    blurb: "A genuine utility all-rounder across all ODI phases.",
  },
  {
    id: "john-mooney",
    name: "John Mooney",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "bowler",
    batting: 71,
    bowling: 76,
    blurb: "Left-arm seam and batting grit for long days.",
  },
  {
    id: "george-dockrell",
    name: "George Dockrell",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "bowler",
    batting: 46,
    bowling: 79,
    blurb: "Left-arm spin that kept Ireland in middle-overs contests.",
  },
  {
    id: "boyd-rankin",
    name: "Boyd Rankin",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "bowler",
    batting: 24,
    bowling: 82,
    blurb: "Height, bounce, and serious wicket-taking quality for an associate side.",
  },
  {
    id: "trent-johnston",
    name: "Trent Johnston",
    squadId: "ireland-2011",
    team: "Ireland",
    year: 2011,
    role: "bowler",
    batting: 20,
    bowling: 78,
    blurb: "Veteran seam leadership with strong new-ball skills.",
  },
  {
    id: "kyle-coetzer",
    name: "Kyle Coetzer",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "batsman",
    batting: 85,
    bowling: 10,
    blurb: "A classy ODI opener who gave Scotland real top-order certainty.",
  },
  {
    id: "calum-macleod",
    name: "Calum MacLeod",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "batsman",
    batting: 84,
    bowling: 20,
    blurb: "One of Scotland's most accomplished white-ball run-makers.",
  },
  {
    id: "preston-mommsen",
    name: "Preston Mommsen",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "batsman",
    batting: 82,
    bowling: 12,
    blurb: "Captaincy and compact batting for long one-day innings.",
  },
  {
    id: "richie-berrington",
    name: "Richie Berrington",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "batsman",
    batting: 81,
    bowling: 22,
    blurb: "Middle-order power and useful overs if the matchup suited.",
  },
  {
    id: "matt-machan",
    name: "Matt Machan",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "batsman",
    batting: 76,
    bowling: 8,
    blurb: "Left-handed structure to Scotland's batting card.",
  },
  {
    id: "matt-cross",
    name: "Matt Cross",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "wicketkeeper",
    batting: 74,
    bowling: 0,
    blurb: "A developing keeper-batter who filled a key squad role.",
  },
  {
    id: "majid-haq",
    name: "Majid Haq",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "bowler",
    batting: 66,
    bowling: 77,
    blurb: "Off-spin control and some useful batting depth.",
  },
  {
    id: "josh-davey",
    name: "Josh Davey",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "bowler",
    batting: 30,
    bowling: 78,
    blurb: "Seam bowling with a strong work rate and ODI discipline.",
  },
  {
    id: "iain-wardlaw",
    name: "Iain Wardlaw",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "bowler",
    batting: 18,
    bowling: 76,
    blurb: "Fast-bowling aggression that gave Scotland real edge.",
  },
  {
    id: "alasdair-evans",
    name: "Alasdair Evans",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "bowler",
    batting: 22,
    bowling: 77,
    blurb: "Seam support with consistent powerplay effort.",
  },
  {
    id: "safyaan-sharif",
    name: "Safyaan Sharif",
    squadId: "scotland-2015",
    team: "Scotland",
    year: 2015,
    role: "bowler",
    batting: 28,
    bowling: 79,
    blurb: "A dependable seam option who stayed in the fight deep into spells.",
  },
  {
    id: "khurram-khan",
    name: "Khurram Khan",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "batsman",
    batting: 86,
    bowling: 24,
    blurb: "An experienced ODI accumulator and the center of UAE batting plans.",
  },
  {
    id: "shaiman-anwar",
    name: "Shaiman Anwar",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "batsman",
    batting: 84,
    bowling: 8,
    blurb: "Aggression and range through the top and middle overs.",
  },
  {
    id: "swapnil-patil",
    name: "Swapnil Patil",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "wicketkeeper",
    batting: 80,
    bowling: 0,
    blurb: "A busy keeper-batter who helped UAE stay composed.",
  },
  {
    id: "andri-berenger",
    name: "Andri Berenger",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "batsman",
    batting: 76,
    bowling: 8,
    blurb: "Young batting energy and clean striking in spurts.",
  },
  {
    id: "rohan-mustafa",
    name: "Rohan Mustafa",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "batsman",
    batting: 79,
    bowling: 74,
    blurb: "A very useful all-round presence across all phases.",
  },
  {
    id: "mohammad-tauqir",
    name: "Mohammad Tauqir",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "batsman",
    batting: 74,
    bowling: 72,
    blurb: "Captaincy and off-spin value behind a practical batting approach.",
  },
  {
    id: "amjad-javed",
    name: "Amjad Javed",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "bowler",
    batting: 72,
    bowling: 78,
    blurb: "Seam-bowling all-round strength and emotional energy.",
  },
  {
    id: "nasir-aziz",
    name: "Nasir Aziz",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "bowler",
    batting: 44,
    bowling: 77,
    blurb: "Off-spin control and accurate middle-overs work.",
  },
  {
    id: "manjula-guruge",
    name: "Manjula Guruge",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "bowler",
    batting: 28,
    bowling: 75,
    blurb: "A seamer who brought persistence more than headline pace.",
  },
  {
    id: "kamran-shahzad",
    name: "Kamran Shahzad",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "bowler",
    batting: 26,
    bowling: 74,
    blurb: "Support seam bowling in a scrappy associate attack.",
  },
  {
    id: "sohail-khan-uae",
    name: "Sohail Khan",
    squadId: "uae-2015",
    team: "United Arab Emirates",
    year: 2015,
    role: "bowler",
    batting: 24,
    bowling: 73,
    blurb: "A depth seamer who completed UAE's bowling unit.",
  },
  {
    id: "deon-kotze",
    name: "Deon Kotze",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "wicketkeeper",
    batting: 74,
    bowling: 0,
    blurb: "Captain and keeper-batter at the center of Namibia's first World Cup.",
  },
  {
    id: "danie-keulder",
    name: "Danie Keulder",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "batsman",
    batting: 77,
    bowling: 12,
    blurb: "Top-order batting with genuine ODI tempo for an associate side.",
  },
  {
    id: "jan-berrie-burger",
    name: "Jan-Berrie Burger",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "batsman",
    batting: 79,
    bowling: 18,
    blurb: "The standout batting talent in that Namibian generation.",
  },
  {
    id: "gerrie-snyman",
    name: "Gerrie Snyman",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "batsman",
    batting: 76,
    bowling: 20,
    blurb: "Hard-hitting batting that could change the feel of a chase.",
  },
  {
    id: "sarel-burger",
    name: "Sarel Burger",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "batsman",
    batting: 74,
    bowling: 68,
    blurb: "A useful dual-skill option for one-day balance.",
  },
  {
    id: "louis-burger",
    name: "Louis Burger",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "batsman",
    batting: 72,
    bowling: 22,
    blurb: "Lower-middle batting support with some useful resistance.",
  },
  {
    id: "gavin-murgatroyd",
    name: "Gavin Murgatroyd",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "bowler",
    batting: 68,
    bowling: 76,
    blurb: "One of Namibia's more rounded all-round cricketing profiles.",
  },
  {
    id: "rudi-van-vuuren",
    name: "Rudi van Vuuren",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "bowler",
    batting: 30,
    bowling: 78,
    blurb: "Seam bowling grit from the World Cup's famously multi-talented doctor.",
  },
  {
    id: "bjorn-kotze",
    name: "Bjorn Kotze",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "bowler",
    batting: 26,
    bowling: 74,
    blurb: "Pace support in a side learning quickly at the top level.",
  },
  {
    id: "melt-van-schoor",
    name: "Melt van Schoor",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "bowler",
    batting: 24,
    bowling: 73,
    blurb: "Seam depth and workmanlike ODI spells for Namibia.",
  },
  {
    id: "andre-van-schoor",
    name: "Andre van Schoor",
    squadId: "namibia-2003",
    team: "Namibia",
    year: 2003,
    role: "bowler",
    batting: 42,
    bowling: 72,
    blurb: "Veteran know-how and support overs in Namibia's breakthrough squad.",
  },
  {
    id: "scott-edwards",
    name: "Scott Edwards",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "Calm leadership and sharp keeping for the modern Dutch side.",
  },
  {
    id: "max-odowd",
    name: "Max O'Dowd",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 10,
    blurb: "Top-order tempo and clean power through the V.",
  },
  {
    id: "vikramjit-singh",
    name: "Vikramjit Singh",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 80,
    bowling: 8,
    blurb: "A young top-order bat with range and ambition.",
  },
  {
    id: "bas-de-leede",
    name: "Bas de Leede",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 83,
    bowling: 79,
    blurb: "A complete white-ball all-round package and a huge Dutch asset.",
  },
  {
    id: "teja-nidamanuru",
    name: "Teja Nidamanuru",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 81,
    bowling: 12,
    blurb: "Middle-order hitting and calm finishing instincts.",
  },
  {
    id: "colin-ackermann",
    name: "Colin Ackermann",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 72,
    blurb: "A very useful ODI all-round stabilizer with matchup flexibility.",
  },
  {
    id: "sybrand-engelbrecht",
    name: "Sybrand Engelbrecht",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "batsman",
    batting: 79,
    bowling: 14,
    blurb: "Middle-order strokeplay and athletic white-ball instincts.",
  },
  {
    id: "logan-van-beek",
    name: "Logan van Beek",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "bowler",
    batting: 73,
    bowling: 78,
    blurb: "A highly useful seam-bowling all-rounder in the modern Dutch setup.",
  },
  {
    id: "roelof-van-der-merwe",
    name: "Roelof van der Merwe",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "bowler",
    batting: 72,
    bowling: 80,
    blurb: "Left-arm spin, edge, and veteran one-day value.",
  },
  {
    id: "aryan-dutt",
    name: "Aryan Dutt",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "bowler",
    batting: 22,
    bowling: 77,
    blurb: "Off-spin control that fits nicely into ODI middle overs.",
  },
  {
    id: "paul-van-meekeren",
    name: "Paul van Meekeren",
    squadId: "netherlands-2023",
    team: "Netherlands",
    year: 2023,
    role: "bowler",
    batting: 20,
    bowling: 82,
    blurb: "Aggressive seam bowling with visible competitive bite.",
  },
];


const AUDITED_PLAYER_NAME_OVERRIDES = {
  "Aamer Sohail": {
    "role": "batsman",
    "batting": 72,
    "bowling": 43
  },
  "Aamir Sohail": {
    "role": "batsman",
    "batting": 72,
    "bowling": 43
  },
  "Aaron Finch": {
    "role": "batsman",
    "batting": 87,
    "bowling": 0
  },
  "Aaron Phangiso": {
    "role": "bowler",
    "batting": 25,
    "bowling": 52
  },
  "Aashish Kapoor": {
    "role": "bowler",
    "batting": 0,
    "bowling": 29
  },
  "Aasif Karim": {
    "role": "bowler",
    "batting": 33,
    "bowling": 41
  },
  "AB de Villiers": {
    "role": "wicketkeeper",
    "batting": 95,
    "bowling": 39
  },
  "Abdool Samad": {
    "role": "batsman",
    "batting": 62,
    "bowling": 30
  },
  "Abdul Qadir": {
    "role": "bowler",
    "batting": 41,
    "bowling": 78
  },
  "Abdul Razzaq": {
    "role": "batsman",
    "batting": 69,
    "bowling": 66
  },
  "Abdullah Shafique": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Abdur Razzak": {
    "role": "bowler",
    "batting": 33,
    "bowling": 76
  },
  "Abdur Rehman": {
    "role": "bowler",
    "batting": 27,
    "bowling": 44
  },
  "Adam Gilchrist": {
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0
  },
  "Adam Hollioake": {
    "role": "batsman",
    "batting": 54,
    "bowling": 50
  },
  "Adam Parore": {
    "role": "wicketkeeper",
    "batting": 59,
    "bowling": 0
  },
  "Adam Zampa": {
    "role": "bowler",
    "batting": 31,
    "bowling": 77
  },
  "Adeel Raja": {
    "role": "bowler",
    "batting": 21,
    "bowling": 37
  },
  "Adil Rashid": {
    "role": "bowler",
    "batting": 48,
    "bowling": 71
  },
  "Afsar Zazai": {
    "role": "wicketkeeper",
    "batting": 39,
    "bowling": 0
  },
  "Aftab Ahmed": {
    "role": "batsman",
    "batting": 64,
    "bowling": 26
  },
  "Aftab Alam": {
    "role": "bowler",
    "batting": 31,
    "bowling": 68
  },
  "Ahmed Shehzad": {
    "role": "batsman",
    "batting": 74,
    "bowling": 0
  },
  "Aiden Markram": {
    "role": "batsman",
    "batting": 83,
    "bowling": 25
  },
  "Ajantha Mendis": {
    "role": "bowler",
    "batting": 30,
    "bowling": 87
  },
  "Ajinkya Rahane": {
    "role": "batsman",
    "batting": 79,
    "bowling": 0
  },
  "Ajit Agarkar": {
    "role": "bowler",
    "batting": 45,
    "bowling": 79
  },
  "Akram Khan": {
    "role": "batsman",
    "batting": 51,
    "bowling": 0
  },
  "Al Sahariar": {
    "role": "batsman",
    "batting": 35,
    "bowling": 0
  },
  "Alan Mullally": {
    "role": "bowler",
    "batting": 23,
    "bowling": 67
  },
  "Alasdair Evans": {
    "role": "bowler",
    "batting": 28,
    "bowling": 66
  },
  "Alec Davies": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Alec Stewart": {
    "role": "wicketkeeper",
    "batting": 71,
    "bowling": 0
  },
  "Alex Carey": {
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0
  },
  "Alex Cusack": {
    "role": "bowler",
    "batting": 46,
    "bowling": 70
  },
  "Alex Hales": {
    "role": "batsman",
    "batting": 84,
    "bowling": 0
  },
  "Alex Obanda": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Alexei Kervezee": {
    "role": "batsman",
    "batting": 61,
    "bowling": 0
  },
  "Alok Kapali": {
    "role": "batsman",
    "batting": 49,
    "bowling": 29
  },
  "Alpesh Vadher": {
    "role": "batsman",
    "batting": 47,
    "bowling": 0
  },
  "Amay Khurasiya": {
    "role": "batsman",
    "batting": 39,
    "bowling": 0
  },
  "Ambati Rayudu": {
    "role": "batsman",
    "batting": 81,
    "bowling": 0
  },
  "Aminul Islam": {
    "role": "batsman",
    "batting": 48,
    "bowling": 23
  },
  "Amjad Javed": {
    "role": "batsman",
    "batting": 49,
    "bowling": 24
  },
  "Anamul Haque": {
    "role": "wicketkeeper",
    "batting": 68,
    "bowling": 0
  },
  "Andile Phehlukwayo": {
    "role": "batsman",
    "batting": 53,
    "bowling": 60
  },
  "Andre Adams": {
    "role": "bowler",
    "batting": 46,
    "bowling": 61
  },
  "Andre Botha": {
    "role": "bowler",
    "batting": 46,
    "bowling": 63
  },
  "André Nel": {
    "role": "bowler",
    "batting": 33,
    "bowling": 74
  },
  "Andre Russell": {
    "role": "batsman",
    "batting": 65,
    "bowling": 60
  },
  "Andre van Schoor": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Andrew Balbirnie": {
    "role": "batsman",
    "batting": 74,
    "bowling": 0
  },
  "Andrew Flintoff": {
    "role": "batsman",
    "batting": 76,
    "bowling": 80
  },
  "Andrew Hall": {
    "role": "bowler",
    "batting": 49,
    "bowling": 71
  },
  "Andrew McBrine": {
    "role": "batsman",
    "batting": 45,
    "bowling": 52
  },
  "Andrew Pycroft": {
    "role": "batsman",
    "batting": 38,
    "bowling": 0
  },
  "Andrew Strauss": {
    "role": "batsman",
    "batting": 81,
    "bowling": 0
  },
  "Andrew Symonds": {
    "role": "batsman",
    "batting": 84,
    "bowling": 50
  },
  "Andrew White": {
    "role": "bowler",
    "batting": 42,
    "bowling": 52
  },
  "Andri Berenger": {
    "role": "batsman",
    "batting": 45,
    "bowling": 0
  },
  "Andy Bichel": {
    "role": "bowler",
    "batting": 45,
    "bowling": 63
  },
  "Andy Blignaut": {
    "role": "batsman",
    "batting": 53,
    "bowling": 41
  },
  "Andy Roberts": {
    "role": "bowler",
    "batting": 31,
    "bowling": 82
  },
  "Andy Waller": {
    "role": "batsman",
    "batting": 53,
    "bowling": 0
  },
  "Angelo Mathews": {
    "role": "batsman",
    "batting": 82,
    "bowling": 57
  },
  "Anrich Nortje": {
    "role": "bowler",
    "batting": 0,
    "bowling": 65
  },
  "Anthony Ireland": {
    "role": "bowler",
    "batting": 21,
    "bowling": 59
  },
  "Arafat Sunny": {
    "role": "bowler",
    "batting": 26,
    "bowling": 69
  },
  "Arjuna Ranatunga": {
    "role": "batsman",
    "batting": 79,
    "bowling": 38
  },
  "Aryan Dutt": {
    "role": "bowler",
    "batting": 27,
    "bowling": 60
  },
  "Asad Shafiq": {
    "role": "batsman",
    "batting": 57,
    "bowling": 0
  },
  "Asghar Afghan": {
    "role": "batsman",
    "batting": 58,
    "bowling": 0
  },
  "Ashish Bagai": {
    "role": "wicketkeeper",
    "batting": 74,
    "bowling": 0
  },
  "Ashish Nehra": {
    "role": "bowler",
    "batting": 24,
    "bowling": 67
  },
  "Ashley Giles": {
    "role": "bowler",
    "batting": 39,
    "bowling": 48
  },
  "Ashley Nurse": {
    "role": "batsman",
    "batting": 48,
    "bowling": 40
  },
  "Ashton Agar": {
    "role": "batsman",
    "batting": 50,
    "bowling": 33
  },
  "Ashwell Prince": {
    "role": "batsman",
    "batting": 62,
    "bowling": 0
  },
  "Asif Ali": {
    "role": "batsman",
    "batting": 61,
    "bowling": 0
  },
  "Asif Mulla": {
    "role": "wicketkeeper",
    "batting": 49,
    "bowling": 0
  },
  "Ata-ur-Rehman": {
    "role": "bowler",
    "batting": 22,
    "bowling": 36
  },
  "Athula Samarasekera": {
    "role": "batsman",
    "batting": 52,
    "bowling": 45
  },
  "Atse Buurman": {
    "role": "wicketkeeper",
    "batting": 38,
    "bowling": 0
  },
  "Austin Codrington": {
    "role": "bowler",
    "batting": 0,
    "bowling": 56
  },
  "Avishka Fernando": {
    "role": "batsman",
    "batting": 77,
    "bowling": 0
  },
  "Avishka Gunawardene": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Axar Patel": {
    "role": "batsman",
    "batting": 55,
    "bowling": 56
  },
  "Azhar Mahmood": {
    "role": "batsman",
    "batting": 48,
    "bowling": 52
  },
  "Azhar Saeed": {
    "role": "bowler",
    "batting": 0,
    "bowling": 37
  },
  "Azmatullah Omarzai": {
    "role": "batsman",
    "batting": 81,
    "bowling": 62
  },
  "Babar Azam": {
    "role": "batsman",
    "batting": 92,
    "bowling": 0
  },
  "Balaji Rao": {
    "role": "bowler",
    "batting": 0,
    "bowling": 42
  },
  "Balwinder Sandhu": {
    "role": "bowler",
    "batting": 0,
    "bowling": 34
  },
  "Bas de Leede": {
    "role": "batsman",
    "batting": 62,
    "bowling": 50
  },
  "Bas Zuiderent": {
    "role": "batsman",
    "batting": 51,
    "bowling": 0
  },
  "Bastiaan Zuiderent": {
    "role": "batsman",
    "batting": 51,
    "bowling": 0
  },
  "Ben Stokes": {
    "role": "batsman",
    "batting": 86,
    "bowling": 40
  },
  "Bernard Loots": {
    "role": "bowler",
    "batting": 0,
    "bowling": 27
  },
  "Bhuvneshwar Kumar": {
    "role": "bowler",
    "batting": 39,
    "bowling": 59
  },
  "Billy Stelling": {
    "role": "bowler",
    "batting": 48,
    "bowling": 62
  },
  "Bob Willis": {
    "role": "bowler",
    "batting": 26,
    "bowling": 71
  },
  "Boeta Dippenaar": {
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0
  },
  "Boyd Rankin": {
    "role": "bowler",
    "batting": 24,
    "bowling": 73
  },
  "Brad Haddin": {
    "role": "wicketkeeper",
    "batting": 73,
    "bowling": 0
  },
  "Brad Hodge": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Brad Hogg": {
    "role": "bowler",
    "batting": 47,
    "bowling": 77
  },
  "Brendan Taylor": {
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 26
  },
  "Brendon McCullum": {
    "role": "wicketkeeper",
    "batting": 77,
    "bowling": 0
  },
  "Brett Lee": {
    "role": "bowler",
    "batting": 47,
    "bowling": 89
  },
  "Brian McMillan": {
    "role": "batsman",
    "batting": 50,
    "bowling": 49
  },
  "Brian Murphy": {
    "role": "bowler",
    "batting": 25,
    "bowling": 40
  },
  "Brijal Patel": {
    "role": "batsman",
    "batting": 36,
    "bowling": 0
  },
  "Bruce Reid": {
    "role": "bowler",
    "batting": 22,
    "bowling": 54
  },
  "Bryan Strang": {
    "role": "bowler",
    "batting": 23,
    "bowling": 49
  },
  "Brydon Carse": {
    "role": "batsman",
    "batting": 41,
    "bowling": 43
  },
  "Callum Ferguson": {
    "role": "batsman",
    "batting": 71,
    "bowling": 0
  },
  "Calum MacLeod": {
    "role": "batsman",
    "batting": 82,
    "bowling": 25
  },
  "Cameron Green": {
    "role": "batsman",
    "batting": 72,
    "bowling": 35
  },
  "Cameron White": {
    "role": "batsman",
    "batting": 72,
    "bowling": 41
  },
  "Carlos Brathwaite": {
    "role": "batsman",
    "batting": 48,
    "bowling": 42
  },
  "Chamara Kapugedera": {
    "role": "batsman",
    "batting": 53,
    "bowling": 0
  },
  "Chamara Silva": {
    "role": "batsman",
    "batting": 64,
    "bowling": 0
  },
  "Chamika Karunaratne": {
    "role": "batsman",
    "batting": 52,
    "bowling": 47
  },
  "Chaminda Vaas": {
    "role": "bowler",
    "batting": 43,
    "bowling": 78
  },
  "Champaka Ramanayake": {
    "role": "bowler",
    "batting": 28,
    "bowling": 61
  },
  "Chamu Chibhabha": {
    "role": "batsman",
    "batting": 56,
    "bowling": 31
  },
  "Chandrakant Pandit": {
    "role": "wicketkeeper",
    "batting": 42,
    "bowling": 0
  },
  "Charith Asalanka": {
    "role": "batsman",
    "batting": 87,
    "bowling": 39
  },
  "Charitha Buddhika": {
    "role": "bowler",
    "batting": 23,
    "bowling": 39
  },
  "Charl Langeveldt": {
    "role": "bowler",
    "batting": 24,
    "bowling": 69
  },
  "Charles Coventry": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 0
  },
  "Charlie Lock": {
    "role": "bowler",
    "batting": 0,
    "bowling": 56
  },
  "Chetan Sharma": {
    "role": "batsman",
    "batting": 52,
    "bowling": 51
  },
  "Chris Gayle": {
    "role": "batsman",
    "batting": 87,
    "bowling": 53
  },
  "Chris Jordan": {
    "role": "bowler",
    "batting": 37,
    "bowling": 51
  },
  "Chris Lewis": {
    "role": "bowler",
    "batting": 40,
    "bowling": 66
  },
  "Chris Martin": {
    "role": "bowler",
    "batting": 0,
    "bowling": 33
  },
  "Chris Morris": {
    "role": "batsman",
    "batting": 51,
    "bowling": 48
  },
  "Chris Mpofu": {
    "role": "bowler",
    "batting": 21,
    "bowling": 50
  },
  "Chris Tavaré": {
    "role": "batsman",
    "batting": 54,
    "bowling": 0
  },
  "Chris Woakes": {
    "role": "bowler",
    "batting": 58,
    "bowling": 72
  },
  "Christopher Mpofu": {
    "role": "bowler",
    "batting": 21,
    "bowling": 50
  },
  "Clive Lloyd": {
    "role": "batsman",
    "batting": 76,
    "bowling": 45
  },
  "Colin Ackermann": {
    "role": "batsman",
    "batting": 62,
    "bowling": 42
  },
  "Colin de Grandhomme": {
    "role": "batsman",
    "batting": 62,
    "bowling": 37
  },
  "Colin Ingram": {
    "role": "batsman",
    "batting": 70,
    "bowling": 0
  },
  "Colin Smith": {
    "role": "wicketkeeper",
    "batting": 44,
    "bowling": 0
  },
  "Collins Obuya": {
    "role": "batsman",
    "batting": 59,
    "bowling": 32
  },
  "Corey Anderson": {
    "role": "batsman",
    "batting": 68,
    "bowling": 65
  },
  "Corey Collymore": {
    "role": "bowler",
    "batting": 23,
    "bowling": 55
  },
  "Courtney Walsh": {
    "role": "bowler",
    "batting": 30,
    "bowling": 68
  },
  "Craig Ervine": {
    "role": "batsman",
    "batting": 75,
    "bowling": 0
  },
  "Craig Evans": {
    "role": "batsman",
    "batting": 47,
    "bowling": 33
  },
  "Craig Matthews": {
    "role": "bowler",
    "batting": 31,
    "bowling": 76
  },
  "Craig McDermott": {
    "role": "bowler",
    "batting": 35,
    "bowling": 83
  },
  "Craig McMillan": {
    "role": "batsman",
    "batting": 69,
    "bowling": 42
  },
  "Craig Spearman": {
    "role": "batsman",
    "batting": 50,
    "bowling": 0
  },
  "Craig White": {
    "role": "bowler",
    "batting": 39,
    "bowling": 71
  },
  "Craig Wishart": {
    "role": "batsman",
    "batting": 55,
    "bowling": 0
  },
  "Craig Wright": {
    "role": "bowler",
    "batting": 38,
    "bowling": 70
  },
  "Craig Young": {
    "role": "bowler",
    "batting": 37,
    "bowling": 73
  },
  "Daan van Bunge": {
    "role": "batsman",
    "batting": 48,
    "bowling": 40
  },
  "Dale Steyn": {
    "role": "bowler",
    "batting": 31,
    "bowling": 82
  },
  "Damien Fleming": {
    "role": "bowler",
    "batting": 30,
    "bowling": 82
  },
  "Damien Martyn": {
    "role": "batsman",
    "batting": 80,
    "bowling": 25
  },
  "Daniel Vettori": {
    "role": "bowler",
    "batting": 50,
    "bowling": 67
  },
  "Danish Kaneria": {
    "role": "bowler",
    "batting": 22,
    "bowling": 33
  },
  "Danny Morrison": {
    "role": "bowler",
    "batting": 26,
    "bowling": 75
  },
  "Daren Powell": {
    "role": "bowler",
    "batting": 27,
    "bowling": 62
  },
  "Darren Bravo": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Darren Gough": {
    "role": "bowler",
    "batting": 34,
    "bowling": 83
  },
  "Darren Lehmann": {
    "role": "batsman",
    "batting": 79,
    "bowling": 56
  },
  "Darren Sammy": {
    "role": "batsman",
    "batting": 63,
    "bowling": 41
  },
  "Darron Reekers": {
    "role": "batsman",
    "batting": 63,
    "bowling": 40
  },
  "Daryl Mitchell": {
    "role": "batsman",
    "batting": 91,
    "bowling": 46
  },
  "Daryl Tuffey": {
    "role": "bowler",
    "batting": 34,
    "bowling": 61
  },
  "Dasun Shanaka": {
    "role": "batsman",
    "batting": 59,
    "bowling": 37
  },
  "Dave Langford-Smith": {
    "role": "bowler",
    "batting": 41,
    "bowling": 49
  },
  "Dave Richardson": {
    "role": "wicketkeeper",
    "batting": 43,
    "bowling": 0
  },
  "David Hemp": {
    "role": "batsman",
    "batting": 67,
    "bowling": 0
  },
  "David Hussey": {
    "role": "batsman",
    "batting": 76,
    "bowling": 34
  },
  "David Miller": {
    "role": "batsman",
    "batting": 85,
    "bowling": 0
  },
  "David Obuya": {
    "role": "wicketkeeper",
    "batting": 48,
    "bowling": 0
  },
  "David Warner": {
    "role": "batsman",
    "batting": 93,
    "bowling": 0
  },
  "David Willey": {
    "role": "bowler",
    "batting": 55,
    "bowling": 68
  },
  "David Williams": {
    "role": "wicketkeeper",
    "batting": 28,
    "bowling": 0
  },
  "Davis Joseph": {
    "role": "bowler",
    "batting": 0,
    "bowling": 41
  },
  "Dawid Malan": {
    "role": "batsman",
    "batting": 89,
    "bowling": 0
  },
  "Dawlat Zadran": {
    "role": "bowler",
    "batting": 42,
    "bowling": 67
  },
  "Dean Minors": {
    "role": "wicketkeeper",
    "batting": 53,
    "bowling": 0
  },
  "Debasis Mohanty": {
    "role": "bowler",
    "batting": 22,
    "bowling": 62
  },
  "Denesh Ramdin": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 0
  },
  "Dennis Lillee": {
    "role": "bowler",
    "batting": 33,
    "bowling": 86
  },
  "Derek Pringle": {
    "role": "batsman",
    "batting": 45,
    "bowling": 47
  },
  "Derek Randall": {
    "role": "batsman",
    "batting": 56,
    "bowling": 0
  },
  "Dermot Reeve": {
    "role": "batsman",
    "batting": 46,
    "bowling": 37
  },
  "Desmond Chumney": {
    "role": "batsman",
    "batting": 44,
    "bowling": 0
  },
  "Devendra Bishoo": {
    "role": "bowler",
    "batting": 29,
    "bowling": 37
  },
  "Devon Conway": {
    "role": "batsman",
    "batting": 85,
    "bowling": 0
  },
  "Devon Smith": {
    "role": "batsman",
    "batting": 57,
    "bowling": 0
  },
  "Devon Thomas": {
    "role": "wicketkeeper",
    "batting": 35,
    "bowling": 0
  },
  "Dewald Nel": {
    "role": "batsman",
    "batting": 28,
    "bowling": 31
  },
  "Dhananjaya de Silva": {
    "role": "batsman",
    "batting": 62,
    "bowling": 37
  },
  "Dilhara Fernando": {
    "role": "bowler",
    "batting": 28,
    "bowling": 68
  },
  "Dilip Vengsarkar": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Dilshan Madushanka": {
    "role": "bowler",
    "batting": 25,
    "bowling": 69
  },
  "Dimuth Karunaratne": {
    "role": "batsman",
    "batting": 70,
    "bowling": 0
  },
  "Dinesh Karthik": {
    "role": "wicketkeeper",
    "batting": 63,
    "bowling": 0
  },
  "Dinesh Mongia": {
    "role": "batsman",
    "batting": 60,
    "bowling": 30
  },
  "Dion Ebrahim": {
    "role": "batsman",
    "batting": 48,
    "bowling": 0
  },
  "Dion Nash": {
    "role": "batsman",
    "batting": 39,
    "bowling": 44
  },
  "Dipak Chudasama": {
    "role": "batsman",
    "batting": 49,
    "bowling": 0
  },
  "Dipak Patel": {
    "role": "batsman",
    "batting": 37,
    "bowling": 38
  },
  "Dominic Cork": {
    "role": "bowler",
    "batting": 31,
    "bowling": 53
  },
  "Dougie Brown": {
    "role": "batsman",
    "batting": 39,
    "bowling": 34
  },
  "Dougie Lockhart": {
    "role": "wicketkeeper",
    "batting": 44,
    "bowling": 0
  },
  "Dougie Marillier": {
    "role": "batsman",
    "batting": 46,
    "bowling": 38
  },
  "Douglas Hondo": {
    "role": "bowler",
    "batting": 25,
    "bowling": 51
  },
  "Duleep Mendis": {
    "role": "batsman",
    "batting": 57,
    "bowling": 0
  },
  "Duncan Fletcher": {
    "role": "bowler",
    "batting": 0,
    "bowling": 51
  },
  "Dunith Wellalage": {
    "role": "bowler",
    "batting": 49,
    "bowling": 58
  },
  "Dushmantha Chameera": {
    "role": "bowler",
    "batting": 31,
    "bowling": 55
  },
  "Dwaine Pretorius": {
    "role": "bowler",
    "batting": 42,
    "bowling": 62
  },
  "Dwayne Bravo": {
    "role": "batsman",
    "batting": 63,
    "bowling": 69
  },
  "Dwayne Leverock": {
    "role": "bowler",
    "batting": 27,
    "bowling": 53
  },
  "Dwayne Smith": {
    "role": "batsman",
    "batting": 55,
    "bowling": 45
  },
  "Ed Joyce": {
    "role": "batsman",
    "batting": 78,
    "bowling": 0
  },
  "Ed Rainsford": {
    "role": "bowler",
    "batting": 22,
    "bowling": 60
  },
  "Edgar Schiferli": {
    "role": "bowler",
    "batting": 32,
    "bowling": 57
  },
  "Edward Odumbe": {
    "role": "bowler",
    "batting": 0,
    "bowling": 46
  },
  "Ehsan Adil": {
    "role": "bowler",
    "batting": 0,
    "bowling": 38
  },
  "Elijah Otieno": {
    "role": "bowler",
    "batting": 22,
    "bowling": 35
  },
  "Elton Chigumbura": {
    "role": "batsman",
    "batting": 65,
    "bowling": 40
  },
  "Enamul Haque": {
    "role": "batsman",
    "batting": 30,
    "bowling": 28
  },
  "Eoin Morgan": {
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0
  },
  "Eric Szwarczynski": {
    "role": "batsman",
    "batting": 65,
    "bowling": 0
  },
  "Eric Upashantha": {
    "role": "bowler",
    "batting": 0,
    "bowling": 38
  },
  "Evin Lewis": {
    "role": "batsman",
    "batting": 81,
    "bowling": 0
  },
  "Fabian Allen": {
    "role": "batsman",
    "batting": 43,
    "bowling": 23
  },
  "Faf du Plessis": {
    "role": "batsman",
    "batting": 91,
    "bowling": 0
  },
  "Faheem Ashraf": {
    "role": "batsman",
    "batting": 43,
    "bowling": 35
  },
  "Fakhar Zaman": {
    "role": "batsman",
    "batting": 91,
    "bowling": 0
  },
  "Farhaan Behardien": {
    "role": "batsman",
    "batting": 67,
    "bowling": 26
  },
  "Farhad Reza": {
    "role": "batsman",
    "batting": 39,
    "bowling": 33
  },
  "Farveez Maharoof": {
    "role": "bowler",
    "batting": 51,
    "bowling": 73
  },
  "Fazalhaq Farooqi": {
    "role": "bowler",
    "batting": 21,
    "bowling": 57
  },
  "Fazil Samad": {
    "role": "batsman",
    "batting": 62,
    "bowling": 30
  },
  "Feiko Kloppenburg": {
    "role": "bowler",
    "batting": 0,
    "bowling": 63
  },
  "Francois du Plessis": {
    "role": "batsman",
    "batting": 91,
    "bowling": 0
  },
  "Fraser Watts": {
    "role": "batsman",
    "batting": 62,
    "bowling": 0
  },
  "Gary Ballance": {
    "role": "batsman",
    "batting": 54,
    "bowling": 0
  },
  "Gary Brent": {
    "role": "bowler",
    "batting": 32,
    "bowling": 51
  },
  "Gary Wilson": {
    "role": "wicketkeeper",
    "batting": 58,
    "bowling": 0
  },
  "Gautam Gambhir": {
    "role": "batsman",
    "batting": 86,
    "bowling": 0
  },
  "Gavin Hamilton": {
    "role": "wicketkeeper",
    "batting": 70,
    "bowling": 0
  },
  "Gavin Larsen": {
    "role": "bowler",
    "batting": 37,
    "bowling": 55
  },
  "Geoff Allott": {
    "role": "bowler",
    "batting": 21,
    "bowling": 78
  },
  "Geoff Barnett": {
    "role": "batsman",
    "batting": 45,
    "bowling": 0
  },
  "Geoff Marsh": {
    "role": "batsman",
    "batting": 77,
    "bowling": 0
  },
  "George Bailey": {
    "role": "batsman",
    "batting": 83,
    "bowling": 0
  },
  "George Codrington": {
    "role": "batsman",
    "batting": 39,
    "bowling": 43
  },
  "George Dockrell": {
    "role": "batsman",
    "batting": 54,
    "bowling": 52
  },
  "Gerald Coetzee": {
    "role": "bowler",
    "batting": 0,
    "bowling": 66
  },
  "Gerrie Snyman": {
    "role": "bowler",
    "batting": 0,
    "bowling": 30
  },
  "Gladstone Small": {
    "role": "bowler",
    "batting": 24,
    "bowling": 55
  },
  "Glenn Maxwell": {
    "role": "batsman",
    "batting": 81,
    "bowling": 37
  },
  "Glenn McGrath": {
    "role": "bowler",
    "batting": 23,
    "bowling": 90
  },
  "Glenn Phillips": {
    "role": "batsman",
    "batting": 80,
    "bowling": 26
  },
  "Glenn Rogers": {
    "role": "bowler",
    "batting": 0,
    "bowling": 28
  },
  "Glenn Turner": {
    "role": "batsman",
    "batting": 79,
    "bowling": 0
  },
  "Graeme Cremer": {
    "role": "bowler",
    "batting": 37,
    "bowling": 70
  },
  "Graeme Smith": {
    "role": "batsman",
    "batting": 84,
    "bowling": 26
  },
  "Graeme Swann": {
    "role": "bowler",
    "batting": 43,
    "bowling": 73
  },
  "Graeme Wood": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Graham Thorpe": {
    "role": "batsman",
    "batting": 75,
    "bowling": 0
  },
  "Graham Yallop": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Grant Elliott": {
    "role": "batsman",
    "batting": 74,
    "bowling": 48
  },
  "Grant Paterson": {
    "role": "batsman",
    "batting": 30,
    "bowling": 0
  },
  "Greg Lamb": {
    "role": "batsman",
    "batting": 35,
    "bowling": 37
  },
  "Gulbadin Naib": {
    "role": "batsman",
    "batting": 51,
    "bowling": 48
  },
  "Gus Atkinson": {
    "role": "bowler",
    "batting": 0,
    "bowling": 36
  },
  "Gus Logie": {
    "role": "batsman",
    "batting": 64,
    "bowling": 0
  },
  "Guy Whittall": {
    "role": "batsman",
    "batting": 54,
    "bowling": 43
  },
  "Habibul Bashar": {
    "role": "batsman",
    "batting": 53,
    "bowling": 0
  },
  "Hamid Hassan": {
    "role": "bowler",
    "batting": 25,
    "bowling": 79
  },
  "Hamilton Masakadza": {
    "role": "batsman",
    "batting": 70,
    "bowling": 34
  },
  "Hamish Bennett": {
    "role": "bowler",
    "batting": 0,
    "bowling": 68
  },
  "Hamish Marshall": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Hannan Sarkar": {
    "role": "wicketkeeper",
    "batting": 43,
    "bowling": 0
  },
  "Harbhajan Singh": {
    "role": "bowler",
    "batting": 43,
    "bowling": 65
  },
  "Hardik Pandya": {
    "role": "batsman",
    "batting": 75,
    "bowling": 50
  },
  "Haris Rauf": {
    "role": "bowler",
    "batting": 29,
    "bowling": 76
  },
  "Haris Sohail": {
    "role": "batsman",
    "batting": 85,
    "bowling": 24
  },
  "Harry Brook": {
    "role": "batsman",
    "batting": 83,
    "bowling": 0
  },
  "Harvir Baidwan": {
    "role": "bowler",
    "batting": 34,
    "bowling": 57
  },
  "Hasan Ali": {
    "role": "bowler",
    "batting": 44,
    "bowling": 68
  },
  "Hasan Mahmud": {
    "role": "bowler",
    "batting": 23,
    "bowling": 50
  },
  "Hashan Tillakaratne": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 48
  },
  "Hashim Amla": {
    "role": "batsman",
    "batting": 93,
    "bowling": 0
  },
  "Hashmatullah Shahidi": {
    "role": "batsman",
    "batting": 69,
    "bowling": 0
  },
  "Hasibul Hossain": {
    "role": "batsman",
    "batting": 30,
    "bowling": 34
  },
  "Hazratullah Zazai": {
    "role": "batsman",
    "batting": 55,
    "bowling": 0
  },
  "Heath Streak": {
    "role": "bowler",
    "batting": 61,
    "bowling": 73
  },
  "Heinrich Klaasen": {
    "role": "wicketkeeper",
    "batting": 88,
    "bowling": 0
  },
  "Hendrik-Jan Mol": {
    "role": "bowler",
    "batting": 0,
    "bowling": 41
  },
  "Hendy Bryan": {
    "role": "bowler",
    "batting": 0,
    "bowling": 37
  },
  "Henry Nicholls": {
    "role": "batsman",
    "batting": 73,
    "bowling": 0
  },
  "Henry Olonga": {
    "role": "bowler",
    "batting": 25,
    "bowling": 55
  },
  "Henry Osinde": {
    "role": "bowler",
    "batting": 22,
    "bowling": 56
  },
  "Herschelle Gibbs": {
    "role": "batsman",
    "batting": 84,
    "bowling": 0
  },
  "Hiral Patel": {
    "role": "batsman",
    "batting": 51,
    "bowling": 37
  },
  "Hiren Varaiya": {
    "role": "bowler",
    "batting": 30,
    "bowling": 61
  },
  "Hitesh Modi": {
    "role": "batsman",
    "batting": 50,
    "bowling": 0
  },
  "Iain Butchart": {
    "role": "batsman",
    "batting": 39,
    "bowling": 27
  },
  "Iain Wardlaw": {
    "role": "bowler",
    "batting": 22,
    "bowling": 63
  },
  "Ian Austin": {
    "role": "bowler",
    "batting": 0,
    "bowling": 28
  },
  "Ian Bell": {
    "role": "batsman",
    "batting": 81,
    "bowling": 43
  },
  "Ian Billcliff": {
    "role": "batsman",
    "batting": 58,
    "bowling": 0
  },
  "Ian Blackwell": {
    "role": "batsman",
    "batting": 44,
    "bowling": 41
  },
  "Ian Bradshaw": {
    "role": "bowler",
    "batting": 32,
    "bowling": 65
  },
  "Ian Gould": {
    "role": "wicketkeeper",
    "batting": 32,
    "bowling": 0
  },
  "Ian Harvey": {
    "role": "bowler",
    "batting": 48,
    "bowling": 64
  },
  "Ian Smith": {
    "role": "wicketkeeper",
    "batting": 51,
    "bowling": 0
  },
  "Ibrahim Zadran": {
    "role": "batsman",
    "batting": 86,
    "bowling": 0
  },
  "Iftikhar Anjum": {
    "role": "bowler",
    "batting": 33,
    "bowling": 62
  },
  "Ikram Alikhil": {
    "role": "wicketkeeper",
    "batting": 45,
    "bowling": 0
  },
  "Imad Wasim": {
    "role": "batsman",
    "batting": 75,
    "bowling": 39
  },
  "Imam-ul-Haq": {
    "role": "batsman",
    "batting": 88,
    "bowling": 0
  },
  "Imran Nazir": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Imran Tahir": {
    "role": "bowler",
    "batting": 28,
    "bowling": 85
  },
  "Imrul Kayes": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Imtiaz Abbasi": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Inzamam-ul-Haq": {
    "role": "batsman",
    "batting": 82,
    "bowling": 0
  },
  "Irfan Pathan": {
    "role": "bowler",
    "batting": 55,
    "bowling": 72
  },
  "Irving Romaine": {
    "role": "batsman",
    "batting": 55,
    "bowling": 34
  },
  "Ish Sodhi": {
    "role": "bowler",
    "batting": 32,
    "bowling": 51
  },
  "Isuru Udana": {
    "role": "batsman",
    "batting": 45,
    "bowling": 28
  },
  "Jack Russell": {
    "role": "wicketkeeper",
    "batting": 40,
    "bowling": 0
  },
  "Jacob Oram": {
    "role": "bowler",
    "batting": 63,
    "bowling": 71
  },
  "Jacques Kallis": {
    "role": "batsman",
    "batting": 86,
    "bowling": 62
  },
  "Jade Dernbach": {
    "role": "bowler",
    "batting": 0,
    "bowling": 41
  },
  "James Anderson": {
    "role": "bowler",
    "batting": 26,
    "bowling": 76
  },
  "James Faulkner": {
    "role": "batsman",
    "batting": 68,
    "bowling": 65
  },
  "James Franklin": {
    "role": "batsman",
    "batting": 54,
    "bowling": 42
  },
  "James Neesham": {
    "role": "batsman",
    "batting": 67,
    "bowling": 50
  },
  "James Ngoche": {
    "role": "bowler",
    "batting": 22,
    "bowling": 55
  },
  "James Taylor": {
    "role": "batsman",
    "batting": 78,
    "bowling": 0
  },
  "James Tredwell": {
    "role": "bowler",
    "batting": 31,
    "bowling": 68
  },
  "Jamie Dalrymple": {
    "role": "batsman",
    "batting": 46,
    "bowling": 30
  },
  "Jamie How": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Janeiro Tucker": {
    "role": "batsman",
    "batting": 45,
    "bowling": 27
  },
  "Jason Behrendorff": {
    "role": "bowler",
    "batting": 0,
    "bowling": 48
  },
  "Jason Gillespie": {
    "role": "bowler",
    "batting": 36,
    "bowling": 82
  },
  "Jason Holder": {
    "role": "batsman",
    "batting": 63,
    "bowling": 56
  },
  "Jason Krejza": {
    "role": "bowler",
    "batting": 0,
    "bowling": 31
  },
  "Jason Roy": {
    "role": "batsman",
    "batting": 89,
    "bowling": 0
  },
  "Jasprit Bumrah": {
    "role": "bowler",
    "batting": 25,
    "bowling": 86
  },
  "Javagal Srinath": {
    "role": "bowler",
    "batting": 39,
    "bowling": 79
  },
  "Javed Ahmadi": {
    "role": "batsman",
    "batting": 58,
    "bowling": 31
  },
  "Javed Miandad": {
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 30
  },
  "Javed Omar": {
    "role": "batsman",
    "batting": 53,
    "bowling": 0
  },
  "Jeetan Patel": {
    "role": "bowler",
    "batting": 29,
    "bowling": 50
  },
  "Jeevan Mendis": {
    "role": "batsman",
    "batting": 47,
    "bowling": 33
  },
  "Jeff Thomson": {
    "role": "bowler",
    "batting": 28,
    "bowling": 52
  },
  "Jeffrey Vandersay": {
    "role": "bowler",
    "batting": 28,
    "bowling": 69
  },
  "Jehan Mubarak": {
    "role": "batsman",
    "batting": 48,
    "bowling": 0
  },
  "Jeremy Bray": {
    "role": "wicketkeeper",
    "batting": 59,
    "bowling": 0
  },
  "Jermaine Lawson": {
    "role": "bowler",
    "batting": 0,
    "bowling": 56
  },
  "Jeroen Smits": {
    "role": "wicketkeeper",
    "batting": 32,
    "bowling": 0
  },
  "Jerome Taylor": {
    "role": "bowler",
    "batting": 35,
    "bowling": 70
  },
  "Jesse Ryder": {
    "role": "batsman",
    "batting": 77,
    "bowling": 36
  },
  "Jhye Richardson": {
    "role": "bowler",
    "batting": 0,
    "bowling": 59
  },
  "Jimmy Hansra": {
    "role": "batsman",
    "batting": 46,
    "bowling": 23
  },
  "Jimmy Kamande": {
    "role": "batsman",
    "batting": 43,
    "bowling": 37
  },
  "Jimmy Maher": {
    "role": "wicketkeeper",
    "batting": 50,
    "bowling": 0
  },
  "Jimmy Neesham": {
    "role": "batsman",
    "batting": 67,
    "bowling": 50
  },
  "Joe Root": {
    "role": "batsman",
    "batting": 92,
    "bowling": 26
  },
  "Jofra Archer": {
    "role": "bowler",
    "batting": 44,
    "bowling": 77
  },
  "Johan Botha": {
    "role": "batsman",
    "batting": 46,
    "bowling": 46
  },
  "John Blain": {
    "role": "bowler",
    "batting": 34,
    "bowling": 62
  },
  "John Davison": {
    "role": "batsman",
    "batting": 67,
    "bowling": 56
  },
  "John Hastings": {
    "role": "bowler",
    "batting": 54,
    "bowling": 63
  },
  "John Mooney": {
    "role": "batsman",
    "batting": 53,
    "bowling": 47
  },
  "John Traicos": {
    "role": "batsman",
    "batting": 27,
    "bowling": 34
  },
  "John Wright": {
    "role": "batsman",
    "batting": 62,
    "bowling": 0
  },
  "Johnson Charles": {
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0
  },
  "Jonathan Carter": {
    "role": "batsman",
    "batting": 51,
    "bowling": 0
  },
  "Jonathan Trott": {
    "role": "batsman",
    "batting": 86,
    "bowling": 0
  },
  "Jonny Bairstow": {
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0
  },
  "Jonty Rhodes": {
    "role": "batsman",
    "batting": 76,
    "bowling": 0
  },
  "Jos Buttler": {
    "role": "wicketkeeper",
    "batting": 86,
    "bowling": 0
  },
  "Joseph Angara": {
    "role": "bowler",
    "batting": 22,
    "bowling": 33
  },
  "Josh Davey": {
    "role": "bowler",
    "batting": 46,
    "bowling": 76
  },
  "Josh Hazlewood": {
    "role": "bowler",
    "batting": 35,
    "bowling": 78
  },
  "Josh Inglis": {
    "role": "wicketkeeper",
    "batting": 72,
    "bowling": 0
  },
  "Junaid Khan": {
    "role": "bowler",
    "batting": 23,
    "bowling": 69
  },
  "Junaid Siddique": {
    "role": "batsman",
    "batting": 54,
    "bowling": 0
  },
  "Junior Murray": {
    "role": "wicketkeeper",
    "batting": 51,
    "bowling": 0
  },
  "Justice Chibhabha": {
    "role": "batsman",
    "batting": 56,
    "bowling": 31
  },
  "Justin Kemp": {
    "role": "batsman",
    "batting": 68,
    "bowling": 46
  },
  "Kagiso Rabada": {
    "role": "bowler",
    "batting": 39,
    "bowling": 79
  },
  "Kamran Akmal": {
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0
  },
  "Kamran Shahzad": {
    "role": "bowler",
    "batting": 0,
    "bowling": 50
  },
  "Kane Richardson": {
    "role": "bowler",
    "batting": 38,
    "bowling": 59
  },
  "Kane Williamson": {
    "role": "batsman",
    "batting": 90,
    "bowling": 40
  },
  "Kapila Wijegunawardene": {
    "role": "bowler",
    "batting": 21,
    "bowling": 40
  },
  "Kasun Rajitha": {
    "role": "bowler",
    "batting": 29,
    "bowling": 49
  },
  "Kedar Jadhav": {
    "role": "batsman",
    "batting": 78,
    "bowling": 36
  },
  "Keith Dabengwa": {
    "role": "batsman",
    "batting": 38,
    "bowling": 35
  },
  "Kemar Roach": {
    "role": "bowler",
    "batting": 30,
    "bowling": 68
  },
  "Ken MacLeay": {
    "role": "batsman",
    "batting": 37,
    "bowling": 40
  },
  "Ken Rutherford": {
    "role": "batsman",
    "batting": 67,
    "bowling": 38
  },
  "Kennedy Otieno": {
    "role": "wicketkeeper",
    "batting": 55,
    "bowling": 0
  },
  "Kepler Wessels": {
    "role": "batsman",
    "batting": 71,
    "bowling": 34
  },
  "Keshav Maharaj": {
    "role": "bowler",
    "batting": 39,
    "bowling": 65
  },
  "Kevin Curran": {
    "role": "batsman",
    "batting": 54,
    "bowling": 32
  },
  "Kevin Duers": {
    "role": "bowler",
    "batting": 0,
    "bowling": 24
  },
  "Kevin Hurdle": {
    "role": "bowler",
    "batting": 34,
    "bowling": 42
  },
  "Kevin O'Brien": {
    "role": "batsman",
    "batting": 73,
    "bowling": 56
  },
  "Kevin Pietersen": {
    "role": "batsman",
    "batting": 86,
    "bowling": 23
  },
  "Kevin Sandher": {
    "role": "bowler",
    "batting": 23,
    "bowling": 49
  },
  "Khaled Mahmud": {
    "role": "batsman",
    "batting": 42,
    "bowling": 41
  },
  "Khaled Mashud": {
    "role": "wicketkeeper",
    "batting": 48,
    "bowling": 0
  },
  "Khurram Chohan": {
    "role": "bowler",
    "batting": 31,
    "bowling": 64
  },
  "Khurram Khan": {
    "role": "batsman",
    "batting": 76,
    "bowling": 39
  },
  "Kieron Pollard": {
    "role": "batsman",
    "batting": 69,
    "bowling": 39
  },
  "Kiran More": {
    "role": "wicketkeeper",
    "batting": 37,
    "bowling": 0
  },
  "Kirk Edwards": {
    "role": "batsman",
    "batting": 49,
    "bowling": 0
  },
  "KL Rahul": {
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0
  },
  "Klaas-Jan van Noortwijk": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Kris Srikkanth": {
    "role": "batsman",
    "batting": 71,
    "bowling": 50
  },
  "Krishnamachari Srikkanth": {
    "role": "batsman",
    "batting": 71,
    "bowling": 50
  },
  "Kuldeep Yadav": {
    "role": "bowler",
    "batting": 27,
    "bowling": 81
  },
  "Kumar Dharmasena": {
    "role": "bowler",
    "batting": 47,
    "bowling": 56
  },
  "Kumar Sangakkara": {
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0
  },
  "Kusal Mendis": {
    "role": "wicketkeeper",
    "batting": 83,
    "bowling": 0
  },
  "Kusal Perera": {
    "role": "wicketkeeper",
    "batting": 77,
    "bowling": 0
  },
  "Kyle Abbott": {
    "role": "bowler",
    "batting": 26,
    "bowling": 57
  },
  "Kyle Coetzer": {
    "role": "batsman",
    "batting": 84,
    "bowling": 0
  },
  "Kyle Jamieson": {
    "role": "batsman",
    "batting": 46,
    "bowling": 52
  },
  "Kyle McCallan": {
    "role": "bowler",
    "batting": 46,
    "bowling": 56
  },
  "Kyle Mills": {
    "role": "bowler",
    "batting": 45,
    "bowling": 79
  },
  "Lahiru Kumara": {
    "role": "bowler",
    "batting": 23,
    "bowling": 52
  },
  "Lahiru Thirimanne": {
    "role": "batsman",
    "batting": 74,
    "bowling": 0
  },
  "Lameck Onyango": {
    "role": "batsman",
    "batting": 35,
    "bowling": 38
  },
  "Lance Klusener": {
    "role": "batsman",
    "batting": 80,
    "bowling": 71
  },
  "Lasith Malinga": {
    "role": "bowler",
    "batting": 33,
    "bowling": 77
  },
  "Laxman Sivaramakrishnan": {
    "role": "bowler",
    "batting": 0,
    "bowling": 42
  },
  "Lee Germon": {
    "role": "wicketkeeper",
    "batting": 44,
    "bowling": 0
  },
  "Lendl Simmons": {
    "role": "wicketkeeper",
    "batting": 71,
    "bowling": 0
  },
  "Liam Livingstone": {
    "role": "batsman",
    "batting": 70,
    "bowling": 35
  },
  "Liam Plunkett": {
    "role": "bowler",
    "batting": 51,
    "bowling": 71
  },
  "Lionel Cann": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Litton Das": {
    "role": "wicketkeeper",
    "batting": 74,
    "bowling": 0
  },
  "Lizaad Williams": {
    "role": "bowler",
    "batting": 0,
    "bowling": 63
  },
  "Lockie Ferguson": {
    "role": "bowler",
    "batting": 25,
    "bowling": 65
  },
  "Logan van Beek": {
    "role": "batsman",
    "batting": 48,
    "bowling": 54
  },
  "Lonwabo Tsotsobe": {
    "role": "bowler",
    "batting": 23,
    "bowling": 80
  },
  "Loots Bosman": {
    "role": "batsman",
    "batting": 59,
    "bowling": 0
  },
  "Lou Vincent": {
    "role": "wicketkeeper",
    "batting": 63,
    "bowling": 0
  },
  "Louis Burger": {
    "role": "bowler",
    "batting": 0,
    "bowling": 28
  },
  "Luke Ronchi": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 0
  },
  "Luke Wright": {
    "role": "batsman",
    "batting": 51,
    "bowling": 27
  },
  "Lungi Ngidi": {
    "role": "bowler",
    "batting": 25,
    "bowling": 72
  },
  "Luuk van Troost": {
    "role": "batsman",
    "batting": 37,
    "bowling": 0
  },
  "M.S. Dhoni": {
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0
  },
  "Madan Lal": {
    "role": "bowler",
    "batting": 38,
    "bowling": 63
  },
  "Mahedi Hasan": {
    "role": "bowler",
    "batting": 34,
    "bowling": 53
  },
  "Maheesh Theekshana": {
    "role": "bowler",
    "batting": 34,
    "bowling": 73
  },
  "Mahela Jayawardene": {
    "role": "batsman",
    "batting": 79,
    "bowling": 22
  },
  "Mahmudullah": {
    "role": "batsman",
    "batting": 76,
    "bowling": 37
  },
  "Mahmudullah Riyad": {
    "role": "batsman",
    "batting": 76,
    "bowling": 37
  },
  "Majid Haq": {
    "role": "bowler",
    "batting": 40,
    "bowling": 58
  },
  "Makhaya Ntini": {
    "role": "bowler",
    "batting": 28,
    "bowling": 87
  },
  "Malachi Jones": {
    "role": "batsman",
    "batting": 34,
    "bowling": 24
  },
  "Malcolm Marshall": {
    "role": "bowler",
    "batting": 43,
    "bowling": 72
  },
  "Malinga Bandara": {
    "role": "bowler",
    "batting": 33,
    "bowling": 51
  },
  "Maninder Singh": {
    "role": "bowler",
    "batting": 26,
    "bowling": 59
  },
  "Manjula Guruge": {
    "role": "bowler",
    "batting": 0,
    "bowling": 59
  },
  "Manjural Islam": {
    "role": "bowler",
    "batting": 23,
    "bowling": 32
  },
  "Manoj Prabhakar": {
    "role": "bowler",
    "batting": 53,
    "bowling": 73
  },
  "Marcel Schewe": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Marco Jansen": {
    "role": "batsman",
    "batting": 58,
    "bowling": 58
  },
  "Marcus Stoinis": {
    "role": "batsman",
    "batting": 66,
    "bowling": 36
  },
  "Marcus Trescothick": {
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0
  },
  "Mark Boucher": {
    "role": "wicketkeeper",
    "batting": 68,
    "bowling": 0
  },
  "Mark Chapman": {
    "role": "batsman",
    "batting": 80,
    "bowling": 0
  },
  "Mark Ealham": {
    "role": "bowler",
    "batting": 42,
    "bowling": 59
  },
  "Mark Gillespie": {
    "role": "bowler",
    "batting": 35,
    "bowling": 45
  },
  "Mark Jonkman": {
    "role": "bowler",
    "batting": 0,
    "bowling": 66
  },
  "Mark Taylor": {
    "role": "batsman",
    "batting": 70,
    "bowling": 0
  },
  "Mark Vermeulen": {
    "role": "batsman",
    "batting": 52,
    "bowling": 0
  },
  "Mark Waugh": {
    "role": "batsman",
    "batting": 85,
    "bowling": 50
  },
  "Mark Wood": {
    "role": "bowler",
    "batting": 38,
    "bowling": 46
  },
  "Marlon Samuels": {
    "role": "batsman",
    "batting": 75,
    "bowling": 40
  },
  "Marnus Labuschagne": {
    "role": "batsman",
    "batting": 75,
    "bowling": 35
  },
  "Martin Guptill": {
    "role": "batsman",
    "batting": 89,
    "bowling": 0
  },
  "Martin Snedden": {
    "role": "bowler",
    "batting": 37,
    "bowling": 69
  },
  "Martin Suji": {
    "role": "bowler",
    "batting": 27,
    "bowling": 37
  },
  "Mashrafe Mortaza": {
    "role": "bowler",
    "batting": 47,
    "bowling": 66
  },
  "Matheesha Pathirana": {
    "role": "bowler",
    "batting": 0,
    "bowling": 48
  },
  "Mathew Sinclair": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 0
  },
  "Matt Cross": {
    "role": "wicketkeeper",
    "batting": 59,
    "bowling": 0
  },
  "Matt Henry": {
    "role": "bowler",
    "batting": 37,
    "bowling": 83
  },
  "Matt Horne": {
    "role": "batsman",
    "batting": 49,
    "bowling": 0
  },
  "Matt Machan": {
    "role": "batsman",
    "batting": 70,
    "bowling": 28
  },
  "Matt Prior": {
    "role": "wicketkeeper",
    "batting": 56,
    "bowling": 0
  },
  "Matthew Hart": {
    "role": "bowler",
    "batting": 0,
    "bowling": 55
  },
  "Matthew Hayden": {
    "role": "batsman",
    "batting": 87,
    "bowling": 0
  },
  "Matthew Hoggard": {
    "role": "bowler",
    "batting": 0,
    "bowling": 48
  },
  "Maurice Odumbe": {
    "role": "batsman",
    "batting": 61,
    "bowling": 36
  },
  "Maurice Ouma": {
    "role": "wicketkeeper",
    "batting": 49,
    "bowling": 0
  },
  "Max O'Dowd": {
    "role": "batsman",
    "batting": 76,
    "bowling": 0
  },
  "Max Sorensen": {
    "role": "bowler",
    "batting": 0,
    "bowling": 49
  },
  "Mehidy Hasan": {
    "role": "batsman",
    "batting": 58,
    "bowling": 56
  },
  "Mehidy Hasan Miraz": {
    "role": "batsman",
    "batting": 58,
    "bowling": 56
  },
  "Mehrab Hossain": {
    "role": "batsman",
    "batting": 53,
    "bowling": 0
  },
  "Melt van Schoor": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Mervyn Dillon": {
    "role": "bowler",
    "batting": 26,
    "bowling": 66
  },
  "Meyrick Pringle": {
    "role": "bowler",
    "batting": 0,
    "bowling": 62
  },
  "Michael Bevan": {
    "role": "batsman",
    "batting": 84,
    "bowling": 32
  },
  "Michael Clarke": {
    "role": "batsman",
    "batting": 86,
    "bowling": 41
  },
  "Michael Hussey": {
    "role": "batsman",
    "batting": 87,
    "bowling": 0
  },
  "Michael Mason": {
    "role": "bowler",
    "batting": 0,
    "bowling": 50
  },
  "Michael Slater": {
    "role": "batsman",
    "batting": 54,
    "bowling": 0
  },
  "Michael Vaughan": {
    "role": "batsman",
    "batting": 62,
    "bowling": 32
  },
  "Mike Veletta": {
    "role": "wicketkeeper",
    "batting": 61,
    "bowling": 0
  },
  "Mike Whitney": {
    "role": "bowler",
    "batting": 23,
    "bowling": 64
  },
  "Milinda Siriwardana": {
    "role": "batsman",
    "batting": 57,
    "bowling": 24
  },
  "Minhajul Abedin": {
    "role": "batsman",
    "batting": 41,
    "bowling": 32
  },
  "Misbah-ul-Haq": {
    "role": "batsman",
    "batting": 82,
    "bowling": 0
  },
  "Mitchell Johnson": {
    "role": "bowler",
    "batting": 47,
    "bowling": 84
  },
  "Mitchell Marsh": {
    "role": "batsman",
    "batting": 83,
    "bowling": 45
  },
  "Mitchell McClenaghan": {
    "role": "bowler",
    "batting": 44,
    "bowling": 71
  },
  "Mitchell Santner": {
    "role": "batsman",
    "batting": 61,
    "bowling": 58
  },
  "Mitchell Starc": {
    "role": "bowler",
    "batting": 37,
    "bowling": 85
  },
  "Moeen Ali": {
    "role": "batsman",
    "batting": 64,
    "bowling": 41
  },
  "Mohammad Amir": {
    "role": "bowler",
    "batting": 44,
    "bowling": 67
  },
  "Mohammad Ashraful": {
    "role": "batsman",
    "batting": 57,
    "bowling": 34
  },
  "Mohammad Hafeez": {
    "role": "batsman",
    "batting": 77,
    "bowling": 50
  },
  "Mohammad Hasnain": {
    "role": "bowler",
    "batting": 0,
    "bowling": 37
  },
  "Mohammad Irfan": {
    "role": "bowler",
    "batting": 22,
    "bowling": 64
  },
  "Mohammad Kaif": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Mohammad Kashif": {
    "role": "bowler",
    "batting": 0,
    "bowling": 29
  },
  "Mohammad Nabi": {
    "role": "batsman",
    "batting": 70,
    "bowling": 64
  },
  "Mohammad Nawaz": {
    "role": "batsman",
    "batting": 51,
    "bowling": 49
  },
  "Mohammad Rafique": {
    "role": "bowler",
    "batting": 41,
    "bowling": 55
  },
  "Mohammad Rizwan": {
    "role": "wicketkeeper",
    "batting": 82,
    "bowling": 0
  },
  "Mohammad Saifuddin": {
    "role": "batsman",
    "batting": 61,
    "bowling": 56
  },
  "Mohammad Sami": {
    "role": "bowler",
    "batting": 31,
    "bowling": 71
  },
  "Mohammad Shahzad": {
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0
  },
  "Mohammad Sheikh": {
    "role": "bowler",
    "batting": 25,
    "bowling": 46
  },
  "Mohammad Tauqir": {
    "role": "bowler",
    "batting": 0,
    "bowling": 33
  },
  "Mohammad Yousuf": {
    "role": "batsman",
    "batting": 84,
    "bowling": 0
  },
  "Mohammed Shami": {
    "role": "bowler",
    "batting": 32,
    "bowling": 83
  },
  "Mohammed Siraj": {
    "role": "bowler",
    "batting": 23,
    "bowling": 74
  },
  "Mohit Sharma": {
    "role": "bowler",
    "batting": 0,
    "bowling": 50
  },
  "Mominul Haque": {
    "role": "batsman",
    "batting": 51,
    "bowling": 45
  },
  "Monde Zondeki": {
    "role": "bowler",
    "batting": 0,
    "bowling": 29
  },
  "Monty Panesar": {
    "role": "bowler",
    "batting": 0,
    "bowling": 39
  },
  "Morné Morkel": {
    "role": "bowler",
    "batting": 32,
    "bowling": 83
  },
  "Morne van Wyk": {
    "role": "wicketkeeper",
    "batting": 56,
    "bowling": 0
  },
  "Morris Ouma": {
    "role": "wicketkeeper",
    "batting": 49,
    "bowling": 0
  },
  "MS Dhoni": {
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0
  },
  "Mudassar Bukhari": {
    "role": "bowler",
    "batting": 45,
    "bowling": 63
  },
  "Mudassar Nazar": {
    "role": "batsman",
    "batting": 57,
    "bowling": 62
  },
  "Mujeeb Ur Rahman": {
    "role": "bowler",
    "batting": 36,
    "bowling": 73
  },
  "Munaf Patel": {
    "role": "bowler",
    "batting": 25,
    "bowling": 64
  },
  "Murphy Su'a": {
    "role": "bowler",
    "batting": 0,
    "bowling": 36
  },
  "Murray Goodwin": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Mushfiqur Rahim": {
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0
  },
  "Mustafizur Rahman": {
    "role": "bowler",
    "batting": 25,
    "bowling": 81
  },
  "Muttiah Muralitharan": {
    "role": "bowler",
    "batting": 34,
    "bowling": 90
  },
  "Naeem Islam": {
    "role": "batsman",
    "batting": 54,
    "bowling": 38
  },
  "Naimur Rahman": {
    "role": "batsman",
    "batting": 42,
    "bowling": 26
  },
  "Najibullah Zadran": {
    "role": "batsman",
    "batting": 71,
    "bowling": 0
  },
  "Najmul Hossain Shanto": {
    "role": "batsman",
    "batting": 74,
    "bowling": 0
  },
  "Nasir Hossain": {
    "role": "batsman",
    "batting": 65,
    "bowling": 35
  },
  "Nasir Jamal": {
    "role": "batsman",
    "batting": 54,
    "bowling": 0
  },
  "Nasir Jamshed": {
    "role": "batsman",
    "batting": 70,
    "bowling": 0
  },
  "Nasum Ahmed": {
    "role": "batsman",
    "batting": 43,
    "bowling": 47
  },
  "Nathan Astle": {
    "role": "batsman",
    "batting": 79,
    "bowling": 46
  },
  "Nathan Bracken": {
    "role": "bowler",
    "batting": 31,
    "bowling": 85
  },
  "Nathan Hauritz": {
    "role": "batsman",
    "batting": 48,
    "bowling": 54
  },
  "Nathan Lyon": {
    "role": "batsman",
    "batting": 39,
    "bowling": 37
  },
  "Nathan McCullum": {
    "role": "batsman",
    "batting": 54,
    "bowling": 38
  },
  "Nathan Mitchell Coulter-Nile": {
    "role": "bowler",
    "batting": 44,
    "bowling": 62
  },
  "Navdeep Poonia": {
    "role": "batsman",
    "batting": 33,
    "bowling": 0
  },
  "Naveen-ul-Haq": {
    "role": "bowler",
    "batting": 26,
    "bowling": 52
  },
  "Navjot Singh Sidhu": {
    "role": "batsman",
    "batting": 79,
    "bowling": 0
  },
  "Nawroz Mangal": {
    "role": "batsman",
    "batting": 62,
    "bowling": 42
  },
  "Nayan Mongia": {
    "role": "wicketkeeper",
    "batting": 46,
    "bowling": 0
  },
  "Nazmul Hossain": {
    "role": "bowler",
    "batting": 22,
    "bowling": 55
  },
  "Nehemiah Odhiambo": {
    "role": "bowler",
    "batting": 37,
    "bowling": 47
  },
  "Nehemiah Perry": {
    "role": "batsman",
    "batting": 44,
    "bowling": 38
  },
  "Neil Johnson": {
    "role": "batsman",
    "batting": 75,
    "bowling": 45
  },
  "Neil McCallum": {
    "role": "batsman",
    "batting": 60,
    "bowling": 0
  },
  "Neil Smith": {
    "role": "bowler",
    "batting": 0,
    "bowling": 43
  },
  "Niall O'Brien": {
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0
  },
  "Nicholas Pooran": {
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 39
  },
  "Nick Dyer": {
    "role": "bowler",
    "batting": 0,
    "bowling": 55
  },
  "Nick Knight": {
    "role": "batsman",
    "batting": 81,
    "bowling": 0
  },
  "Nicky Boje": {
    "role": "batsman",
    "batting": 62,
    "bowling": 54
  },
  "Nikhil Chopra": {
    "role": "bowler",
    "batting": 36,
    "bowling": 66
  },
  "Nikita Miller": {
    "role": "batsman",
    "batting": 43,
    "bowling": 47
  },
  "Nitish Kumar": {
    "role": "batsman",
    "batting": 35,
    "bowling": 0
  },
  "Nixon McLean": {
    "role": "batsman",
    "batting": 38,
    "bowling": 45
  },
  "Noor Ali Zadran": {
    "role": "batsman",
    "batting": 56,
    "bowling": 0
  },
  "Nuwan Kulasekara": {
    "role": "bowler",
    "batting": 46,
    "bowling": 61
  },
  "Nuwan Pradeep": {
    "role": "bowler",
    "batting": 22,
    "bowling": 50
  },
  "Oshane Thomas": {
    "role": "bowler",
    "batting": 21,
    "bowling": 53
  },
  "Parthiv Patel": {
    "role": "wicketkeeper",
    "batting": 55,
    "bowling": 0
  },
  "Pat Cummins": {
    "role": "bowler",
    "batting": 39,
    "bowling": 75
  },
  "Pat Symcox": {
    "role": "batsman",
    "batting": 46,
    "bowling": 49
  },
  "Pathum Nissanka": {
    "role": "batsman",
    "batting": 87,
    "bowling": 0
  },
  "Patrick Patterson": {
    "role": "bowler",
    "batting": 24,
    "bowling": 79
  },
  "Paul Adams": {
    "role": "bowler",
    "batting": 0,
    "bowling": 58
  },
  "Paul Collingwood": {
    "role": "batsman",
    "batting": 76,
    "bowling": 47
  },
  "Paul Hoffmann": {
    "role": "bowler",
    "batting": 35,
    "bowling": 43
  },
  "Paul Nixon": {
    "role": "wicketkeeper",
    "batting": 47,
    "bowling": 0
  },
  "Paul Reiffel": {
    "role": "bowler",
    "batting": 37,
    "bowling": 68
  },
  "Paul Stirling": {
    "role": "batsman",
    "batting": 87,
    "bowling": 36
  },
  "Paul Strang": {
    "role": "bowler",
    "batting": 47,
    "bowling": 60
  },
  "Paul van Meekeren": {
    "role": "bowler",
    "batting": 29,
    "bowling": 70
  },
  "Pedro Collins": {
    "role": "bowler",
    "batting": 23,
    "bowling": 60
  },
  "Peter Borren": {
    "role": "batsman",
    "batting": 56,
    "bowling": 46
  },
  "Peter Chase": {
    "role": "bowler",
    "batting": 23,
    "bowling": 43
  },
  "Peter Fulton": {
    "role": "batsman",
    "batting": 69,
    "bowling": 0
  },
  "Peter Martin": {
    "role": "bowler",
    "batting": 26,
    "bowling": 59
  },
  "Peter Ongondo": {
    "role": "bowler",
    "batting": 31,
    "bowling": 62
  },
  "Peter Rawson": {
    "role": "bowler",
    "batting": 0,
    "bowling": 43
  },
  "Peter Taylor": {
    "role": "bowler",
    "batting": 42,
    "bowling": 68
  },
  "Phil Simmons": {
    "role": "batsman",
    "batting": 67,
    "bowling": 51
  },
  "Phil Tufnell": {
    "role": "bowler",
    "batting": 26,
    "bowling": 44
  },
  "Pieter Seelaar": {
    "role": "bowler",
    "batting": 32,
    "bowling": 50
  },
  "Prabath Nissanka": {
    "role": "bowler",
    "batting": 23,
    "bowling": 51
  },
  "Pramodya Wickramasinghe": {
    "role": "bowler",
    "batting": 30,
    "bowling": 48
  },
  "Preston Mommsen": {
    "role": "batsman",
    "batting": 65,
    "bowling": 43
  },
  "Prosper Utseya": {
    "role": "batsman",
    "batting": 41,
    "bowling": 47
  },
  "Pulasthi Gunaratne": {
    "role": "bowler",
    "batting": 0,
    "bowling": 48
  },
  "Qaiser Ali": {
    "role": "bowler",
    "batting": 38,
    "bowling": 46
  },
  "Quinton de Kock": {
    "role": "wicketkeeper",
    "batting": 93,
    "bowling": 0
  },
  "Rachin Ravindra": {
    "role": "batsman",
    "batting": 86,
    "bowling": 31
  },
  "Rahat Ali": {
    "role": "bowler",
    "batting": 0,
    "bowling": 42
  },
  "Rahmanullah Gurbaz": {
    "role": "wicketkeeper",
    "batting": 82,
    "bowling": 0
  },
  "Rahmat Shah": {
    "role": "batsman",
    "batting": 78,
    "bowling": 35
  },
  "Rahul Dravid": {
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0
  },
  "Rajab Ali": {
    "role": "bowler",
    "batting": 0,
    "bowling": 60
  },
  "Rajin Saleh": {
    "role": "batsman",
    "batting": 53,
    "bowling": 44
  },
  "Rakep Patel": {
    "role": "batsman",
    "batting": 44,
    "bowling": 0
  },
  "Ramiz Raja": {
    "role": "batsman",
    "batting": 71,
    "bowling": 0
  },
  "Ramnaresh Sarwan": {
    "role": "batsman",
    "batting": 83,
    "bowling": 33
  },
  "Rana Naved-ul-Hasan": {
    "role": "bowler",
    "batting": 43,
    "bowling": 71
  },
  "Rangana Herath": {
    "role": "bowler",
    "batting": 28,
    "bowling": 58
  },
  "Ranjan Madugalle": {
    "role": "batsman",
    "batting": 44,
    "bowling": 0
  },
  "Rassie van der Dussen": {
    "role": "batsman",
    "batting": 88,
    "bowling": 0
  },
  "Ravi Bopara": {
    "role": "batsman",
    "batting": 68,
    "bowling": 39
  },
  "Ravi Rampaul": {
    "role": "bowler",
    "batting": 37,
    "bowling": 71
  },
  "Ravi Ratnayeke": {
    "role": "bowler",
    "batting": 37,
    "bowling": 57
  },
  "Ravi Shastri": {
    "role": "batsman",
    "batting": 63,
    "bowling": 55
  },
  "Ravichandran Ashwin": {
    "role": "bowler",
    "batting": 45,
    "bowling": 63
  },
  "Ravindra Jadeja": {
    "role": "batsman",
    "batting": 68,
    "bowling": 59
  },
  "Ravindu Shah": {
    "role": "batsman",
    "batting": 64,
    "bowling": 0
  },
  "Ray Price": {
    "role": "bowler",
    "batting": 30,
    "bowling": 54
  },
  "Reece Topley": {
    "role": "bowler",
    "batting": 25,
    "bowling": 69
  },
  "Reeza Hendricks": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Regis Chakabva": {
    "role": "wicketkeeper",
    "batting": 52,
    "bowling": 0
  },
  "Reon King": {
    "role": "bowler",
    "batting": 23,
    "bowling": 78
  },
  "Ricardo Powell": {
    "role": "batsman",
    "batting": 65,
    "bowling": 27
  },
  "Richard Snell": {
    "role": "batsman",
    "batting": 45,
    "bowling": 52
  },
  "Richie Berrington": {
    "role": "batsman",
    "batting": 74,
    "bowling": 35
  },
  "Richie Richardson": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Ricky Ponting": {
    "role": "batsman",
    "batting": 88,
    "bowling": 0
  },
  "Ridley Jacobs": {
    "role": "wicketkeeper",
    "batting": 53,
    "bowling": 0
  },
  "Rilee Rossouw": {
    "role": "batsman",
    "batting": 81,
    "bowling": 0
  },
  "Rishabh Pant": {
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 0
  },
  "Rizwan Cheema": {
    "role": "batsman",
    "batting": 64,
    "bowling": 46
  },
  "Robert Croft": {
    "role": "bowler",
    "batting": 35,
    "bowling": 44
  },
  "Robert Kennedy": {
    "role": "bowler",
    "batting": 0,
    "bowling": 25
  },
  "Robin Peterson": {
    "role": "batsman",
    "batting": 47,
    "bowling": 51
  },
  "Robin Singh": {
    "role": "batsman",
    "batting": 60,
    "bowling": 41
  },
  "Robin Smith": {
    "role": "batsman",
    "batting": 77,
    "bowling": 0
  },
  "Robin Uthappa": {
    "role": "wicketkeeper",
    "batting": 62,
    "bowling": 0
  },
  "Rod Marsh": {
    "role": "wicketkeeper",
    "batting": 52,
    "bowling": 0
  },
  "Roelof van der Merwe": {
    "role": "bowler",
    "batting": 39,
    "bowling": 50
  },
  "Roger Telemachus": {
    "role": "bowler",
    "batting": 28,
    "bowling": 67
  },
  "Roger Twose": {
    "role": "batsman",
    "batting": 78,
    "bowling": 0
  },
  "Rohan Mustafa": {
    "role": "bowler",
    "batting": 51,
    "bowling": 59
  },
  "Rohit Sharma": {
    "role": "batsman",
    "batting": 93,
    "bowling": 24
  },
  "Roland Lefebvre": {
    "role": "batsman",
    "batting": 46,
    "bowling": 37
  },
  "Ronnie Irani": {
    "role": "batsman",
    "batting": 37,
    "bowling": 40
  },
  "Roshan Mahanama": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Ross Lyons": {
    "role": "batsman",
    "batting": 35,
    "bowling": 33
  },
  "Ross Taylor": {
    "role": "batsman",
    "batting": 90,
    "bowling": 0
  },
  "Rubel Hossain": {
    "role": "bowler",
    "batting": 24,
    "bowling": 61
  },
  "Rudi van Vuuren": {
    "role": "bowler",
    "batting": 0,
    "bowling": 45
  },
  "Rumesh Ratnayake": {
    "role": "bowler",
    "batting": 45,
    "bowling": 54
  },
  "Russel Arnold": {
    "role": "batsman",
    "batting": 72,
    "bowling": 35
  },
  "Ruwan Kalpage": {
    "role": "batsman",
    "batting": 43,
    "bowling": 46
  },
  "Ryan ten Doeschate": {
    "role": "batsman",
    "batting": 88,
    "bowling": 74
  },
  "Ryan Watson": {
    "role": "batsman",
    "batting": 66,
    "bowling": 28
  },
  "S. Sreesanth": {
    "role": "bowler",
    "batting": 22,
    "bowling": 60
  },
  "Sabbir Rahman": {
    "role": "batsman",
    "batting": 64,
    "bowling": 21
  },
  "Sachin Tendulkar": {
    "role": "batsman",
    "batting": 91,
    "bowling": 43
  },
  "Sachithra Senanayake": {
    "role": "bowler",
    "batting": 40,
    "bowling": 51
  },
  "Sadagoppan Ramesh": {
    "role": "batsman",
    "batting": 58,
    "bowling": 0
  },
  "Sadeera Samarawickrama": {
    "role": "wicketkeeper",
    "batting": 74,
    "bowling": 0
  },
  "Saeed Ajmal": {
    "role": "bowler",
    "batting": 28,
    "bowling": 89
  },
  "Safyaan Sharif": {
    "role": "bowler",
    "batting": 43,
    "bowling": 69
  },
  "Sajid Mahmood": {
    "role": "bowler",
    "batting": 31,
    "bowling": 41
  },
  "Saleem Elahi": {
    "role": "batsman",
    "batting": 75,
    "bowling": 0
  },
  "Saleem Malik": {
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 50
  },
  "Saleem Mukuddem": {
    "role": "bowler",
    "batting": 43,
    "bowling": 51
  },
  "Saleem Yousuf": {
    "role": "wicketkeeper",
    "batting": 45,
    "bowling": 0
  },
  "Sam Curran": {
    "role": "batsman",
    "batting": 55,
    "bowling": 39
  },
  "Samiullah Shenwari": {
    "role": "batsman",
    "batting": 62,
    "bowling": 41
  },
  "Samiullah Shinwari": {
    "role": "batsman",
    "batting": 62,
    "bowling": 41
  },
  "Sandeep Patil": {
    "role": "batsman",
    "batting": 61,
    "bowling": 35
  },
  "Sandip Gupta": {
    "role": "batsman",
    "batting": 32,
    "bowling": 0
  },
  "Sanjay Bangar": {
    "role": "batsman",
    "batting": 38,
    "bowling": 25
  },
  "Sanjay Manjrekar": {
    "role": "batsman",
    "batting": 68,
    "bowling": 0
  },
  "Sanjayan Thuraisingam": {
    "role": "bowler",
    "batting": 0,
    "bowling": 66
  },
  "Sanwar Hossain": {
    "role": "wicketkeeper",
    "batting": 32,
    "bowling": 38
  },
  "Saqlain Mushtaq": {
    "role": "bowler",
    "batting": 32,
    "bowling": 92
  },
  "Sarfaraz Ahmed": {
    "role": "wicketkeeper",
    "batting": 73,
    "bowling": 0
  },
  "Sarfraz Nawaz": {
    "role": "bowler",
    "batting": 30,
    "bowling": 76
  },
  "Saud Shakeel": {
    "role": "batsman",
    "batting": 61,
    "bowling": 0
  },
  "Scott Edwards": {
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0
  },
  "Scott Styris": {
    "role": "batsman",
    "batting": 75,
    "bowling": 55
  },
  "Sean Abbott": {
    "role": "batsman",
    "batting": 50,
    "bowling": 44
  },
  "Sean Ervine": {
    "role": "batsman",
    "batting": 58,
    "bowling": 41
  },
  "Sean Williams": {
    "role": "batsman",
    "batting": 84,
    "bowling": 39
  },
  "Seekkuge Prasanna": {
    "role": "batsman",
    "batting": 43,
    "bowling": 30
  },
  "Seren Waters": {
    "role": "batsman",
    "batting": 45,
    "bowling": 0
  },
  "Shadab Khan": {
    "role": "batsman",
    "batting": 61,
    "bowling": 55
  },
  "Shafiqullah": {
    "role": "wicketkeeper",
    "batting": 55,
    "bowling": 0
  },
  "Shafiuddin Ahmed": {
    "role": "bowler",
    "batting": 22,
    "bowling": 36
  },
  "Shafiul Islam": {
    "role": "bowler",
    "batting": 25,
    "bowling": 52
  },
  "Shahadat Hossain": {
    "role": "bowler",
    "batting": 24,
    "bowling": 36
  },
  "Shaheen Afridi": {
    "role": "bowler",
    "batting": 38,
    "bowling": 81
  },
  "Shahid Afridi": {
    "role": "batsman",
    "batting": 69,
    "bowling": 63
  },
  "Shahid Mahboob": {
    "role": "bowler",
    "batting": 0,
    "bowling": 30
  },
  "Shahriar Hossain": {
    "role": "batsman",
    "batting": 41,
    "bowling": 0
  },
  "Shahriar Nafees": {
    "role": "batsman",
    "batting": 70,
    "bowling": 0
  },
  "Shai Hope": {
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0
  },
  "Shaiman Anwar": {
    "role": "batsman",
    "batting": 73,
    "bowling": 0
  },
  "Shakib Al Hasan": {
    "role": "batsman",
    "batting": 83,
    "bowling": 76
  },
  "Shane Bond": {
    "role": "bowler",
    "batting": 38,
    "bowling": 91
  },
  "Shane Lee": {
    "role": "bowler",
    "batting": 47,
    "bowling": 67
  },
  "Shane Thomson": {
    "role": "batsman",
    "batting": 50,
    "bowling": 43
  },
  "Shane Warne": {
    "role": "bowler",
    "batting": 40,
    "bowling": 84
  },
  "Shane Watson": {
    "role": "batsman",
    "batting": 86,
    "bowling": 60
  },
  "Shannon Gabriel": {
    "role": "bowler",
    "batting": 21,
    "bowling": 48
  },
  "Shapoor Zadran": {
    "role": "bowler",
    "batting": 23,
    "bowling": 46
  },
  "Shaukat Dukanwala": {
    "role": "bowler",
    "batting": 0,
    "bowling": 59
  },
  "Shaun Marsh": {
    "role": "batsman",
    "batting": 84,
    "bowling": 0
  },
  "Shaun Pollock": {
    "role": "bowler",
    "batting": 63,
    "bowling": 82
  },
  "Shaun Tait": {
    "role": "bowler",
    "batting": 0,
    "bowling": 74
  },
  "Sheldon Cottrell": {
    "role": "bowler",
    "batting": 29,
    "bowling": 59
  },
  "Shem Ngoche": {
    "role": "bowler",
    "batting": 26,
    "bowling": 40
  },
  "Sherwin Campbell": {
    "role": "batsman",
    "batting": 61,
    "bowling": 47
  },
  "Shikhar Dhawan": {
    "role": "batsman",
    "batting": 91,
    "bowling": 0
  },
  "Shimron Hetmyer": {
    "role": "batsman",
    "batting": 76,
    "bowling": 0
  },
  "Shingirai Masakadza": {
    "role": "batsman",
    "batting": 47,
    "bowling": 52
  },
  "Shivnarine Chanderpaul": {
    "role": "batsman",
    "batting": 82,
    "bowling": 28
  },
  "Shoaib Akhtar": {
    "role": "bowler",
    "batting": 32,
    "bowling": 84
  },
  "Shoaib Malik": {
    "role": "batsman",
    "batting": 79,
    "bowling": 49
  },
  "Shoaib Mohammad": {
    "role": "batsman",
    "batting": 52,
    "bowling": 37
  },
  "Shoriful Islam": {
    "role": "bowler",
    "batting": 30,
    "bowling": 67
  },
  "Shreyas Iyer": {
    "role": "batsman",
    "batting": 90,
    "bowling": 0
  },
  "Shubman Gill": {
    "role": "batsman",
    "batting": 92,
    "bowling": 0
  },
  "Sidath Wettimuny": {
    "role": "batsman",
    "batting": 51,
    "bowling": 0
  },
  "Sikandar Raza": {
    "role": "batsman",
    "batting": 82,
    "bowling": 42
  },
  "Simon O'Donnell": {
    "role": "bowler",
    "batting": 59,
    "bowling": 72
  },
  "Sisanda Magala": {
    "role": "bowler",
    "batting": 0,
    "bowling": 61
  },
  "Sohaib Maqsood": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Sohail Khan": {
    "role": "bowler",
    "batting": 0,
    "bowling": 56
  },
  "Solomon Mire": {
    "role": "batsman",
    "batting": 53,
    "bowling": 29
  },
  "Soumya Sarkar": {
    "role": "batsman",
    "batting": 79,
    "bowling": 36
  },
  "Sourav Ganguly": {
    "role": "batsman",
    "batting": 85,
    "bowling": 45
  },
  "Stefan Kelly": {
    "role": "bowler",
    "batting": 0,
    "bowling": 55
  },
  "Stephen Fleming": {
    "role": "batsman",
    "batting": 75,
    "bowling": 0
  },
  "Stephen Peall": {
    "role": "batsman",
    "batting": 26,
    "bowling": 28
  },
  "Steve Elworthy": {
    "role": "bowler",
    "batting": 29,
    "bowling": 61
  },
  "Steve Harmison": {
    "role": "bowler",
    "batting": 27,
    "bowling": 61
  },
  "Steve Palframan": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Steve Smith": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Steve Tikolo": {
    "role": "batsman",
    "batting": 71,
    "bowling": 52
  },
  "Steve Waugh": {
    "role": "batsman",
    "batting": 74,
    "bowling": 56
  },
  "Steven Finn": {
    "role": "bowler",
    "batting": 27,
    "bowling": 72
  },
  "Steven Lubbers": {
    "role": "bowler",
    "batting": 0,
    "bowling": 37
  },
  "Stuart Binny": {
    "role": "batsman",
    "batting": 58,
    "bowling": 65
  },
  "Stuart Broad": {
    "role": "bowler",
    "batting": 37,
    "bowling": 72
  },
  "Stuart Carlisle": {
    "role": "batsman",
    "batting": 62,
    "bowling": 0
  },
  "Stuart Clark": {
    "role": "bowler",
    "batting": 33,
    "bowling": 66
  },
  "Stuart Law": {
    "role": "batsman",
    "batting": 62,
    "bowling": 28
  },
  "Stuart Matsikenyeri": {
    "role": "batsman",
    "batting": 56,
    "bowling": 28
  },
  "Stuart Thompson": {
    "role": "batsman",
    "batting": 44,
    "bowling": 32
  },
  "Stuart Williams": {
    "role": "batsman",
    "batting": 67,
    "bowling": 0
  },
  "Suhrawadi Shuvo": {
    "role": "batsman",
    "batting": 34,
    "bowling": 36
  },
  "Sulieman Benn": {
    "role": "batsman",
    "batting": 31,
    "bowling": 38
  },
  "Sultan Zarawani": {
    "role": "bowler",
    "batting": 0,
    "bowling": 25
  },
  "Sunil Dhaniram": {
    "role": "batsman",
    "batting": 59,
    "bowling": 57
  },
  "Suranga Lakmal": {
    "role": "bowler",
    "batting": 29,
    "bowling": 61
  },
  "Suresh Raina": {
    "role": "batsman",
    "batting": 81,
    "bowling": 30
  },
  "Swapnil Patil": {
    "role": "wicketkeeper",
    "batting": 50,
    "bowling": 0
  },
  "Sybrand Engelbrecht": {
    "role": "batsman",
    "batting": 63,
    "bowling": 0
  },
  "Syed Rasel": {
    "role": "bowler",
    "batting": 23,
    "bowling": 55
  },
  "Tabraiz Shamsi": {
    "role": "bowler",
    "batting": 25,
    "bowling": 58
  },
  "Tafadzwa Kamungozi": {
    "role": "bowler",
    "batting": 22,
    "bowling": 31
  },
  "Tahir Naqqash": {
    "role": "batsman",
    "batting": 40,
    "bowling": 43
  },
  "Taijul Islam": {
    "role": "bowler",
    "batting": 30,
    "bowling": 70
  },
  "Talha Jubair": {
    "role": "bowler",
    "batting": 0,
    "bowling": 36
  },
  "Tamim Iqbal": {
    "role": "batsman",
    "batting": 83,
    "bowling": 0
  },
  "Tanmay Mishra": {
    "role": "batsman",
    "batting": 69,
    "bowling": 0
  },
  "Tanzid Hasan": {
    "role": "batsman",
    "batting": 66,
    "bowling": 0
  },
  "Tanzim Hasan Sakib": {
    "role": "bowler",
    "batting": 42,
    "bowling": 58
  },
  "Tapash Baisya": {
    "role": "bowler",
    "batting": 32,
    "bowling": 42
  },
  "Tariq Iqbal": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Taskin Ahmed": {
    "role": "bowler",
    "batting": 27,
    "bowling": 72
  },
  "Tatenda Taibu": {
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0
  },
  "Taufeeq Umar": {
    "role": "batsman",
    "batting": 49,
    "bowling": 0
  },
  "Tawanda Mupariwa": {
    "role": "bowler",
    "batting": 28,
    "bowling": 65
  },
  "Teja Nidamanuru": {
    "role": "batsman",
    "batting": 65,
    "bowling": 0
  },
  "Temba Bavuma": {
    "role": "batsman",
    "batting": 85,
    "bowling": 0
  },
  "Tendai Chatara": {
    "role": "bowler",
    "batting": 25,
    "bowling": 61
  },
  "Terry Duffin": {
    "role": "batsman",
    "batting": 49,
    "bowling": 0
  },
  "Thilan Samaraweera": {
    "role": "batsman",
    "batting": 55,
    "bowling": 28
  },
  "Thisara Perera": {
    "role": "batsman",
    "batting": 59,
    "bowling": 62
  },
  "Thomas Odoyo": {
    "role": "bowler",
    "batting": 56,
    "bowling": 67
  },
  "Tillakaratne Dilshan": {
    "role": "wicketkeeper",
    "batting": 86,
    "bowling": 41
  },
  "Tim Bresnan": {
    "role": "bowler",
    "batting": 50,
    "bowling": 59
  },
  "Tim de Leede": {
    "role": "batsman",
    "batting": 62,
    "bowling": 50
  },
  "Tim May": {
    "role": "bowler",
    "batting": 29,
    "bowling": 39
  },
  "Tim Paine": {
    "role": "wicketkeeper",
    "batting": 60,
    "bowling": 0
  },
  "Tim Robinson": {
    "role": "batsman",
    "batting": 48,
    "bowling": 0
  },
  "Tim Southee": {
    "role": "bowler",
    "batting": 42,
    "bowling": 65
  },
  "Tinashe Panyangara": {
    "role": "bowler",
    "batting": 26,
    "bowling": 39
  },
  "Tom Cooper": {
    "role": "batsman",
    "batting": 80,
    "bowling": 36
  },
  "Tom de Grooth": {
    "role": "batsman",
    "batting": 40,
    "bowling": 0
  },
  "Tom Latham": {
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0
  },
  "Tom Moody": {
    "role": "batsman",
    "batting": 53,
    "bowling": 44
  },
  "Tony Suji": {
    "role": "batsman",
    "batting": 34,
    "bowling": 27
  },
  "Towhid Hridoy": {
    "role": "batsman",
    "batting": 77,
    "bowling": 0
  },
  "Travis Friend": {
    "role": "batsman",
    "batting": 44,
    "bowling": 33
  },
  "Travis Head": {
    "role": "batsman",
    "batting": 90,
    "bowling": 34
  },
  "Trent Boult": {
    "role": "bowler",
    "batting": 32,
    "bowling": 86
  },
  "Trent Johnston": {
    "role": "bowler",
    "batting": 50,
    "bowling": 58
  },
  "Trevor Jesty": {
    "role": "batsman",
    "batting": 41,
    "bowling": 0
  },
  "Tushar Imran": {
    "role": "batsman",
    "batting": 38,
    "bowling": 0
  },
  "Umar Akmal": {
    "role": "wicketkeeper",
    "batting": 77,
    "bowling": 0
  },
  "Umar Bhatti": {
    "role": "batsman",
    "batting": 41,
    "bowling": 48
  },
  "Umar Gul": {
    "role": "bowler",
    "batting": 34,
    "bowling": 73
  },
  "Umesh Yadav": {
    "role": "bowler",
    "batting": 25,
    "bowling": 61
  },
  "Upul Chandana": {
    "role": "bowler",
    "batting": 48,
    "bowling": 63
  },
  "Upul Tharanga": {
    "role": "batsman",
    "batting": 78,
    "bowling": 0
  },
  "Usman Ghani": {
    "role": "batsman",
    "batting": 58,
    "bowling": 0
  },
  "Usman Khawaja": {
    "role": "batsman",
    "batting": 83,
    "bowling": 0
  },
  "Vasbert Drakes": {
    "role": "bowler",
    "batting": 26,
    "bowling": 74
  },
  "Venkatapathy Raju": {
    "role": "bowler",
    "batting": 22,
    "bowling": 59
  },
  "Venkatesh Prasad": {
    "role": "bowler",
    "batting": 26,
    "bowling": 66
  },
  "Vernon Philander": {
    "role": "bowler",
    "batting": 33,
    "bowling": 71
  },
  "Vic Marks": {
    "role": "bowler",
    "batting": 35,
    "bowling": 69
  },
  "Vikramjit Singh": {
    "role": "batsman",
    "batting": 67,
    "bowling": 31
  },
  "Vince Wells": {
    "role": "bowler",
    "batting": 0,
    "bowling": 51
  },
  "Virat Kohli": {
    "role": "batsman",
    "batting": 95,
    "bowling": 21
  },
  "Virender Sehwag": {
    "role": "batsman",
    "batting": 86,
    "bowling": 42
  },
  "Viv Richards": {
    "role": "batsman",
    "batting": 91,
    "bowling": 53
  },
  "Vusi Sibanda": {
    "role": "batsman",
    "batting": 60,
    "bowling": 0
  },
  "Wahab Riaz": {
    "role": "bowler",
    "batting": 45,
    "bowling": 61
  },
  "Wajahatullah Wasti": {
    "role": "batsman",
    "batting": 45,
    "bowling": 0
  },
  "Waqar Younis": {
    "role": "bowler",
    "batting": 36,
    "bowling": 89
  },
  "Wasim Raja": {
    "role": "batsman",
    "batting": 47,
    "bowling": 44
  },
  "Wavell Hinds": {
    "role": "batsman",
    "batting": 65,
    "bowling": 45
  },
  "Wayne James": {
    "role": "wicketkeeper",
    "batting": 0,
    "bowling": 0
  },
  "Wayne Parnell": {
    "role": "bowler",
    "batting": 46,
    "bowling": 67
  },
  "Wesley Barresi": {
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0
  },
  "Will Young": {
    "role": "batsman",
    "batting": 78,
    "bowling": 0
  },
  "William Porterfield": {
    "role": "batsman",
    "batting": 72,
    "bowling": 0
  },
  "Willie Watson": {
    "role": "bowler",
    "batting": 24,
    "bowling": 63
  },
  "Yashpal Sharma": {
    "role": "batsman",
    "batting": 56,
    "bowling": 0
  },
  "Yasir Arafat": {
    "role": "bowler",
    "batting": 0,
    "bowling": 23
  },
  "Yasir Shah": {
    "role": "batsman",
    "batting": 40,
    "bowling": 36
  },
  "Younis Khan": {
    "role": "wicketkeeper",
    "batting": 74,
    "bowling": 0
  },
  "Yusuf Pathan": {
    "role": "batsman",
    "batting": 63,
    "bowling": 34
  },
  "Yuvraj Singh": {
    "role": "batsman",
    "batting": 84,
    "bowling": 45
  },
  "Yuzvendra Chahal": {
    "role": "bowler",
    "batting": 25,
    "bowling": 77
  },
  "Zaheer Khan": {
    "role": "bowler",
    "batting": 38,
    "bowling": 74
  },
  "Zubin Surkari": {
    "role": "batsman",
    "batting": 37,
    "bowling": 0
  }
};

const AUDITED_PLAYER_SUMMARY = {
  "generatedAt": "2026-06-09T14:57:11.833Z",
  "source": "Howstat ODI career summaries",
  "matchedPlayers": 889,
  "unresolvedPlayers": [
    "Aaqib Javed",
    "Abid Ali",
    "Adrian Kuiper",
    "Ajay Jadeja",
    "Ali Shah",
    "Alistair Campbell",
    "Allan Border",
    "Allan Donald",
    "Allan Lamb",
    "Anderson Cummins",
    "Andrew Hudson",
    "Andrew Jones",
    "Andrew Zesers",
    "Andy Caddick",
    "Andy Flower",
    "Angus Fraser",
    "Anil Kumble",
    "Aravinda de Silva",
    "Arshad Laeeq",
    "Asanka Gurusinha",
    "Ashantha de Mel",
    "Ashish Patel",
    "Asim Butt",
    "Babu Meman",
    "Barry Seebaran",
    "Berend Westdijk",
    "Bill Athey",
    "Bjorn Kotze",
    "Bradley Kruger",
    "Brendon Kuruppu",
    "Brian Lara",
    "Bruce Edgar",
    "Bruce Patterson",
    "Carl Bulfin",
    "Carl Hooper",
    "Carlisle Best",
    "Chandika Hathurusingha",
    "Chris Broad",
    "Chris Cairns",
    "Chris Harris",
    "Chris Tremlett",
    "Curtly Ambrose",
    "Danie Keulder",
    "Daryl Cullinan",
    "Daryll Cullinan",
    "David Boon",
    "David Gower",
    "David Hookes",
    "David Houghton",
    "David Tikolo",
    "Dean Jones",
    "Deon Kotze",
    "Desmond Haynes",
    "Don Anurasiri",
    "Dushan Hemantha",
    "Eddie Hemmings",
    "Eddo Brandes",
    "Ehsanul Haque",
    "Eldine Baptiste",
    "Eric Gouka",
    "Ewen Chatfield",
    "Fanie de Villiers",
    "Faoud Bacchus",
    "Faruk Ahmed",
    "Flavian Aponso",
    "Floris Jansen",
    "Friday Kasteni",
    "Ganesh Mylvaganam",
    "Gary Kirsten",
    "Gavin Murgatroyd",
    "Geoff Howarth",
    "Geoff Lawson",
    "George Salmond",
    "Gerald Peckover",
    "Gordon Greenidge",
    "Graeme Fowler",
    "Graeme Hick",
    "Graeme Labrooy",
    "Graham Dilley",
    "Graham Gooch",
    "Grant Flower",
    "Granville de Silva",
    "Greg Dyer",
    "Greig Williamson",
    "Guy de Alwis",
    "Hansie Cronje",
    "Ian Bishop",
    "Ian Botham",
    "Ian Healy",
    "Ian Philip",
    "Ian Stanger",
    "Ijaz Ahmed",
    "Ijaz Faqih",
    "Imran Khan",
    "Ishwar Maraj",
    "Jack Heron",
    "Jacob-Jan Esmeijer",
    "James Brinkley",
    "Jan-Berrie Burger",
    "Jeff Crowe",
    "Jeff Dujon",
    "Jeremy Coney",
    "Jimmy Adams",
    "Joe Harris",
    "Joel Garner",
    "Johanne Samarasekera",
    "John Bracewell",
    "John Emburey",
    "Jon Lewis",
    "JP Duminy",
    "Kapil Dev",
    "Keith Arthurton",
    "Keith Sheridan",
    "Kenny Carroll",
    "Kevin Arnott",
    "Kim Hughes",
    "Kirti Azad",
    "Lance Cairns",
    "Larry Gomes",
    "Luke Woodcock",
    "Malcolm Jarvis",
    "Malhar Patel",
    "Mansoor Akhtar",
    "Manzoor Elahi",
    "Mark Burmester",
    "Mark Greatbatch",
    "Mark Rushmere",
    "Martin Crowe",
    "Marvan Atapattu",
    "Mazhar Hussain",
    "Merv Hughes",
    "Michael Allingham",
    "Michael Atherton",
    "Michael Holding",
    "Mike Gatting",
    "Mike Smith",
    "Mohammad Aslam",
    "Mohammad Azharuddin",
    "Mohammad Ishaq",
    "Mohinder Amarnath",
    "Mohsin Khan",
    "Moin Khan",
    "Mushtaq Ahmed",
    "Nasir Aziz",
    "Nasser Hussain",
    "Neil Fairbrother",
    "Neil Foster",
    "Niamur Rashid",
    "Nicholas de Groot",
    "Nicholas Ifill",
    "Nick Statham",
    "Nolan Clarke",
    "Norman Cowans",
    "Oliver Pitcher",
    "Omar Henry",
    "Paul Allott",
    "Paul Downton",
    "Paul Mooney",
    "Paul-Jan Bakker",
    "Peter Cantrell",
    "Peter Gillespie",
    "Peter Kirsten",
    "Peter Steindl",
    "Phil Horne",
    "Phillip DeFreitas",
    "Pravin Amre",
    "Rajesh Bhudia",
    "Rameez Raja",
    "Raqibul Hasan",
    "Rashid Khan",
    "Rashid Latif",
    "Reinout Scholte",
    "Richard Hadlee",
    "Richard Illingworth",
    "Robert van Oosterom",
    "Robin Brown",
    "Rodney Hogg",
    "Rodney Latham",
    "Roger Binny",
    "Roger Harper",
    "Romesh Kaluwitharana",
    "Roy Dias",
    "Ruud Nijman",
    "Saeed Anwar",
    "Saeed-Al-Saffar",
    "Saleem Jaffar",
    "Saleem Raza",
    "Salil Ankola",
    "Sanath Jayasuriya",
    "Sarel Burger",
    "Sean Davies",
    "Shehzad Altaf",
    "Simon Doull",
    "Somachandra de Silva",
    "Sridharan Jeganathan",
    "Stephen Boock",
    "Subroto Banerjee",
    "Sunil Gavaskar",
    "Susil Fernando",
    "Syed Kirmani",
    "Tauseef Ahmed",
    "Tertius Bosch",
    "Tharindu Kaushal",
    "Tom Hogan",
    "Trevor Chappell",
    "Victor Grandia",
    "Vijay Mehra",
    "Vijay Shankar",
    "Vince Hogg",
    "Vinod Kambli",
    "Vinothen John",
    "Warren Lees",
    "Wasim Akram",
    "Wasim Bari",
    "Wayne Daniel",
    "Winston Benjamin",
    "Winston Davis",
    "Yousuf Youhana",
    "Zaheer Abbas"
  ]
};


const GENERATED_DRAFT_SQUADS = [
  {
    "id": "australia-1983",
    "label": "Australia 1983",
    "country": "Australia",
    "year": 1983,
    "note": "Australia's 1983 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "england-1983",
    "label": "England 1983",
    "country": "England",
    "year": 1983,
    "note": "England's 1983 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "new-zealand-1983",
    "label": "New Zealand 1983",
    "country": "New Zealand",
    "year": 1983,
    "note": "New Zealand's 1983 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-1983",
    "label": "Pakistan 1983",
    "country": "Pakistan",
    "year": 1983,
    "note": "Pakistan's 1983 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "sri-lanka-1983",
    "label": "Sri Lanka 1983",
    "country": "Sri Lanka",
    "year": 1983,
    "note": "Sri Lanka's 1983 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-1983",
    "label": "West Indies 1983",
    "country": "West Indies",
    "year": 1983,
    "note": "West Indies' 1983 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-1983",
    "label": "Zimbabwe 1983",
    "country": "Zimbabwe",
    "year": 1983,
    "note": "Zimbabwe's 1983 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "australia-1987",
    "label": "Australia 1987",
    "country": "Australia",
    "year": 1987,
    "note": "Australia's 1987 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "england-1987",
    "label": "England 1987",
    "country": "England",
    "year": 1987,
    "note": "England's 1987 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-1987",
    "label": "India 1987",
    "country": "India",
    "year": 1987,
    "note": "India's 1987 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "new-zealand-1987",
    "label": "New Zealand 1987",
    "country": "New Zealand",
    "year": 1987,
    "note": "New Zealand's 1987 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-1987",
    "label": "Pakistan 1987",
    "country": "Pakistan",
    "year": 1987,
    "note": "Pakistan's 1987 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "sri-lanka-1987",
    "label": "Sri Lanka 1987",
    "country": "Sri Lanka",
    "year": 1987,
    "note": "Sri Lanka's 1987 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-1987",
    "label": "West Indies 1987",
    "country": "West Indies",
    "year": 1987,
    "note": "West Indies' 1987 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-1987",
    "label": "Zimbabwe 1987",
    "country": "Zimbabwe",
    "year": 1987,
    "note": "Zimbabwe's 1987 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "australia-1992",
    "label": "Australia 1992",
    "country": "Australia",
    "year": 1992,
    "note": "Australia's 1992 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "england-1992",
    "label": "England 1992",
    "country": "England",
    "year": 1992,
    "note": "England's 1992 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-1992",
    "label": "India 1992",
    "country": "India",
    "year": 1992,
    "note": "India's 1992 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "new-zealand-1992",
    "label": "New Zealand 1992",
    "country": "New Zealand",
    "year": 1992,
    "note": "New Zealand's 1992 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "south-africa-1992",
    "label": "South Africa 1992",
    "country": "South Africa",
    "year": 1992,
    "note": "South Africa's 1992 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-1992",
    "label": "Sri Lanka 1992",
    "country": "Sri Lanka",
    "year": 1992,
    "note": "Sri Lanka's 1992 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-1992",
    "label": "West Indies 1992",
    "country": "West Indies",
    "year": 1992,
    "note": "West Indies' 1992 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-1992",
    "label": "Zimbabwe 1992",
    "country": "Zimbabwe",
    "year": 1992,
    "note": "Zimbabwe's 1992 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "australia-1996",
    "label": "Australia 1996",
    "country": "Australia",
    "year": 1996,
    "note": "Australia's 1996 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "england-1996",
    "label": "England 1996",
    "country": "England",
    "year": 1996,
    "note": "England's 1996 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-1996",
    "label": "India 1996",
    "country": "India",
    "year": 1996,
    "note": "India's 1996 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "kenya-1996",
    "label": "Kenya 1996",
    "country": "Kenya",
    "year": 1996,
    "note": "Kenya's 1996 World Cup squad with disciplined ODI shape and genuine giant-killing credibility."
  },
  {
    "id": "netherlands-1996",
    "label": "Netherlands 1996",
    "country": "Netherlands",
    "year": 1996,
    "note": "Netherlands' 1996 World Cup squad with adaptable one-day cricket with clever all-round balance."
  },
  {
    "id": "new-zealand-1996",
    "label": "New Zealand 1996",
    "country": "New Zealand",
    "year": 1996,
    "note": "New Zealand's 1996 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-1996",
    "label": "Pakistan 1996",
    "country": "Pakistan",
    "year": 1996,
    "note": "Pakistan's 1996 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "south-africa-1996",
    "label": "South Africa 1996",
    "country": "South Africa",
    "year": 1996,
    "note": "South Africa's 1996 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "uae-1996",
    "label": "UAE 1996",
    "country": "United Arab Emirates",
    "year": 1996,
    "note": "United Arab Emirates' 1996 World Cup squad with resourceful associate cricket with practical middle-order value."
  },
  {
    "id": "zimbabwe-1996",
    "label": "Zimbabwe 1996",
    "country": "Zimbabwe",
    "year": 1996,
    "note": "Zimbabwe's 1996 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "bangladesh-1999",
    "label": "Bangladesh 1999",
    "country": "Bangladesh",
    "year": 1999,
    "note": "Bangladesh's 1999 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "england-1999",
    "label": "England 1999",
    "country": "England",
    "year": 1999,
    "note": "England's 1999 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-1999",
    "label": "India 1999",
    "country": "India",
    "year": 1999,
    "note": "India's 1999 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "kenya-1999",
    "label": "Kenya 1999",
    "country": "Kenya",
    "year": 1999,
    "note": "Kenya's 1999 World Cup squad with disciplined ODI shape and genuine giant-killing credibility."
  },
  {
    "id": "new-zealand-1999",
    "label": "New Zealand 1999",
    "country": "New Zealand",
    "year": 1999,
    "note": "New Zealand's 1999 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-1999",
    "label": "Pakistan 1999",
    "country": "Pakistan",
    "year": 1999,
    "note": "Pakistan's 1999 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "scotland-1999",
    "label": "Scotland 1999",
    "country": "Scotland",
    "year": 1999,
    "note": "Scotland's 1999 World Cup squad with organized associate cricket with proper top-order value."
  },
  {
    "id": "sri-lanka-1999",
    "label": "Sri Lanka 1999",
    "country": "Sri Lanka",
    "year": 1999,
    "note": "Sri Lanka's 1999 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-1999",
    "label": "West Indies 1999",
    "country": "West Indies",
    "year": 1999,
    "note": "West Indies' 1999 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "australia-2003",
    "label": "Australia 2003",
    "country": "Australia",
    "year": 2003,
    "note": "Australia's 2003 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "bangladesh-2003",
    "label": "Bangladesh 2003",
    "country": "Bangladesh",
    "year": 2003,
    "note": "Bangladesh's 2003 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "canada-2003",
    "label": "Canada 2003",
    "country": "Canada",
    "year": 2003,
    "note": "Canada's 2003 World Cup squad with scrappy batting and seam-heavy ODI hustle."
  },
  {
    "id": "england-2003",
    "label": "England 2003",
    "country": "England",
    "year": 2003,
    "note": "England's 2003 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-2003",
    "label": "India 2003",
    "country": "India",
    "year": 2003,
    "note": "India's 2003 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "netherlands-2003",
    "label": "Netherlands 2003",
    "country": "Netherlands",
    "year": 2003,
    "note": "Netherlands' 2003 World Cup squad with adaptable one-day cricket with clever all-round balance."
  },
  {
    "id": "new-zealand-2003",
    "label": "New Zealand 2003",
    "country": "New Zealand",
    "year": 2003,
    "note": "New Zealand's 2003 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-2003",
    "label": "Pakistan 2003",
    "country": "Pakistan",
    "year": 2003,
    "note": "Pakistan's 2003 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "south-africa-2003",
    "label": "South Africa 2003",
    "country": "South Africa",
    "year": 2003,
    "note": "South Africa's 2003 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2003",
    "label": "Sri Lanka 2003",
    "country": "Sri Lanka",
    "year": 2003,
    "note": "Sri Lanka's 2003 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-2003",
    "label": "West Indies 2003",
    "country": "West Indies",
    "year": 2003,
    "note": "West Indies' 2003 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-2003",
    "label": "Zimbabwe 2003",
    "country": "Zimbabwe",
    "year": 2003,
    "note": "Zimbabwe's 2003 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "australia-2007",
    "label": "Australia 2007",
    "country": "Australia",
    "year": 2007,
    "note": "Australia's 2007 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "bangladesh-2007",
    "label": "Bangladesh 2007",
    "country": "Bangladesh",
    "year": 2007,
    "note": "Bangladesh's 2007 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "canada-2007",
    "label": "Canada 2007",
    "country": "Canada",
    "year": 2007,
    "note": "Canada's 2007 World Cup squad with scrappy batting and seam-heavy ODI hustle."
  },
  {
    "id": "england-2007",
    "label": "England 2007",
    "country": "England",
    "year": 2007,
    "note": "England's 2007 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-2007",
    "label": "India 2007",
    "country": "India",
    "year": 2007,
    "note": "India's 2007 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "ireland-2007",
    "label": "Ireland 2007",
    "country": "Ireland",
    "year": 2007,
    "note": "Ireland's 2007 World Cup squad with upset energy, seam discipline, and aggressive middle-order intent."
  },
  {
    "id": "kenya-2007",
    "label": "Kenya 2007",
    "country": "Kenya",
    "year": 2007,
    "note": "Kenya's 2007 World Cup squad with disciplined ODI shape and genuine giant-killing credibility."
  },
  {
    "id": "netherlands-2007",
    "label": "Netherlands 2007",
    "country": "Netherlands",
    "year": 2007,
    "note": "Netherlands' 2007 World Cup squad with adaptable one-day cricket with clever all-round balance."
  },
  {
    "id": "new-zealand-2007",
    "label": "New Zealand 2007",
    "country": "New Zealand",
    "year": 2007,
    "note": "New Zealand's 2007 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-2007",
    "label": "Pakistan 2007",
    "country": "Pakistan",
    "year": 2007,
    "note": "Pakistan's 2007 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "scotland-2007",
    "label": "Scotland 2007",
    "country": "Scotland",
    "year": 2007,
    "note": "Scotland's 2007 World Cup squad with organized associate cricket with proper top-order value."
  },
  {
    "id": "south-africa-2007",
    "label": "South Africa 2007",
    "country": "South Africa",
    "year": 2007,
    "note": "South Africa's 2007 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2007",
    "label": "Sri Lanka 2007",
    "country": "Sri Lanka",
    "year": 2007,
    "note": "Sri Lanka's 2007 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-2007",
    "label": "West Indies 2007",
    "country": "West Indies",
    "year": 2007,
    "note": "West Indies' 2007 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-2007",
    "label": "Zimbabwe 2007",
    "country": "Zimbabwe",
    "year": 2007,
    "note": "Zimbabwe's 2007 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "australia-2011",
    "label": "Australia 2011",
    "country": "Australia",
    "year": 2011,
    "note": "Australia's 2011 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "bangladesh-2011",
    "label": "Bangladesh 2011",
    "country": "Bangladesh",
    "year": 2011,
    "note": "Bangladesh's 2011 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "england-2011",
    "label": "England 2011",
    "country": "England",
    "year": 2011,
    "note": "England's 2011 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "kenya-2011",
    "label": "Kenya 2011",
    "country": "Kenya",
    "year": 2011,
    "note": "Kenya's 2011 World Cup squad with disciplined ODI shape and genuine giant-killing credibility."
  },
  {
    "id": "netherlands-2011",
    "label": "Netherlands 2011",
    "country": "Netherlands",
    "year": 2011,
    "note": "Netherlands' 2011 World Cup squad with adaptable one-day cricket with clever all-round balance."
  },
  {
    "id": "new-zealand-2011",
    "label": "New Zealand 2011",
    "country": "New Zealand",
    "year": 2011,
    "note": "New Zealand's 2011 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-2011",
    "label": "Pakistan 2011",
    "country": "Pakistan",
    "year": 2011,
    "note": "Pakistan's 2011 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "south-africa-2011",
    "label": "South Africa 2011",
    "country": "South Africa",
    "year": 2011,
    "note": "South Africa's 2011 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2011",
    "label": "Sri Lanka 2011",
    "country": "Sri Lanka",
    "year": 2011,
    "note": "Sri Lanka's 2011 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-2011",
    "label": "West Indies 2011",
    "country": "West Indies",
    "year": 2011,
    "note": "West Indies' 2011 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-2011",
    "label": "Zimbabwe 2011",
    "country": "Zimbabwe",
    "year": 2011,
    "note": "Zimbabwe's 2011 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "afghanistan-2015",
    "label": "Afghanistan 2015",
    "country": "Afghanistan",
    "year": 2015,
    "note": "Afghanistan's 2015 World Cup squad with fearless spin pressure and improving middle-order composure."
  },
  {
    "id": "bangladesh-2015",
    "label": "Bangladesh 2015",
    "country": "Bangladesh",
    "year": 2015,
    "note": "Bangladesh's 2015 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "england-2015",
    "label": "England 2015",
    "country": "England",
    "year": 2015,
    "note": "England's 2015 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "india-2015",
    "label": "India 2015",
    "country": "India",
    "year": 2015,
    "note": "India's 2015 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "ireland-2015",
    "label": "Ireland 2015",
    "country": "Ireland",
    "year": 2015,
    "note": "Ireland's 2015 World Cup squad with upset energy, seam discipline, and aggressive middle-order intent."
  },
  {
    "id": "new-zealand-2015",
    "label": "New Zealand 2015",
    "country": "New Zealand",
    "year": 2015,
    "note": "New Zealand's 2015 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "pakistan-2015",
    "label": "Pakistan 2015",
    "country": "Pakistan",
    "year": 2015,
    "note": "Pakistan's 2015 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "south-africa-2015",
    "label": "South Africa 2015",
    "country": "South Africa",
    "year": 2015,
    "note": "South Africa's 2015 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2015",
    "label": "Sri Lanka 2015",
    "country": "Sri Lanka",
    "year": 2015,
    "note": "Sri Lanka's 2015 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-2015",
    "label": "West Indies 2015",
    "country": "West Indies",
    "year": 2015,
    "note": "West Indies' 2015 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "zimbabwe-2015",
    "label": "Zimbabwe 2015",
    "country": "Zimbabwe",
    "year": 2015,
    "note": "Zimbabwe's 2015 World Cup squad with stubborn all-round resistance and a history of awkward upsets."
  },
  {
    "id": "afghanistan-2019",
    "label": "Afghanistan 2019",
    "country": "Afghanistan",
    "year": 2019,
    "note": "Afghanistan's 2019 World Cup squad with fearless spin pressure and improving middle-order composure."
  },
  {
    "id": "australia-2019",
    "label": "Australia 2019",
    "country": "Australia",
    "year": 2019,
    "note": "Australia's 2019 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "india-2019",
    "label": "India 2019",
    "country": "India",
    "year": 2019,
    "note": "India's 2019 World Cup squad with batting depth, spin control, and enormous pressure-game expectations."
  },
  {
    "id": "pakistan-2019",
    "label": "Pakistan 2019",
    "country": "Pakistan",
    "year": 2019,
    "note": "Pakistan's 2019 World Cup squad with volatility, pace upside, and match-turning individual quality."
  },
  {
    "id": "south-africa-2019",
    "label": "South Africa 2019",
    "country": "South Africa",
    "year": 2019,
    "note": "South Africa's 2019 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2019",
    "label": "Sri Lanka 2019",
    "country": "Sri Lanka",
    "year": 2019,
    "note": "Sri Lanka's 2019 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  },
  {
    "id": "west-indies-2019",
    "label": "West Indies 2019",
    "country": "West Indies",
    "year": 2019,
    "note": "West Indies' 2019 World Cup squad with natural power and fast-bowling menace that can break games open."
  },
  {
    "id": "australia-2023",
    "label": "Australia 2023",
    "country": "Australia",
    "year": 2023,
    "note": "Australia's 2023 World Cup squad with hard-nosed batting, tournament edge, and pace depth."
  },
  {
    "id": "bangladesh-2023",
    "label": "Bangladesh 2023",
    "country": "Bangladesh",
    "year": 2023,
    "note": "Bangladesh's 2023 World Cup squad with stubborn batting and high-value all-round utility."
  },
  {
    "id": "england-2023",
    "label": "England 2023",
    "country": "England",
    "year": 2023,
    "note": "England's 2023 World Cup squad with structured batting and seam resources that can snowball quickly."
  },
  {
    "id": "new-zealand-2023",
    "label": "New Zealand 2023",
    "country": "New Zealand",
    "year": 2023,
    "note": "New Zealand's 2023 World Cup squad with calm decision-making and bowlers who keep dragging games deep."
  },
  {
    "id": "south-africa-2023",
    "label": "South Africa 2023",
    "country": "South Africa",
    "year": 2023,
    "note": "South Africa's 2023 World Cup squad with athletic balance and relentless wicket-taking options."
  },
  {
    "id": "sri-lanka-2023",
    "label": "Sri Lanka 2023",
    "country": "Sri Lanka",
    "year": 2023,
    "note": "Sri Lanka's 2023 World Cup squad with creative ODI batting and spin that can change the tempo of a chase."
  }
];

const GENERATED_PLAYERS = [
  {
    "id": "australia-1983-allan-border",
    "name": "Allan Border",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "batsman",
    "batting": 88,
    "bowling": 54,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1983-david-hookes",
    "name": "David Hookes",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "batsman",
    "batting": 95,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1983-dennis-lillee",
    "name": "Dennis Lillee",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1983-geoff-lawson",
    "name": "Geoff Lawson",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1983-graeme-wood",
    "name": "Graeme Wood",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 26,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1983-graham-yallop",
    "name": "Graham Yallop",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 32,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1983-jeff-thomson",
    "name": "Jeff Thomson",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 25,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1983-ken-macleay",
    "name": "Ken MacLeay",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 37,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1983-kepler-wessels",
    "name": "Kepler Wessels",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 34,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1983-kim-hughes",
    "name": "Kim Hughes",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "batsman",
    "batting": 95,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1983-rod-marsh",
    "name": "Rod Marsh",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-1983-rodney-hogg",
    "name": "Rodney Hogg",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 83,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1983-tom-hogan",
    "name": "Tom Hogan",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "bowler",
    "batting": 84,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1983-trevor-chappell",
    "name": "Trevor Chappell",
    "squadId": "australia-1983",
    "team": "Australia",
    "year": 1983,
    "role": "batsman",
    "batting": 95,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1983-allan-lamb",
    "name": "Allan Lamb",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "batsman",
    "batting": 85,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1983-bob-willis",
    "name": "Bob Willis",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "batsman",
    "batting": 85,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-chris-tavar",
    "name": "Chris Tavaré",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 26,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1983-david-gower",
    "name": "David Gower",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 30,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1983-derek-randall",
    "name": "Derek Randall",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 19,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1983-graeme-fowler",
    "name": "Graeme Fowler",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-graham-dilley",
    "name": "Graham Dilley",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 79,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-ian-botham",
    "name": "Ian Botham",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 84,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-ian-gould",
    "name": "Ian Gould",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1983-mike-gatting",
    "name": "Mike Gatting",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 77,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-norman-cowans",
    "name": "Norman Cowans",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 77,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1983-paul-allott",
    "name": "Paul Allott",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1983-trevor-jesty",
    "name": "Trevor Jesty",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 35,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1983-vic-marks",
    "name": "Vic Marks",
    "squadId": "england-1983",
    "team": "England",
    "year": 1983,
    "role": "bowler",
    "batting": 25,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1983-bruce-edgar",
    "name": "Bruce Edgar",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 79,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1983-ewen-chatfield",
    "name": "Ewen Chatfield",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1983-geoff-howarth",
    "name": "Geoff Howarth",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "batsman",
    "batting": 85,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1983-glenn-turner",
    "name": "Glenn Turner",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 28,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1983-ian-smith",
    "name": "Ian Smith",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1983-jeff-crowe",
    "name": "Jeff Crowe",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "batsman",
    "batting": 84,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1983-jeremy-coney",
    "name": "Jeremy Coney",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 76,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1983-john-bracewell",
    "name": "John Bracewell",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "batsman",
    "batting": 92,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1983-john-wright",
    "name": "John Wright",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 22,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1983-lance-cairns",
    "name": "Lance Cairns",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "batsman",
    "batting": 84,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1983-martin-crowe",
    "name": "Martin Crowe",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1983-martin-snedden",
    "name": "Martin Snedden",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 23,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1983-richard-hadlee",
    "name": "Richard Hadlee",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "bowler",
    "batting": 17,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1983-warren-lees",
    "name": "Warren Lees",
    "squadId": "new-zealand-1983",
    "team": "New Zealand",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-1983-abdul-qadir",
    "name": "Abdul Qadir",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1983-ijaz-faqih",
    "name": "Ijaz Faqih",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 87,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1983-imran-khan",
    "name": "Imran Khan",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 83,
    "bowling": 91,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-javed-miandad",
    "name": "Javed Miandad",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1983-mansoor-akhtar",
    "name": "Mansoor Akhtar",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 88,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-mohsin-khan",
    "name": "Mohsin Khan",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 86,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-mudassar-nazar",
    "name": "Mudassar Nazar",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 81,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-rashid-khan",
    "name": "Rashid Khan",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 62,
    "bowling": 92,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-sarfraz-nawaz",
    "name": "Sarfraz Nawaz",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "batsman",
    "batting": 79,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1983-shahid-mahboob",
    "name": "Shahid Mahboob",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 23,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1983-tahir-naqqash",
    "name": "Tahir Naqqash",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 30,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1983-wasim-bari",
    "name": "Wasim Bari",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 83,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-1983-wasim-raja",
    "name": "Wasim Raja",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1983-zaheer-abbas",
    "name": "Zaheer Abbas",
    "squadId": "pakistan-1983",
    "team": "Pakistan",
    "year": 1983,
    "role": "bowler",
    "batting": 33,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1983-arjuna-ranatunga",
    "name": "Arjuna Ranatunga",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1983-ashantha-de-mel",
    "name": "Ashantha de Mel",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "batsman",
    "batting": 77,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1983-athula-samarasekera",
    "name": "Athula Samarasekera",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 29,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1983-brendon-kuruppu",
    "name": "Brendon Kuruppu",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-1983-duleep-mendis",
    "name": "Duleep Mendis",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "batsman",
    "batting": 83,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1983-granville-de-silva",
    "name": "Granville de Silva",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 21,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1983-guy-de-alwis",
    "name": "Guy de Alwis",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 69,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-1983-ranjan-madugalle",
    "name": "Ranjan Madugalle",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "batsman",
    "batting": 73,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1983-roy-dias",
    "name": "Roy Dias",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 65,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1983-rumesh-ratnayake",
    "name": "Rumesh Ratnayake",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 32,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1983-sidath-wettimuny",
    "name": "Sidath Wettimuny",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 35,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1983-somachandra-de-silva",
    "name": "Somachandra de Silva",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 70,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1983-susil-fernando",
    "name": "Susil Fernando",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "batsman",
    "batting": 67,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1983-vinothen-john",
    "name": "Vinothen John",
    "squadId": "sri-lanka-1983",
    "team": "Sri Lanka",
    "year": 1983,
    "role": "bowler",
    "batting": 66,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1983-andy-roberts",
    "name": "Andy Roberts",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 39,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1983-clive-lloyd",
    "name": "Clive Lloyd",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 95,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1983-desmond-haynes",
    "name": "Desmond Haynes",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 88,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1983-faoud-bacchus",
    "name": "Faoud Bacchus",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 95,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1983-gordon-greenidge",
    "name": "Gordon Greenidge",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1983-gus-logie",
    "name": "Gus Logie",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1983-jeff-dujon",
    "name": "Jeff Dujon",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-1983-joel-garner",
    "name": "Joel Garner",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1983-larry-gomes",
    "name": "Larry Gomes",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1983-malcolm-marshall",
    "name": "Malcolm Marshall",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 21,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1983-michael-holding",
    "name": "Michael Holding",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 16,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1983-viv-richards",
    "name": "Viv Richards",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1983-wayne-daniel",
    "name": "Wayne Daniel",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1983-winston-davis",
    "name": "Winston Davis",
    "squadId": "west-indies-1983",
    "team": "West Indies",
    "year": 1983,
    "role": "bowler",
    "batting": 88,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1983-ali-shah",
    "name": "Ali Shah",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1983-andrew-pycroft",
    "name": "Andrew Pycroft",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 29,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1983-david-houghton",
    "name": "David Houghton",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "batsman",
    "batting": 76,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1983-duncan-fletcher",
    "name": "Duncan Fletcher",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "batsman",
    "batting": 79,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1983-gerald-peckover",
    "name": "Gerald Peckover",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "batsman",
    "batting": 67,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1983-graeme-hick",
    "name": "Graeme Hick",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 64,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1983-grant-paterson",
    "name": "Grant Paterson",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 36,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1983-iain-butchart",
    "name": "Iain Butchart",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "batsman",
    "batting": 76,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1983-jack-heron",
    "name": "Jack Heron",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 66,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1983-john-traicos",
    "name": "John Traicos",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 33,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1983-kevin-curran",
    "name": "Kevin Curran",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 68,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1983-peter-rawson",
    "name": "Peter Rawson",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 29,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1983-robin-brown",
    "name": "Robin Brown",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "batsman",
    "batting": 77,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1983-vince-hogg",
    "name": "Vince Hogg",
    "squadId": "zimbabwe-1983",
    "team": "Zimbabwe",
    "year": 1983,
    "role": "bowler",
    "batting": 64,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-allan-border",
    "name": "Allan Border",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 88,
    "bowling": 54,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-andrew-zesers",
    "name": "Andrew Zesers",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 36,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1987-bruce-reid",
    "name": "Bruce Reid",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1987-craig-mcdermott",
    "name": "Craig McDermott",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-david-boon",
    "name": "David Boon",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 95,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1987-dean-jones",
    "name": "Dean Jones",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 90,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1987-geoff-marsh",
    "name": "Geoff Marsh",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 84,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-greg-dyer",
    "name": "Greg Dyer",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-1987-mike-veletta",
    "name": "Mike Veletta",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1987-peter-taylor",
    "name": "Peter Taylor",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 31,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1987-simon-o-donnell",
    "name": "Simon O'Donnell",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 35,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1987-steve-waugh",
    "name": "Steve Waugh",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 86,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-tim-may",
    "name": "Tim May",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1987-tom-moody",
    "name": "Tom Moody",
    "squadId": "australia-1987",
    "team": "Australia",
    "year": 1987,
    "role": "batsman",
    "batting": 78,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1987-allan-lamb",
    "name": "Allan Lamb",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 85,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1987-bill-athey",
    "name": "Bill Athey",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1987-chris-broad",
    "name": "Chris Broad",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 94,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1987-derek-pringle",
    "name": "Derek Pringle",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1987-eddie-hemmings",
    "name": "Eddie Hemmings",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1987-gladstone-small",
    "name": "Gladstone Small",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 26,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1987-graham-gooch",
    "name": "Graham Gooch",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 91,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1987-john-emburey",
    "name": "John Emburey",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 85,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1987-mike-gatting",
    "name": "Mike Gatting",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 77,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1987-neil-foster",
    "name": "Neil Foster",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 86,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1987-paul-downton",
    "name": "Paul Downton",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 82,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1987-phillip-defreitas",
    "name": "Phillip DeFreitas",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "batsman",
    "batting": 88,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1987-tim-robinson",
    "name": "Tim Robinson",
    "squadId": "england-1987",
    "team": "England",
    "year": 1987,
    "role": "bowler",
    "batting": 26,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-chandrakant-pandit",
    "name": "Chandrakant Pandit",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-1987-chetan-sharma",
    "name": "Chetan Sharma",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 30,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-dilip-vengsarkar",
    "name": "Dilip Vengsarkar",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 20,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-kapil-dev",
    "name": "Kapil Dev",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 84,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1987-kiran-more",
    "name": "Kiran More",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 85,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-1987-krishnamachari-srikkanth",
    "name": "Krishnamachari Srikkanth",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 25,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-laxman-sivaramakrishnan",
    "name": "Laxman Sivaramakrishnan",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 30,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-maninder-singh",
    "name": "Maninder Singh",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "batsman",
    "batting": 86,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1987-manoj-prabhakar",
    "name": "Manoj Prabhakar",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1987-mohammad-azharuddin",
    "name": "Mohammad Azharuddin",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "batsman",
    "batting": 93,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1987-navjot-singh-sidhu",
    "name": "Navjot Singh Sidhu",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 23,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-ravi-shastri",
    "name": "Ravi Shastri",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 16,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1987-roger-binny",
    "name": "Roger Binny",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "bowler",
    "batting": 71,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1987-sunil-gavaskar",
    "name": "Sunil Gavaskar",
    "squadId": "india-1987",
    "team": "India",
    "year": 1987,
    "role": "batsman",
    "batting": 87,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1987-andrew-jones",
    "name": "Andrew Jones",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 83,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1987-danny-morrison",
    "name": "Danny Morrison",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 80,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1987-dipak-patel",
    "name": "Dipak Patel",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 17,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1987-ewen-chatfield",
    "name": "Ewen Chatfield",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1987-ian-smith",
    "name": "Ian Smith",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1987-jeff-crowe",
    "name": "Jeff Crowe",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 84,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1987-john-bracewell",
    "name": "John Bracewell",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 92,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1987-john-wright",
    "name": "John Wright",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 22,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1987-ken-rutherford",
    "name": "Ken Rutherford",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1987-martin-crowe",
    "name": "Martin Crowe",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1987-martin-snedden",
    "name": "Martin Snedden",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 23,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1987-phil-horne",
    "name": "Phil Horne",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 85,
    "bowling": 15,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1987-stephen-boock",
    "name": "Stephen Boock",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "batsman",
    "batting": 82,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1987-willie-watson",
    "name": "Willie Watson",
    "squadId": "new-zealand-1987",
    "team": "New Zealand",
    "year": 1987,
    "role": "bowler",
    "batting": 29,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1987-abdul-qadir",
    "name": "Abdul Qadir",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1987-ijaz-ahmed",
    "name": "Ijaz Ahmed",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 81,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1987-imran-khan",
    "name": "Imran Khan",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 83,
    "bowling": 91,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1987-javed-miandad",
    "name": "Javed Miandad",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1987-mansoor-akhtar",
    "name": "Mansoor Akhtar",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 88,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1987-manzoor-elahi",
    "name": "Manzoor Elahi",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1987-mudassar-nazar",
    "name": "Mudassar Nazar",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 81,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1987-rameez-raja",
    "name": "Rameez Raja",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1987-saleem-jaffar",
    "name": "Saleem Jaffar",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 21,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1987-saleem-malik",
    "name": "Saleem Malik",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "batsman",
    "batting": 86,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1987-saleem-yousuf",
    "name": "Saleem Yousuf",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-1987-shoaib-mohammad",
    "name": "Shoaib Mohammad",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 26,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1987-tauseef-ahmed",
    "name": "Tauseef Ahmed",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 18,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1987-wasim-akram",
    "name": "Wasim Akram",
    "squadId": "pakistan-1987",
    "team": "Pakistan",
    "year": 1987,
    "role": "bowler",
    "batting": 54,
    "bowling": 96,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1987-aravinda-de-silva",
    "name": "Aravinda de Silva",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 94,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1987-arjuna-ranatunga",
    "name": "Arjuna Ranatunga",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-asanka-gurusinha",
    "name": "Asanka Gurusinha",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 80,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-ashantha-de-mel",
    "name": "Ashantha de Mel",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 77,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-brendon-kuruppu",
    "name": "Brendon Kuruppu",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-1987-don-anurasiri",
    "name": "Don Anurasiri",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 74,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-duleep-mendis",
    "name": "Duleep Mendis",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 83,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-ranjan-madugalle",
    "name": "Ranjan Madugalle",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 73,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1987-ravi-ratnayeke",
    "name": "Ravi Ratnayeke",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "bowler",
    "batting": 38,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1987-roshan-mahanama",
    "name": "Roshan Mahanama",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "batsman",
    "batting": 79,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1987-roy-dias",
    "name": "Roy Dias",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "bowler",
    "batting": 65,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1987-rumesh-ratnayake",
    "name": "Rumesh Ratnayake",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "bowler",
    "batting": 32,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1987-sridharan-jeganathan",
    "name": "Sridharan Jeganathan",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "bowler",
    "batting": 68,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1987-vinothen-john",
    "name": "Vinothen John",
    "squadId": "sri-lanka-1987",
    "team": "Sri Lanka",
    "year": 1987,
    "role": "bowler",
    "batting": 66,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1987-carl-hooper",
    "name": "Carl Hooper",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "batsman",
    "batting": 84,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1987-carlisle-best",
    "name": "Carlisle Best",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "batsman",
    "batting": 89,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1987-courtney-walsh",
    "name": "Courtney Walsh",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 30,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1987-desmond-haynes",
    "name": "Desmond Haynes",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "batsman",
    "batting": 88,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1987-eldine-baptiste",
    "name": "Eldine Baptiste",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "batsman",
    "batting": 95,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1987-gus-logie",
    "name": "Gus Logie",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1987-jeff-dujon",
    "name": "Jeff Dujon",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-1987-patrick-patterson",
    "name": "Patrick Patterson",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 33,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1987-phil-simmons",
    "name": "Phil Simmons",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 34,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1987-richie-richardson",
    "name": "Richie Richardson",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "batsman",
    "batting": 85,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1987-roger-harper",
    "name": "Roger Harper",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 65,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1987-viv-richards",
    "name": "Viv Richards",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1987-winston-benjamin",
    "name": "Winston Benjamin",
    "squadId": "west-indies-1987",
    "team": "West Indies",
    "year": 1987,
    "role": "bowler",
    "batting": 85,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1987-ali-shah",
    "name": "Ali Shah",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-andrew-pycroft",
    "name": "Andrew Pycroft",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 29,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-andy-waller",
    "name": "Andy Waller",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 28,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-babu-meman",
    "name": "Babu Meman",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 35,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-david-houghton",
    "name": "David Houghton",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "batsman",
    "batting": 76,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1987-eddo-brandes",
    "name": "Eddo Brandes",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 30,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-grant-paterson",
    "name": "Grant Paterson",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 36,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-iain-butchart",
    "name": "Iain Butchart",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "batsman",
    "batting": 76,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1987-john-traicos",
    "name": "John Traicos",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 33,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-kevin-arnott",
    "name": "Kevin Arnott",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "batsman",
    "batting": 72,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1987-kevin-curran",
    "name": "Kevin Curran",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 68,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1987-malcolm-jarvis",
    "name": "Malcolm Jarvis",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 73,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1987-peter-rawson",
    "name": "Peter Rawson",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "bowler",
    "batting": 29,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1987-robin-brown",
    "name": "Robin Brown",
    "squadId": "zimbabwe-1987",
    "team": "Zimbabwe",
    "year": 1987,
    "role": "batsman",
    "batting": 77,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1992-allan-border",
    "name": "Allan Border",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 88,
    "bowling": 54,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1992-bruce-reid",
    "name": "Bruce Reid",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1992-craig-mcdermott",
    "name": "Craig McDermott",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1992-david-boon",
    "name": "David Boon",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 95,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1992-dean-jones",
    "name": "Dean Jones",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 90,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1992-geoff-marsh",
    "name": "Geoff Marsh",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 84,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1992-ian-healy",
    "name": "Ian Healy",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-1992-mark-taylor",
    "name": "Mark Taylor",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 35,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1992-mark-waugh",
    "name": "Mark Waugh",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1992-merv-hughes",
    "name": "Merv Hughes",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 82,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1992-mike-whitney",
    "name": "Mike Whitney",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 31,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1992-peter-taylor",
    "name": "Peter Taylor",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "bowler",
    "batting": 31,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1992-steve-waugh",
    "name": "Steve Waugh",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 86,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1992-tom-moody",
    "name": "Tom Moody",
    "squadId": "australia-1992",
    "team": "Australia",
    "year": 1992,
    "role": "batsman",
    "batting": 78,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-alec-stewart",
    "name": "Alec Stewart",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1992-allan-lamb",
    "name": "Allan Lamb",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 85,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1992-chris-lewis",
    "name": "Chris Lewis",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-derek-pringle",
    "name": "Derek Pringle",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1992-dermot-reeve",
    "name": "Dermot Reeve",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 19,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1992-gladstone-small",
    "name": "Gladstone Small",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 26,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1992-graeme-hick",
    "name": "Graeme Hick",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 64,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-graham-gooch",
    "name": "Graham Gooch",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 91,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1992-ian-botham",
    "name": "Ian Botham",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 84,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-neil-fairbrother",
    "name": "Neil Fairbrother",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-phil-tufnell",
    "name": "Phil Tufnell",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1992-phillip-defreitas",
    "name": "Phillip DeFreitas",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 88,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-richard-illingworth",
    "name": "Richard Illingworth",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1992-robin-smith",
    "name": "Robin Smith",
    "squadId": "england-1992",
    "team": "England",
    "year": 1992,
    "role": "bowler",
    "batting": 35,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-ajay-jadeja",
    "name": "Ajay Jadeja",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 85,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1992-javagal-srinath",
    "name": "Javagal Srinath",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 27,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-kapil-dev",
    "name": "Kapil Dev",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 84,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1992-kiran-more",
    "name": "Kiran More",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 85,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-1992-krishnamachari-srikkanth",
    "name": "Krishnamachari Srikkanth",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 25,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-manoj-prabhakar",
    "name": "Manoj Prabhakar",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1992-mohammad-azharuddin",
    "name": "Mohammad Azharuddin",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 93,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1992-pravin-amre",
    "name": "Pravin Amre",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 29,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-ravi-shastri",
    "name": "Ravi Shastri",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 16,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-sachin-tendulkar",
    "name": "Sachin Tendulkar",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 98,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1992-sanjay-manjrekar",
    "name": "Sanjay Manjrekar",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 77,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1992-subroto-banerjee",
    "name": "Subroto Banerjee",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 84,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1992-venkatapathy-raju",
    "name": "Venkatapathy Raju",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "bowler",
    "batting": 20,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1992-vinod-kambli",
    "name": "Vinod Kambli",
    "squadId": "india-1992",
    "team": "India",
    "year": 1992,
    "role": "batsman",
    "batting": 84,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-andrew-jones",
    "name": "Andrew Jones",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "batsman",
    "batting": 83,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-chris-cairns",
    "name": "Chris Cairns",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-chris-harris",
    "name": "Chris Harris",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 72,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-danny-morrison",
    "name": "Danny Morrison",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "batsman",
    "batting": 80,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-dipak-patel",
    "name": "Dipak Patel",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 17,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1992-gavin-larsen",
    "name": "Gavin Larsen",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 84,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-ian-smith",
    "name": "Ian Smith",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1992-john-wright",
    "name": "John Wright",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 22,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1992-ken-rutherford",
    "name": "Ken Rutherford",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1992-mark-greatbatch",
    "name": "Mark Greatbatch",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "batsman",
    "batting": 93,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1992-martin-crowe",
    "name": "Martin Crowe",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1992-murphy-su-a",
    "name": "Murphy Su'a",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 27,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1992-rodney-latham",
    "name": "Rodney Latham",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1992-willie-watson",
    "name": "Willie Watson",
    "squadId": "new-zealand-1992",
    "team": "New Zealand",
    "year": 1992,
    "role": "bowler",
    "batting": 29,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-adrian-kuiper",
    "name": "Adrian Kuiper",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 84,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-allan-donald",
    "name": "Allan Donald",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 18,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-andrew-hudson",
    "name": "Andrew Hudson",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-brian-mcmillan",
    "name": "Brian McMillan",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 76,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-dave-richardson",
    "name": "Dave Richardson",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 88,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-1992-hansie-cronje",
    "name": "Hansie Cronje",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "batsman",
    "batting": 83,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-jonty-rhodes",
    "name": "Jonty Rhodes",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "batsman",
    "batting": 83,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-1992-kepler-wessels",
    "name": "Kepler Wessels",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 34,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-mark-rushmere",
    "name": "Mark Rushmere",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 36,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-meyrick-pringle",
    "name": "Meyrick Pringle",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 16,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-omar-henry",
    "name": "Omar Henry",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-peter-kirsten",
    "name": "Peter Kirsten",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 83,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1992-richard-snell",
    "name": "Richard Snell",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "bowler",
    "batting": 36,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1992-tertius-bosch",
    "name": "Tertius Bosch",
    "squadId": "south-africa-1992",
    "team": "South Africa",
    "year": 1992,
    "role": "batsman",
    "batting": 84,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1992-aravinda-de-silva",
    "name": "Aravinda de Silva",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 94,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1992-arjuna-ranatunga",
    "name": "Arjuna Ranatunga",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1992-asanka-gurusinha",
    "name": "Asanka Gurusinha",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 80,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1992-athula-samarasekera",
    "name": "Athula Samarasekera",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "bowler",
    "batting": 29,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1992-champaka-ramanayake",
    "name": "Champaka Ramanayake",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 78,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1992-chandika-hathurusingha",
    "name": "Chandika Hathurusingha",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "bowler",
    "batting": 76,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1992-don-anurasiri",
    "name": "Don Anurasiri",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 74,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1992-graeme-labrooy",
    "name": "Graeme Labrooy",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "bowler",
    "batting": 22,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1992-hashan-tillakaratne",
    "name": "Hashan Tillakaratne",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 80,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1992-kapila-wijegunawardene",
    "name": "Kapila Wijegunawardene",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "bowler",
    "batting": 39,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1992-pramodya-wickramasinghe",
    "name": "Pramodya Wickramasinghe",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "bowler",
    "batting": 24,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1992-roshan-mahanama",
    "name": "Roshan Mahanama",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 79,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1992-ruwan-kalpage",
    "name": "Ruwan Kalpage",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 72,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1992-sanath-jayasuriya",
    "name": "Sanath Jayasuriya",
    "squadId": "sri-lanka-1992",
    "team": "Sri Lanka",
    "year": 1992,
    "role": "batsman",
    "batting": 94,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1992-anderson-cummins",
    "name": "Anderson Cummins",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1992-brian-lara",
    "name": "Brian Lara",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "batsman",
    "batting": 97,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1992-carl-hooper",
    "name": "Carl Hooper",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "batsman",
    "batting": 84,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1992-curtly-ambrose",
    "name": "Curtly Ambrose",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1992-david-williams",
    "name": "David Williams",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 88,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-1992-desmond-haynes",
    "name": "Desmond Haynes",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "batsman",
    "batting": 88,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1992-gus-logie",
    "name": "Gus Logie",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1992-keith-arthurton",
    "name": "Keith Arthurton",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "batsman",
    "batting": 91,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1992-malcolm-marshall",
    "name": "Malcolm Marshall",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 21,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1992-patrick-patterson",
    "name": "Patrick Patterson",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 33,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1992-phil-simmons",
    "name": "Phil Simmons",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 34,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1992-richie-richardson",
    "name": "Richie Richardson",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "batsman",
    "batting": 85,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1992-roger-harper",
    "name": "Roger Harper",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 65,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-1992-winston-benjamin",
    "name": "Winston Benjamin",
    "squadId": "west-indies-1992",
    "team": "West Indies",
    "year": 1992,
    "role": "bowler",
    "batting": 85,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1992-ali-shah",
    "name": "Ali Shah",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1992-alistair-campbell",
    "name": "Alistair Campbell",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "batsman",
    "batting": 83,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1992-andrew-pycroft",
    "name": "Andrew Pycroft",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 29,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1992-andy-flower",
    "name": "Andy Flower",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "wicketkeeper",
    "batting": 92,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-1992-andy-waller",
    "name": "Andy Waller",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 28,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1992-david-houghton",
    "name": "David Houghton",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "batsman",
    "batting": 76,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1992-eddo-brandes",
    "name": "Eddo Brandes",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 30,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1992-iain-butchart",
    "name": "Iain Butchart",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "batsman",
    "batting": 76,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1992-john-traicos",
    "name": "John Traicos",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 33,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1992-kevin-arnott",
    "name": "Kevin Arnott",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "batsman",
    "batting": 72,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1992-kevin-duers",
    "name": "Kevin Duers",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 62,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1992-malcolm-jarvis",
    "name": "Malcolm Jarvis",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 73,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1992-mark-burmester",
    "name": "Mark Burmester",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "bowler",
    "batting": 62,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1992-wayne-james",
    "name": "Wayne James",
    "squadId": "zimbabwe-1992",
    "team": "Zimbabwe",
    "year": 1992,
    "role": "batsman",
    "batting": 69,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1996-craig-mcdermott",
    "name": "Craig McDermott",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1996-damien-fleming",
    "name": "Damien Fleming",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 24,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-glenn-mcgrath",
    "name": "Glenn McGrath",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-ian-healy",
    "name": "Ian Healy",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-1996-mark-taylor",
    "name": "Mark Taylor",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 35,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-mark-waugh",
    "name": "Mark Waugh",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1996-michael-bevan",
    "name": "Michael Bevan",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "batsman",
    "batting": 88,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1996-michael-slater",
    "name": "Michael Slater",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-paul-reiffel",
    "name": "Paul Reiffel",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 34,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-ricky-ponting",
    "name": "Ricky Ponting",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "batsman",
    "batting": 97,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-1996-shane-lee",
    "name": "Shane Lee",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 72,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1996-shane-warne",
    "name": "Shane Warne",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "bowler",
    "batting": 36,
    "bowling": 96,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-1996-steve-waugh",
    "name": "Steve Waugh",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "batsman",
    "batting": 86,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-1996-stuart-law",
    "name": "Stuart Law",
    "squadId": "australia-1996",
    "team": "Australia",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-alec-stewart",
    "name": "Alec Stewart",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1996-craig-white",
    "name": "Craig White",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 36,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1996-darren-gough",
    "name": "Darren Gough",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 79,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-dermot-reeve",
    "name": "Dermot Reeve",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 19,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1996-dominic-cork",
    "name": "Dominic Cork",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "batsman",
    "batting": 95,
    "bowling": 32,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1996-graeme-hick",
    "name": "Graeme Hick",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 64,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-graham-thorpe",
    "name": "Graham Thorpe",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 23,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1996-jack-russell",
    "name": "Jack Russell",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 17,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1996-michael-atherton",
    "name": "Michael Atherton",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1996-neil-fairbrother",
    "name": "Neil Fairbrother",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-neil-smith",
    "name": "Neil Smith",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 24,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1996-peter-martin",
    "name": "Peter Martin",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "batsman",
    "batting": 84,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-phillip-defreitas",
    "name": "Phillip DeFreitas",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "batsman",
    "batting": 88,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-richard-illingworth",
    "name": "Richard Illingworth",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1996-robin-smith",
    "name": "Robin Smith",
    "squadId": "england-1996",
    "team": "England",
    "year": 1996,
    "role": "bowler",
    "batting": 35,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-aashish-kapoor",
    "name": "Aashish Kapoor",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1996-ajay-jadeja",
    "name": "Ajay Jadeja",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 85,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1996-anil-kumble",
    "name": "Anil Kumble",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1996-javagal-srinath",
    "name": "Javagal Srinath",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 27,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-manoj-prabhakar",
    "name": "Manoj Prabhakar",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1996-mohammad-azharuddin",
    "name": "Mohammad Azharuddin",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 93,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1996-navjot-singh-sidhu",
    "name": "Navjot Singh Sidhu",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 23,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-nayan-mongia",
    "name": "Nayan Mongia",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 88,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-1996-sachin-tendulkar",
    "name": "Sachin Tendulkar",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 98,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1996-salil-ankola",
    "name": "Salil Ankola",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 39,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-sanjay-manjrekar",
    "name": "Sanjay Manjrekar",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 77,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1996-venkatapathy-raju",
    "name": "Venkatapathy Raju",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 20,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-venkatesh-prasad",
    "name": "Venkatesh Prasad",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1996-vinod-kambli",
    "name": "Vinod Kambli",
    "squadId": "india-1996",
    "team": "India",
    "year": 1996,
    "role": "batsman",
    "batting": 84,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1996-aasif-karim",
    "name": "Aasif Karim",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "bowler",
    "batting": 64,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1996-brijal-patel",
    "name": "Brijal Patel",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 74,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1996-david-tikolo",
    "name": "David Tikolo",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "bowler",
    "batting": 38,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1996-dipak-chudasama",
    "name": "Dipak Chudasama",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 79,
    "bowling": 15,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1996-edward-odumbe",
    "name": "Edward Odumbe",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 73,
    "bowling": 65,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1996-hitesh-modi",
    "name": "Hitesh Modi",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 75,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1996-kennedy-otieno",
    "name": "Kennedy Otieno",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-1996-lameck-onyango",
    "name": "Lameck Onyango",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "bowler",
    "batting": 30,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1996-martin-suji",
    "name": "Martin Suji",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "bowler",
    "batting": 30,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1996-maurice-odumbe",
    "name": "Maurice Odumbe",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 77,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1996-rajab-ali",
    "name": "Rajab Ali",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 72,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1996-steve-tikolo",
    "name": "Steve Tikolo",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "batsman",
    "batting": 88,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1996-tariq-iqbal",
    "name": "Tariq Iqbal",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-1996-thomas-odoyo",
    "name": "Thomas Odoyo",
    "squadId": "kenya-1996",
    "team": "Kenya",
    "year": 1996,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-1996-bas-zuiderent",
    "name": "Bas Zuiderent",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "bowler",
    "batting": 40,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-1996-eric-gouka",
    "name": "Eric Gouka",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 70,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-1996-flavian-aponso",
    "name": "Flavian Aponso",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 69,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-1996-floris-jansen",
    "name": "Floris Jansen",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 73,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-1996-klaas-jan-van-noortwijk",
    "name": "Klaas-Jan van Noortwijk",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "bowler",
    "batting": 33,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-1996-marcel-schewe",
    "name": "Marcel Schewe",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "netherlands-1996-nolan-clarke",
    "name": "Nolan Clarke",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "bowler",
    "batting": 62,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-1996-paul-jan-bakker",
    "name": "Paul-Jan Bakker",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 67,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-1996-peter-cantrell",
    "name": "Peter Cantrell",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "bowler",
    "batting": 63,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-1996-reinout-scholte",
    "name": "Reinout Scholte",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "netherlands-1996-robert-van-oosterom",
    "name": "Robert van Oosterom",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 70,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-1996-roland-lefebvre",
    "name": "Roland Lefebvre",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "bowler",
    "batting": 19,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-1996-steven-lubbers",
    "name": "Steven Lubbers",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 77,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-1996-tim-de-leede",
    "name": "Tim de Leede",
    "squadId": "netherlands-1996",
    "team": "Netherlands",
    "year": 1996,
    "role": "batsman",
    "batting": 72,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-adam-parore",
    "name": "Adam Parore",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 77,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1996-chris-cairns",
    "name": "Chris Cairns",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-chris-harris",
    "name": "Chris Harris",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 72,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-craig-spearman",
    "name": "Craig Spearman",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "batsman",
    "batting": 85,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1996-danny-morrison",
    "name": "Danny Morrison",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "batsman",
    "batting": 80,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-dion-nash",
    "name": "Dion Nash",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1996-dipak-patel",
    "name": "Dipak Patel",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 17,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1996-gavin-larsen",
    "name": "Gavin Larsen",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 84,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-lee-germon",
    "name": "Lee Germon ( c / wk )",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1996-nathan-astle",
    "name": "Nathan Astle",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "batsman",
    "batting": 84,
    "bowling": 52,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-robert-kennedy",
    "name": "Robert Kennedy",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 75,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1996-roger-twose",
    "name": "Roger Twose",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 22,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1996-shane-thomson",
    "name": "Shane Thomson",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "bowler",
    "batting": 18,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1996-stephen-fleming",
    "name": "Stephen Fleming",
    "squadId": "new-zealand-1996",
    "team": "New Zealand",
    "year": 1996,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-aamer-sohail",
    "name": "Aamer Sohail",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 95,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-aaqib-javed",
    "name": "Aaqib Javed",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 87,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-ata-ur-rehman",
    "name": "Ata-ur-Rehman",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1996-ijaz-ahmed",
    "name": "Ijaz Ahmed",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 81,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-inzamam-ul-haq",
    "name": "Inzamam-ul-Haq",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-javed-miandad",
    "name": "Javed Miandad",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-mushtaq-ahmed",
    "name": "Mushtaq Ahmed",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "bowler",
    "batting": 22,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1996-rameez-raja",
    "name": "Rameez Raja",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1996-rashid-latif",
    "name": "Rashid Latif",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 72,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-1996-saeed-anwar",
    "name": "Saeed Anwar",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 92,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-saleem-malik",
    "name": "Saleem Malik",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "batsman",
    "batting": 86,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1996-saqlain-mushtaq",
    "name": "Saqlain Mushtaq",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1996-waqar-younis",
    "name": "Waqar Younis",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "bowler",
    "batting": 30,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1996-wasim-akram",
    "name": "Wasim Akram",
    "squadId": "pakistan-1996",
    "team": "Pakistan",
    "year": 1996,
    "role": "bowler",
    "batting": 54,
    "bowling": 96,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-allan-donald",
    "name": "Allan Donald",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 18,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1996-andrew-hudson",
    "name": "Andrew Hudson",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-brian-mcmillan",
    "name": "Brian McMillan",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 76,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-craig-matthews",
    "name": "Craig Matthews",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 33,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1996-daryl-cullinan",
    "name": "Daryl Cullinan",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 95,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-1996-fanie-de-villiers",
    "name": "Fanie de Villiers",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-gary-kirsten",
    "name": "Gary Kirsten",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 88,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-1996-hansie-cronje",
    "name": "Hansie Cronje",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 83,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-jacques-kallis",
    "name": "Jacques Kallis",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 92,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-jonty-rhodes",
    "name": "Jonty Rhodes",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 83,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-1996-pat-symcox",
    "name": "Pat Symcox",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 40,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-1996-paul-adams",
    "name": "Paul Adams",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "batsman",
    "batting": 90,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-1996-shaun-pollock",
    "name": "Shaun Pollock",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "bowler",
    "batting": 72,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-1996-steve-palframan",
    "name": "Steve Palframan",
    "squadId": "south-africa-1996",
    "team": "South Africa",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 87,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "uae-1996-arshad-laeeq",
    "name": "Arshad Laeeq",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 63,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "uae-1996-azhar-saeed",
    "name": "Azhar Saeed",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 70,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "uae-1996-ganesh-mylvaganam",
    "name": "Ganesh Mylvaganam",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 67,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "uae-1996-imtiaz-abbasi",
    "name": "Imtiaz Abbasi",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "uae-1996-johanne-samarasekera",
    "name": "Johanne Samarasekera",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 26,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "uae-1996-mazhar-hussain",
    "name": "Mazhar Hussain",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 67,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "uae-1996-mohammad-aslam",
    "name": "Mohammad Aslam",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 67,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "uae-1996-mohammad-ishaq",
    "name": "Mohammad Ishaq",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 58,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "uae-1996-saeed-al-saffar",
    "name": "Saeed-Al-Saffar",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 27,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "uae-1996-saleem-raza",
    "name": "Saleem Raza",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 18,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "uae-1996-shaukat-dukanwala",
    "name": "Shaukat Dukanwala",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 29,
    "bowling": 71,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "uae-1996-shehzad-altaf",
    "name": "Shehzad Altaf",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "bowler",
    "batting": 22,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "uae-1996-sultan-zarawani",
    "name": "Sultan Zarawani",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 64,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "uae-1996-vijay-mehra",
    "name": "Vijay Mehra",
    "squadId": "uae-1996",
    "team": "United Arab Emirates",
    "year": 1996,
    "role": "batsman",
    "batting": 69,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1996-alistair-campbell",
    "name": "Alistair Campbell",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "batsman",
    "batting": 83,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-1996-andy-flower",
    "name": "Andy Flower ( c / wk )",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "wicketkeeper",
    "batting": 92,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-1996-andy-waller",
    "name": "Andy Waller",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 28,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1996-bryan-strang",
    "name": "Bryan Strang",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 19,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1996-charlie-lock",
    "name": "Charlie Lock",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 64,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-craig-evans",
    "name": "Craig Evans",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "batsman",
    "batting": 74,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-eddo-brandes",
    "name": "Eddo Brandes",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 30,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1996-grant-flower",
    "name": "Grant Flower",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "batsman",
    "batting": 84,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-guy-whittall",
    "name": "Guy Whittall",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "batsman",
    "batting": 76,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-heath-streak",
    "name": "Heath Streak",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 71,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-henry-olonga",
    "name": "Henry Olonga",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 22,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-1996-paul-strang",
    "name": "Paul Strang",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 68,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-sean-davies",
    "name": "Sean Davies",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 70,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-1996-stephen-peall",
    "name": "Stephen Peall",
    "squadId": "zimbabwe-1996",
    "team": "Zimbabwe",
    "year": 1996,
    "role": "bowler",
    "batting": 31,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-akram-khan",
    "name": "Akram Khan",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 79,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-1999-aminul-islam",
    "name": "Aminul Islam",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 76,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-1999-enamul-haque",
    "name": "Enamul Haque",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 80,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-1999-faruk-ahmed",
    "name": "Faruk Ahmed",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 77,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-1999-hasibul-hossain",
    "name": "Hasibul Hossain",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 32,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-khaled-mahmud",
    "name": "Khaled Mahmud",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 25,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-khaled-mashud",
    "name": "Khaled Mashud",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-1999-manjural-islam",
    "name": "Manjural Islam",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 37,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-mehrab-hossain",
    "name": "Mehrab Hossain",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 72,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-1999-minhajul-abedin",
    "name": "Minhajul Abedin",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 33,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-mohammad-rafique",
    "name": "Mohammad Rafique",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-naimur-rahman",
    "name": "Naimur Rahman",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 82,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-1999-niamur-rashid",
    "name": "Niamur Rashid",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 79,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-1999-shafiuddin-ahmed",
    "name": "Shafiuddin Ahmed",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "bowler",
    "batting": 20,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-1999-shahriar-hossain",
    "name": "Shahriar Hossain",
    "squadId": "bangladesh-1999",
    "team": "Bangladesh",
    "year": 1999,
    "role": "batsman",
    "batting": 76,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-adam-hollioake",
    "name": "Adam Hollioake",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 36,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1999-alan-mullally",
    "name": "Alan Mullally",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 36,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1999-alec-stewart",
    "name": "Alec Stewart ( c / wk )",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-1999-andrew-flintoff",
    "name": "Andrew Flintoff",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-angus-fraser",
    "name": "Angus Fraser",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-darren-gough",
    "name": "Darren Gough",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 79,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-graeme-hick",
    "name": "Graeme Hick",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 64,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-graham-thorpe",
    "name": "Graham Thorpe",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 23,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1999-ian-austin",
    "name": "Ian Austin",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 94,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1999-mark-ealham",
    "name": "Mark Ealham",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 88,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-nasser-hussain",
    "name": "Nasser Hussain",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 34,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1999-neil-fairbrother",
    "name": "Neil Fairbrother",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-1999-nick-knight",
    "name": "Nick Knight",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 21,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-1999-robert-croft",
    "name": "Robert Croft",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "batsman",
    "batting": 94,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-1999-vince-wells",
    "name": "Vince Wells",
    "squadId": "england-1999",
    "team": "England",
    "year": 1999,
    "role": "bowler",
    "batting": 40,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1999-ajay-jadeja",
    "name": "Ajay Jadeja",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 85,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-ajit-agarkar",
    "name": "Ajit Agarkar",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 82,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-amay-khurasiya",
    "name": "Amay Khurasiya",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 35,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1999-anil-kumble",
    "name": "Anil Kumble",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-debasis-mohanty",
    "name": "Debasis Mohanty",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 22,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1999-javagal-srinath",
    "name": "Javagal Srinath",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 27,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1999-mohammad-azharuddin",
    "name": "Mohammad Azharuddin",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 93,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1999-nayan-mongia",
    "name": "Nayan Mongia",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 88,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-1999-nikhil-chopra",
    "name": "Nikhil Chopra",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 30,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-1999-rahul-dravid",
    "name": "Rahul Dravid",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-robin-singh",
    "name": "Robin Singh",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-sachin-tendulkar",
    "name": "Sachin Tendulkar",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 98,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-1999-sadagoppan-ramesh",
    "name": "Sadagoppan Ramesh",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 79,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-sourav-ganguly",
    "name": "Sourav Ganguly",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "batsman",
    "batting": 91,
    "bowling": 58,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-1999-venkatesh-prasad",
    "name": "Venkatesh Prasad",
    "squadId": "india-1999",
    "team": "India",
    "year": 1999,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1999-aasif-karim",
    "name": "Aasif Karim",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 64,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1999-alpesh-vadher",
    "name": "Alpesh Vadher",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 73,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-dipak-chudasama",
    "name": "Dipak Chudasama",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 79,
    "bowling": 15,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-hitesh-modi",
    "name": "Hitesh Modi",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 75,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-jimmy-kamande",
    "name": "Jimmy Kamande",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 22,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1999-joseph-angara",
    "name": "Joseph Angara",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 20,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1999-kennedy-otieno",
    "name": "Kennedy Otieno",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-1999-martin-suji",
    "name": "Martin Suji",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 30,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1999-maurice-odumbe",
    "name": "Maurice Odumbe",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 77,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1999-mohammad-sheikh",
    "name": "Mohammad Sheikh",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 23,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-1999-ravindu-shah",
    "name": "Ravindu Shah",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 79,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-sandip-gupta",
    "name": "Sandip Gupta",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 69,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-steve-tikolo",
    "name": "Steve Tikolo",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "batsman",
    "batting": 88,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-1999-thomas-odoyo",
    "name": "Thomas Odoyo",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-1999-tony-suji",
    "name": "Tony Suji",
    "squadId": "kenya-1999",
    "team": "Kenya",
    "year": 1999,
    "role": "bowler",
    "batting": 20,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-adam-parore",
    "name": "Adam Parore",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 77,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-1999-carl-bulfin",
    "name": "Carl Bulfin",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 85,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-chris-cairns",
    "name": "Chris Cairns",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-chris-harris",
    "name": "Chris Harris",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 72,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-craig-mcmillan",
    "name": "Craig McMillan",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 36,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-daniel-vettori",
    "name": "Daniel Vettori",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-dion-nash",
    "name": "Dion Nash",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-gavin-larsen",
    "name": "Gavin Larsen",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 84,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-geoff-allott",
    "name": "Geoff Allott",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "batsman",
    "batting": 87,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-1999-matt-horne",
    "name": "Matt Horne",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 37,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-matthew-hart",
    "name": "Matthew Hart",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 80,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-nathan-astle",
    "name": "Nathan Astle",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "batsman",
    "batting": 84,
    "bowling": 52,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-roger-twose",
    "name": "Roger Twose",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 22,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-1999-simon-doull",
    "name": "Simon Doull",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "bowler",
    "batting": 75,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-1999-stephen-fleming",
    "name": "Stephen Fleming",
    "squadId": "new-zealand-1999",
    "team": "New Zealand",
    "year": 1999,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1999-abdul-razzaq",
    "name": "Abdul Razzaq",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-azhar-mahmood",
    "name": "Azhar Mahmood",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 28,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-ijaz-ahmed",
    "name": "Ijaz Ahmed",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "batsman",
    "batting": 81,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1999-inzamam-ul-haq",
    "name": "Inzamam-ul-Haq",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "batsman",
    "batting": 89,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1999-moin-khan",
    "name": "Moin Khan",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-1999-mushtaq-ahmed",
    "name": "Mushtaq Ahmed",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 22,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-saeed-anwar",
    "name": "Saeed Anwar",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "batsman",
    "batting": 92,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1999-saleem-malik",
    "name": "Saleem Malik",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "batsman",
    "batting": 86,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-1999-saqlain-mushtaq",
    "name": "Saqlain Mushtaq",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-shahid-afridi",
    "name": "Shahid Afridi",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-shoaib-akhtar",
    "name": "Shoaib Akhtar",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 24,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-wajahatullah-wasti",
    "name": "Wajahatullah Wasti",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 34,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-waqar-younis",
    "name": "Waqar Younis",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 30,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-1999-wasim-akram",
    "name": "Wasim Akram",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 54,
    "bowling": 96,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-1999-yousuf-youhana",
    "name": "Yousuf Youhana",
    "squadId": "pakistan-1999",
    "team": "Pakistan",
    "year": 1999,
    "role": "bowler",
    "batting": 17,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-alec-davies",
    "name": "Alec Davies",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "scotland-1999-asim-butt",
    "name": "Asim Butt",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 62,
    "bowling": 61,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-1999-bruce-patterson",
    "name": "Bruce Patterson",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 69,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-1999-gavin-hamilton",
    "name": "Gavin Hamilton",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 17,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-george-salmond",
    "name": "George Salmond",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 74,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-1999-greig-williamson",
    "name": "Greig Williamson",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 27,
    "bowling": 71,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-ian-philip",
    "name": "Ian Philip",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 69,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-1999-ian-stanger",
    "name": "Ian Stanger",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 26,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-james-brinkley",
    "name": "James Brinkley",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 72,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-1999-john-blain",
    "name": "John Blain",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 67,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-1999-keith-sheridan",
    "name": "Keith Sheridan",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 28,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-michael-allingham",
    "name": "Michael Allingham",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "batsman",
    "batting": 74,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-1999-mike-smith",
    "name": "Mike Smith",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 32,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-1999-nick-dyer",
    "name": "Nick Dyer",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 72,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-1999-peter-steindl",
    "name": "Peter Steindl",
    "squadId": "scotland-1999",
    "team": "Scotland",
    "year": 1999,
    "role": "bowler",
    "batting": 37,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1999-aravinda-de-silva",
    "name": "Aravinda de Silva",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 94,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1999-arjuna-ranatunga",
    "name": "Arjuna Ranatunga",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1999-chaminda-vaas",
    "name": "Chaminda Vaas",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 38,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1999-chandika-hathurusingha",
    "name": "Chandika Hathurusingha",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 76,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1999-eric-upashantha",
    "name": "Eric Upashantha",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 32,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1999-hashan-tillakaratne",
    "name": "Hashan Tillakaratne",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 80,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1999-mahela-jayawardene",
    "name": "Mahela Jayawardene",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1999-marvan-atapattu",
    "name": "Marvan Atapattu",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 88,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1999-muttiah-muralitharan",
    "name": "Muttiah Muralitharan",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 18,
    "bowling": 96,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1999-pramodya-wickramasinghe",
    "name": "Pramodya Wickramasinghe",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 24,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-1999-romesh-kaluwitharana",
    "name": "Romesh Kaluwitharana",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-1999-roshan-mahanama",
    "name": "Roshan Mahanama",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 79,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-1999-ruwan-kalpage",
    "name": "Ruwan Kalpage",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 72,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1999-sanath-jayasuriya",
    "name": "Sanath Jayasuriya",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "batsman",
    "batting": 94,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-1999-upul-chandana",
    "name": "Upul Chandana",
    "squadId": "sri-lanka-1999",
    "team": "Sri Lanka",
    "year": 1999,
    "role": "bowler",
    "batting": 23,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-brian-lara",
    "name": "Brian Lara",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 97,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1999-courtney-walsh",
    "name": "Courtney Walsh",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 30,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-curtly-ambrose",
    "name": "Curtly Ambrose",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-hendy-bryan",
    "name": "Hendy Bryan",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 16,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-jimmy-adams",
    "name": "Jimmy Adams",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 36,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-keith-arthurton",
    "name": "Keith Arthurton",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 91,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1999-mervyn-dillon",
    "name": "Mervyn Dillon",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 33,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-nehemiah-perry",
    "name": "Nehemiah Perry",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 35,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-phil-simmons",
    "name": "Phil Simmons",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 34,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-reon-king",
    "name": "Reon King",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "bowler",
    "batting": 22,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-1999-ricardo-powell",
    "name": "Ricardo Powell",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 90,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1999-ridley-jacobs",
    "name": "Ridley Jacobs",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-1999-sherwin-campbell",
    "name": "Sherwin Campbell",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 78,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1999-shivnarine-chanderpaul",
    "name": "Shivnarine Chanderpaul",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-1999-stuart-williams",
    "name": "Stuart Williams",
    "squadId": "west-indies-1999",
    "team": "West Indies",
    "year": 1999,
    "role": "batsman",
    "batting": 79,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2003-adam-gilchrist",
    "name": "Adam Gilchrist",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 95,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2003-andrew-symonds",
    "name": "Andrew Symonds",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-andy-bichel",
    "name": "Andy Bichel",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 95,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2003-brad-hogg",
    "name": "Brad Hogg",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-brett-lee",
    "name": "Brett Lee",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-damien-martyn",
    "name": "Damien Martyn",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-darren-lehmann",
    "name": "Darren Lehmann",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 19,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-glenn-mcgrath",
    "name": "Glenn McGrath",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-ian-harvey",
    "name": "Ian Harvey",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2003-jason-gillespie",
    "name": "Jason Gillespie",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2003-jimmy-maher",
    "name": "Jimmy Maher",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 25,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-matthew-hayden",
    "name": "Matthew Hayden",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2003-michael-bevan",
    "name": "Michael Bevan",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 88,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2003-nathan-bracken",
    "name": "Nathan Bracken",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2003-nathan-hauritz",
    "name": "Nathan Hauritz",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2003-ricky-ponting",
    "name": "Ricky Ponting",
    "squadId": "australia-2003",
    "team": "Australia",
    "year": 2003,
    "role": "batsman",
    "batting": 97,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2003-akram-khan",
    "name": "Akram Khan",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "batsman",
    "batting": 79,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2003-al-sahariar",
    "name": "Al Sahariar",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "batsman",
    "batting": 85,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2003-alok-kapali",
    "name": "Alok Kapali",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 72,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2003-ehsanul-haque",
    "name": "Ehsanul Haque",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "batsman",
    "batting": 73,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2003-habibul-bashar",
    "name": "Habibul Bashar",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "batsman",
    "batting": 78,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2003-hannan-sarkar",
    "name": "Hannan Sarkar",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "batsman",
    "batting": 75,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2003-khaled-mahmud",
    "name": "Khaled Mahmud",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 25,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-khaled-mashud",
    "name": "Khaled Mashud ( c / wk )",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2003-manjural-islam",
    "name": "Manjural Islam",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 37,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-mashrafe-mortaza",
    "name": "Mashrafe Mortaza",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 58,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2003-mohammad-ashraful",
    "name": "Mohammad Ashraful",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-mohammad-rafique",
    "name": "Mohammad Rafique",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-sanwar-hossain",
    "name": "Sanwar Hossain",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 23,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-talha-jubair",
    "name": "Talha Jubair",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 38,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-tapash-baisya",
    "name": "Tapash Baisya",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 27,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2003-tushar-imran",
    "name": "Tushar Imran",
    "squadId": "bangladesh-2003",
    "team": "Bangladesh",
    "year": 2003,
    "role": "bowler",
    "batting": 20,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-abdool-samad",
    "name": "Abdool Samad",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 32,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-ashish-bagai",
    "name": "Ashish Bagai",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "canada-2003-ashish-patel",
    "name": "Ashish Patel",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 21,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-austin-codrington",
    "name": "Austin Codrington",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 58,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2003-barry-seebaran",
    "name": "Barry Seebaran",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 24,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-davis-joseph",
    "name": "Davis Joseph",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 71,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-desmond-chumney",
    "name": "Desmond Chumney",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "batsman",
    "batting": 70,
    "bowling": 61,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2003-fazil-samad",
    "name": "Fazil Samad",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 19,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-ian-billcliff",
    "name": "Ian Billcliff",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "batsman",
    "batting": 72,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "canada-2003-ishwar-maraj",
    "name": "Ishwar Maraj",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 26,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2003-joe-harris",
    "name": "Joe Harris",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "batsman",
    "batting": 66,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "canada-2003-john-davison",
    "name": "John Davison",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "batsman",
    "batting": 84,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2003-nicholas-de-groot",
    "name": "Nicholas de Groot",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "batsman",
    "batting": 69,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2003-nicholas-ifill",
    "name": "Nicholas Ifill",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 70,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2003-sanjayan-thuraisingam",
    "name": "Sanjayan Thuraisingam",
    "squadId": "canada-2003",
    "team": "Canada",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 68,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-alec-stewart",
    "name": "Alec Stewart",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-2003-andrew-flintoff",
    "name": "Andrew Flintoff",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2003-andy-caddick",
    "name": "Andy Caddick",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2003-ashley-giles",
    "name": "Ashley Giles",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 78,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2003-craig-white",
    "name": "Craig White",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 36,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-ian-blackwell",
    "name": "Ian Blackwell",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 93,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2003-james-anderson",
    "name": "James Anderson",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 91,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2003-marcus-trescothick",
    "name": "Marcus Trescothick",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-matthew-hoggard",
    "name": "Matthew Hoggard",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 17,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-michael-vaughan",
    "name": "Michael Vaughan",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-nasser-hussain",
    "name": "Nasser Hussain",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 34,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-nick-knight",
    "name": "Nick Knight",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 21,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-paul-collingwood",
    "name": "Paul Collingwood",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2003-ronnie-irani",
    "name": "Ronnie Irani",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 25,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2003-steve-harmison",
    "name": "Steve Harmison",
    "squadId": "england-2003",
    "team": "England",
    "year": 2003,
    "role": "bowler",
    "batting": 82,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-ajit-agarkar",
    "name": "Ajit Agarkar",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 82,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-anil-kumble",
    "name": "Anil Kumble",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-ashish-nehra",
    "name": "Ashish Nehra",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 39,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-dinesh-mongia",
    "name": "Dinesh Mongia",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-harbhajan-singh",
    "name": "Harbhajan Singh",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 30,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-javagal-srinath",
    "name": "Javagal Srinath",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 27,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-mohammad-kaif",
    "name": "Mohammad Kaif",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-parthiv-patel",
    "name": "Parthiv Patel",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-rahul-dravid",
    "name": "Rahul Dravid",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-sachin-tendulkar",
    "name": "Sachin Tendulkar",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 98,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2003-sanjay-bangar",
    "name": "Sanjay Bangar",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 34,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2003-sourav-ganguly",
    "name": "Sourav Ganguly",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 91,
    "bowling": 58,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-virender-sehwag",
    "name": "Virender Sehwag",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 93,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2003-yuvraj-singh",
    "name": "Yuvraj Singh",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2003-zaheer-khan",
    "name": "Zaheer Khan",
    "squadId": "india-2003",
    "team": "India",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-adeel-raja",
    "name": "Adeel Raja",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 37,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-bas-zuiderent",
    "name": "Bas Zuiderent",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 40,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-daan-van-bunge",
    "name": "Daan van Bunge",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "batsman",
    "batting": 77,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2003-edgar-schiferli",
    "name": "Edgar Schiferli",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 28,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-feiko-kloppenburg",
    "name": "Feiko Kloppenburg",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 64,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2003-hendrik-jan-mol",
    "name": "Hendrik-Jan Mol",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 67,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2003-jacob-jan-esmeijer",
    "name": "Jacob-Jan Esmeijer",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "batsman",
    "batting": 73,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2003-jeroen-smits",
    "name": "Jeroen Smits",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 30,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-klaas-jan-van-noortwijk",
    "name": "Klaas-Jan van Noortwijk",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 33,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-luuk-van-troost",
    "name": "Luuk van Troost",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-nick-statham",
    "name": "Nick Statham",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-reinout-scholte",
    "name": "Reinout Scholte",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "netherlands-2003-roland-lefebvre",
    "name": "Roland Lefebvre",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 19,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2003-ruud-nijman",
    "name": "Ruud Nijman",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 68,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2003-tim-de-leede",
    "name": "Tim de Leede",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "batsman",
    "batting": 72,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2003-victor-grandia",
    "name": "Victor Grandia",
    "squadId": "netherlands-2003",
    "team": "Netherlands",
    "year": 2003,
    "role": "bowler",
    "batting": 62,
    "bowling": 65,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-andre-adams",
    "name": "Andre Adams",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "batsman",
    "batting": 85,
    "bowling": 27,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2003-brendon-mccullum",
    "name": "Brendon McCullum",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "batsman",
    "batting": 81,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-chris-cairns",
    "name": "Chris Cairns",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-chris-harris",
    "name": "Chris Harris",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 72,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-craig-mcmillan",
    "name": "Craig McMillan",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 36,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-daniel-vettori",
    "name": "Daniel Vettori",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-daryl-tuffey",
    "name": "Daryl Tuffey",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 37,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-jacob-oram",
    "name": "Jacob Oram",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-kyle-mills",
    "name": "Kyle Mills",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 20,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-lou-vincent",
    "name": "Lou Vincent",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 28,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-mathew-sinclair",
    "name": "Mathew Sinclair",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 27,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-nathan-astle",
    "name": "Nathan Astle",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "batsman",
    "batting": 84,
    "bowling": 52,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-scott-styris",
    "name": "Scott Styris",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2003-shane-bond",
    "name": "Shane Bond",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "batsman",
    "batting": 86,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2003-stephen-fleming",
    "name": "Stephen Fleming",
    "squadId": "new-zealand-2003",
    "team": "New Zealand",
    "year": 2003,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2003-abdul-razzaq",
    "name": "Abdul Razzaq",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-azhar-mahmood",
    "name": "Azhar Mahmood",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 28,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-inzamam-ul-haq",
    "name": "Inzamam-ul-Haq",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2003-mohammad-sami",
    "name": "Mohammad Sami",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 78,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2003-rashid-latif",
    "name": "Rashid Latif",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 72,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-2003-saeed-anwar",
    "name": "Saeed Anwar",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "batsman",
    "batting": 92,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2003-saleem-elahi",
    "name": "Saleem Elahi",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2003-saqlain-mushtaq",
    "name": "Saqlain Mushtaq",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-shahid-afridi",
    "name": "Shahid Afridi",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-shoaib-akhtar",
    "name": "Shoaib Akhtar",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 24,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-taufeeq-umar",
    "name": "Taufeeq Umar",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 93,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-waqar-younis",
    "name": "Waqar Younis",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 30,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-wasim-akram",
    "name": "Wasim Akram",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 54,
    "bowling": 96,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2003-younis-khan",
    "name": "Younis Khan",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2003-yousuf-youhana",
    "name": "Yousuf Youhana",
    "squadId": "pakistan-2003",
    "team": "Pakistan",
    "year": 2003,
    "role": "bowler",
    "batting": 17,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-allan-donald",
    "name": "Allan Donald",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 18,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-andrew-hall",
    "name": "Andrew Hall",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 83,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2003-boeta-dippenaar",
    "name": "Boeta Dippenaar",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2003-charl-langeveldt",
    "name": "Charl Langeveldt",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-gary-kirsten",
    "name": "Gary Kirsten",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "batsman",
    "batting": 88,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2003-graeme-smith",
    "name": "Graeme Smith",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-herschelle-gibbs",
    "name": "Herschelle Gibbs",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "batsman",
    "batting": 90,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2003-jacques-kallis",
    "name": "Jacques Kallis",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "batsman",
    "batting": 92,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2003-jonty-rhodes",
    "name": "Jonty Rhodes",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "batsman",
    "batting": 83,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2003-lance-klusener",
    "name": "Lance Klusener",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 81,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2003-makhaya-ntini",
    "name": "Makhaya Ntini",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-mark-boucher",
    "name": "Mark Boucher",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2003-monde-zondeki",
    "name": "Monde Zondeki",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 21,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-nicky-boje",
    "name": "Nicky Boje",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 69,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2003-robin-peterson",
    "name": "Robin Peterson",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2003-shaun-pollock",
    "name": "Shaun Pollock",
    "squadId": "south-africa-2003",
    "team": "South Africa",
    "year": 2003,
    "role": "bowler",
    "batting": 72,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-aravinda-de-silva",
    "name": "Aravinda de Silva",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 94,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-avishka-gunawardene",
    "name": "Avishka Gunawardene",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 80,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-chaminda-vaas",
    "name": "Chaminda Vaas",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 38,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2003-charitha-buddhika",
    "name": "Charitha Buddhika",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-dilhara-fernando",
    "name": "Dilhara Fernando",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-hashan-tillakaratne",
    "name": "Hashan Tillakaratne",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 80,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2003-jehan-mubarak",
    "name": "Jehan Mubarak",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2003-kumar-sangakkara",
    "name": "Kumar Sangakkara",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2003-mahela-jayawardene",
    "name": "Mahela Jayawardene",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-marvan-atapattu",
    "name": "Marvan Atapattu",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 88,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2003-muttiah-muralitharan",
    "name": "Muttiah Muralitharan",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 18,
    "bowling": 96,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2003-prabath-nissanka",
    "name": "Prabath Nissanka",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "bowler",
    "batting": 26,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2003-pulasthi-gunaratne",
    "name": "Pulasthi Gunaratne",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 84,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2003-russel-arnold",
    "name": "Russel Arnold",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 94,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2003-sanath-jayasuriya",
    "name": "Sanath Jayasuriya",
    "squadId": "sri-lanka-2003",
    "team": "Sri Lanka",
    "year": 2003,
    "role": "batsman",
    "batting": 94,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2003-brian-lara",
    "name": "Brian Lara",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 97,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2003-carl-hooper",
    "name": "Carl Hooper",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 84,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2003-chris-gayle",
    "name": "Chris Gayle",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 80,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2003-corey-collymore",
    "name": "Corey Collymore",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 78,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2003-jermaine-lawson",
    "name": "Jermaine Lawson",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 34,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2003-marlon-samuels",
    "name": "Marlon Samuels",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2003-mervyn-dillon",
    "name": "Mervyn Dillon",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 33,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2003-nixon-mclean",
    "name": "Nixon McLean",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 29,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2003-pedro-collins",
    "name": "Pedro Collins",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 89,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2003-ramnaresh-sarwan",
    "name": "Ramnaresh Sarwan",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 37,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2003-ricardo-powell",
    "name": "Ricardo Powell",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 90,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2003-ridley-jacobs",
    "name": "Ridley Jacobs",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-2003-shivnarine-chanderpaul",
    "name": "Shivnarine Chanderpaul",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2003-vasbert-drakes",
    "name": "Vasbert Drakes",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "batsman",
    "batting": 83,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2003-wavell-hinds",
    "name": "Wavell Hinds",
    "squadId": "west-indies-2003",
    "team": "West Indies",
    "year": 2003,
    "role": "bowler",
    "batting": 77,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-alistair-campbell",
    "name": "Alistair Campbell",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 83,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2003-andy-blignaut",
    "name": "Andy Blignaut",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 81,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2003-andy-flower",
    "name": "Andy Flower",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "wicketkeeper",
    "batting": 92,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-2003-brian-murphy",
    "name": "Brian Murphy",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 21,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-craig-wishart",
    "name": "Craig Wishart",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 26,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-dion-ebrahim",
    "name": "Dion Ebrahim",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 70,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-dougie-marillier",
    "name": "Dougie Marillier",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-douglas-hondo",
    "name": "Douglas Hondo",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-grant-flower",
    "name": "Grant Flower",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 84,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-guy-whittall",
    "name": "Guy Whittall",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 76,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-heath-streak",
    "name": "Heath Streak",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 71,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-henry-olonga",
    "name": "Henry Olonga",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-mark-vermeulen",
    "name": "Mark Vermeulen",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 22,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-sean-ervine",
    "name": "Sean Ervine",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 81,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2003-stuart-matsikenyeri",
    "name": "Stuart Matsikenyeri",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-tatenda-taibu",
    "name": "Tatenda Taibu",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "bowler",
    "batting": 31,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2003-travis-friend",
    "name": "Travis Friend",
    "squadId": "zimbabwe-2003",
    "team": "Zimbabwe",
    "year": 2003,
    "role": "batsman",
    "batting": 81,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2007-adam-gilchrist",
    "name": "Adam Gilchrist",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 95,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2007-andrew-symonds",
    "name": "Andrew Symonds",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-brad-haddin",
    "name": "Brad Haddin",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 82,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2007-brad-hodge",
    "name": "Brad Hodge",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2007-brad-hogg",
    "name": "Brad Hogg",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-glenn-mcgrath",
    "name": "Glenn McGrath",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-matthew-hayden",
    "name": "Matthew Hayden",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 31,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-michael-clarke",
    "name": "Michael Clarke",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2007-michael-hussey",
    "name": "Michael Hussey",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2007-mitchell-johnson",
    "name": "Mitchell Johnson",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 48,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-nathan-bracken",
    "name": "Nathan Bracken",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2007-ricky-ponting",
    "name": "Ricky Ponting",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 97,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2007-shane-watson",
    "name": "Shane Watson",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 87,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2007-shaun-tait",
    "name": "Shaun Tait",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2007-stuart-clark",
    "name": "Stuart Clark",
    "squadId": "australia-2007",
    "team": "Australia",
    "year": 2007,
    "role": "batsman",
    "batting": 95,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2007-abdur-razzak",
    "name": "Abdur Razzak",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 78,
    "bowling": 27,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2007-aftab-ahmed",
    "name": "Aftab Ahmed",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 73,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2007-farhad-reza",
    "name": "Farhad Reza",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 74,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2007-habibul-bashar",
    "name": "Habibul Bashar",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 78,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2007-javed-omar",
    "name": "Javed Omar",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 74,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2007-mashrafe-mortaza",
    "name": "Mashrafe Mortaza",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 58,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2007-mohammad-ashraful",
    "name": "Mohammad Ashraful",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2007-mohammad-rafique",
    "name": "Mohammad Rafique",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2007-mushfiqur-rahim",
    "name": "Mushfiqur Rahim",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2007-rajin-saleh",
    "name": "Rajin Saleh",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2007-shahadat-hossain",
    "name": "Shahadat Hossain",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2007-shahriar-nafees",
    "name": "Shahriar Nafees",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 64,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2007-shakib-al-hasan",
    "name": "Shakib Al Hasan",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 92,
    "bowling": 90,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2007-syed-rasel",
    "name": "Syed Rasel",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2007-tamim-iqbal",
    "name": "Tamim Iqbal",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "batsman",
    "batting": 87,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2007-tapash-baisya",
    "name": "Tapash Baisya",
    "squadId": "bangladesh-2007",
    "team": "Bangladesh",
    "year": 2007,
    "role": "bowler",
    "batting": 27,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-abdool-samad",
    "name": "Abdool Samad",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-anderson-cummins",
    "name": "Anderson Cummins",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2007-ashish-bagai",
    "name": "Ashish Bagai",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "canada-2007-asif-mulla",
    "name": "Asif Mulla",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "canada-2007-austin-codrington",
    "name": "Austin Codrington",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 58,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2007-desmond-chumney",
    "name": "Desmond Chumney",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "batsman",
    "batting": 70,
    "bowling": 61,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2007-geoff-barnett",
    "name": "Geoff Barnett",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "batsman",
    "batting": 70,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2007-george-codrington",
    "name": "George Codrington",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 33,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-henry-osinde",
    "name": "Henry Osinde",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-ian-billcliff",
    "name": "Ian Billcliff",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "batsman",
    "batting": 72,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "canada-2007-john-davison",
    "name": "John Davison",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "batsman",
    "batting": 84,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "canada-2007-kevin-sandher",
    "name": "Kevin Sandher",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 40,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-qaiser-ali",
    "name": "Qaiser Ali",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "batsman",
    "batting": 70,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "canada-2007-sunil-dhaniram",
    "name": "Sunil Dhaniram",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "canada-2007-umar-bhatti",
    "name": "Umar Bhatti",
    "squadId": "canada-2007",
    "team": "Canada",
    "year": 2007,
    "role": "bowler",
    "batting": 60,
    "bowling": 65,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2007-andrew-flintoff",
    "name": "Andrew Flintoff",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2007-andrew-strauss",
    "name": "Andrew Strauss",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-ed-joyce",
    "name": "Ed Joyce",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "batsman",
    "batting": 84,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2007-ian-bell",
    "name": "Ian Bell",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "batsman",
    "batting": 86,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2007-james-anderson",
    "name": "James Anderson",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "batsman",
    "batting": 91,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2007-jamie-dalrymple",
    "name": "Jamie Dalrymple",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 82,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2007-jon-lewis",
    "name": "Jon Lewis",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-kevin-pietersen",
    "name": "Kevin Pietersen",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 29,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-liam-plunkett",
    "name": "Liam Plunkett",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-michael-vaughan",
    "name": "Michael Vaughan",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-monty-panesar",
    "name": "Monty Panesar",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 29,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-paul-collingwood",
    "name": "Paul Collingwood",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2007-paul-nixon",
    "name": "Paul Nixon",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 79,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-2007-ravi-bopara",
    "name": "Ravi Bopara",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 86,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2007-sajid-mahmood",
    "name": "Sajid Mahmood",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2007-stuart-broad",
    "name": "Stuart Broad",
    "squadId": "england-2007",
    "team": "England",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2007-ajit-agarkar",
    "name": "Ajit Agarkar",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 82,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-anil-kumble",
    "name": "Anil Kumble",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-dinesh-karthik",
    "name": "Dinesh Karthik",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2007-harbhajan-singh",
    "name": "Harbhajan Singh",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2007-irfan-pathan",
    "name": "Irfan Pathan",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "bowler",
    "batting": 36,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2007-m-s-dhoni",
    "name": "M.S. Dhoni",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2007-munaf-patel",
    "name": "Munaf Patel",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "bowler",
    "batting": 18,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2007-rahul-dravid",
    "name": "Rahul Dravid",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-robin-uthappa",
    "name": "Robin Uthappa",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 86,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-s-sreesanth",
    "name": "S. Sreesanth",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "bowler",
    "batting": 36,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2007-sachin-tendulkar",
    "name": "Sachin Tendulkar",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 98,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2007-sourav-ganguly",
    "name": "Sourav Ganguly",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 91,
    "bowling": 58,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-virender-sehwag",
    "name": "Virender Sehwag",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 93,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2007-yuvraj-singh",
    "name": "Yuvraj Singh",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2007-zaheer-khan",
    "name": "Zaheer Khan",
    "squadId": "india-2007",
    "team": "India",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2007-andre-botha",
    "name": "Andre Botha",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 73,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2007-andrew-white",
    "name": "Andrew White",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2007-boyd-rankin",
    "name": "Boyd Rankin",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 24,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2007-dave-langford-smith",
    "name": "Dave Langford-Smith",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 65,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-eoin-morgan",
    "name": "Eoin Morgan",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 88,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2007-jeremy-bray",
    "name": "Jeremy Bray",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 76,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2007-john-mooney",
    "name": "John Mooney",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 71,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-kenny-carroll",
    "name": "Kenny Carroll",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 75,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-kevin-o-brien",
    "name": "Kevin O'Brien",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 86,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-kyle-mccallan",
    "name": "Kyle McCallan",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 75,
    "bowling": 69,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-niall-o-brien",
    "name": "Niall O'Brien",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "ireland-2007-paul-mooney",
    "name": "Paul Mooney",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 34,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2007-peter-gillespie",
    "name": "Peter Gillespie",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 71,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2007-trent-johnston",
    "name": "Trent Johnston",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2007-william-porterfield",
    "name": "William Porterfield",
    "squadId": "ireland-2007",
    "team": "Ireland",
    "year": 2007,
    "role": "batsman",
    "batting": 85,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2007-collins-obuya",
    "name": "Collins Obuya",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 54,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2007-david-obuya",
    "name": "David Obuya",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-2007-hiren-varaiya",
    "name": "Hiren Varaiya",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 27,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2007-jimmy-kamande",
    "name": "Jimmy Kamande",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2007-lameck-onyango",
    "name": "Lameck Onyango",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2007-malhar-patel",
    "name": "Malhar Patel",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2007-morris-ouma",
    "name": "Morris Ouma",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 66,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-2007-nehemiah-odhiambo",
    "name": "Nehemiah Odhiambo",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "batsman",
    "batting": 64,
    "bowling": 63,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2007-peter-ongondo",
    "name": "Peter Ongondo",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2007-rajesh-bhudia",
    "name": "Rajesh Bhudia",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "batsman",
    "batting": 71,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2007-ravindu-shah",
    "name": "Ravindu Shah",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "batsman",
    "batting": 79,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2007-steve-tikolo",
    "name": "Steve Tikolo",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "batsman",
    "batting": 88,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2007-tanmay-mishra",
    "name": "Tanmay Mishra",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "batsman",
    "batting": 76,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2007-thomas-odoyo",
    "name": "Thomas Odoyo",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2007-tony-suji",
    "name": "Tony Suji",
    "squadId": "kenya-2007",
    "team": "Kenya",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-adeel-raja",
    "name": "Adeel Raja",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-alexei-kervezee",
    "name": "Alexei Kervezee",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "batsman",
    "batting": 75,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2007-bastiaan-zuiderent",
    "name": "Bastiaan Zuiderent",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 36,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-billy-stelling",
    "name": "Billy Stelling",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 17,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-daan-van-bunge",
    "name": "Daan van Bunge",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "batsman",
    "batting": 77,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2007-darron-reekers",
    "name": "Darron Reekers",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 25,
    "bowling": 71,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-edgar-schiferli",
    "name": "Edgar Schiferli",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-eric-szwarczynski",
    "name": "Eric Szwarczynski",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-jeroen-smits",
    "name": "Jeroen Smits",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-luuk-van-troost",
    "name": "Luuk van Troost",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 31,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2007-mark-jonkman",
    "name": "Mark Jonkman",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 67,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2007-mohammad-kashif",
    "name": "Mohammad Kashif",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "bowler",
    "batting": 61,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2007-peter-borren",
    "name": "Peter Borren",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "batsman",
    "batting": 72,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2007-ryan-ten-doeschate",
    "name": "Ryan ten Doeschate",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "batsman",
    "batting": 70,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2007-tim-de-leede",
    "name": "Tim de Leede",
    "squadId": "netherlands-2007",
    "team": "Netherlands",
    "year": 2007,
    "role": "batsman",
    "batting": 72,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-brendon-mccullum",
    "name": "Brendon McCullum",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 81,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-chris-martin",
    "name": "Chris Martin",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 34,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-craig-mcmillan",
    "name": "Craig McMillan",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 36,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-daniel-vettori",
    "name": "Daniel Vettori",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-daryl-tuffey",
    "name": "Daryl Tuffey",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-hamish-marshall",
    "name": "Hamish Marshall",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 38,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-jacob-oram",
    "name": "Jacob Oram",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 29,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-james-franklin",
    "name": "James Franklin",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 82,
    "bowling": 32,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2007-jeetan-patel",
    "name": "Jeetan Patel",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 33,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-lou-vincent",
    "name": "Lou Vincent",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-mark-gillespie",
    "name": "Mark Gillespie",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-michael-mason",
    "name": "Michael Mason",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 88,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-peter-fulton",
    "name": "Peter Fulton",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 76,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-ross-taylor",
    "name": "Ross Taylor",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2007-scott-styris",
    "name": "Scott Styris",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "bowler",
    "batting": 29,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2007-shane-bond",
    "name": "Shane Bond",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 86,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2007-stephen-fleming",
    "name": "Stephen Fleming",
    "squadId": "new-zealand-2007",
    "team": "New Zealand",
    "year": 2007,
    "role": "batsman",
    "batting": 87,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2007-azhar-mahmood",
    "name": "Azhar Mahmood",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-danish-kaneria",
    "name": "Danish Kaneria",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2007-iftikhar-anjum",
    "name": "Iftikhar Anjum",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 26,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-imran-nazir",
    "name": "Imran Nazir",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2007-inzamam-ul-haq",
    "name": "Inzamam-ul-Haq",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2007-kamran-akmal",
    "name": "Kamran Akmal",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 83,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-2007-mohammad-hafeez",
    "name": "Mohammad Hafeez",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2007-mohammad-sami",
    "name": "Mohammad Sami",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 78,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2007-mohammad-yousuf",
    "name": "Mohammad Yousuf",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-rana-naved-ul-hasan",
    "name": "Rana Naved-ul-Hasan",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 36,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-shahid-afridi",
    "name": "Shahid Afridi",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-shoaib-malik",
    "name": "Shoaib Malik",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 21,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-umar-gul",
    "name": "Umar Gul",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 24,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-yasir-arafat",
    "name": "Yasir Arafat",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 25,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2007-younis-khan",
    "name": "Younis Khan",
    "squadId": "pakistan-2007",
    "team": "Pakistan",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-2007-colin-smith",
    "name": "Colin Smith",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "scotland-2007-craig-wright",
    "name": "Craig Wright",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "batsman",
    "batting": 74,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-2007-dewald-nel",
    "name": "Dewald Nel",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 26,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-2007-dougie-brown",
    "name": "Dougie Brown",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "batsman",
    "batting": 73,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-2007-dougie-lockhart",
    "name": "Dougie Lockhart",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 59,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-2007-fraser-watts",
    "name": "Fraser Watts",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "batsman",
    "batting": 62,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-2007-gavin-hamilton",
    "name": "Gavin Hamilton",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 17,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-2007-glenn-rogers",
    "name": "Glenn Rogers",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-2007-john-blain",
    "name": "John Blain",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 67,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-2007-majid-haq",
    "name": "Majid Haq",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 66,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-2007-navdeep-poonia",
    "name": "Navdeep Poonia",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 24,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "scotland-2007-neil-mccallum",
    "name": "Neil McCallum",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "batsman",
    "batting": 71,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "scotland-2007-paul-hoffmann",
    "name": "Paul Hoffmann",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 65,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-2007-ross-lyons",
    "name": "Ross Lyons",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 62,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "scotland-2007-ryan-watson",
    "name": "Ryan Watson",
    "squadId": "scotland-2007",
    "team": "Scotland",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 72,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-ab-de-villiers",
    "name": "AB de Villiers",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2007-andr-nel",
    "name": "André Nel",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 28,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-andrew-hall",
    "name": "Andrew Hall",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 83,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2007-ashwell-prince",
    "name": "Ashwell Prince",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 23,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-charl-langeveldt",
    "name": "Charl Langeveldt",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-graeme-smith",
    "name": "Graeme Smith",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-herschelle-gibbs",
    "name": "Herschelle Gibbs",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "batsman",
    "batting": 90,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2007-jacques-kallis",
    "name": "Jacques Kallis",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "batsman",
    "batting": 92,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2007-justin-kemp",
    "name": "Justin Kemp",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 85,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2007-loots-bosman",
    "name": "Loots Bosman",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "batsman",
    "batting": 95,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2007-makhaya-ntini",
    "name": "Makhaya Ntini",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-mark-boucher",
    "name": "Mark Boucher",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2007-robin-peterson",
    "name": "Robin Peterson",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-roger-telemachus",
    "name": "Roger Telemachus",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2007-shaun-pollock",
    "name": "Shaun Pollock",
    "squadId": "south-africa-2007",
    "team": "South Africa",
    "year": 2007,
    "role": "bowler",
    "batting": 72,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-chamara-silva",
    "name": "Chamara Silva",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-chaminda-vaas",
    "name": "Chaminda Vaas",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 38,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-dilhara-fernando",
    "name": "Dilhara Fernando",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-farveez-maharoof",
    "name": "Farveez Maharoof",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 29,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-kumar-sangakkara",
    "name": "Kumar Sangakkara",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-lasith-malinga",
    "name": "Lasith Malinga",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-mahela-jayawardene",
    "name": "Mahela Jayawardene",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-malinga-bandara",
    "name": "Malinga Bandara",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-marvan-atapattu",
    "name": "Marvan Atapattu",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 88,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2007-muttiah-muralitharan",
    "name": "Muttiah Muralitharan",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 18,
    "bowling": 96,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2007-nuwan-kulasekara",
    "name": "Nuwan Kulasekara",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-russel-arnold",
    "name": "Russel Arnold",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 94,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2007-sanath-jayasuriya",
    "name": "Sanath Jayasuriya",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 94,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-tillakaratne-dilshan",
    "name": "Tillakaratne Dilshan",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2007-upul-tharanga",
    "name": "Upul Tharanga",
    "squadId": "sri-lanka-2007",
    "team": "Sri Lanka",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2007-brian-lara",
    "name": "Brian Lara",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "batsman",
    "batting": 97,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2007-chris-gayle",
    "name": "Chris Gayle",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 80,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2007-corey-collymore",
    "name": "Corey Collymore",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 78,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2007-daren-powell",
    "name": "Daren Powell",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 78,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2007-denesh-ramdin",
    "name": "Denesh Ramdin",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-2007-devon-smith",
    "name": "Devon Smith",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-dwayne-bravo",
    "name": "Dwayne Bravo",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "batsman",
    "batting": 83,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2007-dwayne-smith",
    "name": "Dwayne Smith",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 23,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-ian-bradshaw",
    "name": "Ian Bradshaw",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "batsman",
    "batting": 92,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2007-jerome-taylor",
    "name": "Jerome Taylor",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 20,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-kieron-pollard",
    "name": "Kieron Pollard",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2007-lendl-simmons",
    "name": "Lendl Simmons",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 31,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-marlon-samuels",
    "name": "Marlon Samuels",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-ramnaresh-sarwan",
    "name": "Ramnaresh Sarwan",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "bowler",
    "batting": 37,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2007-shivnarine-chanderpaul",
    "name": "Shivnarine Chanderpaul",
    "squadId": "west-indies-2007",
    "team": "West Indies",
    "year": 2007,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2007-anthony-ireland",
    "name": "Anthony Ireland",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 69,
    "bowling": 65,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2007-brendan-taylor",
    "name": "Brendan Taylor",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-2007-christopher-mpofu",
    "name": "Christopher Mpofu",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 30,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2007-ed-rainsford",
    "name": "Ed Rainsford",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 17,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2007-elton-chigumbura",
    "name": "Elton Chigumbura",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 62,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2007-friday-kasteni",
    "name": "Friday Kasteni",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-2007-gary-brent",
    "name": "Gary Brent",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 74,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2007-justice-chibhabha",
    "name": "Justice Chibhabha",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 72,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2007-keith-dabengwa",
    "name": "Keith Dabengwa",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 67,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2007-prosper-utseya",
    "name": "Prosper Utseya",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 72,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2007-sean-williams",
    "name": "Sean Williams",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 21,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2007-stuart-matsikenyeri",
    "name": "Stuart Matsikenyeri",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2007-tawanda-mupariwa",
    "name": "Tawanda Mupariwa",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 31,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2007-terry-duffin",
    "name": "Terry Duffin",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "batsman",
    "batting": 69,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2007-vusi-sibanda",
    "name": "Vusi Sibanda",
    "squadId": "zimbabwe-2007",
    "team": "Zimbabwe",
    "year": 2007,
    "role": "bowler",
    "batting": 27,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-brad-haddin",
    "name": "Brad Haddin",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 82,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2011-brett-lee",
    "name": "Brett Lee",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-callum-ferguson",
    "name": "Callum Ferguson",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 95,
    "bowling": 32,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2011-cameron-white",
    "name": "Cameron White",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-david-hussey",
    "name": "David Hussey",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 86,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2011-jason-krejza",
    "name": "Jason Krejza",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-john-hastings",
    "name": "John Hastings",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2011-michael-clarke",
    "name": "Michael Clarke",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2011-michael-hussey",
    "name": "Michael Hussey",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2011-mitchell-johnson",
    "name": "Mitchell Johnson",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 48,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-ricky-ponting",
    "name": "Ricky Ponting",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 97,
    "bowling": 16,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2011-shane-watson",
    "name": "Shane Watson",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 87,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2011-shaun-tait",
    "name": "Shaun Tait",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 20,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2011-steve-smith",
    "name": "Steve Smith",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2011-tim-paine",
    "name": "Tim Paine",
    "squadId": "australia-2011",
    "team": "Australia",
    "year": 2011,
    "role": "bowler",
    "batting": 25,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-abdur-razzak",
    "name": "Abdur Razzak",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 78,
    "bowling": 27,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2011-imrul-kayes",
    "name": "Imrul Kayes",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 71,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2011-junaid-siddique",
    "name": "Junaid Siddique",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 77,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2011-mahmudullah",
    "name": "Mahmudullah",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 84,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2011-mohammad-ashraful",
    "name": "Mohammad Ashraful",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 25,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-mushfiqur-rahim",
    "name": "Mushfiqur Rahim",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2011-naeem-islam",
    "name": "Naeem Islam",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 23,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-nazmul-hossain",
    "name": "Nazmul Hossain",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 35,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-raqibul-hasan",
    "name": "Raqibul Hasan",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 78,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2011-rubel-hossain",
    "name": "Rubel Hossain",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 20,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-shafiul-islam",
    "name": "Shafiul Islam",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 16,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-shahriar-nafees",
    "name": "Shahriar Nafees",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 64,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2011-shakib-al-hasan",
    "name": "Shakib Al Hasan",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 92,
    "bowling": 90,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2011-suhrawadi-shuvo",
    "name": "Suhrawadi Shuvo",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "bowler",
    "batting": 23,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2011-tamim-iqbal",
    "name": "Tamim Iqbal",
    "squadId": "bangladesh-2011",
    "team": "Bangladesh",
    "year": 2011,
    "role": "batsman",
    "batting": 87,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2011-adil-rashid",
    "name": "Adil Rashid",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 18,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-andrew-strauss",
    "name": "Andrew Strauss",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-chris-tremlett",
    "name": "Chris Tremlett",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 34,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-eoin-morgan",
    "name": "Eoin Morgan",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 88,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2011-graeme-swann",
    "name": "Graeme Swann",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 27,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-ian-bell",
    "name": "Ian Bell",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 86,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2011-jade-dernbach",
    "name": "Jade Dernbach",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 78,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2011-james-anderson",
    "name": "James Anderson",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 91,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2011-james-tredwell",
    "name": "James Tredwell",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-jonathan-trott",
    "name": "Jonathan Trott",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 28,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-luke-wright",
    "name": "Luke Wright",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 26,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2011-matt-prior",
    "name": "Matt Prior",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 76,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2011-paul-collingwood",
    "name": "Paul Collingwood",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2011-ravi-bopara",
    "name": "Ravi Bopara",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 86,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2011-tim-bresnan",
    "name": "Tim Bresnan",
    "squadId": "england-2011",
    "team": "England",
    "year": 2011,
    "role": "bowler",
    "batting": 71,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-alex-obanda",
    "name": "Alex Obanda",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 74,
    "bowling": 65,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-collins-obuya",
    "name": "Collins Obuya",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 54,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-david-obuya",
    "name": "David Obuya",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 67,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "kenya-2011-elijah-otieno",
    "name": "Elijah Otieno",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 21,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-james-ngoche",
    "name": "James Ngoche",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 69,
    "bowling": 63,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-jimmy-kamande",
    "name": "Jimmy Kamande",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-maurice-ouma",
    "name": "Maurice Ouma",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 79,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2011-nehemiah-odhiambo",
    "name": "Nehemiah Odhiambo",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 64,
    "bowling": 63,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-peter-ongondo",
    "name": "Peter Ongondo",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-rakep-patel",
    "name": "Rakep Patel",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 19,
    "bowling": 71,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-seren-waters",
    "name": "Seren Waters",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 31,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-shem-ngoche",
    "name": "Shem Ngoche",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 38,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "kenya-2011-steve-tikolo",
    "name": "Steve Tikolo",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 88,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "kenya-2011-tanmay-mishra",
    "name": "Tanmay Mishra",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "batsman",
    "batting": 76,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "kenya-2011-thomas-odoyo",
    "name": "Thomas Odoyo",
    "squadId": "kenya-2011",
    "team": "Kenya",
    "year": 2011,
    "role": "bowler",
    "batting": 76,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-adeel-raja",
    "name": "Adeel Raja",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-alexei-kervezee",
    "name": "Alexei Kervezee",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 75,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-atse-buurman",
    "name": "Atse Buurman",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 73,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2011-bas-zuiderent",
    "name": "Bas Zuiderent",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 40,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-berend-westdijk",
    "name": "Berend Westdijk",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 38,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-bernard-loots",
    "name": "Bernard Loots",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 17,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-bradley-kruger",
    "name": "Bradley Kruger",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 26,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-eric-szwarczynski",
    "name": "Eric Szwarczynski",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 32,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-mudassar-bukhari",
    "name": "Mudassar Bukhari",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 69,
    "bowling": 72,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-peter-borren",
    "name": "Peter Borren",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 72,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "netherlands-2011-pieter-seelaar",
    "name": "Pieter Seelaar",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 24,
    "bowling": 75,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "netherlands-2011-ryan-ten-doeschate",
    "name": "Ryan ten Doeschate",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 70,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-tom-cooper",
    "name": "Tom Cooper",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "bowler",
    "batting": 64,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-tom-de-grooth",
    "name": "Tom de Grooth",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 70,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "netherlands-2011-wesley-barresi",
    "name": "Wesley Barresi",
    "squadId": "netherlands-2011",
    "team": "Netherlands",
    "year": 2011,
    "role": "batsman",
    "batting": 70,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-brendon-mccullum",
    "name": "Brendon McCullum",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 81,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2011-daniel-vettori",
    "name": "Daniel Vettori",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-hamish-bennett",
    "name": "Hamish Bennett",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 91,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-jacob-oram",
    "name": "Jacob Oram",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 29,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-james-franklin",
    "name": "James Franklin",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 82,
    "bowling": 32,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-jamie-how",
    "name": "Jamie How",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 75,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2011-jesse-ryder",
    "name": "Jesse Ryder",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 35,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-kane-williamson",
    "name": "Kane Williamson",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-kyle-mills",
    "name": "Kyle Mills",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 20,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-luke-woodcock",
    "name": "Luke Woodcock",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 29,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-martin-guptill",
    "name": "Martin Guptill",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 88,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-nathan-mccullum",
    "name": "Nathan McCullum",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 80,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2011-ross-taylor",
    "name": "Ross Taylor",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2011-scott-styris",
    "name": "Scott Styris",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 29,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2011-tim-southee",
    "name": "Tim Southee",
    "squadId": "new-zealand-2011",
    "team": "New Zealand",
    "year": 2011,
    "role": "bowler",
    "batting": 42,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-abdul-razzaq",
    "name": "Abdul Razzaq",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 23,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-abdur-rehman",
    "name": "Abdur Rehman",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "batsman",
    "batting": 85,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2011-ahmed-shehzad",
    "name": "Ahmed Shehzad",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2011-asad-shafiq",
    "name": "Asad Shafiq",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2011-kamran-akmal",
    "name": "Kamran Akmal",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 83,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "pakistan-2011-misbah-ul-haq",
    "name": "Misbah-ul-Haq",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "batsman",
    "batting": 85,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2011-mohammad-hafeez",
    "name": "Mohammad Hafeez",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2011-saeed-ajmal",
    "name": "Saeed Ajmal",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-shahid-afridi",
    "name": "Shahid Afridi",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-shoaib-akhtar",
    "name": "Shoaib Akhtar",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 24,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-umar-akmal",
    "name": "Umar Akmal",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "batsman",
    "batting": 86,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2011-umar-gul",
    "name": "Umar Gul",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 24,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-wahab-riaz",
    "name": "Wahab Riaz",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 38,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2011-younis-khan",
    "name": "Younis Khan",
    "squadId": "pakistan-2011",
    "team": "Pakistan",
    "year": 2011,
    "role": "bowler",
    "batting": 35,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-ab-de-villiers",
    "name": "AB de Villiers",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2011-colin-ingram",
    "name": "Colin Ingram",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "batsman",
    "batting": 87,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2011-dale-steyn",
    "name": "Dale Steyn",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-francois-du-plessis",
    "name": "Francois du Plessis",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2011-graeme-smith",
    "name": "Graeme Smith",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-hashim-amla",
    "name": "Hashim Amla",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "batsman",
    "batting": 94,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2011-imran-tahir",
    "name": "Imran Tahir",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 21,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-jacques-kallis",
    "name": "Jacques Kallis",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "batsman",
    "batting": 92,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2011-johan-botha",
    "name": "Johan Botha",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "batsman",
    "batting": 88,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2011-jp-duminy",
    "name": "JP Duminy",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2011-lonwabo-tsotsobe",
    "name": "Lonwabo Tsotsobe",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 28,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-morn-morkel",
    "name": "Morné Morkel",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 33,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-morne-van-wyk",
    "name": "Morne van Wyk",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "batsman",
    "batting": 84,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2011-robin-peterson",
    "name": "Robin Peterson",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2011-wayne-parnell",
    "name": "Wayne Parnell",
    "squadId": "south-africa-2011",
    "team": "South Africa",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-ajantha-mendis",
    "name": "Ajantha Mendis",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-angelo-mathews",
    "name": "Angelo Mathews",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-chamara-kapugedera",
    "name": "Chamara Kapugedera",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-chamara-silva",
    "name": "Chamara Silva",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 20,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-dilhara-fernando",
    "name": "Dilhara Fernando",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-kumar-sangakkara",
    "name": "Kumar Sangakkara",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-lasith-malinga",
    "name": "Lasith Malinga",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-mahela-jayawardene",
    "name": "Mahela Jayawardene",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-muttiah-muralitharan",
    "name": "Muttiah Muralitharan",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 18,
    "bowling": 96,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-nuwan-kulasekara",
    "name": "Nuwan Kulasekara",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-rangana-herath",
    "name": "Rangana Herath",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-thilan-samaraweera",
    "name": "Thilan Samaraweera",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 34,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-thisara-perera",
    "name": "Thisara Perera",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2011-tillakaratne-dilshan",
    "name": "Tillakaratne Dilshan",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2011-upul-tharanga",
    "name": "Upul Tharanga",
    "squadId": "sri-lanka-2011",
    "team": "Sri Lanka",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2011-andre-russell",
    "name": "Andre Russell",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-chris-gayle",
    "name": "Chris Gayle",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 80,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2011-darren-bravo",
    "name": "Darren Bravo",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 84,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2011-darren-sammy",
    "name": "Darren Sammy",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 80,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2011-devendra-bishoo",
    "name": "Devendra Bishoo",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 80,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2011-devon-smith",
    "name": "Devon Smith",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-devon-thomas",
    "name": "Devon Thomas",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 91,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2011-kemar-roach",
    "name": "Kemar Roach",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 35,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-kieron-pollard",
    "name": "Kieron Pollard",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 89,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2011-kirk-edwards",
    "name": "Kirk Edwards",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 90,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2011-nikita-miller",
    "name": "Nikita Miller",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 36,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-ramnaresh-sarwan",
    "name": "Ramnaresh Sarwan",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 37,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-ravi-rampaul",
    "name": "Ravi Rampaul",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "bowler",
    "batting": 24,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2011-shivnarine-chanderpaul",
    "name": "Shivnarine Chanderpaul",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2011-sulieman-benn",
    "name": "Sulieman Benn",
    "squadId": "west-indies-2011",
    "team": "West Indies",
    "year": 2011,
    "role": "batsman",
    "batting": 79,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-brendan-taylor",
    "name": "Brendan Taylor",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-2011-charles-coventry",
    "name": "Charles Coventry",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "batsman",
    "batting": 66,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2011-chris-mpofu",
    "name": "Chris Mpofu",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 31,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2011-craig-ervine",
    "name": "Craig Ervine",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "batsman",
    "batting": 65,
    "bowling": 60,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-elton-chigumbura",
    "name": "Elton Chigumbura",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 62,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-graeme-cremer",
    "name": "Graeme Cremer",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 62,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-greg-lamb",
    "name": "Greg Lamb",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 63,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-prosper-utseya",
    "name": "Prosper Utseya",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "batsman",
    "batting": 72,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2011-ray-price",
    "name": "Ray Price",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 22,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2011-regis-chakabva",
    "name": "Regis Chakabva",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "batsman",
    "batting": 74,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2011-shingirai-masakadza",
    "name": "Shingirai Masakadza",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 63,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-tatenda-taibu",
    "name": "Tatenda Taibu",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 31,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2011-terry-duffin",
    "name": "Terry Duffin",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "batsman",
    "batting": 69,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2011-tinashe-panyangara",
    "name": "Tinashe Panyangara",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 30,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2011-vusi-sibanda",
    "name": "Vusi Sibanda",
    "squadId": "zimbabwe-2011",
    "team": "Zimbabwe",
    "year": 2011,
    "role": "bowler",
    "batting": 27,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-afsar-zazai",
    "name": "Afsar Zazai",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "batsman",
    "batting": 71,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2015-aftab-alam",
    "name": "Aftab Alam",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "batsman",
    "batting": 80,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2015-asghar-afghan",
    "name": "Asghar Afghan",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-dawlat-zadran",
    "name": "Dawlat Zadran",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 29,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-gulbadin-naib",
    "name": "Gulbadin Naib",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2015-hamid-hassan",
    "name": "Hamid Hassan",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 72,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2015-javed-ahmadi",
    "name": "Javed Ahmadi",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "batsman",
    "batting": 85,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2015-mohammad-nabi",
    "name": "Mohammad Nabi",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 80,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2015-najibullah-zadran",
    "name": "Najibullah Zadran",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 31,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-nasir-jamal",
    "name": "Nasir Jamal",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 70,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2015-nawroz-mangal",
    "name": "Nawroz Mangal",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 71,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2015-samiullah-shenwari",
    "name": "Samiullah Shenwari",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 19,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-shafiqullah",
    "name": "Shafiqullah",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "batsman",
    "batting": 78,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2015-shapoor-zadran",
    "name": "Shapoor Zadran",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "bowler",
    "batting": 33,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2015-usman-ghani",
    "name": "Usman Ghani",
    "squadId": "afghanistan-2015",
    "team": "Afghanistan",
    "year": 2015,
    "role": "batsman",
    "batting": 78,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2015-arafat-sunny",
    "name": "Arafat Sunny",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 23,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-imrul-kayes",
    "name": "Imrul Kayes",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 71,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2015-mahmudullah-riyad",
    "name": "Mahmudullah Riyad",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-mashrafe-mortaza",
    "name": "Mashrafe Mortaza",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 58,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2015-mominul-haque",
    "name": "Mominul Haque",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "batsman",
    "batting": 84,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2015-mushfiqur-rahim",
    "name": "Mushfiqur Rahim",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2015-nasir-hossain",
    "name": "Nasir Hossain",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 72,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2015-rubel-hossain",
    "name": "Rubel Hossain",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 20,
    "bowling": 78,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-sabbir-rahman",
    "name": "Sabbir Rahman",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 28,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-shafiul-islam",
    "name": "Shafiul Islam",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 16,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-shakib-al-hasan",
    "name": "Shakib Al Hasan",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "batsman",
    "batting": 92,
    "bowling": 90,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2015-soumya-sarkar",
    "name": "Soumya Sarkar",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "batsman",
    "batting": 80,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2015-taijul-islam",
    "name": "Taijul Islam",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "bowler",
    "batting": 26,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2015-tamim-iqbal",
    "name": "Tamim Iqbal",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "batsman",
    "batting": 87,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2015-taskin-ahmed",
    "name": "Taskin Ahmed",
    "squadId": "bangladesh-2015",
    "team": "Bangladesh",
    "year": 2015,
    "role": "batsman",
    "batting": 87,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-alex-hales",
    "name": "Alex Hales",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 27,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2015-chris-jordan",
    "name": "Chris Jordan",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 25,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2015-chris-woakes",
    "name": "Chris Woakes",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 74,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2015-eoin-morgan",
    "name": "Eoin Morgan",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "batsman",
    "batting": 88,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-gary-ballance",
    "name": "Gary Ballance",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 74,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2015-ian-bell",
    "name": "Ian Bell",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "batsman",
    "batting": 86,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-james-anderson",
    "name": "James Anderson",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "batsman",
    "batting": 91,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-james-taylor",
    "name": "James Taylor",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2015-james-tredwell",
    "name": "James Tredwell",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 21,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2015-joe-root",
    "name": "Joe Root",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "batsman",
    "batting": 92,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-jos-buttler",
    "name": "Jos Buttler ( vc & wk )",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 93,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-2015-moeen-ali",
    "name": "Moeen Ali",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "batsman",
    "batting": 79,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2015-ravi-bopara",
    "name": "Ravi Bopara",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 86,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2015-steven-finn",
    "name": "Steven Finn",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2015-stuart-broad",
    "name": "Stuart Broad",
    "squadId": "england-2015",
    "team": "England",
    "year": 2015,
    "role": "bowler",
    "batting": 32,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-ajinkya-rahane",
    "name": "Ajinkya Rahane",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 25,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-ambati-rayudu",
    "name": "Ambati Rayudu",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-axar-patel",
    "name": "Axar Patel",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 88,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-bhuvneshwar-kumar",
    "name": "Bhuvneshwar Kumar",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "batsman",
    "batting": 85,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-mohammed-shami",
    "name": "Mohammed Shami",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-mohit-sharma",
    "name": "Mohit Sharma",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-ms-dhoni",
    "name": "MS Dhoni ( c & wk )",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 92,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2015-ravichandran-ashwin",
    "name": "Ravichandran Ashwin",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 66,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-ravindra-jadeja",
    "name": "Ravindra Jadeja",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 78,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-rohit-sharma",
    "name": "Rohit Sharma",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "batsman",
    "batting": 94,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2015-shikhar-dhawan",
    "name": "Shikhar Dhawan",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-stuart-binny",
    "name": "Stuart Binny",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 85,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-suresh-raina",
    "name": "Suresh Raina",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "batsman",
    "batting": 84,
    "bowling": 68,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2015-umesh-yadav",
    "name": "Umesh Yadav",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "bowler",
    "batting": 26,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2015-virat-kohli",
    "name": "Virat Kohli",
    "squadId": "india-2015",
    "team": "India",
    "year": 2015,
    "role": "batsman",
    "batting": 94,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-alex-cusack",
    "name": "Alex Cusack",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 73,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2015-andrew-balbirnie",
    "name": "Andrew Balbirnie",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 74,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-andrew-mcbrine",
    "name": "Andrew McBrine",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 70,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2015-craig-young",
    "name": "Craig Young",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 23,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2015-ed-joyce",
    "name": "Ed Joyce",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 84,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-gary-wilson",
    "name": "Gary Wilson",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 77,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-george-dockrell",
    "name": "George Dockrell",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 46,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2015-john-mooney",
    "name": "John Mooney",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 71,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2015-kevin-o-brien",
    "name": "Kevin O'Brien",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 86,
    "bowling": 74,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "ireland-2015-max-sorensen",
    "name": "Max Sorensen",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 25,
    "bowling": 76,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2015-niall-o-brien",
    "name": "Niall O'Brien",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "ireland-2015-paul-stirling",
    "name": "Paul Stirling",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 88,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-peter-chase",
    "name": "Peter Chase",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 82,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "ireland-2015-stuart-thompson",
    "name": "Stuart Thompson",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "bowler",
    "batting": 32,
    "bowling": 77,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "ireland-2015-william-porterfield",
    "name": "William Porterfield",
    "squadId": "ireland-2015",
    "team": "Ireland",
    "year": 2015,
    "role": "batsman",
    "batting": 85,
    "bowling": 12,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-brendon-mccullum",
    "name": "Brendon McCullum",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 81,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2015-corey-anderson",
    "name": "Corey Anderson",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 94,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-daniel-vettori",
    "name": "Daniel Vettori",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 28,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2015-grant-elliott",
    "name": "Grant Elliott",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 86,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2015-kane-williamson",
    "name": "Kane Williamson",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-kyle-mills",
    "name": "Kyle Mills",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 20,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2015-luke-ronchi",
    "name": "Luke Ronchi",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 93,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-martin-guptill",
    "name": "Martin Guptill",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 88,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-matt-henry",
    "name": "Matt Henry",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 24,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2015-mitchell-mcclenaghan",
    "name": "Mitchell McClenaghan",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 26,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2015-nathan-mccullum",
    "name": "Nathan McCullum",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 80,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2015-ross-taylor",
    "name": "Ross Taylor",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2015-tim-southee",
    "name": "Tim Southee",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 42,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2015-tom-latham",
    "name": "Tom Latham",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-2015-trent-boult",
    "name": "Trent Boult",
    "squadId": "new-zealand-2015",
    "team": "New Zealand",
    "year": 2015,
    "role": "bowler",
    "batting": 26,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-ahmed-shehzad",
    "name": "Ahmed Shehzad",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2015-ehsan-adil",
    "name": "Ehsan Adil",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 87,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2015-haris-sohail",
    "name": "Haris Sohail",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 25,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-misbah-ul-haq",
    "name": "Misbah-ul-Haq",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 85,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2015-mohammad-irfan",
    "name": "Mohammad Irfan",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 86,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2015-nasir-jamshed",
    "name": "Nasir Jamshed",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 87,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2015-rahat-ali",
    "name": "Rahat Ali",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2015-sarfaraz-ahmed",
    "name": "Sarfaraz Ahmed",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 93,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2015-shahid-afridi",
    "name": "Shahid Afridi",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-sohaib-maqsood",
    "name": "Sohaib Maqsood",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-sohail-khan",
    "name": "Sohail Khan",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 24,
    "bowling": 73,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-umar-akmal",
    "name": "Umar Akmal",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "batsman",
    "batting": 86,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2015-wahab-riaz",
    "name": "Wahab Riaz",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 38,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-yasir-shah",
    "name": "Yasir Shah",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 28,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2015-younis-khan",
    "name": "Younis Khan",
    "squadId": "pakistan-2015",
    "team": "Pakistan",
    "year": 2015,
    "role": "bowler",
    "batting": 35,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-aaron-phangiso",
    "name": "Aaron Phangiso",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 37,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-ab-de-villiers",
    "name": "AB de Villiers ( c & wk )",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2015-dale-steyn",
    "name": "Dale Steyn",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-david-miller",
    "name": "David Miller",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2015-faf-du-plessis",
    "name": "Faf du Plessis",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 84,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2015-farhaan-behardien",
    "name": "Farhaan Behardien",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2015-hashim-amla",
    "name": "Hashim Amla",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "batsman",
    "batting": 94,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2015-imran-tahir",
    "name": "Imran Tahir",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 21,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-jp-duminy",
    "name": "JP Duminy",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2015-kyle-abbott",
    "name": "Kyle Abbott",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "batsman",
    "batting": 95,
    "bowling": 29,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2015-morn-morkel",
    "name": "Morné Morkel",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 33,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-quinton-de-kock",
    "name": "Quinton de Kock",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "batsman",
    "batting": 90,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2015-rilee-rossouw",
    "name": "Rilee Rossouw",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 37,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-vernon-philander",
    "name": "Vernon Philander",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 25,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2015-wayne-parnell",
    "name": "Wayne Parnell",
    "squadId": "south-africa-2015",
    "team": "South Africa",
    "year": 2015,
    "role": "bowler",
    "batting": 37,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-angelo-mathews",
    "name": "Angelo Mathews",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-dushmantha-chameera",
    "name": "Dushmantha Chameera",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 94,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2015-kumar-sangakkara",
    "name": "Kumar Sangakkara",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-kusal-perera",
    "name": "Kusal Perera",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 85,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2015-lahiru-thirimanne",
    "name": "Lahiru Thirimanne",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 90,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2015-lasith-malinga",
    "name": "Lasith Malinga",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 37,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-mahela-jayawardene",
    "name": "Mahela Jayawardene",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2015-nuwan-kulasekara",
    "name": "Nuwan Kulasekara",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 87,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2015-sachithra-senanayake",
    "name": "Sachithra Senanayake",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-seekkuge-prasanna",
    "name": "Seekkuge Prasanna",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 16,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-suranga-lakmal",
    "name": "Suranga Lakmal",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 78,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2015-tharindu-kaushal",
    "name": "Tharindu Kaushal",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2015-thisara-perera",
    "name": "Thisara Perera",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2015-tillakaratne-dilshan",
    "name": "Tillakaratne Dilshan",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 70,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2015-upul-tharanga",
    "name": "Upul Tharanga",
    "squadId": "sri-lanka-2015",
    "team": "Sri Lanka",
    "year": 2015,
    "role": "batsman",
    "batting": 89,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2015-andre-russell",
    "name": "Andre Russell",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 37,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-chris-gayle",
    "name": "Chris Gayle",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 80,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2015-darren-sammy",
    "name": "Darren Sammy",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "batsman",
    "batting": 80,
    "bowling": 34,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2015-denesh-ramdin",
    "name": "Denesh Ramdin",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-2015-dwayne-smith",
    "name": "Dwayne Smith",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 23,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-jason-holder",
    "name": "Jason Holder",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2015-jerome-taylor",
    "name": "Jerome Taylor",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 20,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-johnson-charles",
    "name": "Johnson Charles",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "batsman",
    "batting": 87,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2015-jonathan-carter",
    "name": "Jonathan Carter",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 80,
    "bowling": 87,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2015-kemar-roach",
    "name": "Kemar Roach",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 35,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-lendl-simmons",
    "name": "Lendl Simmons",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 31,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-marlon-samuels",
    "name": "Marlon Samuels",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 35,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-nikita-miller",
    "name": "Nikita Miller",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 36,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2015-sheldon-cottrell",
    "name": "Sheldon Cottrell",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "bowler",
    "batting": 83,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2015-sulieman-benn",
    "name": "Sulieman Benn",
    "squadId": "west-indies-2015",
    "team": "West Indies",
    "year": 2015,
    "role": "batsman",
    "batting": 79,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-brendan-taylor",
    "name": "Brendan Taylor ( vc & wk )",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "wicketkeeper",
    "batting": 64,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "zimbabwe-2015-chamu-chibhabha",
    "name": "Chamu Chibhabha",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 65,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-craig-ervine",
    "name": "Craig Ervine",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 65,
    "bowling": 60,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-elton-chigumbura",
    "name": "Elton Chigumbura",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 62,
    "bowling": 67,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-hamilton-masakadza",
    "name": "Hamilton Masakadza",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 66,
    "bowling": 62,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-prosper-utseya",
    "name": "Prosper Utseya",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 72,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2015-regis-chakabva",
    "name": "Regis Chakabva",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 74,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "zimbabwe-2015-sean-williams",
    "name": "Sean Williams",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 21,
    "bowling": 69,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2015-sikandar-raza",
    "name": "Sikandar Raza",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2015-solomon-mire",
    "name": "Solomon Mire",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 22,
    "bowling": 70,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2015-stuart-matsikenyeri",
    "name": "Stuart Matsikenyeri",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 35,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2015-tafadzwa-kamungozi",
    "name": "Tafadzwa Kamungozi",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 67,
    "bowling": 64,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-tawanda-mupariwa",
    "name": "Tawanda Mupariwa",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 31,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "zimbabwe-2015-tendai-chatara",
    "name": "Tendai Chatara",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "batsman",
    "batting": 72,
    "bowling": 66,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "zimbabwe-2015-tinashe-panyangara",
    "name": "Tinashe Panyangara",
    "squadId": "zimbabwe-2015",
    "team": "Zimbabwe",
    "year": 2015,
    "role": "bowler",
    "batting": 30,
    "bowling": 74,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2019-aftab-alam",
    "name": "Aftab Alam",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "batsman",
    "batting": 80,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2019-asghar-afghan",
    "name": "Asghar Afghan",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 30,
    "bowling": 80,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2019-dawlat-zadran",
    "name": "Dawlat Zadran",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 29,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2019-gulbadin-naib",
    "name": "Gulbadin Naib",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 82,
    "bowling": 84,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2019-hamid-hassan",
    "name": "Hamid Hassan",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 72,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2019-hashmatullah-shahidi",
    "name": "Hashmatullah Shahidi",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "batsman",
    "batting": 82,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2019-hazratullah-zazai",
    "name": "Hazratullah Zazai",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "batsman",
    "batting": 80,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2019-mohammad-nabi",
    "name": "Mohammad Nabi",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 80,
    "bowling": 76,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2019-mohammad-shahzad",
    "name": "Mohammad Shahzad",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "afghanistan-2019-mujeeb-ur-rahman",
    "name": "Mujeeb Ur Rahman",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 24,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2019-najibullah-zadran",
    "name": "Najibullah Zadran",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 31,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "afghanistan-2019-noor-ali-zadran",
    "name": "Noor Ali Zadran",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "batsman",
    "batting": 72,
    "bowling": 32,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2019-rahmat-shah",
    "name": "Rahmat Shah",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "batsman",
    "batting": 82,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "afghanistan-2019-rashid-khan",
    "name": "Rashid Khan",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 62,
    "bowling": 92,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "afghanistan-2019-samiullah-shinwari",
    "name": "Samiullah Shinwari",
    "squadId": "afghanistan-2019",
    "team": "Afghanistan",
    "year": 2019,
    "role": "bowler",
    "batting": 69,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2019-aaron-finch",
    "name": "Aaron Finch",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2019-adam-zampa",
    "name": "Adam Zampa",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 34,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-alex-carey",
    "name": "Alex Carey ( vc , wk )",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2019-david-warner",
    "name": "David Warner",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 92,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2019-glenn-maxwell",
    "name": "Glenn Maxwell",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2019-jason-behrendorff",
    "name": "Jason Behrendorff",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 83,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2019-jhye-richardson",
    "name": "Jhye Richardson",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-kane-richardson",
    "name": "Kane Richardson",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 17,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-marcus-stoinis",
    "name": "Marcus Stoinis",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2019-mitchell-starc",
    "name": "Mitchell Starc",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 36,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-nathan-lyon",
    "name": "Nathan Lyon",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 33,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-nathan-mitchell-coulter-nile",
    "name": "Nathan Mitchell Coulter-Nile",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-pat-cummins",
    "name": "Pat Cummins",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "bowler",
    "batting": 34,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2019-shaun-marsh",
    "name": "Shaun Marsh",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 93,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2019-steve-smith",
    "name": "Steve Smith",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2019-usman-khawaja",
    "name": "Usman Khawaja",
    "squadId": "australia-2019",
    "team": "Australia",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2019-bhuvneshwar-kumar",
    "name": "Bhuvneshwar Kumar",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2019-dinesh-karthik",
    "name": "Dinesh Karthik",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2019-hardik-pandya",
    "name": "Hardik Pandya",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 81,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2019-jasprit-bumrah",
    "name": "Jasprit Bumrah",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 24,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2019-kedar-jadhav",
    "name": "Kedar Jadhav",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 34,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2019-kl-rahul",
    "name": "KL Rahul",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2019-kuldeep-yadav",
    "name": "Kuldeep Yadav",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 18,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2019-mohammed-shami",
    "name": "Mohammed Shami",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 22,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "india-2019-ms-dhoni",
    "name": "MS Dhoni",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 92,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2019-ravindra-jadeja",
    "name": "Ravindra Jadeja",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 78,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2019-rishabh-pant",
    "name": "Rishabh Pant",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 81,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "india-2019-rohit-sharma",
    "name": "Rohit Sharma",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "batsman",
    "batting": 94,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2019-shikhar-dhawan",
    "name": "Shikhar Dhawan",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2019-vijay-shankar",
    "name": "Vijay Shankar",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "batsman",
    "batting": 88,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "india-2019-virat-kohli",
    "name": "Virat Kohli",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "batsman",
    "batting": 94,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "india-2019-yuzvendra-chahal",
    "name": "Yuzvendra Chahal",
    "squadId": "india-2019",
    "team": "India",
    "year": 2019,
    "role": "bowler",
    "batting": 25,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-abid-ali",
    "name": "Abid Ali",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-asif-ali",
    "name": "Asif Ali",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 20,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-babar-azam",
    "name": "Babar Azam",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 93,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-faheem-ashraf",
    "name": "Faheem Ashraf",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 79,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2019-fakhar-zaman",
    "name": "Fakhar Zaman",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 86,
    "bowling": 8,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-haris-sohail",
    "name": "Haris Sohail",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 25,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-hasan-ali",
    "name": "Hasan Ali",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 38,
    "bowling": 81,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-imad-wasim",
    "name": "Imad Wasim",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 80,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2019-imam-ul-haq",
    "name": "Imam-ul-Haq",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-junaid-khan",
    "name": "Junaid Khan",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 34,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-mohammad-amir",
    "name": "Mohammad Amir",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 22,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-mohammad-hafeez",
    "name": "Mohammad Hafeez",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2019-mohammad-hasnain",
    "name": "Mohammad Hasnain",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 19,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-sarfaraz-ahmed",
    "name": "Sarfaraz Ahmed ( c , wk )",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "batsman",
    "batting": 93,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "pakistan-2019-shadab-khan",
    "name": "Shadab Khan",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 79,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "pakistan-2019-shaheen-afridi",
    "name": "Shaheen Afridi",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 28,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-shoaib-malik",
    "name": "Shoaib Malik",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 21,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "pakistan-2019-wahab-riaz",
    "name": "Wahab Riaz",
    "squadId": "pakistan-2019",
    "team": "Pakistan",
    "year": 2019,
    "role": "bowler",
    "batting": 38,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-aiden-markram",
    "name": "Aiden Markram",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2019-andile-phehlukwayo",
    "name": "Andile Phehlukwayo",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 85,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-anrich-nortje",
    "name": "Anrich Nortje",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 25,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-chris-morris",
    "name": "Chris Morris",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 74,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-dale-steyn",
    "name": "Dale Steyn",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 17,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-david-miller",
    "name": "David Miller",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-dwaine-pretorius",
    "name": "Dwaine Pretorius",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 88,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-faf-du-plessis",
    "name": "Faf du Plessis",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 84,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-hashim-amla",
    "name": "Hashim Amla",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 94,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2019-imran-tahir",
    "name": "Imran Tahir",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 21,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-jp-duminy",
    "name": "JP Duminy",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 82,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2019-kagiso-rabada",
    "name": "Kagiso Rabada",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 20,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-lungi-ngidi",
    "name": "Lungi Ngidi",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 27,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2019-quinton-de-kock",
    "name": "Quinton de Kock ( vc , wk )",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 90,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2019-rassie-van-der-dussen",
    "name": "Rassie van der Dussen",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "batsman",
    "batting": 82,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2019-tabraiz-shamsi",
    "name": "Tabraiz Shamsi",
    "squadId": "south-africa-2019",
    "team": "South Africa",
    "year": 2019,
    "role": "bowler",
    "batting": 36,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2019-angelo-mathews",
    "name": "Angelo Mathews",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 22,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2019-avishka-fernando",
    "name": "Avishka Fernando",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 82,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2019-dhananjaya-de-silva",
    "name": "Dhananjaya de Silva",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2019-dimuth-karunaratne",
    "name": "Dimuth Karunaratne",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 78,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2019-isuru-udana",
    "name": "Isuru Udana",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 78,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2019-jeevan-mendis",
    "name": "Jeevan Mendis",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2019-jeffrey-vandersay",
    "name": "Jeffrey Vandersay",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 25,
    "bowling": 79,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2019-kusal-mendis",
    "name": "Kusal Mendis",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-2019-kusal-perera",
    "name": "Kusal Perera",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 85,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2019-lahiru-thirimanne",
    "name": "Lahiru Thirimanne",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "batsman",
    "batting": 90,
    "bowling": 26,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2019-lasith-malinga",
    "name": "Lasith Malinga",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 37,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2019-milinda-siriwardana",
    "name": "Milinda Siriwardana",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 74,
    "bowling": 75,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2019-nuwan-pradeep",
    "name": "Nuwan Pradeep",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 39,
    "bowling": 89,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2019-suranga-lakmal",
    "name": "Suranga Lakmal",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 78,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2019-thisara-perera",
    "name": "Thisara Perera",
    "squadId": "sri-lanka-2019",
    "team": "Sri Lanka",
    "year": 2019,
    "role": "bowler",
    "batting": 27,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-andre-russell",
    "name": "Andre Russell",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 37,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-ashley-nurse",
    "name": "Ashley Nurse",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 35,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-carlos-brathwaite",
    "name": "Carlos Brathwaite",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 78,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2019-chris-gayle",
    "name": "Chris Gayle",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 80,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2019-darren-bravo",
    "name": "Darren Bravo",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 84,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2019-evin-lewis",
    "name": "Evin Lewis",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "batsman",
    "batting": 87,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2019-fabian-allen",
    "name": "Fabian Allen",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 75,
    "bowling": 78,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2019-jason-holder",
    "name": "Jason Holder",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "batsman",
    "batting": 91,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "west-indies-2019-kemar-roach",
    "name": "Kemar Roach",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 35,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-nicholas-pooran",
    "name": "Nicholas Pooran",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-2019-oshane-thomas",
    "name": "Oshane Thomas",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 30,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-shai-hope",
    "name": "Shai Hope",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "west-indies-2019-shannon-gabriel",
    "name": "Shannon Gabriel",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 35,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "west-indies-2019-sheldon-cottrell",
    "name": "Sheldon Cottrell",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "bowler",
    "batting": 83,
    "bowling": 86,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "west-indies-2019-shimron-hetmyer",
    "name": "Shimron Hetmyer",
    "squadId": "west-indies-2019",
    "team": "West Indies",
    "year": 2019,
    "role": "batsman",
    "batting": 89,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2023-adam-zampa",
    "name": "Adam Zampa",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 34,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2023-alex-carey",
    "name": "Alex Carey",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2023-ashton-agar",
    "name": "Ashton Agar",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-cameron-green",
    "name": "Cameron Green",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-david-warner",
    "name": "David Warner",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 92,
    "bowling": 10,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2023-glenn-maxwell",
    "name": "Glenn Maxwell",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 73,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-josh-hazlewood",
    "name": "Josh Hazlewood",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 21,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2023-josh-inglis",
    "name": "Josh Inglis",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 90,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "australia-2023-marcus-stoinis",
    "name": "Marcus Stoinis",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-marnus-labuschagne",
    "name": "Marnus Labuschagne",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 88,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-mitchell-marsh",
    "name": "Mitchell Marsh",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "australia-2023-mitchell-starc",
    "name": "Mitchell Starc",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 36,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2023-pat-cummins",
    "name": "Pat Cummins",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 34,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2023-sean-abbott",
    "name": "Sean Abbott",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "bowler",
    "batting": 18,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "australia-2023-steve-smith",
    "name": "Steve Smith",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "australia-2023-travis-head",
    "name": "Travis Head",
    "squadId": "australia-2023",
    "team": "Australia",
    "year": 2023,
    "role": "batsman",
    "batting": 93,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2023-anamul-haque",
    "name": "Anamul Haque",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 76,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2023-hasan-mahmud",
    "name": "Hasan Mahmud",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 18,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2023-litton-das",
    "name": "Litton Das",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 83,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2023-mahedi-hasan",
    "name": "Mahedi Hasan",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 80,
    "bowling": 81,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2023-mahmudullah",
    "name": "Mahmudullah",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 84,
    "bowling": 71,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2023-mehidy-hasan",
    "name": "Mehidy Hasan",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 79,
    "bowling": 77,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2023-mushfiqur-rahim",
    "name": "Mushfiqur Rahim",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 89,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "bangladesh-2023-mustafizur-rahman",
    "name": "Mustafizur Rahman",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 22,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2023-najmul-hossain-shanto",
    "name": "Najmul Hossain Shanto",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 86,
    "bowling": 21,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2023-nasum-ahmed",
    "name": "Nasum Ahmed",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 17,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2023-shakib-al-hasan",
    "name": "Shakib Al Hasan",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 92,
    "bowling": 90,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "bangladesh-2023-shoriful-islam",
    "name": "Shoriful Islam",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 25,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2023-tanzid-hasan",
    "name": "Tanzid Hasan",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 81,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2023-tanzim-hasan-sakib",
    "name": "Tanzim Hasan Sakib",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "bowler",
    "batting": 17,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "bangladesh-2023-taskin-ahmed",
    "name": "Taskin Ahmed",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 87,
    "bowling": 30,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "bangladesh-2023-towhid-hridoy",
    "name": "Towhid Hridoy",
    "squadId": "bangladesh-2023",
    "team": "Bangladesh",
    "year": 2023,
    "role": "batsman",
    "batting": 85,
    "bowling": 24,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-adil-rashid",
    "name": "Adil Rashid",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 18,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2023-ben-stokes",
    "name": "Ben Stokes",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 91,
    "bowling": 79,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2023-brydon-carse",
    "name": "Brydon Carse",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 35,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2023-chris-woakes",
    "name": "Chris Woakes",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 74,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2023-david-willey",
    "name": "David Willey",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 85,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "england-2023-dawid-malan",
    "name": "Dawid Malan",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 86,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-gus-atkinson",
    "name": "Gus Atkinson",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 28,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2023-harry-brook",
    "name": "Harry Brook",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 86,
    "bowling": 19,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-joe-root",
    "name": "Joe Root",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 92,
    "bowling": 22,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-jonny-bairstow",
    "name": "Jonny Bairstow",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 91,
    "bowling": 6,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-jos-buttler",
    "name": "Jos Buttler ( c , wk )",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 93,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "england-2023-liam-livingstone",
    "name": "Liam Livingstone",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 91,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-mark-wood",
    "name": "Mark Wood",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 18,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2023-moeen-ali",
    "name": "Moeen Ali",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "batsman",
    "batting": 79,
    "bowling": 23,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "england-2023-reece-topley",
    "name": "Reece Topley",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 35,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "england-2023-sam-curran",
    "name": "Sam Curran",
    "squadId": "england-2023",
    "team": "England",
    "year": 2023,
    "role": "bowler",
    "batting": 30,
    "bowling": 92,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-daryl-mitchell",
    "name": "Daryl Mitchell",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 78,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2023-devon-conway",
    "name": "Devon Conway",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 80,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-2023-glenn-phillips",
    "name": "Glenn Phillips",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "batsman",
    "batting": 78,
    "bowling": 28,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2023-ish-sodhi",
    "name": "Ish Sodhi",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 25,
    "bowling": 91,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-james-neesham",
    "name": "James Neesham",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "batsman",
    "batting": 87,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2023-kane-williamson",
    "name": "Kane Williamson",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "batsman",
    "batting": 93,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2023-kyle-jamieson",
    "name": "Kyle Jamieson",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 19,
    "bowling": 83,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-lockie-ferguson",
    "name": "Lockie Ferguson",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 18,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-mark-chapman",
    "name": "Mark Chapman",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "batsman",
    "batting": 92,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "new-zealand-2023-matt-henry",
    "name": "Matt Henry",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 24,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-mitchell-santner",
    "name": "Mitchell Santner",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 76,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2023-rachin-ravindra",
    "name": "Rachin Ravindra",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 81,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "new-zealand-2023-tim-southee",
    "name": "Tim Southee",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 42,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-tom-latham",
    "name": "Tom Latham ( vc , wk )",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 84,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "new-zealand-2023-trent-boult",
    "name": "Trent Boult",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "bowler",
    "batting": 26,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "new-zealand-2023-will-young",
    "name": "Will Young",
    "squadId": "new-zealand-2023",
    "team": "New Zealand",
    "year": 2023,
    "role": "batsman",
    "batting": 75,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2023-aiden-markram",
    "name": "Aiden Markram",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 85,
    "bowling": 31,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2023-andile-phehlukwayo",
    "name": "Andile Phehlukwayo",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 85,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2023-anrich-nortje",
    "name": "Anrich Nortje",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 25,
    "bowling": 90,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-david-miller",
    "name": "David Miller",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 89,
    "bowling": 89,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2023-gerald-coetzee",
    "name": "Gerald Coetzee",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 27,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-heinrich-klaasen",
    "name": "Heinrich Klaasen",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "south-africa-2023-kagiso-rabada",
    "name": "Kagiso Rabada",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 20,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-keshav-maharaj",
    "name": "Keshav Maharaj",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 33,
    "bowling": 95,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-lizaad-williams",
    "name": "Lizaad Williams",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 26,
    "bowling": 87,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-lungi-ngidi",
    "name": "Lungi Ngidi",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 27,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-marco-jansen",
    "name": "Marco Jansen",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 82,
    "bowling": 88,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "south-africa-2023-quinton-de-kock",
    "name": "Quinton de Kock",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 90,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2023-rassie-van-der-dussen",
    "name": "Rassie van der Dussen",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 82,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2023-reeza-hendricks",
    "name": "Reeza Hendricks",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 83,
    "bowling": 25,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "south-africa-2023-sisanda-magala",
    "name": "Sisanda Magala",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 32,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-tabraiz-shamsi",
    "name": "Tabraiz Shamsi",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "bowler",
    "batting": 36,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "south-africa-2023-temba-bavuma",
    "name": "Temba Bavuma",
    "squadId": "south-africa-2023",
    "team": "South Africa",
    "year": 2023,
    "role": "batsman",
    "batting": 91,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-angelo-mathews",
    "name": "Angelo Mathews",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 22,
    "bowling": 94,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-chamika-karunaratne",
    "name": "Chamika Karunaratne",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 83,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2023-charith-asalanka",
    "name": "Charith Asalanka",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 82,
    "bowling": 18,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-dasun-shanaka",
    "name": "Dasun Shanaka",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 77,
    "bowling": 85,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2023-dhananjaya-de-silva",
    "name": "Dhananjaya de Silva",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 83,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2023-dilshan-madushanka",
    "name": "Dilshan Madushanka",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 31,
    "bowling": 86,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-dimuth-karunaratne",
    "name": "Dimuth Karunaratne",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 78,
    "bowling": 35,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-dunith-wellalage",
    "name": "Dunith Wellalage",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 74,
    "bowling": 82,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2023-dushan-hemantha",
    "name": "Dushan Hemantha",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 85,
    "bowling": 83,
    "blurb": "A dual-skill option who strengthens ODI balance."
  },
  {
    "id": "sri-lanka-2023-dushmantha-chameera",
    "name": "Dushmantha Chameera",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 94,
    "bowling": 33,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-kasun-rajitha",
    "name": "Kasun Rajitha",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 28,
    "bowling": 88,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-kusal-mendis",
    "name": "Kusal Mendis ( vc , wk )",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 75,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  },
  {
    "id": "sri-lanka-2023-kusal-perera",
    "name": "Kusal Perera",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 85,
    "bowling": 0,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-lahiru-kumara",
    "name": "Lahiru Kumara",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 19,
    "bowling": 85,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-maheesh-theekshana",
    "name": "Maheesh Theekshana",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 29,
    "bowling": 84,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-matheesha-pathirana",
    "name": "Matheesha Pathirana",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "bowler",
    "batting": 19,
    "bowling": 82,
    "blurb": "Bowling depth aimed at buying wickets, not just dots."
  },
  {
    "id": "sri-lanka-2023-pathum-nissanka",
    "name": "Pathum Nissanka",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "batsman",
    "batting": 81,
    "bowling": 14,
    "blurb": "A batting option built to give the XI structure and tempo."
  },
  {
    "id": "sri-lanka-2023-sadeera-samarawickrama",
    "name": "Sadeera Samarawickrama",
    "squadId": "sri-lanka-2023",
    "team": "Sri Lanka",
    "year": 2023,
    "role": "wicketkeeper",
    "batting": 78,
    "bowling": 0,
    "blurb": "Keeping security with one-day batting value."
  }
];



const ROLE_ORDER = ["batsman", "wicketkeeper", "bowler"];

const ROLE_LABELS = {
  batsman: "Batsman",
  wicketkeeper: "WK",
  bowler: "Bowler",
};

const REQUIRED_ROLES = {
  batsman: 1,
  wicketkeeper: 1,
  bowler: 1,
};

const STRIPPABLE_NAME_FLAGS = new Set([
  "c",
  "captain",
  "vc",
  "vice captain",
  "vice-captain",
  "wk",
]);

function parseNameFlags(value) {
  return value
    .toLowerCase()
    .replace(/\band\b/g, "&")
    .split(/[,/&]+/)
    .map((token) => token.trim().replace(/\s+/g, " "))
    .filter(Boolean);
}

function hasOnlyMetadataFlags(value) {
  const tokens = parseNameFlags(value);
  return tokens.length > 0 && tokens.every((token) => STRIPPABLE_NAME_FLAGS.has(token));
}

function normalizePlayerName(name) {
  return name
    .replace(/\(([^)]+)\)/g, (match, contents) => (hasOnlyMetadataFlags(contents) ? "" : match))
    .replace(/\s+/g, " ")
    .trim();
}

function hasWicketkeeperFlag(name) {
  const groups = [...name.matchAll(/\(([^)]+)\)/g)];
  return groups.some((group) => parseNameFlags(group[1]).includes("wk"));
}

const BASE_DRAFT_SQUADS = [
  {
    id: "india-1983",
    label: "India 1983",
    country: "India",
    year: 1983,
    note: "Swing, grit, and a lineup that still believes every total is defendable.",
  },
  {
    id: "pakistan-1992",
    label: "Pakistan 1992",
    country: "Pakistan",
    year: 1992,
    note: "Peak cornered-tigers energy with elite fast bowling upside.",
  },
  {
    id: "sri-lanka-1996",
    label: "Sri Lanka 1996",
    country: "Sri Lanka",
    year: 1996,
    note: "Aggressive ODI batting before most teams had caught up tactically.",
  },
  {
    id: "west-indies-1996",
    label: "West Indies 1996",
    country: "West Indies",
    year: 1996,
    note: "Silk in the top order and serious hostility with the new ball.",
  },
  {
    id: "australia-1999",
    label: "Australia 1999",
    country: "Australia",
    year: 1999,
    note: "Tournament steel, ruthless bowling, and no panic in tight finishes.",
  },
  {
    id: "south-africa-1999",
    label: "South Africa 1999",
    country: "South Africa",
    year: 1999,
    note: "Loaded with all-round quality and relentless seam options.",
  },
  {
    id: "india-2011",
    label: "India 2011",
    country: "India",
    year: 2011,
    note: "Control through the middle overs and batting built for pressure chases.",
  },
  {
    id: "australia-2015",
    label: "Australia 2015",
    country: "Australia",
    year: 2015,
    note: "Fast-scoring batting backed by left-arm pace and tournament punch.",
  },
  {
    id: "new-zealand-2019",
    label: "New Zealand 2019",
    country: "New Zealand",
    year: 2019,
    note: "Calm leadership and a bowling group that keeps dragging games deep.",
  },
  {
    id: "england-2019",
    label: "England 2019",
    country: "England",
    year: 2019,
    note: "Explosive white-ball batting with enough wicket-takers to back it up.",
  },
  {
    id: "bangladesh-2019",
    label: "Bangladesh 2019",
    country: "Bangladesh",
    year: 2019,
    note: "A golden modern ODI core with elite all-round production.",
  },
  {
    id: "india-2023",
    label: "India 2023",
    country: "India",
    year: 2023,
    note: "Top-order command and a fast-bowling attack that can bury a chase.",
  },
  {
    id: "pakistan-2023",
    label: "Pakistan 2023",
    country: "Pakistan",
    year: 2023,
    note: "Stylish batting and attack leaders who can crack open powerplays.",
  },
  {
    id: "afghanistan-2023",
    label: "Afghanistan 2023",
    country: "Afghanistan",
    year: 2023,
    note: "Spin-heavy threat with genuine upset potential and fearless batting moments.",
  },
  {
    id: "zimbabwe-1999",
    label: "Zimbabwe 1999",
    country: "Zimbabwe",
    year: 1999,
    note: "A golden Zimbabwe side with proper all-round stubbornness and upset history.",
  },
  {
    id: "kenya-2003",
    label: "Kenya 2003",
    country: "Kenya",
    year: 2003,
    note: "The semifinal run side that proved disciplined ODI cricket could punch above its weight.",
  },
  {
    id: "bermuda-2007",
    label: "Bermuda 2007",
    country: "Bermuda",
    year: 2007,
    note: "A landmark qualifier squad with experienced club-cricket steel.",
  },
  {
    id: "canada-2011",
    label: "Canada 2011",
    country: "Canada",
    year: 2011,
    note: "A multinational ODI unit with hitters, seamers, and plenty of unpredictability.",
  },
  {
    id: "ireland-2011",
    label: "Ireland 2011",
    country: "Ireland",
    year: 2011,
    note: "The giant-killing Irish core that could turn one session into chaos.",
  },
  {
    id: "scotland-2015",
    label: "Scotland 2015",
    country: "Scotland",
    year: 2015,
    note: "A balanced modern Scotland side with real batting craft and honest seam depth.",
  },
  {
    id: "uae-2015",
    label: "UAE 2015",
    country: "United Arab Emirates",
    year: 2015,
    note: "An associate squad with experienced middle-order batting and crafty spin support.",
  },
  {
    id: "namibia-2003",
    label: "Namibia 2003",
    country: "Namibia",
    year: 2003,
    note: "Namibia's breakthrough World Cup side, gritty and highly motivated.",
  },
  {
    id: "netherlands-2023",
    label: "Netherlands 2023",
    country: "Netherlands",
    year: 2023,
    note: "A smart Dutch side with modern all-round depth and real tactical flexibility.",
  },
];

const BASE_PLAYER_POOL = [
  {
    id: "sunil-gavaskar",
    name: "Sunil Gavaskar",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 87,
    bowling: 12,
    blurb: "Technical certainty for tricky surfaces and pressure starts.",
  },
  {
    id: "kris-srikkanth",
    name: "Kris Srikkanth",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 82,
    bowling: 20,
    blurb: "Chaos-up-top intent before that became the white-ball default.",
  },
  {
    id: "mohinder-amarnath",
    name: "Mohinder Amarnath",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "batsman",
    batting: 80,
    bowling: 72,
    blurb: "A pressure sponge who still gives you usable overs.",
  },
  {
    id: "syed-kirmani",
    name: "Syed Kirmani",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "wicketkeeper",
    batting: 72,
    bowling: 0,
    blurb: "Safe hands and composed lower-order resistance.",
  },
  {
    id: "kapil-dev",
    name: "Kapil Dev",
    squadId: "india-1983",
    team: "India",
    year: 1983,
    role: "bowler",
    batting: 84,
    bowling: 88,
    blurb: "Leadership, seam, and one of ODI cricket's original game-breakers.",
  },
  {
    id: "javed-miandad",
    name: "Javed Miandad",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 90,
    bowling: 18,
    blurb: "Street-smart control and total command of a chase.",
  },
  {
    id: "inzamam-ul-haq",
    name: "Inzamam-ul-Haq",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 89,
    bowling: 12,
    blurb: "Big-tournament timing with heavy middle-order presence.",
  },
  {
    id: "aamir-sohail",
    name: "Aamir Sohail",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "batsman",
    batting: 82,
    bowling: 18,
    blurb: "Left-handed tempo setter with strong ODI range.",
  },
  {
    id: "moin-khan",
    name: "Moin Khan",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Lower-order scrapper with sharp glovework.",
  },
  {
    id: "imran-khan",
    name: "Imran Khan",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 83,
    bowling: 91,
    blurb: "Aura, new-ball discipline, and champion-level nerve.",
  },
  {
    id: "wasim-akram",
    name: "Wasim Akram",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 54,
    bowling: 96,
    blurb: "Reverse swing royalty and a complete ODI fast-bowling weapon.",
  },
  {
    id: "waqar-younis",
    name: "Waqar Younis",
    squadId: "pakistan-1992",
    team: "Pakistan",
    year: 1992,
    role: "bowler",
    batting: 30,
    bowling: 91,
    blurb: "Pace, dip, yorkers, and stump-shattering endings.",
  },
  {
    id: "aravinda-de-silva",
    name: "Aravinda de Silva",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 92,
    bowling: 34,
    blurb: "The calm genius behind Sri Lanka's ODI leap forward.",
  },
  {
    id: "sanath-jayasuriya",
    name: "Sanath Jayasuriya",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 93,
    bowling: 76,
    blurb: "A powerplay revolution in human form.",
  },
  {
    id: "asaranka-gurusinha",
    name: "Asanka Gurusinha",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "batsman",
    batting: 80,
    bowling: 12,
    blurb: "Glue batting that let the stars attack around him.",
  },
  {
    id: "romesh-kaluwitharana",
    name: "Romesh Kaluwitharana",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "wicketkeeper",
    batting: 83,
    bowling: 0,
    blurb: "A wicketkeeper-opener who helped redefine ODI starts.",
  },
  {
    id: "muttiah-muralitharan",
    name: "Muttiah Muralitharan",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 22,
    bowling: 95,
    blurb: "Middle-over spin pressure that changes how innings breathe.",
  },
  {
    id: "chaminda-vaas",
    name: "Chaminda Vaas",
    squadId: "sri-lanka-1996",
    team: "Sri Lanka",
    year: 1996,
    role: "bowler",
    batting: 38,
    bowling: 89,
    blurb: "Left-arm seam and economy that squeezes plans dry.",
  },
  {
    id: "brian-lara",
    name: "Brian Lara",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 97,
    bowling: 10,
    blurb: "A batting genius with the kind of ceiling only superstars get.",
  },
  {
    id: "shivnarine-chanderpaul",
    name: "Shivnarine Chanderpaul",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 86,
    bowling: 18,
    blurb: "Unorthodox shape, highly orthodox run production.",
  },
  {
    id: "carl-hooper",
    name: "Carl Hooper",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "batsman",
    batting: 84,
    bowling: 72,
    blurb: "A smooth all-round package with extra off-spin utility.",
  },
  {
    id: "junior-murray",
    name: "Junior Murray",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "wicketkeeper",
    batting: 76,
    bowling: 0,
    blurb: "Functional lower-order runs and tidy keeping.",
  },
  {
    id: "curtly-ambrose",
    name: "Curtly Ambrose",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 20,
    bowling: 92,
    blurb: "Bounce, menace, and lengths that felt permanently awkward.",
  },
  {
    id: "courtney-walsh",
    name: "Courtney Walsh",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 22,
    bowling: 91,
    blurb: "Relentless seam bowling with big-tournament control.",
  },
  {
    id: "ian-bishop",
    name: "Ian Bishop",
    squadId: "west-indies-1996",
    team: "West Indies",
    year: 1996,
    role: "bowler",
    batting: 24,
    bowling: 87,
    blurb: "Smart pace bowling with lift and late-over value.",
  },
  {
    id: "ricky-ponting",
    name: "Ricky Ponting",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 97,
    bowling: 16,
    blurb: "A final-boss No. 3 who earned his place in the 95-plus tier.",
  },
  {
    id: "michael-bevan",
    name: "Michael Bevan",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 88,
    bowling: 26,
    blurb: "The original chase mechanic in human form.",
  },
  {
    id: "steve-waugh",
    name: "Steve Waugh",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "batsman",
    batting: 86,
    bowling: 68,
    blurb: "Tournament steel and deceptively useful overs.",
  },
  {
    id: "adam-gilchrist",
    name: "Adam Gilchrist",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "wicketkeeper",
    batting: 95,
    bowling: 0,
    blurb: "A wicketkeeper-opener who always threatened to break the script.",
  },
  {
    id: "shane-warne",
    name: "Shane Warne",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 36,
    bowling: 96,
    blurb: "One of the few bowlers who belongs comfortably in the 95-plus tier.",
  },
  {
    id: "glenn-mcgrath",
    name: "Glenn McGrath",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 18,
    bowling: 95,
    blurb: "Metronomic accuracy and major-event suffocation.",
  },
  {
    id: "damien-fleming",
    name: "Damien Fleming",
    squadId: "australia-1999",
    team: "Australia",
    year: 1999,
    role: "bowler",
    batting: 24,
    bowling: 84,
    blurb: "Swing and control that fit beautifully around the headline stars.",
  },
  {
    id: "herschelle-gibbs",
    name: "Herschelle Gibbs",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 90,
    bowling: 14,
    blurb: "Shot range and powerplay damage in equal measure.",
  },
  {
    id: "jacques-kallis",
    name: "Jacques Kallis",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 92,
    bowling: 81,
    blurb: "Structure with the bat, control with the ball, value everywhere.",
  },
  {
    id: "jonty-rhodes",
    name: "Jonty Rhodes",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "batsman",
    batting: 83,
    bowling: 22,
    blurb: "A sharp ODI middle-order operator who keeps tempo honest.",
  },
  {
    id: "mark-boucher",
    name: "Mark Boucher",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "Dependable keeping with useful lower-order force.",
  },
  {
    id: "lance-klusener",
    name: "Lance Klusener",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 86,
    bowling: 84,
    blurb: "Brute-force finishing and a serious seam-up wicket threat.",
  },
  {
    id: "shaun-pollock",
    name: "Shaun Pollock",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 72,
    bowling: 89,
    blurb: "Line, length, brains, and genuine batting depth.",
  },
  {
    id: "allan-donald",
    name: "Allan Donald",
    squadId: "south-africa-1999",
    team: "South Africa",
    year: 1999,
    role: "bowler",
    batting: 18,
    bowling: 90,
    blurb: "Hard pace and relentless hostility through the deck.",
  },
  {
    id: "sachin-tendulkar",
    name: "Sachin Tendulkar",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 98,
    bowling: 28,
    blurb: "Run-making certainty and a true 95-plus all-timer.",
  },
  {
    id: "virender-sehwag",
    name: "Virender Sehwag",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 91,
    bowling: 10,
    blurb: "An opening overs detonator with no patience for sighters.",
  },
  {
    id: "virat-kohli",
    name: "Virat Kohli",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 94,
    bowling: 8,
    blurb: "The chase engine you trust when the required rate tightens.",
  },
  {
    id: "ms-dhoni",
    name: "MS Dhoni",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "wicketkeeper",
    batting: 92,
    bowling: 0,
    blurb: "Finishing brains, finishing power, and permanent calm.",
  },
  {
    id: "yuvraj-singh",
    name: "Yuvraj Singh",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "batsman",
    batting: 90,
    bowling: 78,
    blurb: "A tournament-shaping all-round ODI package.",
  },
  {
    id: "zaheer-khan",
    name: "Zaheer Khan",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "bowler",
    batting: 22,
    bowling: 89,
    blurb: "New-ball thinking and a brilliant slower-ball toolkit.",
  },
  {
    id: "harbhajan-singh",
    name: "Harbhajan Singh",
    squadId: "india-2011",
    team: "India",
    year: 2011,
    role: "bowler",
    batting: 30,
    bowling: 86,
    blurb: "A middle-over off-spin pressure valve with personality.",
  },
  {
    id: "david-warner",
    name: "David Warner",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 92,
    bowling: 10,
    blurb: "Powerplay damage that changes field settings instantly.",
  },
  {
    id: "steve-smith",
    name: "Steve Smith",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 93,
    bowling: 18,
    blurb: "Control, tempo, and run accumulation from awkward angles.",
  },
  {
    id: "glenn-maxwell",
    name: "Glenn Maxwell",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "batsman",
    batting: 89,
    bowling: 73,
    blurb: "High-variance batting with very real off-spin value.",
  },
  {
    id: "brad-haddin",
    name: "Brad Haddin",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "wicketkeeper",
    batting: 82,
    bowling: 0,
    blurb: "Busy ODI keeper-batter with final-stage edge.",
  },
  {
    id: "mitchell-starc",
    name: "Mitchell Starc",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 36,
    bowling: 95,
    blurb: "Left-arm thunder and one of ODI cricket's true 95-plus bowlers.",
  },
  {
    id: "mitchell-johnson",
    name: "Mitchell Johnson",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 48,
    bowling: 88,
    blurb: "Pace and intimidation with extra lower-order sting.",
  },
  {
    id: "james-faulkner",
    name: "James Faulkner",
    squadId: "australia-2015",
    team: "Australia",
    year: 2015,
    role: "bowler",
    batting: 79,
    bowling: 80,
    blurb: "A proper white-ball all-round specialist.",
  },
  {
    id: "kane-williamson",
    name: "Kane Williamson",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 93,
    bowling: 18,
    blurb: "Low pulse, high IQ, ideal for knockout cricket.",
  },
  {
    id: "martin-guptill",
    name: "Martin Guptill",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 8,
    blurb: "A clean ball-striker who can flatten group games quickly.",
  },
  {
    id: "ross-taylor",
    name: "Ross Taylor",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 89,
    bowling: 10,
    blurb: "Middle-order control with strong spin hitting instincts.",
  },
  {
    id: "tom-latham",
    name: "Tom Latham",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "Reliable keeping with left-handed batting balance.",
  },
  {
    id: "jimmy-neesham",
    name: "Jimmy Neesham",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "batsman",
    batting: 78,
    bowling: 74,
    blurb: "A utility all-round option who can change an innings late.",
  },
  {
    id: "trent-boult",
    name: "Trent Boult",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 26,
    bowling: 90,
    blurb: "Early swing and clever angles for white-ball control.",
  },
  {
    id: "tim-southee",
    name: "Tim Southee",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 42,
    bowling: 87,
    blurb: "New-ball craft and valuable late-order hitting.",
  },
  {
    id: "lockie-ferguson",
    name: "Lockie Ferguson",
    squadId: "new-zealand-2019",
    team: "New Zealand",
    year: 2019,
    role: "bowler",
    batting: 18,
    bowling: 88,
    blurb: "High pace through the middle overs with wicket-taking upside.",
  },
  {
    id: "joe-root",
    name: "Joe Root",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 92,
    bowling: 22,
    blurb: "The organizer who makes aggressive batting cards feel stable.",
  },
  {
    id: "jason-roy",
    name: "Jason Roy",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 8,
    blurb: "Front-foot aggression that forces defensive bowling plans early.",
  },
  {
    id: "ben-stokes",
    name: "Ben Stokes",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 91,
    bowling: 79,
    blurb: "One of white-ball cricket's premier clutch all-rounders.",
  },
  {
    id: "jos-buttler",
    name: "Jos Buttler",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "wicketkeeper",
    batting: 93,
    bowling: 0,
    blurb: "Late-overs violence with a premium keeper-batter profile.",
  },
  {
    id: "eoin-morgan",
    name: "Eoin Morgan",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "batsman",
    batting: 88,
    bowling: 6,
    blurb: "Leadership and match-up aggression in the middle order.",
  },
  {
    id: "chris-woakes",
    name: "Chris Woakes",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 74,
    bowling: 83,
    blurb: "Quality seam bowling with genuine batting depth.",
  },
  {
    id: "jofra-archer",
    name: "Jofra Archer",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 26,
    bowling: 91,
    blurb: "High pace and high leverage in the biggest overs.",
  },
  {
    id: "adil-rashid",
    name: "Adil Rashid",
    squadId: "england-2019",
    team: "England",
    year: 2019,
    role: "bowler",
    batting: 18,
    bowling: 88,
    blurb: "Attacking leg spin that buys wickets instead of just control.",
  },
  {
    id: "tamim-iqbal",
    name: "Tamim Iqbal",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 87,
    bowling: 8,
    blurb: "An ODI anchor-opener with enough power to own the arc.",
  },
  {
    id: "shakib-al-hasan",
    name: "Shakib Al Hasan",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 92,
    bowling: 90,
    blurb: "A long-time ICC No. 1 all-round benchmark and a monster ODI value pick.",
  },
  {
    id: "mushfiqur-rahim",
    name: "Mushfiqur Rahim",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "wicketkeeper",
    batting: 89,
    bowling: 0,
    blurb: "Busy, high-skill batting with dependable keeping.",
  },
  {
    id: "mahmudullah",
    name: "Mahmudullah",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "batsman",
    batting: 84,
    bowling: 71,
    blurb: "A reliable finishing bat with real off-spin utility.",
  },
  {
    id: "mashrafe-mortaza",
    name: "Mashrafe Mortaza",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 58,
    bowling: 82,
    blurb: "Leadership and seam craft more than raw pace by this stage.",
  },
  {
    id: "mustafizur-rahman",
    name: "Mustafizur Rahman",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 22,
    bowling: 86,
    blurb: "Cutters, angle, and death-overs discomfort.",
  },
  {
    id: "mohammad-saifuddin",
    name: "Mohammad Saifuddin",
    squadId: "bangladesh-2019",
    team: "Bangladesh",
    year: 2019,
    role: "bowler",
    batting: 69,
    bowling: 74,
    blurb: "Lower-order runs and functional seam support.",
  },
  {
    id: "rohit-sharma",
    name: "Rohit Sharma",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 94,
    bowling: 10,
    blurb: "A six-hitting starter pistol for ODI innings.",
  },
  {
    id: "shubman-gill",
    name: "Shubman Gill",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 91,
    bowling: 8,
    blurb: "Elegant modern ODI tempo with full-field scoring range.",
  },
  {
    id: "shreyas-iyer",
    name: "Shreyas Iyer",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "batsman",
    batting: 88,
    bowling: 6,
    blurb: "Strong pace-hitting through the middle overs.",
  },
  {
    id: "kl-rahul",
    name: "KL Rahul",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "wicketkeeper",
    batting: 84,
    bowling: 0,
    blurb: "A calm ODI consolidator with tidy glovework.",
  },
  {
    id: "ravindra-jadeja",
    name: "Ravindra Jadeja",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 78,
    bowling: 86,
    blurb: "Spin squeeze, batting control, and complete all-round balance.",
  },
  {
    id: "jasprit-bumrah",
    name: "Jasprit Bumrah",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 24,
    bowling: 95,
    blurb: "A shape-shifting ODI spell machine in the true superstar bracket.",
  },
  {
    id: "mohammed-shami",
    name: "Mohammed Shami",
    squadId: "india-2023",
    team: "India",
    year: 2023,
    role: "bowler",
    batting: 22,
    bowling: 91,
    blurb: "Seam, swing, and wicket bursts that crack games open fast.",
  },
  {
    id: "babar-azam",
    name: "Babar Azam",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 93,
    bowling: 8,
    blurb: "Pure timing and tempo control through the heart of an ODI innings.",
  },
  {
    id: "fakhar-zaman",
    name: "Fakhar Zaman",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 86,
    bowling: 8,
    blurb: "A left-handed disruptor with big-innings upside.",
  },
  {
    id: "saud-shakeel",
    name: "Saud Shakeel",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 6,
    blurb: "A calmer accumulator when the innings needs structure.",
  },
  {
    id: "mohammad-rizwan",
    name: "Mohammad Rizwan",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "wicketkeeper",
    batting: 90,
    bowling: 0,
    blurb: "Intensity, consistency, and high-volume ODI running.",
  },
  {
    id: "shadab-khan",
    name: "Shadab Khan",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 79,
    bowling: 78,
    blurb: "Useful leg spin with genuine batting upside.",
  },
  {
    id: "shaheen-afridi",
    name: "Shaheen Afridi",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 28,
    bowling: 90,
    blurb: "New-ball menace with left-arm angle and late inswing.",
  },
  {
    id: "haris-rauf",
    name: "Haris Rauf",
    squadId: "pakistan-2023",
    team: "Pakistan",
    year: 2023,
    role: "bowler",
    batting: 20,
    bowling: 87,
    blurb: "Speed and hard lengths that create wickets in clumps.",
  },
  {
    id: "rahmanullah-gurbaz",
    name: "Rahmanullah Gurbaz",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "wicketkeeper",
    batting: 86,
    bowling: 0,
    blurb: "A fearless keeper-opener with genuine powerplay upside.",
  },
  {
    id: "ibrahim-zadran",
    name: "Ibrahim Zadran",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "batsman",
    batting: 84,
    bowling: 6,
    blurb: "Measured ODI batting with enough range to bat deep.",
  },
  {
    id: "hashmatullah-shahidi",
    name: "Hashmatullah Shahidi",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "batsman",
    batting: 82,
    bowling: 10,
    blurb: "An innings stabilizer who keeps collapses from cascading.",
  },
  {
    id: "mohammad-nabi",
    name: "Mohammad Nabi",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 80,
    bowling: 76,
    blurb: "A complete ODI all-round operator with veteran skill.",
  },
  {
    id: "rashid-khan",
    name: "Rashid Khan",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 62,
    bowling: 92,
    blurb: "A wrist-spin strike force who changes the shape of an innings.",
  },
  {
    id: "mujeeb-ur-rahman",
    name: "Mujeeb Ur Rahman",
    squadId: "afghanistan-2023",
    team: "Afghanistan",
    year: 2023,
    role: "bowler",
    batting: 24,
    bowling: 84,
    blurb: "Powerplay spin and awkward angles from ball one.",
  },
];

const DRAFT_SQUADS = [...BASE_DRAFT_SQUADS, ...GENERATED_DRAFT_SQUADS].sort(
  (left, right) => left.year - right.year || left.country.localeCompare(right.country),
);

const MANUAL_PLAYER_NAME_OVERRIDES = {
  "Sachin Tendulkar": { role: "batsman", batting: 96, bowling: 43 },
  "Ricky Ponting": { role: "batsman", batting: 95, bowling: 8 },
  "Brian Lara": { role: "batsman", batting: 97, bowling: 10 },
  "Shane Warne": { role: "bowler", batting: 34, bowling: 95 },
  "Muttiah Muralitharan": { role: "bowler", batting: 24, bowling: 95 },
  "Glenn McGrath": { role: "bowler", batting: 18, bowling: 95 },
  "Jacques Kallis": { role: "batsman", batting: 93, bowling: 84 },
  "Allan Donald": { role: "bowler", batting: 18, bowling: 93 },
  "Anil Kumble": { role: "bowler", batting: 28, bowling: 92 },
  "Rahul Dravid": { role: "batsman", batting: 92, bowling: 8 },
  "AB de Villiers": { role: "batsman", batting: 95, bowling: 39 },
  "Eoin Morgan": { role: "batsman", batting: 88, bowling: 0 },
  "KL Rahul": { role: "batsman", batting: 90, bowling: 0 },
  "Jonny Bairstow": { role: "batsman", batting: 90, bowling: 0 },
  "Younis Khan": { role: "batsman", batting: 84, bowling: 0 },
  "Javed Miandad": { role: "batsman", batting: 89, bowling: 28 },
  "Saleem Malik": { role: "batsman", batting: 84, bowling: 22 },
  "Boeta Dippenaar": { role: "batsman", batting: 78, bowling: 0 },
  "Bruce Edgar": { role: "batsman", batting: 76, bowling: 12 },
  "Tillakaratne Dilshan": { role: "batsman", batting: 90, bowling: 70 },
  "Ali Shah": { role: "bowler", batting: 51, bowling: 58 },
  "Keith Sheridan": { role: "bowler", batting: 34, bowling: 62 },
  "Peter Steindl": { role: "bowler", batting: 32, bowling: 54 },
  "Wayne James": { role: "wicketkeeper", batting: 59, bowling: 0 },
  "Tariq Iqbal": { role: "wicketkeeper", batting: 56, bowling: 0 },
  "Marcel Schewe": { role: "wicketkeeper", batting: 44, bowling: 0 },
  "Steve Palframan": { role: "wicketkeeper", batting: 52, bowling: 0 },
  "Imtiaz Abbasi": { role: "wicketkeeper", batting: 43, bowling: 0 },
  "Alec Davies": { role: "wicketkeeper", batting: 48, bowling: 0 },
  "Melt van Schoor": { role: "wicketkeeper", batting: 46, bowling: 0 },
  "Andre van Schoor": { role: "wicketkeeper", batting: 42, bowling: 0 },
  "Kumar Sangakkara": { role: "wicketkeeper", batting: 95, bowling: 0 },
  "Mahela Jayawardene": { role: "batsman", batting: 93, bowling: 18 },
  "Lasith Malinga": { role: "bowler", batting: 22, bowling: 95 },
  "Marvan Atapattu": { role: "batsman", batting: 88, bowling: 12 },
  "Upul Tharanga": { role: "batsman", batting: 86, bowling: 0 },
  "Russel Arnold": { role: "batsman", batting: 80, bowling: 38 },
  "Farveez Maharoof": { role: "bowler", batting: 64, bowling: 82 },
  "Dilhara Fernando": { role: "bowler", batting: 24, bowling: 84 },
  "Nuwan Kulasekara": { role: "bowler", batting: 33, bowling: 84 },
  "Malinga Bandara": { role: "bowler", batting: 20, bowling: 80 },
  "Chamara Silva": { role: "batsman", batting: 78, bowling: 18 },
  "Quinton de Kock": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Sarfaraz Ahmed": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "James Anderson": { role: "bowler", batting: 19, bowling: 91 },
  "Kevin Pietersen": { role: "batsman", batting: 94, bowling: 24 },
  "Graham Thorpe": { role: "batsman", batting: 88, bowling: 18 },
  "Graeme Fowler": { role: "batsman", batting: 82, bowling: 8 },
  "Graeme Hick": { role: "batsman", batting: 86, bowling: 36 },
  "Andrew Strauss": { role: "batsman", batting: 87, bowling: 10 },
  "Michael Vaughan": { role: "batsman", batting: 86, bowling: 14 },
  "Matt Prior": { role: "wicketkeeper", batting: 84, bowling: 0 },
  "Gary Wilson": { role: "wicketkeeper", batting: 76, bowling: 0 },
  "Maurice Ouma": { role: "wicketkeeper", batting: 71, bowling: 0 },
  "Morne van Wyk": { role: "wicketkeeper", batting: 80, bowling: 0 },
  "Afsar Zazai": { role: "wicketkeeper", batting: 70, bowling: 0 },
  "Shafiqullah": { role: "wicketkeeper", batting: 76, bowling: 0 },
  "Wesley Barresi": { role: "wicketkeeper", batting: 74, bowling: 0 },
  "Mohammad Ashraful": { role: "batsman", batting: 83, bowling: 38 },
  "Habibul Bashar": { role: "batsman", batting: 82, bowling: 12 },
  "Javed Omar": { role: "batsman", batting: 76, bowling: 8 },
  "Shahriar Nafees": { role: "batsman", batting: 74, bowling: 0 },
  "Aftab Ahmed": { role: "batsman", batting: 77, bowling: 26 },
  "Alok Kapali": { role: "batsman", batting: 72, bowling: 54 },
  "Imrul Kayes": { role: "batsman", batting: 74, bowling: 8 },
  "Junaid Siddique": { role: "batsman", batting: 77, bowling: 10 },
  "Naeem Islam": { role: "batsman", batting: 71, bowling: 66 },
  "Rajin Saleh": { role: "batsman", batting: 72, bowling: 18 },
  "Mahmudullah": { role: "batsman", batting: 84, bowling: 72 },
  "Mahmudullah Riyad": { role: "batsman", batting: 84, bowling: 72 },
  "Sabbir Rahman": { role: "batsman", batting: 78, bowling: 24 },
  "Taskin Ahmed": { role: "bowler", batting: 24, bowling: 86 },
  "Anderson Cummins": { role: "bowler", batting: 18, bowling: 82 },
  "Geoff Lawson": { role: "bowler", batting: 18, bowling: 86 },
  "Rodney Hogg": { role: "bowler", batting: 14, bowling: 82 },
  "Tom Hogan": { role: "bowler", batting: 12, bowling: 78 },
  "Winston Davis": { role: "bowler", batting: 18, bowling: 84 },
  "Gordon Greenidge": { role: "batsman", batting: 93, bowling: 16 },
  "Joel Garner": { role: "bowler", batting: 16, bowling: 94 },
  "Larry Gomes": { role: "batsman", batting: 82, bowling: 24 },
  "Wayne Daniel": { role: "bowler", batting: 18, bowling: 85 },
  "Neil Foster": { role: "bowler", batting: 18, bowling: 83 },
  "Andrew Hudson": { role: "batsman", batting: 84, bowling: 8 },
  "Omar Henry": { role: "bowler", batting: 20, bowling: 78 },
  "Peter Kirsten": { role: "batsman", batting: 80, bowling: 12 },
  "Neil Fairbrother": { role: "batsman", batting: 85, bowling: 12 },
  "Rodney Latham": { role: "batsman", batting: 76, bowling: 18 },
  "Fanie de Villiers": { role: "bowler", batting: 28, bowling: 89 },
  "Andy Caddick": { role: "bowler", batting: 18, bowling: 90 },
  "Kepler Wessels": { role: "batsman", batting: 83, bowling: 0 },
  "Tharindu Kaushal": { role: "bowler", batting: 24, bowling: 76 },
  "Dushan Hemantha": { role: "bowler", batting: 48, bowling: 68 },
  "Vijay Shankar": { role: "batsman", batting: 74, bowling: 58 },
  "Mansoor Akhtar": { role: "batsman", batting: 73, bowling: 12 },
  "Mohsin Khan": { role: "batsman", batting: 82, bowling: 10 },
  "Carlisle Best": { role: "wicketkeeper", batting: 71, bowling: 0 },
  "Merv Hughes": { role: "bowler", batting: 16, bowling: 81 },
  "Richard Illingworth": { role: "bowler", batting: 58, bowling: 71 },
  "Vinod Kambli": { role: "batsman", batting: 82, bowling: 0 },
  "Tertius Bosch": { role: "bowler", batting: 18, bowling: 79 },
  "Angus Fraser": { role: "bowler", batting: 12, bowling: 88 },
  "Adam Gilchrist": { role: "wicketkeeper", batting: 92, bowling: 0 },
  "Adam Zampa": { role: "bowler", batting: 22, bowling: 82 },
  "Adil Rashid": { role: "bowler", batting: 28, bowling: 84 },
  "Aiden Markram": { role: "batsman", batting: 84, bowling: 28 },
  "Alex Carey": { role: "wicketkeeper", batting: 80, bowling: 0 },
  "Alex Hales": { role: "batsman", batting: 85, bowling: 0 },
  "Andile Phehlukwayo": { role: "bowler", batting: 58, bowling: 72 },
  "Andrew Flintoff": { role: "batsman", batting: 78, bowling: 80 },
  "Andrew Hall": { role: "bowler", batting: 63, bowling: 72 },
  "Andrew Symonds": { role: "batsman", batting: 84, bowling: 78 },
  "André Nel": { role: "bowler", batting: 18, bowling: 78 },
  "Anrich Nortje": { role: "bowler", batting: 16, bowling: 84 },
  "Ashton Agar": { role: "bowler", batting: 56, bowling: 68 },
  "Axar Patel": { role: "bowler", batting: 68, bowling: 74 },
  "Ben Stokes": { role: "batsman", batting: 88, bowling: 62 },
  "Bhuvneshwar Kumar": { role: "bowler", batting: 32, bowling: 84 },
  "Brad Haddin": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "Brad Hogg": { role: "bowler", batting: 56, bowling: 82 },
  "Brendon McCullum": { role: "wicketkeeper", batting: 89, bowling: 0 },
  "Brett Lee": { role: "bowler", batting: 36, bowling: 91 },
  "Brydon Carse": { role: "bowler", batting: 42, bowling: 70 },
  "Chris Jordan": { role: "bowler", batting: 42, bowling: 78 },
  "Chris Morris": { role: "bowler", batting: 69, bowling: 76 },
  "Chris Woakes": { role: "bowler", batting: 65, bowling: 82 },
  "Chris Tremlett": { role: "bowler", batting: 24, bowling: 82 },
  "Colin de Grandhomme": { role: "batsman", batting: 69, bowling: 72 },
  "Corey Anderson": { role: "batsman", batting: 74, bowling: 68 },
  "Craig McMillan": { role: "batsman", batting: 76, bowling: 46 },
  "Dale Steyn": { role: "bowler", batting: 22, bowling: 90 },
  "Daniel Vettori": { role: "bowler", batting: 58, bowling: 87 },
  "Daryl Mitchell": { role: "batsman", batting: 84, bowling: 44 },
  "Daryl Tuffey": { role: "bowler", batting: 18, bowling: 74 },
  "David Miller": { role: "batsman", batting: 87, bowling: 0 },
  "David Willey": { role: "bowler", batting: 62, bowling: 76 },
  "David Warner": { role: "batsman", batting: 94, bowling: 0 },
  "Dawid Malan": { role: "batsman", batting: 88, bowling: 0 },
  "Devon Conway": { role: "batsman", batting: 87, bowling: 0 },
  "Dinesh Karthik": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Dwaine Pretorius": { role: "bowler", batting: 58, bowling: 74 },
  "Faf du Plessis": { role: "batsman", batting: 89, bowling: 0 },
  "Francois du Plessis": { role: "batsman", batting: 89, bowling: 0 },
  "Gautam Gambhir": { role: "batsman", batting: 86, bowling: 0 },
  "George Bailey": { role: "batsman", batting: 82, bowling: 0 },
  "Gerald Coetzee": { role: "bowler", batting: 18, bowling: 82 },
  "Glenn Maxwell": { role: "batsman", batting: 87, bowling: 59 },
  "Glenn Phillips": { role: "batsman", batting: 82, bowling: 28 },
  "Graeme Smith": { role: "batsman", batting: 86, bowling: 22 },
  "Graeme Swann": { role: "bowler", batting: 36, bowling: 82 },
  "Grant Elliott": { role: "batsman", batting: 76, bowling: 60 },
  "Gus Atkinson": { role: "bowler", batting: 14, bowling: 74 },
  "Hardik Pandya": { role: "batsman", batting: 82, bowling: 72 },
  "Harry Brook": { role: "batsman", batting: 84, bowling: 0 },
  "Hashim Amla": { role: "batsman", batting: 94, bowling: 0 },
  "Heinrich Klaasen": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Henry Nicholls": { role: "batsman", batting: 77, bowling: 0 },
  "Herschelle Gibbs": { role: "batsman", batting: 87, bowling: 0 },
  "Ian Bell": { role: "batsman", batting: 82, bowling: 24 },
  "Imran Tahir": { role: "bowler", batting: 18, bowling: 87 },
  "Irfan Pathan": { role: "bowler", batting: 67, bowling: 78 },
  "Ish Sodhi": { role: "bowler", batting: 18, bowling: 74 },
  "JP Duminy": { role: "batsman", batting: 83, bowling: 61 },
  "Jacob Oram": { role: "bowler", batting: 70, bowling: 77 },
  "James Faulkner": { role: "bowler", batting: 74, bowling: 79 },
  "James Franklin": { role: "batsman", batting: 61, bowling: 67 },
  "James Neesham": { role: "batsman", batting: 74, bowling: 66 },
  "Jimmy Neesham": { role: "batsman", batting: 74, bowling: 66 },
  "Jason Roy": { role: "batsman", batting: 88, bowling: 0 },
  "Jasprit Bumrah": { role: "bowler", batting: 20, bowling: 93 },
  "Jhye Richardson": { role: "bowler", batting: 14, bowling: 76 },
  "Joe Root": { role: "batsman", batting: 92, bowling: 22 },
  "Jofra Archer": { role: "bowler", batting: 26, bowling: 86 },
  "Johan Botha": { role: "bowler", batting: 48, bowling: 66 },
  "Jonny Bairstow": { role: "batsman", batting: 91, bowling: 0 },
  "Jos Buttler": { role: "wicketkeeper", batting: 90, bowling: 0 },
  "Josh Hazlewood": { role: "bowler", batting: 20, bowling: 86 },
  "Josh Inglis": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Kagiso Rabada": { role: "bowler", batting: 24, bowling: 88 },
  "Kane Williamson": { role: "batsman", batting: 92, bowling: 22 },
  "Kyle Abbott": { role: "bowler", batting: 16, bowling: 76 },
  "Kyle Jamieson": { role: "bowler", batting: 42, bowling: 78 },
  "Kyle Mills": { role: "bowler", batting: 28, bowling: 83 },
  "Kuldeep Yadav": { role: "bowler", batting: 18, bowling: 85 },
  "Liam Livingstone": { role: "batsman", batting: 76, bowling: 48 },
  "Liam Plunkett": { role: "bowler", batting: 28, bowling: 79 },
  "Lizaad Williams": { role: "bowler", batting: 14, bowling: 74 },
  "Lockie Ferguson": { role: "bowler", batting: 12, bowling: 84 },
  "Lungi Ngidi": { role: "bowler", batting: 18, bowling: 78 },
  "M.S. Dhoni": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "MS Dhoni": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "Makhaya Ntini": { role: "bowler", batting: 18, bowling: 88 },
  "Marco Jansen": { role: "bowler", batting: 66, bowling: 78 },
  "Marcus Stoinis": { role: "batsman", batting: 76, bowling: 62 },
  "Mark Boucher": { role: "wicketkeeper", batting: 79, bowling: 0 },
  "Mark Wood": { role: "bowler", batting: 18, bowling: 82 },
  "Marnus Labuschagne": { role: "batsman", batting: 83, bowling: 18 },
  "Martin Guptill": { role: "batsman", batting: 88, bowling: 0 },
  "Matt Henry": { role: "bowler", batting: 18, bowling: 85 },
  "Matt Prior": { role: "wicketkeeper", batting: 84, bowling: 0 },
  "Matthew Hayden": { role: "batsman", batting: 92, bowling: 0 },
  "Michael Clarke": { role: "batsman", batting: 89, bowling: 24 },
  "Michael Hussey": { role: "batsman", batting: 90, bowling: 0 },
  "Mitchell Johnson": { role: "bowler", batting: 35, bowling: 90 },
  "Mitchell Marsh": { role: "batsman", batting: 84, bowling: 56 },
  "Mitchell Santner": { role: "bowler", batting: 71, bowling: 76 },
  "Mitchell Starc": { role: "bowler", batting: 28, bowling: 93 },
  "Moeen Ali": { role: "batsman", batting: 76, bowling: 64 },
  "Mohammed Shami": { role: "bowler", batting: 18, bowling: 90 },
  "Mohammed Siraj": { role: "bowler", batting: 16, bowling: 82 },
  "Morne van Wyk": { role: "wicketkeeper", batting: 78, bowling: 0 },
  "Morné Morkel": { role: "bowler", batting: 22, bowling: 86 },
  "Nathan Bracken": { role: "bowler", batting: 26, bowling: 87 },
  "Nathan Lyon": { role: "bowler", batting: 18, bowling: 68 },
  "Nathan McCullum": { role: "bowler", batting: 52, bowling: 70 },
  "Nathan Mitchell Coulter-Nile": { role: "bowler", batting: 58, bowling: 74 },
  "Pat Cummins": { role: "bowler", batting: 32, bowling: 89 },
  "Paul Collingwood": { role: "batsman", batting: 78, bowling: 52 },
  "Quinton de Kock": { role: "wicketkeeper", batting: 91, bowling: 0 },
  "Rachin Ravindra": { role: "batsman", batting: 84, bowling: 61 },
  "Rassie van der Dussen": { role: "batsman", batting: 88, bowling: 0 },
  "Ravichandran Ashwin": { role: "bowler", batting: 55, bowling: 82 },
  "Ravindra Jadeja": { role: "bowler", batting: 78, bowling: 83 },
  "Reece Topley": { role: "bowler", batting: 12, bowling: 78 },
  "Reeza Hendricks": { role: "batsman", batting: 77, bowling: 0 },
  "Rilee Rossouw": { role: "batsman", batting: 82, bowling: 0 },
  "Rishabh Pant": { role: "wicketkeeper", batting: 81, bowling: 0 },
  "Robin Peterson": { role: "bowler", batting: 60, bowling: 70 },
  "Rohit Sharma": { role: "batsman", batting: 95, bowling: 18 },
  "Ross Taylor": { role: "batsman", batting: 91, bowling: 0 },
  "Sam Curran": { role: "bowler", batting: 68, bowling: 74 },
  "Scott Styris": { role: "batsman", batting: 77, bowling: 68 },
  "Sean Abbott": { role: "bowler", batting: 58, bowling: 70 },
  "Shane Bond": { role: "bowler", batting: 18, bowling: 93 },
  "Shane Watson": { role: "batsman", batting: 86, bowling: 76 },
  "Shikhar Dhawan": { role: "batsman", batting: 91, bowling: 0 },
  "Shreyas Iyer": { role: "batsman", batting: 90, bowling: 0 },
  "Shubman Gill": { role: "batsman", batting: 93, bowling: 0 },
  "Shaun Pollock": { role: "bowler", batting: 65, bowling: 88 },
  "Shaun Tait": { role: "bowler", batting: 14, bowling: 82 },
  "Steve Smith": { role: "batsman", batting: 91, bowling: 20 },
  "Steven Finn": { role: "bowler", batting: 14, bowling: 78 },
  "Stuart Binny": { role: "batsman", batting: 64, bowling: 66 },
  "Stuart Broad": { role: "bowler", batting: 24, bowling: 79 },
  "Stuart Clark": { role: "bowler", batting: 26, bowling: 78 },
  "Suresh Raina": { role: "batsman", batting: 84, bowling: 34 },
  "Tabraiz Shamsi": { role: "bowler", batting: 10, bowling: 78 },
  "Temba Bavuma": { role: "batsman", batting: 82, bowling: 0 },
  "Tim Bresnan": { role: "bowler", batting: 62, bowling: 74 },
  "Tim Southee": { role: "bowler", batting: 34, bowling: 84 },
  "Tom Latham": { role: "wicketkeeper", batting: 82, bowling: 0 },
  "Travis Head": { role: "batsman", batting: 91, bowling: 26 },
  "Trent Boult": { role: "bowler", batting: 26, bowling: 90 },
  "Umesh Yadav": { role: "bowler", batting: 16, bowling: 80 },
  "Usman Khawaja": { role: "batsman", batting: 85, bowling: 0 },
  "Virender Sehwag": { role: "batsman", batting: 90, bowling: 32 },
  "Wayne Parnell": { role: "bowler", batting: 60, bowling: 74 },
  "Will Young": { role: "batsman", batting: 79, bowling: 0 },
  "Yusuf Pathan": { role: "batsman", batting: 74, bowling: 62 },
  "Yuvraj Singh": { role: "batsman", batting: 88, bowling: 62 },
  "Yuzvendra Chahal": { role: "bowler", batting: 14, bowling: 82 },
  "Zaheer Khan": { role: "bowler", batting: 30, bowling: 88 },
};

const PLAYER_AUDIT_SUMMARY = AUDITED_PLAYER_SUMMARY;

const PLAYER_ID_OVERRIDES = {
  "bangladesh-2007-tamim-iqbal": { batting: 78, bowling: 8 },
  "bangladesh-2011-tamim-iqbal": { batting: 84, bowling: 8 },
  "bangladesh-2015-tamim-iqbal": { batting: 87, bowling: 8 },
  "tamim-iqbal": { batting: 88, bowling: 8 },

  "bangladesh-2007-shakib-al-hasan": { batting: 80, bowling: 82 },
  "bangladesh-2011-shakib-al-hasan": { batting: 86, bowling: 87 },
  "bangladesh-2015-shakib-al-hasan": { batting: 89, bowling: 88 },
  "shakib-al-hasan": { batting: 93, bowling: 89 },
  "bangladesh-2023-shakib-al-hasan": { batting: 89, bowling: 85 },

  "bangladesh-2007-mushfiqur-rahim": { batting: 72, bowling: 0 },
  "bangladesh-2011-mushfiqur-rahim": { batting: 78, bowling: 0 },
  "bangladesh-2015-mushfiqur-rahim": { batting: 84, bowling: 0 },
  "mushfiqur-rahim": { batting: 88, bowling: 0 },
  "bangladesh-2023-mushfiqur-rahim": { batting: 85, bowling: 0 },

  "virat-kohli": { batting: 87, bowling: 8 },
  "india-2015-virat-kohli": { batting: 92, bowling: 8 },
  "india-2019-virat-kohli": { batting: 94, bowling: 8 },
  "virat-kohli-2023": { batting: 96, bowling: 8 },
  "pakistan-1983-rashid-khan": { role: "batsman", batting: 64, bowling: 18 },
};

const RAW_PLAYER_POOL = [...BASE_PLAYER_POOL, ...EXTRA_PLAYERS, ...GENERATED_PLAYERS];

const AMBIGUOUS_AUDIT_NAMES = (() => {
  const teamsByName = new Map();

  for (const player of RAW_PLAYER_POOL) {
    const normalizedName = normalizePlayerName(player.name);
    const teams = teamsByName.get(normalizedName) || new Set();
    teams.add(player.team);
    teamsByName.set(normalizedName, teams);
  }

  return new Set(
    [...teamsByName.entries()]
      .filter(([, teams]) => teams.size > 1)
      .map(([normalizedName]) => normalizedName),
  );
})();

function getPlayerNameOverride(player) {
  const normalizedName = normalizePlayerName(player.name);
  const auditedOverride = AMBIGUOUS_AUDIT_NAMES.has(normalizedName)
    ? null
    : AUDITED_PLAYER_NAME_OVERRIDES[normalizedName];

  return {
    ...(auditedOverride || {}),
    ...(MANUAL_PLAYER_NAME_OVERRIDES[normalizedName] || {}),
  };
}

function applyPlayerOverride(player) {
  const normalizedName = normalizePlayerName(player.name);
  const override = getPlayerNameOverride(player);
  const inferredRole = hasWicketkeeperFlag(player.name) ? "wicketkeeper" : player.role;

  return {
    ...player,
    name: normalizedName,
    role: inferredRole,
    ...(override || {}),
    ...(PLAYER_ID_OVERRIDES[player.id] || {}),
  };
}

const PLAYER_POOL = RAW_PLAYER_POOL.map(applyPlayerOverride);

const TOURNAMENT_OPPONENTS = [
  {
    id: "bangladesh-2019",
    label: "Bangladesh 2019",
    shortName: "Bangladesh",
    stage: "Group Stage A",
    batting: 82,
    bowling: 80,
    overall: 80,
    pressure: 0,
    note: "A modern ODI side with serious all-round depth and no soft overs.",
  },
  {
    id: "india-1983",
    label: "India 1983",
    shortName: "India",
    stage: "Group Stage B",
    batting: 81,
    bowling: 83,
    overall: 82,
    pressure: 1,
    note: "They make you earn everything and still believe in every chase.",
  },
  {
    id: "pakistan-1992",
    label: "Pakistan 1992",
    shortName: "Pakistan",
    stage: "Group Stage C",
    batting: 84,
    bowling: 87,
    overall: 85,
    pressure: 2,
    note: "Swing, swagger, and a pace unit that can turn the lights out.",
  },
  {
    id: "south-africa-1999",
    label: "South Africa 1999",
    shortName: "South Africa",
    stage: "Quarter-final",
    batting: 89,
    bowling: 89,
    overall: 89,
    pressure: 5,
    note: "Balanced, athletic, and packed with wicket-taking options.",
  },
  {
    id: "india-2011",
    label: "India 2011",
    shortName: "India",
    stage: "Semi-final",
    batting: 92,
    bowling: 88,
    overall: 92,
    pressure: 6,
    note: "Elite chase control backed by experienced middle-overs bowling.",
  },
  {
    id: "australia-1999",
    label: "Australia 1999",
    shortName: "Australia",
    stage: "Final",
    batting: 92,
    bowling: 93,
    overall: 94,
    pressure: 8,
    note: "A champion side with superstar bowling and no emotional drop-off.",
  },
];




const DIFFICULTY_LEVELS = [
  {
    id: "county",
    label: "County",
    description: "A friendlier ladder with a little breathing room.",
    playerBatting: 6,
    playerBowling: 6,
    opponentBatting: -4,
    opponentBowling: -4,
  },
  {
    id: "international",
    label: "International",
    description: "Baseline World Cup difficulty.",
    playerBatting: 0,
    playerBowling: 0,
    opponentBatting: 0,
    opponentBowling: 0,
  },
  {
    id: "legend",
    label: "Legend",
    description: "A harsher ladder where weak links get punished fast.",
    playerBatting: -4,
    playerBowling: -4,
    opponentBatting: 6,
    opponentBowling: 6,
  },
];

const DIFFICULTY_BY_ID = new Map(DIFFICULTY_LEVELS.map((level) => [level.id, level]));

const BATTING_AGGRESSION_LEVELS = [
  {
    id: "cautious",
    label: "Cautious",
    description: "Bank wickets and trust the long chase.",
    scoreBias: -18,
    wicketBias: -1.4,
    boundaryDelta: -0.02,
    sixDelta: -0.01,
    singleDelta: 0.03,
    doubleDelta: 0.012,
  },
  {
    id: "mid",
    label: "Mid",
    description: "Balanced ODI tempo.",
    scoreBias: 0,
    wicketBias: 0,
    boundaryDelta: 0,
    sixDelta: 0,
    singleDelta: 0,
    doubleDelta: 0,
  },
  {
    id: "aggressive",
    label: "Aggressive",
    description: "Push the rate and accept more dismissal risk.",
    scoreBias: 22,
    wicketBias: 1.8,
    boundaryDelta: 0.028,
    sixDelta: 0.016,
    singleDelta: -0.025,
    doubleDelta: 0.008,
  },
];

const BATTING_AGGRESSION_BY_ID = new Map(
  BATTING_AGGRESSION_LEVELS.map((level) => [level.id, level]),
);

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value);
}

function randomSwing(random, size) {
  return (random() - 0.5) * 2 * size;
}

function hashValue(text) {
  let value = 0;
  for (const char of text) {
    value = (value * 31 + char.charCodeAt(0)) % 1000003;
  }

  return value;
}

function getTotalRequiredPlayers() {
  return ROLE_ORDER.reduce((total, role) => total + REQUIRED_ROLES[role], 0);
}

function getRosterSizeLimit() {
  return 11;
}

function isAllRounderPlayer(player) {
  return player.batting > 50 && player.bowling > 50;
}

function getPlayerIdentity(player) {
  return player.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, " ").trim();
}

function getCapabilityMask(player) {
  let mask = 0;
  const allRounder = isAllRounderPlayer(player);

  if (player.role === "batsman" || player.role === "wicketkeeper" || allRounder) {
    mask |= 1;
  }

  if (player.role === "bowler" || allRounder) {
    mask |= 2;
  }

  if (player.role === "wicketkeeper") {
    mask |= 4;
  }

  return mask;
}

function getCoverageMask(roster) {
  return roster.reduce((mask, player) => mask | getCapabilityMask(player), 0);
}

function createMaskCounts() {
  return new Array(8).fill(0);
}

function buildUndraftedInventory(state) {
  const draftedIds = new Set(state.roster.map((player) => player.id));
  const draftedIdentities = new Set(state.roster.map(getPlayerIdentity));
  const maskCounts = createMaskCounts();
  const players = [];

  for (const player of PLAYER_POOL) {
    if (draftedIds.has(player.id) || draftedIdentities.has(getPlayerIdentity(player))) {
      continue;
    }

    const mask = getCapabilityMask(player);
    maskCounts[mask] += 1;
    players.push({ player, mask });
  }

  return { maskCounts, players };
}

function canCoverMaskWithCounts(mask, maskCounts, slots, depth = 0) {
  if (mask === 0) {
    return true;
  }

  if (slots <= 0 || depth >= slots || depth >= 3) {
    return false;
  }

  for (let candidateMask = 1; candidateMask < 8; candidateMask += 1) {
    if (maskCounts[candidateMask] === 0) {
      continue;
    }

    maskCounts[candidateMask] -= 1;
    const covered = canCoverMaskWithCounts(mask & ~candidateMask, maskCounts, slots, depth + 1);
    maskCounts[candidateMask] += 1;

    if (covered) {
      return true;
    }
  }

  return false;
}

function canDraftWithInventory(state, player, inventory) {
  if (!player) {
    return false;
  }

  if (state.roster.length >= getRosterSizeLimit()) {
    return false;
  }

  const candidateMask = getCapabilityMask(player);
  const nextMask = getCoverageMask(state.roster) | candidateMask;
  const remainingNeededMask = 7 & ~nextMask;
  const remainingSlots = getRosterSizeLimit() - state.roster.length - 1;

  if (remainingNeededMask === 0) {
    return true;
  }

  if (remainingSlots === 0) {
    return false;
  }

  inventory.maskCounts[candidateMask] -= 1;
  const canCover = canCoverMaskWithCounts(
    remainingNeededMask,
    inventory.maskCounts,
    remainingSlots,
  );
  inventory.maskCounts[candidateMask] += 1;

  return canCover;
}

function getRoleCounts(roster) {
  return roster.reduce(
    (counts, player) => ({
      ...counts,
      [player.role]: counts[player.role] + 1,
    }),
    {
      batsman: 0,
      wicketkeeper: 0,
      bowler: 0,
    },
  );
}

function getRemainingSlots(roster) {
  const counts = getRoleCounts(roster);

  return ROLE_ORDER.reduce((remaining, role) => {
    remaining[role] = REQUIRED_ROLES[role] - counts[role];
    return remaining;
  }, {});
}

function isRosterComplete(roster) {
  return roster.length === getRosterSizeLimit() && (getCoverageMask(roster) & 7) === 7;
}

function canDraftPlayer(state, player) {
  return canDraftWithInventory(state, player, buildUndraftedInventory(state));
}

function getEligiblePlayers(state) {
  const inventory = buildUndraftedInventory(state);

  return inventory.players
    .filter(({ player }) => canDraftWithInventory(state, player, inventory))
    .map(({ player }) => player);
}

function getSquadPlayers(state, squadId) {
  return getEligiblePlayers(state).filter((player) => player.squadId === squadId);
}

function getAvailableSquads(state) {
  return DRAFT_SQUADS.filter((squad) => getSquadPlayers(state, squad.id).length > 0);
}

function buildCandidateSet(state, squadId) {
  return getSquadPlayers(state, squadId).sort((left, right) => {
    const leftValue = left.batting + left.bowling + (isAllRounderPlayer(left) ? 8 : 0);
    const rightValue = right.batting + right.bowling + (isAllRounderPlayer(right) ? 8 : 0);
    return rightValue - leftValue;
  });
}

function pickSquad(availableSquads, random) {
  if (availableSquads.length === 0) {
    return null;
  }

  const index = Math.floor(random() * availableSquads.length);

  return availableSquads[index];
}

function rerollCandidates(state, random = Math.random) {
  if (state.phase !== "draft" || isRosterComplete(state.roster)) {
    return state;
  }

  const availableSquads = getAvailableSquads(state);
  const squad = pickSquad(availableSquads, random);
  if (!squad) {
    return state;
  }

  return {
    ...state,
    currentSquad: squad,
    candidateSet: buildCandidateSet(state, squad.id),
  };
}

function createInitialState(random = Math.random) {
  return {
    phase: "draft",
    difficulty: "international",
    battingAggression: "mid",
    roster: [],
    battingOrder: [],
    bowlingOrder: [],
    currentSquad: null,
    candidateSet: [],
    matchIndex: 0,
    currentOpponent: null,
    results: [],
    latestMatch: null,
    champion: false,
    eliminated: false,
  };
}

function setDifficulty(state, difficultyId) {
  if (state.phase !== "draft" || state.roster.length > 0 || state.currentSquad) {
    return state;
  }

  if (!DIFFICULTY_BY_ID.has(difficultyId)) {
    return state;
  }

  return {
    ...state,
    difficulty: difficultyId,
  };
}

function setBattingAggression(state, aggressionId) {
  if (state.phase !== "tournament" || !state.currentOpponent) {
    return state;
  }

  if (!BATTING_AGGRESSION_BY_ID.has(aggressionId)) {
    return state;
  }

  return {
    ...state,
    battingAggression: aggressionId,
  };
}

function buildDefaultBattingOrder(roster) {
  return [...roster]
    .sort((left, right) => {
      const leftRoleWeight = left.role === "batsman" ? 8 : left.role === "wicketkeeper" ? 5 : 0;
      const rightRoleWeight = right.role === "batsman" ? 8 : right.role === "wicketkeeper" ? 5 : 0;
      return (
        right.batting + rightRoleWeight - (left.batting + leftRoleWeight) ||
        right.bowling - left.bowling
      );
    })
    .map((player) => player.id);
}

function buildDefaultBowlingOrder(roster) {
  return [...roster]
    .filter((player) => player.role !== "wicketkeeper")
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .map((player) => player.id);
}

function ensureOrder(order, roster, fallbackIds) {
  const rosterIds = new Set(roster.map((player) => player.id));
  const seen = new Set();
  const ordered = [];

  for (const id of order) {
    if (rosterIds.has(id) && !seen.has(id)) {
      ordered.push(id);
      seen.add(id);
    }
  }

  for (const id of fallbackIds) {
    if (rosterIds.has(id) && !seen.has(id)) {
      ordered.push(id);
      seen.add(id);
    }
  }

  return ordered;
}

function buildTournamentOrders(roster) {
  const battingOrder = buildDefaultBattingOrder(roster);
  const bowlingOrder = buildDefaultBowlingOrder(roster);

  return { battingOrder, bowlingOrder };
}

function getBattingOrderPlayers(state) {
  const fallback = buildDefaultBattingOrder(state.roster);
  const orderIds = ensureOrder(state.battingOrder || [], state.roster, fallback);
  const byId = new Map(state.roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

function getBowlingOrderPlayers(state) {
  const bowlingRoster = state.roster.filter((player) => player.role !== "wicketkeeper");
  const fallback = buildDefaultBowlingOrder(state.roster);
  const orderIds = ensureOrder(state.bowlingOrder || [], bowlingRoster, fallback);
  const byId = new Map(state.roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

function moveId(order, playerId, direction) {
  const index = order.indexOf(playerId);
  if (index === -1) {
    return order;
  }

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= order.length) {
    return order;
  }

  const nextOrder = [...order];
  [nextOrder[index], nextOrder[nextIndex]] = [nextOrder[nextIndex], nextOrder[index]];
  return nextOrder;
}

function moveBattingOrder(state, playerId, direction) {
  if (state.phase !== "tournament" || state.currentOpponent) {
    return state;
  }

  const fallback = buildDefaultBattingOrder(state.roster);
  const currentOrder = ensureOrder(state.battingOrder || [], state.roster, fallback);

  return {
    ...state,
    battingOrder: moveId(currentOrder, playerId, direction),
  };
}

function moveBowlingOrder(state, playerId, direction) {
  if (state.phase !== "tournament" || state.currentOpponent) {
    return state;
  }

  const bowlingRoster = state.roster.filter((player) => player.role !== "wicketkeeper");
  const fallback = buildDefaultBowlingOrder(state.roster);
  const currentOrder = ensureOrder(state.bowlingOrder || [], bowlingRoster, fallback);

  return {
    ...state,
    bowlingOrder: moveId(currentOrder, playerId, direction),
  };
}

function draftPlayer(state, playerId, random = Math.random) {
  if (state.phase !== "draft") {
    return state;
  }

  const player = state.candidateSet.find((candidate) => candidate.id === playerId);
  const draftedIdentities = new Set(state.roster.map(getPlayerIdentity));

  if (!player || draftedIdentities.has(getPlayerIdentity(player))) {
    return state;
  }

  if (!canDraftPlayer(state, player)) {
    return state;
  }

  const roster = [...state.roster, player];
  const nextState = { ...state, roster };

  if (isRosterComplete(roster)) {
    const orders = buildTournamentOrders(roster);
    return {
      ...nextState,
      phase: "tournament",
      ...orders,
      currentSquad: null,
      candidateSet: [],
    };
  }

  return {
    ...nextState,
    currentSquad: null,
    candidateSet: [],
  };
}

function getTeamMetrics(roster) {
  if (roster.length === 0) {
    return {
      batting: 0,
      bowling: 0,
      chemistry: 0,
      allRounders: 0,
      overall: 0,
    };
  }

  const topBatters = [...roster]
    .sort((left, right) => right.batting - left.batting || right.bowling - left.bowling)
    .slice(0, Math.min(11, roster.length));
  const topBowlers = [...roster]
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .slice(0, Math.min(11, roster.length));

  const batting = topBatters.reduce((total, player) => total + player.batting, 0) / topBatters.length;
  const bowling = topBowlers.reduce((total, player) => total + player.bowling, 0) / topBowlers.length;

  const allRounders = roster.filter(isAllRounderPlayer).length;
  const counts = getRoleCounts(roster);
  const teamVariety = new Set(roster.map((player) => player.team)).size;
  const eraVariety = new Set(roster.map((player) => player.year)).size;
  const chemistry = Math.min(10, teamVariety * 0.65 + eraVariety * 0.25 + allRounders * 0.45);

  // Hidden realism penalty: teams with thin specialist coverage get punished in long tournaments.
  const battingDepth = counts.batsman + allRounders * 0.7 + counts.wicketkeeper * 0.35;
  const bowlingDepth = counts.bowler + allRounders * 0.75;
  const balancePenalty =
    Math.max(0, 5 - battingDepth) * 1.6 + Math.max(0, 5 - bowlingDepth) * 1.9;
  const overall = batting * 0.54 + bowling * 0.46 + chemistry - balancePenalty;

  return {
    batting: round(batting),
    bowling: round(bowling),
    chemistry: round(chemistry),
    allRounders,
    overall: round(overall),
  };
}

function formatScore(runs, wickets) {
  return `${runs}/${wickets}`;
}

function estimateWickets(runs, battingRating, bowlingRating, random) {
  const collapseRisk = (bowlingRating - battingRating) / 10;
  const lowRunsPressure = (305 - runs) / 58;
  const wickets = 4.5 + collapseRisk + lowRunsPressure + randomSwing(random, 1.35);
  return clamp(round(wickets), 2, 10);
}

function adjustRosterSkills(roster, battingDelta, bowlingDelta) {
  return roster.map((player) => ({
    ...player,
    batting: clamp(round(player.batting + battingDelta), 0, 99),
    bowling: clamp(round(player.bowling + bowlingDelta), 0, 99),
  }));
}

function chooseStandout(roster, skill, random) {
  const sorted = [...roster].sort(
    (left, right) =>
      right[skill] + randomSwing(random, 4) - (left[skill] + randomSwing(random, 4)),
  );

  return sorted[0];
}

function buildHeadline(won, marginType, marginValue, opponent) {
  if (won && marginType === "runs") {
    return `You defended sharply and beat ${opponent.shortName} by ${marginValue} runs.`;
  }

  if (won) {
    return `The chase stayed under control and you beat ${opponent.shortName} by ${marginValue} wickets.`;
  }

  if (marginType === "runs") {
    return `${opponent.shortName} squeezed you by ${marginValue} runs and ended the run.`;
  }

  return `${opponent.shortName} chased it with ${marginValue} wickets in hand.`;
}

function simulateInnings(battingRating, bowlingRating, pressure, random) {
  const rawScore =
    180 + battingRating * 1.55 - bowlingRating * 0.82 + pressure * 3.2 + randomSwing(random, 18);

  return clamp(round(rawScore), 145, 405);
}

function resolveChaseScore(projectedRuns, firstInningsRuns, battingRating, bowlingRating, random) {
  const target = firstInningsRuns + 1;
  const chaseSucceeded = projectedRuns >= target;
  const runs = chaseSucceeded ? target : Math.min(projectedRuns, firstInningsRuns - 1);
  const wickets = estimateWickets(runs, battingRating, bowlingRating, random);

  return {
    runs,
    wickets,
    chaseSucceeded,
  };
}

function distributeTotal(total, weights) {
  if (weights.length === 0) {
    return [];
  }

  const sum = weights.reduce((running, weight) => running + weight, 0) || weights.length;
  const rawShares = weights.map((weight) => (weight / sum) * total);
  const baseShares = rawShares.map((value) => Math.floor(value));
  let remainder = total - baseShares.reduce((running, value) => running + value, 0);

  const order = rawShares
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((left, right) => right.fraction - left.fraction);

  let cursor = 0;
  while (remainder > 0) {
    baseShares[order[cursor % order.length].index] += 1;
    remainder -= 1;
    cursor += 1;
  }

  return baseShares;
}

function distributeCappedTotal(total, weights, cap) {
  const result = new Array(weights.length).fill(0);
  let remaining = total;
  let openIndexes = weights.map((_, index) => index);

  while (remaining > 0 && openIndexes.length > 0) {
    const shares = distributeTotal(
      remaining,
      openIndexes.map((index) => weights[index]),
    );

    let allocated = 0;
    const nextOpenIndexes = [];

    shares.forEach((share, position) => {
      const index = openIndexes[position];
      const room = cap - result[index];
      const applied = Math.min(share, room);
      result[index] += applied;
      allocated += applied;

      if (result[index] < cap) {
        nextOpenIndexes.push(index);
      }
    });

    if (allocated === 0) {
      break;
    }

    remaining -= allocated;
    openIndexes = nextOpenIndexes;
  }

  return result;
}

function estimateInningsBalls(runs, wickets, isChaseCompleted) {
  if (wickets >= 10) {
    return clamp(round(150 + runs * 0.42), 150, 300);
  }

  if (isChaseCompleted) {
    return clamp(round(108 + runs * 0.56 - wickets * 3), 90, 300);
  }

  return 300;
}

function getProjectedBattingOrder(roster) {
  return [...roster].sort((left, right) => {
    const leftRoleWeight = left.role === "batsman" ? 10 : left.role === "wicketkeeper" ? 7 : 0;
    const rightRoleWeight = right.role === "batsman" ? 10 : right.role === "wicketkeeper" ? 7 : 0;
    return (
      right.batting + rightRoleWeight - (left.batting + leftRoleWeight) ||
      right.bowling - left.bowling
    );
  });
}

function buildBattingCard(roster, totalRuns, totalBalls, totalWickets, random) {
  const battingOrder = getProjectedBattingOrder(roster);
  const activeCount = clamp(totalWickets + 2, 2, battingOrder.length);
  const activeBatters = battingOrder.slice(0, activeCount);
  const inactiveBatters = battingOrder.slice(activeCount);
  const weights = activeBatters.map((player, index) => {
    const roleBoost =
      player.role === "batsman" ? 1.22 : player.role === "wicketkeeper" ? 1.08 : 0.92;
    const topOrderBoost = Math.max(0.7, 1.3 - index * 0.08);
    return Math.max(1, player.batting * roleBoost * topOrderBoost + randomSwing(random, 8));
  });
  const runs = distributeTotal(totalRuns, weights);
  const rawBalls = activeBatters.map((player, index) => {
    const strikeRate = clamp(66 + player.batting * 0.46 + randomSwing(random, 11), 58, 128);
    const playerRuns = runs[index];
    return playerRuns === 0
      ? clamp(round(4 + random() * 6), 1, 10)
      : clamp(round((playerRuns * 100) / strikeRate), 1, 140);
  });
  const balls = distributeTotal(totalBalls, rawBalls.map((value) => Math.max(1, value)));

  const activeEntries = activeBatters.map((player, index) => {
    const playerRuns = runs[index];

    return {
      id: player.id,
      name: player.name,
      runs: playerRuns,
      balls: balls[index],
    };
  });

  const inactiveEntries = inactiveBatters.map((player) => ({
    id: player.id,
    name: player.name,
    runs: 0,
    balls: 0,
  }));

  return [...activeEntries, ...inactiveEntries].sort(
    (left, right) => right.runs - left.runs || left.balls - right.balls,
  );
}

function buildBowlingCard(roster, totalRunsConceded, totalWickets, totalBalls, random) {
  const bowlingOptions = roster
    .filter((player) => player.bowling > 0)
    .map((player) => ({
      player,
      wicketWeight:
        player.bowling *
        (player.role === "bowler" ? 1.18 : isAllRounderPlayer(player) ? 0.96 : 0.72),
      economyWeight: Math.max(28, 128 - player.bowling + randomSwing(random, 8)),
    }));

  if (bowlingOptions.length === 0) {
    return [];
  }

  const primaryOptions = bowlingOptions
    .sort((left, right) => right.player.bowling - left.player.bowling)
    .slice(0, Math.min(5, bowlingOptions.length));

  const wickets = distributeTotal(
    totalWickets,
    primaryOptions.map((option) => option.wicketWeight),
  );
  const runsConceded = distributeTotal(
    totalRunsConceded,
    primaryOptions.map((option) => option.economyWeight),
  );
  const ballsBowled = distributeCappedTotal(
    totalBalls,
    primaryOptions.map((option) => option.player.bowling),
    60,
  );

  return primaryOptions
    .map((option, index) => ({
      id: option.player.id,
      name: option.player.name,
      wickets: wickets[index],
      runsConceded: runsConceded[index],
      ballsBowled: ballsBowled[index],
    }))
    .sort(
      (left, right) =>
        right.wickets - left.wickets || left.runsConceded - right.runsConceded,
    );
}

function getOpponentRoster(opponent) {
  const roster = PLAYER_POOL.filter((player) => player.squadId === opponent.id);
  return roster.length > 0 ? roster : [];
}

function getOpponentMetrics(opponent) {
  const roster = getOpponentRoster(opponent);

  if (roster.length === 0) {
    return {
      batting: 0,
      bowling: 0,
    };
  }

  const { batting, bowling } = getTeamMetrics(roster);

  return {
    batting: round(batting),
    bowling: round(bowling),
  };
}

function buildOpponentBattingOrder(roster) {
  return [...roster]
    .sort((left, right) => right.batting - left.batting || right.bowling - left.bowling)
    .map((player) => player.id);
}

function buildOpponentBowlingOrder(roster) {
  return [...roster]
    .filter((player) => player.role !== "wicketkeeper")
    .sort((left, right) => right.bowling - left.bowling || right.batting - left.batting)
    .map((player) => player.id);
}

function formatScorecardRoster(roster, orderIds) {
  const byId = new Map(roster.map((player) => [player.id, player]));
  return orderIds.map((id) => byId.get(id)).filter(Boolean);
}

function pickNextBowler(rotation, stats, previousBowlerId) {
  const available = rotation.filter((player) => (stats.get(player.id)?.ballsBowled || 0) < 60);
  if (available.length === 0) {
    return null;
  }

  const next = available.find((player) => player.id !== previousBowlerId);
  return next || available[0];
}

function simulateOverByOver({
  battingOrder,
  bowlingOrder,
  inningsIndex,
  target,
  random,
  aggression = "mid",
}) {
  const aggressionProfile = BATTING_AGGRESSION_BY_ID.get(aggression) || BATTING_AGGRESSION_BY_ID.get("mid");
  let strikerIndex = 0;
  let nonStrikerIndex = 1;
  let nextBatterIndex = 2;
  let totalRuns = 0;
  let wickets = 0;
  let balls = 0;
  let previousBowlerId = null;

  const battingStats = new Map(
    battingOrder.map((player) => [player.id, { id: player.id, name: player.name, runs: 0, balls: 0 }]),
  );
  const bowlingStats = new Map(
    bowlingOrder.map((player) => [
      player.id,
      { id: player.id, name: player.name, wickets: 0, runsConceded: 0, ballsBowled: 0 },
    ]),
  );

  while (balls < 300 && wickets < 10) {
    if (target && totalRuns >= target) {
      break;
    }

    const striker = battingOrder[strikerIndex];
    const bowler = pickNextBowler(bowlingOrder, bowlingStats, previousBowlerId);
    if (!striker || !bowler) {
      break;
    }

    const battingEntry = battingStats.get(striker.id);
    const bowlingEntry = bowlingStats.get(bowler.id);

    for (let ballInOver = 0; ballInOver < 6; ballInOver += 1) {
      if (balls >= 300 || wickets >= 10 || (target && totalRuns >= target)) {
        break;
      }

      const ballsRemaining = 300 - balls;
      const runsNeeded = target ? Math.max(0, target - totalRuns) : 0;
      const skillEdge = (striker.batting - bowler.bowling) / 100;
      const chaseRate = target ? runsNeeded / Math.max(1, ballsRemaining) : 0;
      const pressureBoost = target ? clamp(chaseRate - 1, -0.18, 0.45) : 0;
      const deathOversBoost = balls >= 240 ? 0.03 : balls >= 180 ? 0.01 : 0;
      const wicketChance = clamp(
        0.034 -
          skillEdge * 0.012 +
          Math.max(0, pressureBoost) * 0.014 +
          deathOversBoost * 0.55 +
          aggressionProfile.wicketRisk,
        0.018,
        0.082,
      );
      const singleChance = clamp(
        0.31 + skillEdge * 0.05 - Math.max(0, pressureBoost) * 0.04 + aggressionProfile.singleDelta,
        0.2,
        0.41,
      );
      const doubleChance = clamp(
        0.11 + skillEdge * 0.025 + aggressionProfile.doubleDelta,
        0.05,
        0.18,
      );
      const boundaryChance = clamp(
        0.12 + skillEdge * 0.04 + deathOversBoost + aggressionProfile.boundaryDelta,
        0.05,
        0.24,
      );
      const sixChance = clamp(
        0.018 + skillEdge * 0.018 + deathOversBoost + aggressionProfile.sixDelta,
        0.004,
        0.095,
      );
      const tripleChance = 0.012;
      const chanceJitter =
        (hashValue(`${inningsIndex}-${striker.id}-${bowler.id}-${balls}`) % 1000) / 1000;
      const chance = (random() * 0.55 + chanceJitter * 0.45) % 1;

      battingEntry.balls += 1;
      bowlingEntry.ballsBowled += 1;
      balls += 1;

      if (chance < wicketChance) {
        wickets += 1;
        bowlingEntry.wickets += 1;

        if (nextBatterIndex >= battingOrder.length) {
          break;
        }

        strikerIndex = nextBatterIndex;
        nextBatterIndex += 1;
        continue;
      }

      let runs = 0;
      if (chance < wicketChance) {
        runs = 0;
      } else if (chance < wicketChance + sixChance) {
        runs = 6;
      } else if (chance < wicketChance + sixChance + boundaryChance) {
        runs = 4;
      } else if (chance < wicketChance + sixChance + boundaryChance + tripleChance) {
        runs = 3;
      } else if (chance < wicketChance + sixChance + boundaryChance + tripleChance + doubleChance) {
        runs = 2;
      } else if (
        chance <
        wicketChance + sixChance + boundaryChance + tripleChance + doubleChance + singleChance
      ) {
        runs = 1;
      } else {
        runs = 0;
      }

      battingEntry.runs += runs;
      bowlingEntry.runsConceded += runs;
      totalRuns += runs;

      if (runs % 2 === 1) {
        [strikerIndex, nonStrikerIndex] = [nonStrikerIndex, strikerIndex];
      }
    }

    [strikerIndex, nonStrikerIndex] = [nonStrikerIndex, strikerIndex];
    previousBowlerId = bowler.id;
  }

  return {
    runs: totalRuns,
    wickets,
    balls,
    battingCard: [...battingStats.values()].sort(
      (left, right) => right.runs - left.runs || left.balls - right.balls,
    ),
    bowlingCard: [...bowlingStats.values()]
      .filter((entry) => entry.ballsBowled > 0)
      .sort((left, right) => right.wickets - left.wickets || left.runsConceded - right.runsConceded),
  };
}

function simulateMatch(state, random = Math.random) {
  if (
    state.phase !== "tournament" ||
    state.matchIndex >= TOURNAMENT_OPPONENTS.length ||
    !state.currentOpponent
  ) {
    return state;
  }

  const opponent = state.currentOpponent;
  const team = getTeamMetrics(state.roster);
  const opponentRoster = getOpponentRoster(opponent);
  const opponentTeam = getTeamMetrics(opponentRoster);
  const difficulty = DIFFICULTY_BY_ID.get(state.difficulty) || DIFFICULTY_BY_ID.get("international");
  const aggression =
    BATTING_AGGRESSION_BY_ID.get(state.battingAggression) || BATTING_AGGRESSION_BY_ID.get("mid");
  const userBatsFirst = random() >= 0.5;
  const stageBoost = state.matchIndex * 2;
  const playerBatting = team.batting + difficulty.playerBatting;
  const playerBowling = team.bowling + difficulty.playerBowling;
  const opponentBatting = opponentTeam.batting + difficulty.opponentBatting + stageBoost;
  const opponentBowling = opponentTeam.bowling + difficulty.opponentBowling + stageBoost;
  const firstInningsRuns = userBatsFirst
    ? simulateInnings(playerBatting + aggression.scoreBias, opponentBowling, 0, random)
    : simulateInnings(opponentBatting, playerBowling, 0, random);
  const firstInningsWickets = userBatsFirst
    ? clamp(
        round(
          estimateWickets(firstInningsRuns, playerBatting, opponentBowling, random) +
            aggression.wicketBias,
        ),
        2,
        10,
      )
    : estimateWickets(firstInningsRuns, opponentBatting, playerBowling, random);

  const secondInningsPressure = 6;
  const secondInningsProjection = userBatsFirst
    ? simulateInnings(opponentBatting, playerBowling, secondInningsPressure, random)
    : simulateInnings(
        playerBatting + aggression.scoreBias,
        opponentBowling,
        secondInningsPressure,
        random,
      );
  const secondInningsBase = resolveChaseScore(
    secondInningsProjection,
    firstInningsRuns,
    userBatsFirst ? opponentBatting : playerBatting,
    userBatsFirst ? playerBowling : opponentBowling,
    random,
  );
  const secondInnings = userBatsFirst
    ? secondInningsBase
    : {
        ...secondInningsBase,
        wickets: clamp(round(secondInningsBase.wickets + aggression.wicketBias), 2, 10),
      };

  const playerRuns = userBatsFirst ? firstInningsRuns : secondInnings.runs;
  const playerWickets = userBatsFirst ? firstInningsWickets : secondInnings.wickets;
  const opponentRuns = userBatsFirst ? secondInnings.runs : firstInningsRuns;
  const opponentWickets = userBatsFirst ? secondInnings.wickets : firstInningsWickets;
  const chaseSucceeded = secondInnings.chaseSucceeded;
  const playerWon = userBatsFirst ? !chaseSucceeded : chaseSucceeded;
  const playerBalls = estimateInningsBalls(playerRuns, playerWickets, !userBatsFirst && playerWon);
  const opponentBalls = estimateInningsBalls(
    opponentRuns,
    opponentWickets,
    userBatsFirst ? opponentRuns >= playerRuns : false,
  );

  let marginType = "runs";
  let marginValue = Math.max(1, Math.abs(playerRuns - opponentRuns));

  if (chaseSucceeded) {
    marginType = "wickets";
    marginValue = userBatsFirst
      ? clamp(10 - opponentWickets, 1, 9)
      : clamp(10 - playerWickets, 1, 9);
  }

  const playerBattingCard = buildBattingCard(
    state.roster,
    playerRuns,
    playerBalls,
    playerWickets,
    random,
  );
  const playerBowlingCard = buildBowlingCard(
    state.roster,
    opponentRuns,
    opponentWickets,
    opponentBalls,
    random,
  );
  const opponentBattingCard = buildBattingCard(
    opponentRoster,
    opponentRuns,
    opponentBalls,
    opponentWickets,
    random,
  );
  const opponentBowlingCard = buildBowlingCard(
    opponentRoster,
    playerRuns,
    playerWickets,
    playerBalls,
    random,
  );
  const performer = playerWon
    ? marginType === "wickets"
      ? playerBattingCard[0]
      : playerBowlingCard[0]
    : playerBowlingCard[0] || chooseStandout(state.roster, "bowling", random);

  const result = {
    opponent,
    stage: opponent.stage,
    won: playerWon,
    battingFirst: userBatsFirst ? "player" : "opponent",
    playerRuns,
    playerWickets,
    playerBalls,
    opponentRuns,
    opponentWickets,
    opponentBalls,
    playerScore: formatScore(playerRuns, playerWickets),
    opponentScore: formatScore(opponentRuns, opponentWickets),
    performer,
    playerBattingCard,
    playerBowlingCard,
    opponentBattingCard,
    opponentBowlingCard,
    marginType,
    marginValue,
    headline: buildHeadline(playerWon, marginType, marginValue, opponent),
  };

  const results = [...state.results, result];
  const lastMatch = state.matchIndex === TOURNAMENT_OPPONENTS.length - 1;

  if (playerWon && lastMatch) {
    return {
      ...state,
      results,
      latestMatch: result,
      champion: true,
      phase: "finished",
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  if (playerWon) {
    return {
      ...state,
      results,
      latestMatch: result,
      currentOpponent: null,
      matchIndex: state.matchIndex + 1,
    };
  }

  return {
    ...state,
      results,
      latestMatch: result,
      eliminated: true,
      phase: "finished",
      currentOpponent: null,
    };
}

function getCurrentOpponent(state) {
  return state.currentOpponent;
}

function revealNextOpponent(state) {
  if (
    state.phase !== "tournament" ||
    state.currentOpponent ||
    state.matchIndex >= TOURNAMENT_OPPONENTS.length
  ) {
    return state;
  }

  return {
    ...state,
    battingAggression: "mid",
    currentOpponent: TOURNAMENT_OPPONENTS[state.matchIndex],
  };
}

function getProgressLabel(state) {
  if (state.champion) {
    return "Champions";
  }

  if (state.phase === "draft") {
    return "Draft Room";
  }

  if (state.latestMatch && state.eliminated) {
    return `Out in ${state.latestMatch.stage}`;
  }

  if (state.matchIndex >= TOURNAMENT_OPPONENTS.length) {
    return "Finished";
  }

  return TOURNAMENT_OPPONENTS[state.matchIndex].stage;
}



const appElement = document.querySelector("#app");
const STATS_KEY = "400-0-career";

let state = createInitialState();
let career = loadCareer();

function cleanPlayerName(name) {
  const flagTokens = new Set(["c", "captain", "vc", "vice captain", "vice-captain", "wk"]);

  return name
    .replace(/\(([^)]+)\)/g, (match, contents) => {
      const tokens = contents
        .toLowerCase()
        .replace(/\band\b/g, "&")
        .split(/[,/&]+/)
        .map((token) => token.trim().replace(/\s+/g, " "))
        .filter(Boolean);

      return tokens.length > 0 && tokens.every((token) => flagTokens.has(token)) ? "" : match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function getPlayerRoleLabel(player) {
  if (isAllRounderPlayer(player)) {
    if (player.batting - player.bowling >= 15) {
      return "Batting AR";
    }

    if (player.bowling - player.batting >= 15) {
      return "Bowling AR";
    }

    return "All-rounder";
  }

  if (player.role === "wicketkeeper") {
    return "WK";
  }

  return player.role === "batsman" ? "Batsman" : "Bowler";
}

function formatBattingEntry(entry) {
  return `${entry.runs} (${entry.balls})`;
}

function formatBowlingEntry(entry) {
  return `${entry.wickets}/${entry.runsConceded} (${formatOvers(entry.ballsBowled)})`;
}

function topThree(entries, key) {
  return [...entries]
    .sort((left, right) => right[key] - left[key] || left.name.localeCompare(right.name))
    .slice(0, 3);
}

function formatOvers(balls) {
  const overs = Math.floor(balls / 6);
  const remainder = balls % 6;
  return remainder === 0 ? `${overs}` : `${overs}.${remainder}`;
}

function loadCareer() {
  const fallback = {
    titles: 0,
    bestFinish: "Draft Room",
    deepestMatch: 0,
  };

  const stored = window.localStorage.getItem(STATS_KEY);

  if (!stored) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored);

    if (
      typeof parsed?.titles !== "number" ||
      typeof parsed?.bestFinish !== "string" ||
      typeof parsed?.deepestMatch !== "number"
    ) {
      throw new Error("Invalid career shape");
    }

    return parsed;
  } catch {
    window.localStorage.removeItem(STATS_KEY);
    return fallback;
  }
}

function saveCareer() {
  window.localStorage.setItem(STATS_KEY, JSON.stringify(career));
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function updateCareer(nextState) {
  if (nextState.phase !== "finished") {
    return;
  }

  if (nextState.champion) {
    career.titles += 1;
    career.bestFinish = "Champions";
    career.deepestMatch = TOURNAMENT_OPPONENTS.length;
    saveCareer();
    return;
  }

  const deepestMatch = nextState.results.length;
  if (deepestMatch > career.deepestMatch) {
    career.deepestMatch = deepestMatch;
    career.bestFinish = getProgressLabel(nextState);
    saveCareer();
  }
}

function resetRun() {
  state = createInitialState();
  render();
}

function revealDraftSquad() {
  if (state.phase !== "draft" || state.currentSquad) {
    return;
  }

  state = rerollCandidates(state);
  render();
}

function rosterMarkup() {
  if (state.roster.length === 0) {
    return `<p class="empty-copy">Your XI starts empty. Start the draft and build from World Cup history.</p>`;
  }

  return state.roster
    .map((player) => {
      const allRounder = isAllRounderPlayer(player);

      return `
        <article class="roster-card ${allRounder ? "roster-card--allrounder" : ""}">
          <div class="roster-matrix">
            <h3>${escapeHtml(cleanPlayerName(player.name))}</h3>
            <p class="card-meta">${escapeHtml(player.team)} ${player.year}</p>
            <dl class="roster-stats">
              <div><dt>Bat</dt><dd>${player.batting}</dd></div>
              <div><dt>Bowl</dt><dd>${player.bowling}</dd></div>
            </dl>
          </div>
        </article>
      `;
    })
    .join("");
}

function difficultyMarkup() {
  if (state.phase !== "draft" || state.roster.length > 0 || state.currentSquad) {
    return "";
  }

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Mode</p>
          <h2>Pick your difficulty</h2>
          <p class="squad-note">Choose the ladder before you start drafting.</p>
        </div>
      </div>
      <div class="difficulty-grid">
        ${DIFFICULTY_LEVELS.map((level) => `
          <button
            class="difficulty-card ${state.difficulty === level.id ? "difficulty-card--active" : ""}"
            type="button"
            data-action="difficulty"
            data-difficulty="${level.id}"
          >
            <strong>${escapeHtml(level.label)}</strong>
            <span>${escapeHtml(level.description)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function draftPanelMarkup() {
  if (state.phase !== "draft" || !state.currentSquad) {
    return "";
  }

  return `
    <section class="surface-card surface-card--pitch">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Draft Board</p>
          <h2>${escapeHtml(state.currentSquad.label)}</h2>
          <p class="squad-note">${escapeHtml(state.currentSquad.note)}</p>
        </div>
      </div>
      <div class="candidate-grid">${candidateMarkup()}</div>
    </section>
  `;
}

function opponentPanelMarkup() {
  const opponent = getCurrentOpponent(state);
  if (state.phase !== "tournament" || !opponent) {
    return "";
  }

  const metrics = getOpponentMetrics(opponent);

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Next Opponent</p>
          <h2>${escapeHtml(opponent.label)}</h2>
          <p class="squad-note">${escapeHtml(opponent.note)}</p>
        </div>
      </div>
      <div class="scout-list">
        <div><span>Stage</span><strong>${escapeHtml(opponent.stage)}</strong></div>
        <div><span>Batting</span><strong>${metrics.batting}</strong></div>
        <div><span>Bowling</span><strong>${metrics.bowling}</strong></div>
      </div>
      <div class="aggression-panel">
        <p class="aggression-panel__label">Batting approach</p>
        <div class="aggression-toggle">
          ${BATTING_AGGRESSION_LEVELS.map((level) => `
            <button
              class="aggression-chip ${state.battingAggression === level.id ? "aggression-chip--active" : ""}"
              type="button"
              data-action="aggression"
              data-aggression="${level.id}"
            >
              ${escapeHtml(level.label)}
            </button>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function tournamentTotals() {
  return state.results.reduce(
    (totals, match) => ({
      runsScored: totals.runsScored + match.playerRuns,
      wicketsLost: totals.wicketsLost + match.playerWickets,
      runsConceded: totals.runsConceded + match.opponentRuns,
      wicketsTaken: totals.wicketsTaken + match.opponentWickets,
    }),
    {
      runsScored: 0,
      wicketsLost: 0,
      runsConceded: 0,
      wicketsTaken: 0,
    },
  );
}

function tournamentLeaders() {
  const runMap = new Map();
  const wicketMap = new Map();

  for (const match of state.results) {
    for (const batter of match.playerBattingCard || []) {
      const current = runMap.get(batter.id) || { name: batter.name, runs: 0 };
      current.runs += batter.runs;
      runMap.set(batter.id, current);
    }

    for (const bowler of match.playerBowlingCard || []) {
      const current = wicketMap.get(bowler.id) || { name: bowler.name, wickets: 0 };
      current.wickets += bowler.wickets;
      wicketMap.set(bowler.id, current);
    }
  }

  const topRunScorer = [...runMap.values()].sort(
    (left, right) => right.runs - left.runs || left.name.localeCompare(right.name),
  )[0];
  const topWicketTaker = [...wicketMap.values()].sort(
    (left, right) => right.wickets - left.wickets || left.name.localeCompare(right.name),
  )[0];

  return { topRunScorer, topWicketTaker };
}

function scorecardSummaryMarkup(match) {
  const buildInningsMarkup = ({
    teamLabel,
    inningsLabel,
    score,
    balls,
    batters,
    bowlers,
  }) => {
    return `
      <section class="innings-card">
        <div class="innings-card__header">
          <div class="innings-card__title">
            <p class="innings-team">${escapeHtml(teamLabel)}</p>
            <span class="innings-tag">${escapeHtml(inningsLabel)}</span>
          </div>
          <strong>${escapeHtml(`${score} (${formatOvers(balls)} Overs)`)}</strong>
        </div>
        <div class="innings-columns">
          <div class="innings-column">
            <div class="innings-card__rows">
              ${batters
                .map(
                  (batter) => `
                    <div class="innings-entry">
                      <span>${escapeHtml(cleanPlayerName(batter.name))}</span>
                      <strong>${escapeHtml(formatBattingEntry(batter))}</strong>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
          <div class="innings-column">
            <div class="innings-card__rows">
              ${bowlers
                .map(
                  (bowler) => `
                    <div class="innings-entry innings-entry--bowling">
                      <span>${escapeHtml(cleanPlayerName(bowler.name))}</span>
                      <strong>${escapeHtml(formatBowlingEntry(bowler))}</strong>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  };

  return `
    <div class="scorecard-summary">
      <h4>Scorecard summary</h4>
      ${buildInningsMarkup({
        teamLabel: match.battingFirst === "player" ? "You" : match.opponent.shortName,
        inningsLabel: "1st Inn",
        score: match.battingFirst === "player" ? match.playerScore : match.opponentScore,
        balls: match.battingFirst === "player" ? match.playerBalls : match.opponentBalls,
        batters: topThree(
          match.battingFirst === "player" ? match.playerBattingCard || [] : match.opponentBattingCard || [],
          "runs",
        ),
        bowlers: topThree(
          match.battingFirst === "player" ? match.opponentBowlingCard || [] : match.playerBowlingCard || [],
          "wickets",
        ),
      })}
      ${buildInningsMarkup({
        teamLabel: match.battingFirst === "player" ? match.opponent.shortName : "You",
        inningsLabel: "2nd Inn",
        score: match.battingFirst === "player" ? match.opponentScore : match.playerScore,
        balls: match.battingFirst === "player" ? match.opponentBalls : match.playerBalls,
        batters: topThree(
          match.battingFirst === "player" ? match.opponentBattingCard || [] : match.playerBattingCard || [],
          "runs",
        ),
        bowlers: topThree(
          match.battingFirst === "player" ? match.playerBowlingCard || [] : match.opponentBowlingCard || [],
          "wickets",
        ),
      })}
    </div>
  `;
}

function candidateMarkup() {
  if (state.phase !== "draft") {
    return "";
  }

  if (!state.currentSquad) {
    return "";
  }

  return state.candidateSet
    .map((player) => {
      const allRounder = isAllRounderPlayer(player);

      return `
        <button class="candidate-card ${allRounder ? "candidate-card--allrounder" : ""}" type="button" data-action="draft" data-player-id="${player.id}">
          <div class="candidate-listing">
            <div>
              <h3>${escapeHtml(cleanPlayerName(player.name))}</h3>
              <p class="candidate-ratings">Bat ${player.batting} · Bowl ${player.bowling}</p>
            </div>
            <div class="candidate-listing__meta">
              <span class="candidate-role">${getPlayerRoleLabel(player)}</span>
            </div>
          </div>
        </button>
      `;
    })
    .join("");
}

function scheduleMarkup() {
  return TOURNAMENT_OPPONENTS.map((opponent, index) => {
    const completed = index < state.results.length;
    const active =
      state.currentOpponent &&
      index === state.matchIndex &&
      state.phase !== "draft" &&
      !state.champion;
    const result = state.results[index];
    const label = result
      ? result.opponent.label
      : active
        ? state.currentOpponent.label
        : "Opponent TBD";
    const outcome = result ? (result.won ? "W" : "L") : active ? "Live" : opponent.stage;

    return `
      <li class="schedule-item ${completed ? "schedule-item--done" : ""} ${active ? "schedule-item--active" : ""}">
        <div>
          <p class="schedule-stage">${escapeHtml(opponent.stage)}</p>
          <strong>${escapeHtml(label)}</strong>
        </div>
        <span class="schedule-outcome">${escapeHtml(outcome)}</span>
      </li>
    `;
  }).join("");
}

function resultMarkup() {
  if (state.phase === "finished" && state.results.length > 0) {
    const totals = tournamentTotals();
    const leaders = tournamentLeaders();

    return `
      <article class="match-card match-card--summary">
        <p class="eyebrow">Tournament Summary</p>
        <h3>${state.champion ? "Champions" : "Campaign Over"}</h3>
        <div class="summary-grid">
          <div><span>Runs Scored</span><strong>${totals.runsScored}</strong></div>
          <div><span>Wickets Lost</span><strong>${totals.wicketsLost}</strong></div>
          <div><span>Runs Conceded</span><strong>${totals.runsConceded}</strong></div>
          <div><span>Wickets Taken</span><strong>${totals.wicketsTaken}</strong></div>
        </div>
        <div class="summary-leaders">
          <div>
            <span>Top Run Scorer</span>
            <strong>${leaders.topRunScorer ? `${escapeHtml(cleanPlayerName(leaders.topRunScorer.name))} · ${leaders.topRunScorer.runs}` : "--"}</strong>
          </div>
          <div>
            <span>Top Wicket Taker</span>
            <strong>${leaders.topWicketTaker ? `${escapeHtml(cleanPlayerName(leaders.topWicketTaker.name))} · ${leaders.topWicketTaker.wickets}` : "--"}</strong>
          </div>
        </div>
        <p class="headline">${
          state.champion
            ? "The full run is complete. Your XI held up through every stage."
            : "The tournament ended, but the full scorecard is below for the postmortem."
        }</p>
      </article>
    `;
  }

  if (!state.latestMatch) {
    return "";
  }

  return `
    <article class="match-card ${state.latestMatch.won ? "match-card--win" : "match-card--loss"}">
      <p class="eyebrow">${escapeHtml(state.latestMatch.stage)}</p>
      <h3>${escapeHtml(state.latestMatch.opponent.label)}</h3>
      <div class="scoreline">
        <div>
          <span>You</span>
          <strong>${escapeHtml(state.latestMatch.playerScore)}</strong>
        </div>
        <div>
          <span>${escapeHtml(state.latestMatch.opponent.shortName)}</span>
          <strong>${escapeHtml(state.latestMatch.opponentScore)}</strong>
        </div>
      </div>
      <p class="headline">${escapeHtml(state.latestMatch.headline)}</p>
      <p class="performer">Standout: ${escapeHtml(cleanPlayerName(state.latestMatch.performer.name))}</p>
      ${scorecardSummaryMarkup(state.latestMatch)}
    </article>
  `;
}

function resultsHistoryMarkup() {
  if (state.results.length === 0) {
    return "";
  }

  return `
    <section class="surface-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Scorebook</p>
          <h2>Results</h2>
        </div>
      </div>
      <div class="results-list">
        ${state.results
          .map(
            (match) => `
              <article class="result-row">
                <div>
                  <p class="schedule-stage">${escapeHtml(match.stage)}</p>
                  <strong>${escapeHtml(match.opponent.label)}</strong>
                  <p class="candidate-team">${escapeHtml(match.headline)}</p>
                </div>
                <div class="result-scores">
                  <span>You ${escapeHtml(match.playerScore)}</span>
                  <span>${escapeHtml(match.opponent.shortName)} ${escapeHtml(match.opponentScore)}</span>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function actionMarkup() {
  if (state.phase === "draft") {
    const draftLabel = state.roster.length === 0 ? "Start Draft" : "Next Draft";

    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="reroll">${draftLabel}</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">New Run</button>
      </div>
    `;
  }

  if (state.phase === "tournament") {
    const opponent = getCurrentOpponent(state);
    if (!opponent) {
      const buttonLabel =
        state.results.length === 0 && state.matchIndex === 0
          ? "Start Tournament"
          : "Proceed to next match";

      return `
        <div class="action-row">
          <button class="action-button" type="button" data-action="reveal-opponent">${escapeHtml(buttonLabel)}</button>
          <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
        </div>
      `;
    }

    return `
      <div class="action-row">
        <button class="action-button" type="button" data-action="simulate">Play match</button>
        <button class="action-button action-button--ghost" type="button" data-action="reset">Redraft XI</button>
      </div>
    `;
  }

  return `
    <div class="action-row">
      <button class="action-button" type="button" data-action="reset">Start Another Run</button>
    </div>
  `;
}

function statusCopy() {
  if (state.phase === "draft") {
    if (!state.currentSquad) {
      const slotsLeft = 11 - state.roster.length;
      if (state.roster.length === 0) {
        const difficulty = DIFFICULTY_LEVELS.find((level) => level.id === state.difficulty);
        return `${difficulty?.label || "International"} mode selected. Press Start Draft to reveal your first country and year.`;
      }

      return `Pick made. ${slotsLeft} players left. Press Next Draft to reveal another country and year.`;
    }

    return "Pick one player to add to your XI.";
  }

  if (state.phase === "tournament") {
    const opponent = getCurrentOpponent(state);
    if (!opponent) {
      if (state.results.length === 0 && state.matchIndex === 0) {
        return "Your XI is set. Press Start Tournament when you're ready.";
      }
      return state.matchIndex < TOURNAMENT_OPPONENTS.length
        ? "You are through. Press Proceed to next match when you're ready."
        : "Tournament complete.";
    }
    return "Next opponent loaded. Set your batting approach, then press Play match.";
  }

  if (state.champion) {
    return "You went the distance and lifted the 400-0 World Cup.";
  }

  return "The run is over. Rework the squad balance and go again.";
}

function render() {
  const metrics = getTeamMetrics(state.roster);
  const showTournamentPanels = state.phase !== "draft" || state.results.length > 0;

  appElement.innerHTML = `
    <section class="shell">
      <header class="hero">
        <div class="hero__copy">
          <p class="eyebrow eyebrow--live">ODI World Cup Draft Game</p>
          <h1>400<span>-</span>0</h1>
          <p class="hero__lede">Draw from iconic ICC Cricket World Cup squads, draft an all-time line-up, and survive against some of the best cricket teams the world has seen.</p>
        </div>
        <div class="career-board">
          <div class="stat-tile">
            <span>Titles</span>
            <strong>${career.titles}</strong>
          </div>
          <div class="stat-tile">
            <span>Best Finish</span>
            <strong>${escapeHtml(career.bestFinish)}</strong>
          </div>
        </div>
      </header>

      <section class="status-panel">
        <p>${escapeHtml(statusCopy())}</p>
        ${actionMarkup()}
      </section>

      <section class="dashboard">
        <div class="dashboard__main">
          ${difficultyMarkup()}
          ${draftPanelMarkup()}
          ${opponentPanelMarkup()}
          ${showTournamentPanels ? resultMarkup() : ""}
          ${showTournamentPanels ? resultsHistoryMarkup() : ""}
        </div>

        <aside class="dashboard__side">
          <section class="surface-card surface-card--sheet">
            <div class="section-heading">
              <div>
                <p class="eyebrow">Squad Sheet</p>
                <h2>${state.roster.length}/11 picked</h2>
              </div>
              <div class="mini-metrics">
                <span>Bat ${metrics.batting || "--"}</span>
                <span>Bowl ${metrics.bowling || "--"}</span>
              </div>
            </div>
            <div class="roster-list">${rosterMarkup()}</div>
          </section>
        </aside>
      </section>

      <footer class="small-print">
        <p>Inspired by and with thanks to 82-0.com.</p>
        <p>400-0 is an independent, fan-made game. It is not affiliated with, endorsed by, sponsored by, or associated with the ICC, any cricket board, club, competition, league, governing body, organisation, or with any game, publisher, or ratings provider. All team names, player names, ratings, and tournament-era data are used for informational and descriptive purposes only, and all trademarks and other intellectual property remain the property of their respective owners.</p>
        <p>Ronel Khan, 2026.</p>
      </footer>
    </section>
  `;
}

appElement.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.action;

  if (action === "draft") {
    state = draftPlayer(state, target.dataset.playerId);
    render();
    return;
  }

  if (action === "reroll") {
    revealDraftSquad();
    return;
  }

  if (action === "reveal-opponent") {
    state = revealNextOpponent(state);
    render();
    return;
  }

  if (action === "difficulty") {
    state = setDifficulty(state, target.dataset.difficulty);
    render();
    return;
  }

  if (action === "aggression") {
    state = setBattingAggression(state, target.dataset.aggression);
    render();
    return;
  }

  if (action === "simulate") {
    state = simulateMatch(state);
    updateCareer(state);
    render();
    return;
  }

  if (action === "reset") {
    resetRun();
  }
});

render();

})();
