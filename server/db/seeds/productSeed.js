const db = require('../db')
const { Product, Genre } = require('../models')

const products = [
  {
    name: 'Earthworm Jim 2',
    slug: 'earthworm-jim-2',
    summary: 'From Evil the Cat’s’Circus of the Scars’ to the planet of Meat, join Jim on a madcap chase across the galaxy. Saving cows, thwarting lawyers and outsmarting Psy-Crow are all in a day’s work for Jim. Are you up to the challenge? Can you handle the awesome new weapons? Excellent! Then stop reading this. Try it now! Trust no one, play it yourself.. or EAT DIRT!',
    totalRating: 79.37251270873179,
    genres: [
      {
        name: 'Shooter',
      },
      {
        name: 'Platform',
      },
      {
        name: 'Adventure',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/shtdpmxcg9cnmgwtlboq.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ccdy4e110wbx37s3ybrm.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ouq533wsjagftgikduil.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/nlywbrqlfx3paijjh9hc.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/n5glcf3qc3uyxut8zcpu.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vcjif99spcymink0fjzi.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/upk4rxdlfeuvxquzisid.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/jdf2fom71ww6xomhbhsx.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/hlsesbbtrmmelyk5r9r2.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vvzsjn9n2oaqvokfb8f5.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/i0qpjdgkdg5hhlnubpgr.jpg',
      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/zhbqllbx7c8unhymtz4t.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ew9h3glovnb1ioebi1ft.jpg',


    },
  },
  {

    name: 'Stargate',
    slug: 'stargate',
    summary: "Warp through the Stargate to an intergalactic dimension of non-stop action, danger and adventure! Face a hostile and unknown world in over 30 missions. From the village of Naganda to Ra's pyramid spacecraft, you're armed with an arsenal of weapons and incredible alien fire power. It's up to you to defeat the evil ruler Ra and unlock the mystery of the Stargate! It will take you a million light years from home... but can you find your way back?",
    genres: [
      {

        name: 'Shooter',
      },
      {

        name: 'Platform',
      },
      {

        name: 'Puzzle',
      },
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'c_A19bZY8fA',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/uosq1bytgd6nyxacv4aj.jpg',


    },
  },
  {

    name: "Sid Meier's Civilization",
    slug: 'sid-meiers-civilization',
    summary: "Sid Meier's Civilization is a turn-based strategy computer game created by Sid Meier for MicroProse in 1991.The game's objective is \"...to build an empire that would stand the test of time\". The game begins in 4000 BC, and the players attempt to expand and develop their empires through the ages until modern and near-future times. It is also known simply as Civilization.",
    totalRating: 93.1101289199054,
    genres: [
      {

        name: 'Strategy',
      },
      {

        name: 'Turn-based strategy (TBS)',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/riadn8t0d8mvlbsutcof.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/iegpve4lhafckyfnynej.jpg',


    },
  },
  {

    name: 'Tactics Ogre: Let Us Cling Together',
    slug: 'tactics-ogre-let-us-cling-together',
    summary: 'Tactics Ogre is a 3D isometric tactical role-playing game. The player starts out with a band of troops, builds a small army and fights many battles with choices to make in between, that will determine which one of the eight possible endings will be reached in a non-linear storyline. The player has the option to recruit characters, control individual equipment of each character, with over six male character classes, six female character classes, three demi-human classes, and more. It is also possible to train at safe locations to prepare the army before the next battle or storyline advancement.',
    totalRating: 92,
    genres: [
      {

        name: 'Role-playing (RPG)',
      },
      {

        name: 'Strategy',
      },
      {

        name: 'Turn-based strategy (TBS)',
      },
      {

        name: 'Tactical',
      },
      {

        name: 'Adventure',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/tbdxs2axgkvsw2mvm7mn.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/qloeraqwfgpjrwphv2jx.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/g7whn6pht2hjx07anzlv.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/deqgqwshgpgnm6f7yyka.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ebn4qpaha8e8ur4ikt9n.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/kl6gwllcgqtlgpzoihp9.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/hl8xphrztunx6k4cdtlh.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ruwmhbiqjicxnlaxrjsp.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/gdukrgeuoszq9dcgnzpr.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/zv8kgi9sshwmbwegv4ux.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/kgkjskd3pumqipbhgtt4.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/cmhgoqnyiiyb4iyu7vv5.jpg',


      },
    ],
    videos: [
      {
        name: 'Trailer',
        video_id: '1_XQ4C2VcCM',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/yp8d4h6xwje27nl5nfwe.jpg',


    },
  },
  {

    name: 'Super Formation Soccer 94',
    slug: 'super-formation-soccer-94',
    summary: 'Super Formation Soccer 94 is a Sports game, developed and published by Human Entertainment, which was released in Japan in 1994.',
    genres: [
      {

        name: 'Sport',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vsai26oqe8lb2tjuwocy.jpg',


    },
  },
  {

    name: 'Hong Kong 97',
    slug: 'hong-kong-97',
    summary: "Hong Kong 97 is a 1995 multidirectional shooter video game made in Japan for the Super Famicom in disk drive format by HappySoft Ltd., a homebrew game company. The game was designed by the Japanese game journalist Kowloon Kurosawa (クーロン黒沢), who said the game was made in about a week. The game has gained a cult following in Japan and Taiwan for its notoriously poor quality — it has been ranked as a kusoge, which literally means \"shitty game\", a game considered \"so bad that it's good\". It has since been given multiple parody treatments.\nThe game also achieved Number One \"Wacky Japanese Game of All Time\" in the XLEAGUE.TV video game TV show Wez and Larry's Top Tens and was featured in an episode of the Angry Video Game Nerd.",
    totalRating: 10,
    genres: [
      {

        name: 'Shooter',
      },
      {

        name: 'Strategy',
      },
      {

        name: 'Turn-based strategy (TBS)',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/irjqzbspexbstmgilgih.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ucr1grczy5alzafanbo8.jpg',


    },
  },
  {

    name: 'Mouryou Senki Madara 2',
    slug: 'mouryou-senki-madara-2',
    summary: 'Mouryou Senki Madara 2 is a Role-Playing game, published by Konami, which was released in Japan in 1993.',
    genres: [
      {

        name: 'Role-playing (RPG)',
      },
      {

        name: 'Adventure',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/gzsm6jkqc7fnrzw6rfy3.jpg',


    },
  },
  {

    name: 'U.N. Squadron',
    slug: 'u-n-squadron',
    summary: "Side-scrolling shoot-em-up, in a similar style to such games as Gradius, R-Type and Scramble. The aim is to wipe out the enemy, which has gathered around the allied airspace of 'Area 88', in a series of military aircraft-based scenarios. You choose one of three unique pilots; Shin Kazama, Micky Schymon or Greg Gates, each with varying abilities at damage repair, weapon handling and flying skill, and engage the enemy over a series of challenging missions. The player starts out with the weakest plane, the F8E Crusader, which can only be armed with a very basic range weapons. But, through completing various missions, enough cash can be raised to purchase higher-quality aircraft. These superior planes are more agile, have improved resilience to damage and have a greater range of fire. Furthermore, the more advanced fighters can be armed with superior special weapons, such as napalm. The missions include attacks on sand bases, the nuclear submarine 'Seavet' and enemy supply camps, as well as seeing off groups of airborne 'bandits' who swarm-in on Area 88. The enemy is plentiful, and the pace is frantic. Shoot at everything on the screen that moves, and the allied forces might just come out on top......",
    totalRating: 89.863783826608,
    genres: [
      {

        name: 'Shooter',
      },
      {

        name: 'Real Time Strategy (RTS)',
      },
      {

        name: 'Strategy',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/bx0oevi28kdgwp1veska.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/sclyemwtbi3mize5dsux.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/u10bmqn85emhnmygajj7.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/fuvxiqnk0hmitkw8hkwm.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ytgity2jgtwplc2eeyo5.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/qeczgqlkaxx35mwa1ani.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/dtjioweblrg35nlwb4q6.jpg',


    },
  },
  {

    name: 'Kick Off 2',
    slug: 'kick-off-2',
    totalRating: 70.0623052959502,
    genres: [
      {

        name: 'Sport',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/p1my8w5ozseywww1xf6z.jpg',


    },
  },
  {

    name: 'RoboCop Versus The Terminator',
    slug: 'robocop-versus-the-terminator',
    summary: "In the crumbling ruins of a world under siege, man-machine meets machine-man as legendary cyborgs clash to decide the fate of the Earth. As Robocop, you must travel across time into a bloody future ruled by the mechanical forces of Skynet. You'll face attack from every angle, every moment. An unwavering army of Terminators, robotic dogs, spiders, Endoskeletons and a relentless arsenal of automated weapons await you in this veritable hell on earth. To destroy this enemy, free its hostages and finally pierce the dark heart of a killer computer. It will take something more powerful than plasma rifles and laser guns: the human mind that still burns within you.",
    totalRating: 87.591339095085,
    genres: [
      {

        name: 'Shooter',
      },
      {

        name: 'Platform',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/sntj1vonpscowfmcyfpo.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vndmlzhwwx31no8qemvv.jpg',


      },
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'UJu0IeYb7AA',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/bw98iwvrfc7crwbvkb7v.jpg',


    },
  },
  {

    name: 'Wolfenstein 3D',
    slug: 'wolfenstein-3d',
    summary: "Rumors are that deep within the castle the diabolical Dr. Schabbs has perfected a technique for building a fierce army from the bodies of the dead. It's so far removed from reality that it would seem silly if it wasn't so sick. But what if it were true? \n \nAs an escaped prisoner in a Nazi war prison, you will move smoothly through a 3D world full of amazing detail and animation. Run through sensational and realistic 3-D environments, with intelligently-moving guards and opponents. \n \nWinner of multiple industry awards in 1992 - including People's Choice Award - Wolfenstein 3D has been described as \"one of the most important games ever created\" (PC Gamer) and has been voted \"Best Arcade/Action Game\" by numerous publications.",
    totalRating: 68.15371859417766,
    genres: [
      {

        name: 'Shooter',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ddjhoungdemg2gajrbox.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/fslgujq7wbgvhmvntj5h.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/thpbaiauag4gnc4vuat7.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/y5jyx6nbux31zmdhrump.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/iuabh1ilexrmjnje1rmp.jpg',


      },
    ],
    videos: [
      {
        name: 'Trailer',
        video_id: '7P_dic-pSKo',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/ikl9gal7eshoi0buldmg.jpg',


    },
  },
  {

    name: 'Casper',
    slug: 'casper',
    summary: "Based on the Casper film, the game pits you in the role of the friendly ghost trying to make a friend and a second chance at life instead of scaring everyone away. \n \nThe plot centers around the \"spoiled, grasping inheritor of Whipstaff Manor\" - Carrigan Crittenden. She's after the treasure she thinks is hidden in the walls. Casper will need the help of Dr James Harvey - therapist to the dead - if he has any hope of succeeding in his adventures. \n \nCasper will also have to deal with his uncles - Stretch, Stinkie and Fatso, who just love to scare \"Fleshies\" and thwart Casper's efforts. The gameplay is 3d - and is mostly puzzle solving, with Casper able to take a variety of forms and manipulating objects.",
    totalRating: 40,
    genres: [
      {

        name: 'Platform',
      },
      {

        name: 'Strategy',
      },
      {

        name: 'Adventure',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/nxnuexz43dhrvzqxcnqx.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/xp0zfihzjbc1rkoyolh1.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vjrjdi8xsn3usqxn2rcg.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/g90pqqcww37ncrtqijfu.jpg',


    },
  },
  {

    name: "Kyle Petty's No Fear Racing",
    slug: 'kyle-pettys-no-fear-racing',
    summary: "Kyle Petty's No Fear Racing lets the player race on 28 different stock car tracks and choose from a bevy of customizable cars, each with their own appearances, strengths and weaknesses. There are three different modes to play. A Single Race where the player can choose a car and a track and race one time against a slew of computer opponents. Season lets the player compete in an entire season on all the tracks, earning prize money to buy parts to upgrade their car. They can change parts to maximize performance or even tweak the car such as change gear ratios, spoiler height, tire pressure, etc.",
    genres: [
      {

        name: 'Racing',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/mnhijdfevesbiud6cljx.jpg',


    },
  },
  {

    name: 'Spider-Man and Venom: Maximum Carnage',
    slug: 'spider-man-and-venom-maximum-carnage',
    summary: "Spider-Man and Venom: Maximum Carnage is a side-scrolling beat 'em up game for the Super NES and Sega Genesis/Mega Drive, developed by Software Creations and published by Acclaim Entertainment and it's subsidiary LJN in 1994. The game, based on a sprawling comic book story arc of the same name, features numerous heroes, including Spider-Man, Venom, and their allies from the Marvel Comics fictional universe like Captain America, Black Cat, Iron Fist, Cloak and Dagger, Deathlok, Morbius and Firestar, all teaming up to battle an onslaught of villains led by Carnage, including Shriek, Doppelganger, Demogoblin and Carrion.[1]\n\nBoth the Genesis/Mega Drive and Super NES versions come in a red cartridge. They were later released in the normal cartridge colors (black for Genesis, gray for Super NES).\n\nThe game was followed up by a sequel called Venom/Spider-Man: Separation Anxiety.\n\nUniversal Studios Orlando used Maximum Carnage as the theme for a haunted house at Halloween Horror Nights in 2002.",
    genres: [
      {

        name: 'Fighting',
      },
      {

        name: "Hack and slash/Beat 'em up",
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/dagrszxnca1vilynkcyg.jpg',


    },
  },
  {

    name: 'Spider-Man',
    slug: 'spider-man--4',
    summary: "In this exciting SPIDER-MAN adventure, the GREEN GOBLIN has set out to destroy New York City. Only you can save the bustling metropolis - because you're SPIDER-MAN! Quickly slip into your costume, check your web fluid cartridges, and get set to web-swing through this most dangerous mission!",
    genres: [
      {

        name: 'Platform',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/xxbupvd2yzsgkywe33n0.jpg',


    },
  },
  {

    name: 'Super Formation Soccer 96: World Club Edition',
    slug: 'super-formation-soccer-96-world-club-edition',
    summary: 'Super Formation Soccer 96: World Club Edition is a Sports game, developed and published by Human Entertainment, which was released in Japan in 1996.',
    genres: [
      {

        name: 'Sport',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/nnov6gcjo3zddex26xuj.jpg',


    },
  },
  {

    name: 'Madara Saga',
    slug: 'madara-saga',
    summary: 'Madara Saga is a Role-Playing game, developed by Nexus Interact and published by Datam Polystar, which was released in Japan in 1996.',
    genres: [
      {

        name: 'Role-playing (RPG)',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
  },
  {

    name: 'Wild Guns',
    slug: 'wild-guns',
    summary: "Annie & Clint, two gunslingers, arrive at Carson City and get caught up in a gunfight. It's raining bullets and there are explosions everywhere. After an intense battle they enter the saloon where they dispose of every cowboy in sight while redecorating the interior. Our heroes flee the scene by climbing on the roof, but what's that sound? ... it's a HUGE robot!",
    totalRating: 74,
    genres: [
      {

        name: 'Shooter',
      },
      {

        name: 'Arcade',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/agqguoxvhyntz3tkqxii.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/a8tushofdacno8w5w0iq.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/kyboj5rdngtfuojo2uf1.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/hpw7vgd45rdhpqeivdiz.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/nj3l3a1ojg19zgexeh0y.jpg',


      },
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/zfaqwjh12raharda4ufc.jpg',


      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/gufyzk5zadqbvot2fsd1.jpg',


    },
  },
  {

    name: 'Radical Rex',
    slug: 'radical-rex',
    summary: "Slam through ten wild levels of jammin' jungles, freaked-out forests, haunted dino-graveyards, piranha-infested underwater caverns - and inside a giant dinosaur.",
    genres: [
      {

        name: 'Platform',
      },
    ],
    videos: [
      {
        name: 'Game intro',
        video_id: 'kAbtKQyssK4',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/lnyg242sqqlkqgf9l2yt.jpg',


    },
  },
  {

    name: 'Primal Rage',
    slug: 'primal-rage',
    summary: 'A meteor struck the Earth, and caused great chaos. Seven gods from ancient times awoke, and are now attempting to take control of the post-apocalyptic world. \n \nPrimal Rage is a one-on-one fighting game featuring dinosaurs and giant apes as the fighters. The graphics are done with digitized stop-motion animation. Gameplay is similar to Mortal Kombat in that it is viewed from a side perspective, and features deadly finishing moves at the end of the match.',
    totalRating: 63.49100312006095,
    genres: [
      {

        name: 'Fighting',
      },
      {

        name: 'Real Time Strategy (RTS)',
      },
      {

        name: 'Strategy',
      },
    ],
    screenshots: [
      {
        url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/syumv1xcqtvqow3rr4fb.jpg',


      },
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'kBuJkh2uhqs',
      },
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/qh8fd8run6kzetudl7rf.jpg',


    },
  },
]

const productSeed = async () => {
  try {
    console.log('syncing db')
    await db.sync({ force: true })
    console.log('db synced')
    const createdProducts = await Product.bulkCreate(products, {
      returning: true,
    })
    await Promise.all([
      createdProducts[0].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[1].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[2].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[3].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[4].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[5].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[6].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[7].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[8].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[9].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[10].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[11].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[12].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[13].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[14].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[15].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[16].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[17].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[18].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
      createdProducts[19].setGenres(await Genre.findById(Math.floor(Math.random() * 20) + 1)),
    ])
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Shutting connection')
    db.close()
    console.log('db close')
  }
}

productSeed()
