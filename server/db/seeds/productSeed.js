const {Product, Genre} = require('../models')

const products = [
  {
    name: 'Earthworm Jim 2',
    slug: 'earthworm-jim-2',
    summary:
      'From Evil the Cat’s’Circus of the Scars’ to the planet of Meat, join Jim on a madcap chase across the galaxy. Saving cows, thwarting lawyers and outsmarting Psy-Crow are all in a day’s work for Jim. Are you up to the challenge? Can you handle the awesome new weapons? Excellent! Then stop reading this. Try it now! Trust no one, play it yourself.. or EAT DIRT!',
    totalRating: 79.37251270873179,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      },
      {
        name: 'Adventure'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/shtdpmxcg9cnmgwtlboq.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ccdy4e110wbx37s3ybrm.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ouq533wsjagftgikduil.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/nlywbrqlfx3paijjh9hc.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/n5glcf3qc3uyxut8zcpu.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/vcjif99spcymink0fjzi.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/upk4rxdlfeuvxquzisid.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/jdf2fom71ww6xomhbhsx.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/hlsesbbtrmmelyk5r9r2.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/vvzsjn9n2oaqvokfb8f5.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/i0qpjdgkdg5hhlnubpgr.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/zhbqllbx7c8unhymtz4t.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/ew9h3glovnb1ioebi1ft.jpg'
    }
  },
  {
    name: 'Stargate',
    slug: 'stargate',
    summary:
      "Warp through the Stargate to an intergalactic dimension of non-stop action, danger and adventure! Face a hostile and unknown world in over 30 missions. From the village of Naganda to Ra's pyramid spacecraft, you're armed with an arsenal of weapons and incredible alien fire power. It's up to you to defeat the evil ruler Ra and unlock the mystery of the Stargate! It will take you a million light years from home... but can you find your way back?",
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      },
      {
        name: 'Puzzle'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'c_A19bZY8fA'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/uosq1bytgd6nyxacv4aj.jpg'
    }
  },
  {
    name: "Sid Meier's Civilization",
    slug: 'sid-meiers-civilization',
    summary:
      'Sid Meier\'s Civilization is a turn-based strategy computer game created by Sid Meier for MicroProse in 1991.The game\'s objective is "...to build an empire that would stand the test of time". The game begins in 4000 BC, and the players attempt to expand and develop their empires through the ages until modern and near-future times. It is also known simply as Civilization.',
    totalRating: 93.1101289199054,
    genres: [
      {
        name: 'Strategy'
      },
      {
        name: 'Turn-based strategy (TBS)'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/riadn8t0d8mvlbsutcof.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/iegpve4lhafckyfnynej.jpg'
    }
  },
  {
    name: 'Tactics Ogre: Let Us Cling Together',
    slug: 'tactics-ogre-let-us-cling-together',
    summary:
      'Tactics Ogre is a 3D isometric tactical role-playing game. The player starts out with a band of troops, builds a small army and fights many battles with choices to make in between, that will determine which one of the eight possible endings will be reached in a non-linear storyline. The player has the option to recruit characters, control individual equipment of each character, with over six male character classes, six female character classes, three demi-human classes, and more. It is also possible to train at safe locations to prepare the army before the next battle or storyline advancement.',
    totalRating: 92,
    genres: [
      {
        name: 'Role-playing (RPG)'
      },
      {
        name: 'Strategy'
      },
      {
        name: 'Turn-based strategy (TBS)'
      },
      {
        name: 'Tactical'
      },
      {
        name: 'Adventure'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/tbdxs2axgkvsw2mvm7mn.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/qloeraqwfgpjrwphv2jx.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/g7whn6pht2hjx07anzlv.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/deqgqwshgpgnm6f7yyka.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ebn4qpaha8e8ur4ikt9n.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/kl6gwllcgqtlgpzoihp9.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/hl8xphrztunx6k4cdtlh.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ruwmhbiqjicxnlaxrjsp.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/gdukrgeuoszq9dcgnzpr.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/zv8kgi9sshwmbwegv4ux.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/kgkjskd3pumqipbhgtt4.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/cmhgoqnyiiyb4iyu7vv5.jpg'
      }
    ],
    videos: [
      {
        name: 'Trailer',
        video_id: '1_XQ4C2VcCM'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/yp8d4h6xwje27nl5nfwe.jpg'
    }
  },
  {
    name: 'Super Formation Soccer 94',
    slug: 'super-formation-soccer-94',
    summary:
      'Super Formation Soccer 94 is a Sports game, developed and published by Human Entertainment, which was released in Japan in 1994.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/vsai26oqe8lb2tjuwocy.jpg'
    }
  },
  {
    name: 'Hong Kong 97',
    slug: 'hong-kong-97',
    summary:
      'Hong Kong 97 is a 1995 multidirectional shooter video game made in Japan for the Super Famicom in disk drive format by HappySoft Ltd., a homebrew game company. The game was designed by the Japanese game journalist Kowloon Kurosawa (クーロン黒沢), who said the game was made in about a week. The game has gained a cult following in Japan and Taiwan for its notoriously poor quality — it has been ranked as a kusoge, which literally means "shitty game", a game considered "so bad that it\'s good". It has since been given multiple parody treatments.\nThe game also achieved Number One "Wacky Japanese Game of All Time" in the XLEAGUE.TV video game TV show Wez and Larry\'s Top Tens and was featured in an episode of the Angry Video Game Nerd.',
    totalRating: 10,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Strategy'
      },
      {
        name: 'Turn-based strategy (TBS)'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/irjqzbspexbstmgilgih.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/ucr1grczy5alzafanbo8.jpg'
    }
  },
  {
    name: 'Mouryou Senki Madara 2',
    slug: 'mouryou-senki-madara-2',
    summary:
      'Mouryou Senki Madara 2 is a Role-Playing game, published by Konami, which was released in Japan in 1993.',
    genres: [
      {
        name: 'Role-playing (RPG)'
      },
      {
        name: 'Adventure'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/gzsm6jkqc7fnrzw6rfy3.jpg'
    }
  },
  {
    name: 'U.N. Squadron',
    slug: 'u-n-squadron',
    summary:
      "Side-scrolling shoot-em-up, in a similar style to such games as Gradius, R-Type and Scramble. The aim is to wipe out the enemy, which has gathered around the allied airspace of 'Area 88', in a series of military aircraft-based scenarios. You choose one of three unique pilots; Shin Kazama, Micky Schymon or Greg Gates, each with varying abilities at damage repair, weapon handling and flying skill, and engage the enemy over a series of challenging missions. The player starts out with the weakest plane, the F8E Crusader, which can only be armed with a very basic range weapons. But, through completing various missions, enough cash can be raised to purchase higher-quality aircraft. These superior planes are more agile, have improved resilience to damage and have a greater range of fire. Furthermore, the more advanced fighters can be armed with superior special weapons, such as napalm. The missions include attacks on sand bases, the nuclear submarine 'Seavet' and enemy supply camps, as well as seeing off groups of airborne 'bandits' who swarm-in on Area 88. The enemy is plentiful, and the pace is frantic. Shoot at everything on the screen that moves, and the allied forces might just come out on top......",
    totalRating: 89.863783826608,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Real Time Strategy (RTS)'
      },
      {
        name: 'Strategy'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/bx0oevi28kdgwp1veska.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/sclyemwtbi3mize5dsux.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/u10bmqn85emhnmygajj7.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/fuvxiqnk0hmitkw8hkwm.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ytgity2jgtwplc2eeyo5.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/qeczgqlkaxx35mwa1ani.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/dtjioweblrg35nlwb4q6.jpg'
    }
  },
  {
    name: 'Kick Off 2',
    slug: 'kick-off-2',
    totalRating: 70.0623052959502,
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/p1my8w5ozseywww1xf6z.jpg'
    }
  },
  {
    name: 'RoboCop Versus The Terminator',
    slug: 'robocop-versus-the-terminator',
    summary:
      "In the crumbling ruins of a world under siege, man-machine meets machine-man as legendary cyborgs clash to decide the fate of the Earth. As Robocop, you must travel across time into a bloody future ruled by the mechanical forces of Skynet. You'll face attack from every angle, every moment. An unwavering army of Terminators, robotic dogs, spiders, Endoskeletons and a relentless arsenal of automated weapons await you in this veritable hell on earth. To destroy this enemy, free its hostages and finally pierce the dark heart of a killer computer. It will take something more powerful than plasma rifles and laser guns: the human mind that still burns within you.",
    totalRating: 87.591339095085,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/sntj1vonpscowfmcyfpo.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/vndmlzhwwx31no8qemvv.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'UJu0IeYb7AA'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/bw98iwvrfc7crwbvkb7v.jpg'
    }
  },
  {
    name: 'Wolfenstein 3D',
    slug: 'wolfenstein-3d',
    summary:
      'Rumors are that deep within the castle the diabolical Dr. Schabbs has perfected a technique for building a fierce army from the bodies of the dead. It\'s so far removed from reality that it would seem silly if it wasn\'t so sick. But what if it were true? \n \nAs an escaped prisoner in a Nazi war prison, you will move smoothly through a 3D world full of amazing detail and animation. Run through sensational and realistic 3-D environments, with intelligently-moving guards and opponents. \n \nWinner of multiple industry awards in 1992 - including People\'s Choice Award - Wolfenstein 3D has been described as "one of the most important games ever created" (PC Gamer) and has been voted "Best Arcade/Action Game" by numerous publications.',
    totalRating: 68.15371859417766,
    genres: [
      {
        name: 'Shooter'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/ddjhoungdemg2gajrbox.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/fslgujq7wbgvhmvntj5h.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/thpbaiauag4gnc4vuat7.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/y5jyx6nbux31zmdhrump.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/iuabh1ilexrmjnje1rmp.jpg'
      }
    ],
    videos: [
      {
        name: 'Trailer',
        video_id: '7P_dic-pSKo'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/ikl9gal7eshoi0buldmg.jpg'
    }
  },
  {
    name: 'Casper',
    slug: 'casper',
    summary:
      'Based on the Casper film, the game pits you in the role of the friendly ghost trying to make a friend and a second chance at life instead of scaring everyone away. \n \nThe plot centers around the "spoiled, grasping inheritor of Whipstaff Manor" - Carrigan Crittenden. She\'s after the treasure she thinks is hidden in the walls. Casper will need the help of Dr James Harvey - therapist to the dead - if he has any hope of succeeding in his adventures. \n \nCasper will also have to deal with his uncles - Stretch, Stinkie and Fatso, who just love to scare "Fleshies" and thwart Casper\'s efforts. The gameplay is 3d - and is mostly puzzle solving, with Casper able to take a variety of forms and manipulating objects.',
    totalRating: 40,
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Strategy'
      },
      {
        name: 'Adventure'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/nxnuexz43dhrvzqxcnqx.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/xp0zfihzjbc1rkoyolh1.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/vjrjdi8xsn3usqxn2rcg.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/g90pqqcww37ncrtqijfu.jpg'
    }
  },
  {
    name: "Kyle Petty's No Fear Racing",
    slug: 'kyle-pettys-no-fear-racing',
    summary:
      "Kyle Petty's No Fear Racing lets the player race on 28 different stock car tracks and choose from a bevy of customizable cars, each with their own appearances, strengths and weaknesses. There are three different modes to play. A Single Race where the player can choose a car and a track and race one time against a slew of computer opponents. Season lets the player compete in an entire season on all the tracks, earning prize money to buy parts to upgrade their car. They can change parts to maximize performance or even tweak the car such as change gear ratios, spoiler height, tire pressure, etc.",
    genres: [
      {
        name: 'Racing'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/mnhijdfevesbiud6cljx.jpg'
    }
  },
  {
    name: 'Spider-Man and Venom: Maximum Carnage',
    slug: 'spider-man-and-venom-maximum-carnage',
    summary:
      "Spider-Man and Venom: Maximum Carnage is a side-scrolling beat 'em up game for the Super NES and Sega Genesis/Mega Drive, developed by Software Creations and published by Acclaim Entertainment and it's subsidiary LJN in 1994. The game, based on a sprawling comic book story arc of the same name, features numerous heroes, including Spider-Man, Venom, and their allies from the Marvel Comics fictional universe like Captain America, Black Cat, Iron Fist, Cloak and Dagger, Deathlok, Morbius and Firestar, all teaming up to battle an onslaught of villains led by Carnage, including Shriek, Doppelganger, Demogoblin and Carrion.[1]\n\nBoth the Genesis/Mega Drive and Super NES versions come in a red cartridge. They were later released in the normal cartridge colors (black for Genesis, gray for Super NES).\n\nThe game was followed up by a sequel called Venom/Spider-Man: Separation Anxiety.\n\nUniversal Studios Orlando used Maximum Carnage as the theme for a haunted house at Halloween Horror Nights in 2002.",
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: "Hack and slash/Beat 'em up"
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/dagrszxnca1vilynkcyg.jpg'
    }
  },
  {
    name: 'Spider-Man',
    slug: 'spider-man--4',
    summary:
      "In this exciting SPIDER-MAN adventure, the GREEN GOBLIN has set out to destroy New York City. Only you can save the bustling metropolis - because you're SPIDER-MAN! Quickly slip into your costume, check your web fluid cartridges, and get set to web-swing through this most dangerous mission!",
    genres: [
      {
        name: 'Platform'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/xxbupvd2yzsgkywe33n0.jpg'
    }
  },
  {
    name: 'Super Formation Soccer 96: World Club Edition',
    slug: 'super-formation-soccer-96-world-club-edition',
    summary:
      'Super Formation Soccer 96: World Club Edition is a Sports game, developed and published by Human Entertainment, which was released in Japan in 1996.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/nnov6gcjo3zddex26xuj.jpg'
    }
  },
  {
    name: 'Madara Saga',
    slug: 'madara-saga',
    summary:
      'Madara Saga is a Role-Playing game, developed by Nexus Interact and published by Datam Polystar, which was released in Japan in 1996.',
    genres: [
      {
        name: 'Role-playing (RPG)'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100)
  },
  {
    name: 'Wild Guns',
    slug: 'wild-guns',
    summary:
      "Annie & Clint, two gunslingers, arrive at Carson City and get caught up in a gunfight. It's raining bullets and there are explosions everywhere. After an intense battle they enter the saloon where they dispose of every cowboy in sight while redecorating the interior. Our heroes flee the scene by climbing on the roof, but what's that sound? ... it's a HUGE robot!",
    totalRating: 74,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Arcade'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/agqguoxvhyntz3tkqxii.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/a8tushofdacno8w5w0iq.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/kyboj5rdngtfuojo2uf1.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/hpw7vgd45rdhpqeivdiz.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/nj3l3a1ojg19zgexeh0y.jpg'
      },
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/zfaqwjh12raharda4ufc.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/gufyzk5zadqbvot2fsd1.jpg'
    }
  },
  {
    name: 'Radical Rex',
    slug: 'radical-rex',
    summary:
      "Slam through ten wild levels of jammin' jungles, freaked-out forests, haunted dino-graveyards, piranha-infested underwater caverns - and inside a giant dinosaur.",
    genres: [
      {
        name: 'Platform'
      }
    ],
    videos: [
      {
        name: 'Game intro',
        video_id: 'kAbtKQyssK4'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/lnyg242sqqlkqgf9l2yt.jpg'
    }
  },
  {
    name: 'Primal Rage',
    slug: 'primal-rage',
    summary:
      'A meteor struck the Earth, and caused great chaos. Seven gods from ancient times awoke, and are now attempting to take control of the post-apocalyptic world. \n \nPrimal Rage is a one-on-one fighting game featuring dinosaurs and giant apes as the fighters. The graphics are done with digitized stop-motion animation. Gameplay is similar to Mortal Kombat in that it is viewed from a side perspective, and features deadly finishing moves at the end of the match.',
    totalRating: 63.49100312006095,
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: 'Real Time Strategy (RTS)'
      },
      {
        name: 'Strategy'
      }
    ],
    screenshots: [
      {
        url:
          'images.igdb.com/igdb/image/upload/t_screenshot_big/syumv1xcqtvqow3rr4fb.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'kBuJkh2uhqs'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        'images.igdb.com/igdb/image/upload/t_screenshot_big/qh8fd8run6kzetudl7rf.jpg'
    }
  },
  {
    name: 'Cannon Fodder',
    slug: 'cannon-fodder',
    summary:
      "Cannon Fodder is an action-strategy shoot 'em up game developed by Sensible Software and published by Virgin Interactive. The game is military-themed and based on shooting action but with a strategy game-style control system. The player directs troops through numerous missions, battling enemy infantry, vehicles and installations.\n\nCannon Fodder has a darkly humorous tone which commentators variously praised and condemned. Its creators intended it to convey an anti-war message, which some reviewers recognised, but the Daily Star and a number of public figures derided the game. In other respects, reviewers highly praised the game, which widely achieved scores of over 90% in Amiga magazines. Amiga Action awarded it an unprecedented score, calling it the best game of the year.",
    total_rating: 84.78639341692682,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Strategy'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/g6kbluv2fv1jbtqh6taz.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/fs8zks8ncaxdfik4gtcf.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/tbkmdn91qp06zrqgnqms.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ueeypjhgxnzb4eygnrmg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hedqiofuz3bz1aaftb0r.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: '1Ob73lgvE0M'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/wf8qgvgczk7dngq3r4sp.jpg'
    }
  },
  {
    name: 'The Death and Return of Superman',
    slug: 'the-death-and-return-of-superman',
    summary:
      'Brace yourself for a hard-hitting fight to the finish that lets you relive the classic DC comic book series! As Superman, fight for your life against mighty Doomsday, the vile distributor of death and destruction! Then, control the destiny of the four Supermen - each claiming to be the one, true Superman! Explode through 10 levels of super-powered battles and fly at furious speeds - until only the real Superman is left standing!',
    genres: [
      {
        name: "Hack and slash/Beat 'em up"
      },
      {
        name: 'Adventure'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'RrthqSy04XA'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/mininymulptpqzjycpgr.jpg'
    },
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100)
  },
  {
    name: 'Gods',
    slug: 'gods',
    summary:
      'Who would have thought that a man would be so foolish or so daring as to accept a challenge set down by the Gods? And yet one came forward to claim the right to test his skills and strengths against a city so legendary its name alone struck fear in the hearts of all who heard it spoken.',
    total_rating: 80,
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Puzzle'
      },
      {
        name: 'Adventure'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/rvdll6o649jr162pdd7o.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/jzewstrjzrpn3jfpwxfz.jpg'
    }
  },
  {
    name: "Yoshi's Cookie",
    slug: 'yoshis-cookie',
    summary:
      "Yoshi's Cookie (ヨッシーのクッキー Yosshī no Kukkī?) is a 1992 tile-matching puzzle video game developed by Bullet-Proof Software for the Nintendo Entertainment System, Game Boy, and Super NES video game consoles. The NES and Game Boy versions were published by Nintendo while the Super NES version was published by Bullet-Proof Software.\nYoshi's Cookie was later remade and included in the compilation game Nintendo Puzzle Collection, released in 2003 for the GameCube in Japan. The NES version was re-released for the Wii Virtual Console in 2008 and available until October 18, 2013 in North America and October 11, 2013 in Japan and Europe.",
    total_rating: 79.8335382975863,
    genres: [
      {
        name: 'Puzzle'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/qcb5bldw1sp4gtl451xk.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cm5x3syzgrt379z5ifyv.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/l8o2ov1tff4uobguoyna.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/kud2olbyyni7jf1rvvbd.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/sfey6gxckwusrckwnktb.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ijzwikrisldorm66ig4n.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/oskr9l5vipjefhpvdweb.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/v3wuuxckbwarrkfwqphs.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'VZD9tdJb92k'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/frtg9tiifgat9zndnxvo.jpg'
    }
  },
  {
    name: 'Vegas Stakes',
    slug: 'vegas-stakes',
    summary:
      'In this Casino simulator, you have decided to be a high roller. Followed by four friends, their main objective is to risk the Lady Luck and become a high roller in Las Vegas, place of luxurious and refined gambling houses. \n \nWith only $1000 in your pocket, feel free to explore five different casinos (The Hideaway, Golden Paradise, Buffalo Head, The 2020 and later, the Laurel Palace), making the possible and impossible to increase its banking account and reach the goal of $ 10 million. \n \nTo be successful in this millionaire-journey, you\'ll have different options of how to earn lots of money: Blackjack, Slots, Roulette, Craps or Seven-Card Stud Poker. \n \nRandomly, some people will chat with you, asking for some borrowed money, selling value objects and many other goodies: depending of the chatting, you\'ll be able to gain benefits (money increased) or damages (have half of its money stolen). \n \nDuring this tough "mission", a friend (chosen by you in the Casino room) will help you, explaining in details the rules of the current game or offering some wager advices.',
    genres: [
      {
        name: 'Strategy'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100)
  },
  {
    name: "Indiana Jones' Greatest Adventures",
    slug: 'indiana-jones-greatest-adventures',
    summary:
      "Indiana Jones’ Greatest Adventures is a 1994 platform video game released for the Super Nintendo Entertainment System. It is a video game adaptation of the Indiana Jones films Raiders of the Lost Ark (1981), Indiana Jones and the Temple of Doom (1984), and Indiana Jones and the Last Crusade (1989). The game was developed by Factor 5 and published by JVC Musical Industries, Inc. The story is told through cutscenes and text and is mostly faithful to the movies. Its release coincided with that of Super Star Wars: Return of the Jedi, also released by JVC and LucasArts and in the same platform style as the Super Star Wars trilogy.\nA Sega Mega Drive/Genesis port of the game was apparently completed and ready to be released between summer and autumn of 1995, and was reviewed in GamePro (#73, August 1995, rated 3.5 out of 5.0) and in Germany's GAMERS (November 1995 issue, rated 2 (B Grade). Like many third-party titles near the end of the Genesis' life, however, the game was shelved and was never released.\nThe game was re-released for the Wii's Virtual Console service on November 16, 2009 and in the PAL region on April 23, 2010 for 800 Nintendo Points.",
    total_rating: 70.7769100370206,
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Adventure'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/yccrbupcmwdtcigpv6xv.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ohd9sgx1jlruppbdmkxh.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/kv8yaqynhxpu9f4jdpiy.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hsxrly9dp8zwkfrf1t3e.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/bacqhqbiqcs3eqzufulw.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vrsaqbxvip4nxd6pn2lc.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/bt5jlh5kkeyd0mwonaxw.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/xeodyqaukcohjomj6pkj.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/z9f9s3d7tuyl8rjyr7nt.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/vp3myjndurjzr4sb9ztn.jpg'
    }
  },
  {
    name: 'Shodai Nekketsu Kouha Kunio-kun',
    slug: 'shodai-nekketsu-kouha-kunio-kun',
    summary:
      'A student-only electric train has departed from Tokyo Station and has passed through Kyoto Station. A group of sophomore students from Nekketsu High School led by Kunio are aboard that train. Their destination is the city of laughter and defraud, Osaka. Kunio is sleepy and tired and that\'s when Hiroshi\'s voice wakes him up. \n \n"Kunio! Yoshihiro will guide us throught Osaka! Come with us!"(Yoshihiro is an exchange student who came from Osaka) \n \nKunio has just learn that he is in Osaka.',
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: 'Role-playing (RPG)'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/tqr4geotftoxwdqsv3fc.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/qfs28fqefshcfcy0pttg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/heh7gcblg3em5bxwmjlu.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/jdemdrebexgpodrwjawz.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/eequ3efbewtmbipca4xi.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/yql4uubmidrk3sw9ccvg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/pym3zmhvdraphxdimvds.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/pf5vlq10w3gyhgkdvkvd.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/g4zv21z70svsmlf1seyh.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hk9vmtxxvnrfnt9300zm.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cbvsbdwieyoufc5oea5q.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vrh7eyxko71o0jcwgvk8.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/fmfrl2iwe5szsw6zmrui.jpg'
    }
  },
  {
    name: 'The Ren & Stimpy Show: Buckaroo$',
    slug: 'the-ren-and-stimpy-show-buckaroo$',
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/cub4dlbwab4kemwil0zz.jpg'
    }
  },
  {
    name: 'International Superstar Soccer Deluxe',
    slug: 'international-superstar-soccer-deluxe',
    summary:
      'International Superstar Soccer Deluxe is a football video game and the sequel to International Superstar Soccer.',
    total_rating: 82.90095288537371,
    genres: [
      {
        name: 'Sport'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/bytlgkgtbmolnc9cvvp7.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/xvsjq5u9pp7krfhtcsnv.jpg'
    }
  },
  {
    name: 'Jissen Pachi-Slot Hisshouhou!',
    slug: 'jissen-pachi-slot-hisshouhou',
    summary:
      'Jissen Pachi-Slot Hisshouhou is a Miscellaneous game, published by Sammy Studios, which was released in Japan in 1993.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/droy80fjldy8ou9uiezx.jpg'
    }
  },
  {
    name: 'Jissen Pachi-Slot Hisshouhou! Twin 2',
    slug: 'jissen-pachi-slot-hisshouhou-twin-2',
    summary:
      'Jissen Pachi-Slot Hisshouhou! Twin 2 is a Miscellaneous game, developed by TOSE and published by Sammy Studios, which was released in Japan in 1997.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/gtofg2cqq1he99nimyo8.jpg'
    }
  },
  {
    name: 'Jissen! Mahjong Shinan',
    slug: 'jissen-mahjong-shinan',
    summary:
      'Jissen! Mahjong Shinan is a Miscellaneous game, developed by Syscom and published by ASK, which was released in Japan in 1995.',
    genres: [
      {
        name: 'Sport'
      },
      {
        name: 'Quiz/Trivia'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/fw84f9qfhlwdx1gyig4s.jpg'
    }
  },
  {
    name: 'Treasure Conflix',
    slug: 'treasure-conflix',
    summary:
      'An aerial dog fighting RPG created by Squaresoft for the Satellaview.',
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Role-playing (RPG)'
      },
      {
        name: 'Simulator'
      },
      {
        name: 'Adventure'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/tcujgjfpkzbrmlqarfza.jpg'
    }
  },
  {
    name: 'Jaleco Rally: Big Run: The Supreme 4WD Challenge',
    slug: 'jaleco-rally-big-run-the-supreme-4wd-challenge',
    summary:
      "Jaleco Rally: Big Run: The Supreme 4WD Challenge is a rally racing game and sim in which the player takes part in the Paris-Dakar rally. The game actually begins in Tripoli, Libya and passes through around 2,500 miles of African desert, swamp and jungle on the way to Dakar. \n \nJaleco originally developed the game for the Arcades before porting it to the Super Famicom. This home version was never released outside of Japan. The game was also ported to the Amiga and Atari ST, where it is known simply as Big Run. \n \nIn addition to passing each checkpoint under the required time - the checkpoint system ubiquitous in solo racing games of the era - the player must also be aware of environmental dangers along the course and needs to select a sponsor, navigator and engineer team before starting. They must also balance the weight of their car, as too few replacement parts might cause a problem further into the race yet having too many will greatly reduce the car's top speed.",
    genres: [
      {
        name: 'Racing'
      },
      {
        name: 'Simulator'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/l32i8dd6nfiexylmzlaj.jpg'
    }
  },
  {
    name: 'Pikiinya!',
    slug: 'pikiinya',
    summary:
      'Pikiinya! (ピキーニャ！?, "Pikīnya!" or "Piki-nya!") is a Japan-exclusive action-puzzle video game developed by Crea-Tech and published by ASCII, which was released in 1997 for the Super Famicom. \n \nPikiinya! takes the Tetris-esque formula of blocks falling from the sky, and adds gyrating tropical-type penguins. They excite easily, and sleep when they are alone and/or bored. These penguins just want to live in peace, and throughout the story mode in the game they must constantly fight against people that want to capture them including poachers, witch doctors, and mad scientists. \n \nThe characters were designed by Tamakichi Sakura (the artist of Super Mario Adventures). The game designers were Hiroshi Miyaoka and Tomoki Tauchi. The voices are from Maki Yagita.',
    genres: [
      {
        name: 'Puzzle'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/rpprjg9f6r7zv6lp7jj3.jpg'
    }
  },
  {
    name: 'Daibakushou: Jinsei Gekijou',
    slug: 'daibakushou-jinsei-gekijou',
    summary:
      'Daibakushou: Jinsei Gekijou is a Miscellaneous game, published by Taito Corporation, which was released in Japan in 1992.',
    genres: [
      {
        name: 'Strategy'
      },
      {
        name: 'Quiz/Trivia'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/ndpdbymaotovbonye8zh.jpg'
    }
  },
  {
    name: 'Breath of Fire',
    slug: 'breath-of-fire',
    summary:
      "Recognized by Capcom as their first traditional role-playing video game, Breath of Fire would set the precedent for future entries in the series, and features character designs by company head of development Keiji Inafune, as well as music by members of Capcom's in-house sound team Alph Lyla. In 2001, the game was re-released for the Game Boy Advance handheld system with new save features and minor graphical enhancements, with the English version being released in Europe for the first time.\n\nSet in a fantasy world, Breath of Fire follows the journey of a boy named Ryu, one of the last surviving members of an ancient race with the ability to transform into mighty dragons, as he searches the world for his sister. During his quest, Ryu meets other warriors who share his quest, and comes into conflict with the Dark Dragon Clan, a militaristic empire who seeks to take over the world by reviving a mad goddess. The game experienced mostly positive reception upon release, and was followed by a direct sequel, Breath of Fire II, in 1994.",
    total_rating: 78.1438186990939,
    genres: [
      {
        name: 'Role-playing (RPG)'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/g1onvv65nbemrxoltyya.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/mh2fs9hwo4lcr8whvfah.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vuk2qwo6uivwyyxbaqkp.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hiaderayjnln8omeq8w8.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/afdciiddgdpejj9lqpzs.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/xh47fherqnfabvpxgbzi.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/kz8p8pm6fehjbloxa6ih.jpg'
    }
  },
  {
    name: 'Hungry Dinosaurs',
    slug: 'hungry-dinosaurs',
    summary:
      "Hungry Dinosaurs is a variant of the board game Othello with a dinosaur setting. In each turn, one player gets to lay an egg into one grid of the 9x9 playfield. When a player manages to trap a row (horizontally, vertically or diagonally) of an opponent's eggs, i.e. having an one egg at each end of the row, they change colour. A round is over after a certain amount of time and whoever has the most eggs on the field, wins. One match consists of several rounds. In contrast to the real board game, up to four player can participate.",
    genres: [
      {
        name: 'Puzzle'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/nzonyv8kxavsev5nmkkm.jpg'
    }
  },
  {
    name: 'Alien³',
    slug: 'alien3',
    summary:
      'Alien³ was released after the Alien 3 film. After success on the Super Nintendo and Genesis platforms, the game was built and ported to other systems, including the Commodore 64 and Game Gear. The game is set on the world of the film, Fury 161, but the gameplay has more in common with the film Aliens, throwing wave after wave of enemies at the player.',
    total_rating: 75.7468290899149,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      },
      {
        name: 'Adventure'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vrhrnif7e8nn2gy61zmg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ymhwoff8klxpxekccwji.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/aziwtkukbkydayirxbzd.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/bzaazyymcersos1ooidd.jpg'
      }
    ],
    videos: [
      {
        name: 'Trailer',
        video_id: 'jsKzeo5RXuo'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/fake7ncywh8afhenybc1.jpg'
    }
  },
  {
    name: "Jim Lee's WildC.A.T.S: Covert Action Teams",
    slug: 'jim-lees-wildc-dot-a-t-dot-s-covert-action-teams',
    summary:
      "The only thing stopping the immortal Helspont from taking over the earth is a group of high-powered heroes known as the WILDC.A.T.S! Each member of the team wields incredible power - when united, the results are spectacular! Players assume the roles of: Spartan, Cyborg and team leader, Maul, massive cross-breed warrior, and Warblade, metamorphosing hand-to-hand combat expert! If mankind has one hope, it;s the WILDC.A.T.S! \n \n-Based on Jim Lee's top selling comic book and smash Saturday morning cartoon sensation! \n \n- Unique team-play action requiring a combination of hero's powers to complete the game! \n \n-16 Megabit game packs solid punch with intense graphics based on comic book style and hard-edged game play!",
    genres: [
      {
        name: "Hack and slash/Beat 'em up"
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/zesjql4xhtodm8idcm7e.jpg'
    }
  },
  {
    name: 'Battle Tycoon: Flash Hiders SFX',
    slug: 'battle-tycoon-flash-hiders-sfx',
    summary:
      'In a war torn world of magic and science, a young man by the name of Bang Vipot unwittingly thwarted the designs of an evil organization sponsoring a fighting tournament. One year later, that tournament, Battle Tycoon is happening once more, and Bang has returned to fight again.',
    genres: [
      {
        name: 'Fighting'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/p3bpp6qt7mbtil0vdyzf.jpg'
    }
  },
  {
    name: 'SimCity',
    slug: 'simcity',
    summary:
      "SimCity, later renamed SimCity Classic, is a city-building simulation video game, first released on February 2, 1989, and designed by Will Wright for the Macintosh computer. SimCity was Maxis's second product, which has since been ported into various personal computers and game consoles, and spawned several sequels including SimCity 2000 in 1993, SimCity 3000 in 1999, SimCity 4 in 2003, SimCity DS, SimCity Societies in 2007, and SimCity in 2013. Until the release of The Sims in 2000, the SimCity series was the best-selling line of computer games made by Maxis.",
    total_rating: 74.0087305657855,
    genres: [
      {
        name: 'Simulator'
      },
      {
        name: 'Strategy'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vhgrcxyypeqamas15yyg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/mclt02nksroqpa0qbrn9.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/z1cravxvcb5aobh9m8ao.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/snqnfspcphljo9slecpm.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/bazsmxwpwmomws4edvjp.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/jmcrb3qyfmh3nzzryidx.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/wlu7tzikdii0p0mr3wqw.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/imf2nlr73vwqmw5btdeg.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ftnxqh4a5ojui8wnofkf.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cvmduedifu3u4pwdwymv.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/dfveh3a9i4sh9fxbvrjq.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ctgumlb57sqiumyetqxq.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'A54blk-ojA4'
      }
    ],

    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/zstbtknsspigdjtul0uu.jpg'
    }
  },
  {
    name: 'Another World',
    slug: 'another-world',
    summary:
      'Another World chronicles the story of a man hurtled through space and time by a nuclear experiment gone wrong. You assume the role of Lester Knight Chaykin, a young physicist. You’ll need to dodge, outwit, and overcome a host of alien monsters and deadly earthquakes that plague the alien landscape you now call home. Only a perfect blend of logic and skill will get you past the deadly obstacles that lie in waiting.',
    total_rating: 86.81826321150521,
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Puzzle'
      },
      {
        name: 'Adventure'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cku1zpsup4fuf5k09ary.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/tb7ydy0fgfkxbk7ypioy.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/evmzr7tajfmldcvndlau.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/tun6lbhk7krkdlmojv7o.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/j44ckm57zdrfljdaz6mb.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/voijxk779fzxrotkxf5n.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/zennzjpva7l5smwjdg39.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/v8wlypudqfdnjo6hffmt.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/aoz8g62besxgh4k72zqa.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/epeue7ymeofuvfobvdqo.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/p7db8sbledbfkmb3uvah.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/rf6blyn1rjmkdmmqtvoz.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/gxqkdvdufqt5rs3aueex.jpg'
    }
  },
  {
    name: 'ESPN Sunday Night NFL',
    slug: 'espn-sunday-night-nfl',
    summary:
      "ESPN Sunday Night NFL was one of the many football games released back in the day. It features all 28 official NFL teams and their respective logos, but doesn't feature a license from the NFLPA, so there are no actual players names in the game. \n \nThere are four different game modes to choose from: Playoffs, Single Game, Season and another season mode that lets the player act out the 1994 NFL season schedule. It also had variable weather conditions that the players on the field would react to and a battery back-up to save games. It also featured Chris Berman, who not only graced the front cover but also gives commentary as well.",
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/qasoceylxx8npnvrz5dg.jpg'
    }
  },
  {
    name: 'Dear Boys',
    slug: 'dear-boys',
    summary:
      "Dear Boys is a Sports game, developed by Kan's and published by Yutaka, which was released in Japan in 1994.",
    genres: [
      {
        name: 'Simulator'
      },
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/yybt37hlawx17fzzbniw.jpg'
    }
  },
  {
    name: 'Final Fight 2',
    slug: 'final-fight-2',
    summary:
      'A one or two player fighting game published and developed by Namco in 1996.',
    total_rating: 79.2361495802719,
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: 'Platform'
      },
      {
        name: "Hack and slash/Beat 'em up"
      },
      {
        name: 'Arcade'
      }
    ],
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/rsvavjuvt4ydg3md4ejr.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/kytxxrxw7d1h77jujhs8.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hb5wdis198zwtmgkmbcl.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/zxfnr6a7h4sdfq0uu9cc.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/memlibzx2sahlaqzk0bs.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/fziwfjf9kw84ibdmkt4u.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/wto5ctpiya6bpzehtvjj.jpg'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'EHk5JJ56v2Q'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/a7tdw7z3uunsawtfvc0t.jpg'
    }
  },
  {
    name: 'Cool Spot',
    slug: 'cool-spot',
    summary:
      "Cool Spot is a mascot for 7 Up, introduced in 1987. During this time, the red spot in the 7 Up logo was anthropomorphized: given arms, legs, a mouth, and sunglasses. British video games developer Virgin Interactive's American studio produced a platform game starring the 7 Up Spot, entitled Cool Spot.",
    total_rating: 59.2756624867392,
    genres: [
      {
        name: 'Platform'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/zntmpoa2eslja0dyqixr.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vu4kn00wfnzjwbpwvzf7.jpg'
      }
    ],
    videos: [
      {
        name: 'Game intro',
        video_id: '0iMM2vqrE08'
      },
      {
        name: 'Gameplay video',
        video_id: 'nsbwXl-EuHw'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/lq7ydlvreddtkl8xjpmq.jpg'
    }
  },
  {
    name: 'Phantom 2040',
    slug: 'phantom-2040',
    summary:
      'You are the Phantom, searching for the evil Rebecca Madison in the vast city of Metropia. As head of Maximum, Inc., she will stop at nothing to fulfil her twisted plans to control the world... unless you can overpower her. \n \nVicious bosses and hordes of biots, programmed to destroy you, relentlessly attack of every turn. But you strike back with an arsenal of heavy-duty weapons including a smart gun, inductance rope, homing missile, and many others. Use two weapons at once to double your chances of survival! Then control your destiny as you weave your way through more than 60 incredible levels! \n \nThe danger is staggering. The fate of the city, the eco-system, and all of humanity rests on your abilities. You know what must be done to save Metropia and the world from certain doom.',
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Simulator'
      },
      {
        name: 'Sport'
      },
      {
        name: "Hack and slash/Beat 'em up"
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/p51atvpygc58tqdmqkua.jpg'
    }
  },
  {
    name: 'WWF Raw',
    slug: 'wwf-raw',
    summary:
      'Raw™ slams your senses with 24 megs of the most ruthless mat mayhem ever! The hottest superstars, all new superhumans megamoves and more in-and-out-of-the-ring action stand between you and the championship belt. This Raw™...and RAW IS WAR!',
    total_rating: 65,
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/dge0nq1yup9bzhcdzc1o.jpg'
    }
  },
  {
    name: 'Go Go Ackman 3',
    slug: 'go-go-ackman-3',
    summary:
      'Go Go Ackman 3 is an Action game, developed by Aspect and published by Banpresto, which was released in Japan in 1995.',
    genres: [
      {
        name: 'Platform'
      },
      {
        name: 'Adventure'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/rgh5xkbfk9w4vd3pumsk.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/trdbmmojcff90nmljlbk.jpg'
    }
  },
  {
    name: 'Super Bomberman 2',
    slug: 'super-bomberman-2',
    summary:
      'The gameplay consists of walking through maze-like areas filled with monsters with a goal of opening the gate leading to the next area. Playing as a bomberman, the player can lay bombs to destroy all of the monsters, which will subsequently open the gate. Destroying blocks in the maze may uncover useful items including remote control bombs, accelerators, and hearts. There are five levels total and at the end of each is a boss. Each boss is faced first alone in an arena. When defeated, the boss retreats to another arena where the player will face him in a personalized machine. After the boss is defeated, the player will continue to the next level.',
    total_rating: 80.00547179661419,
    genres: [
      {
        name: 'Strategy'
      },
      {
        name: 'Tactical'
      },
      {
        name: 'Arcade'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/nazlv6bmvhbxyvsxe4sz.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/osjvsfkp6glto5o5kqri.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/dbdgrlyp3rz347yg4iuw.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/giquhpf1rlenobvywnde.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/xs70jj5t5zn38hsroi6h.jpg'
    }
  },
  {
    name: 'Super Bowling',
    slug: 'super-bowling',
    summary:
      'Super Bowling is a third-person bowling game. Players may bowl in several different environments, which range from ice ponds to neon-lit Chinese temples. Players can face-off against characters in their home stages, much like a fighting game. If the player wins they can then play on these stages in other play modes. \n \nMulti-player modes are also available, with a number of different variations.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'V1wUnqIu95Q'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/rdcujfejqcptlpmrxwrr.jpg'
    }
  },
  {
    name: 'Super Bikkuriman',
    slug: 'super-bikkuriman',
    summary:
      'Super Bikkuriman is a fighter game from BEC (Interbec) and Tom Create, based on a popular collectible sticker franchise. Specifically, the game is based on the 44 episode 1992-93 anime adaptation with the same name, and features most of its cast of characters in the roster. The game includes two modes: a single-player elimination tournament against increasingly difficult computer opponents, and a versus mode for up to two players. \n \nIn the single-player mode, the player can only choose from two characters: Phoenix and Tiki. The two characters fight almost identically. They fight through the other six characters from the versus mode and a "clone fight" against the character they did not select. Beating the game leads to the ending and a password (A, B, L, R, X, Y, Start) that allows players to select the same character as their opponent in versus mode.',
    genres: [
      {
        name: 'Fighting'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/xl2is3zowroxbabf9zsi.jpg'
    }
  },
  {
    name: 'Super Copa',
    slug: 'super-copa',
    summary:
      'Super Copa é um dos únicos jogos brasileiros para Super Nintendo.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100)
  },
  {
    name: 'Pit Fighter',
    slug: 'pit-fighter',
    summary:
      'The gameplay is similar to Taito\'s Violence Fight and SNK\'s Street Smart. The player must jump, punch, and kick their opponent until his/her energy runs out. If the player presses all three of the buttons at a time, the character will perform a "super move". The player begins Pit-Fighter by choosing one of the three playable characters, who all have different moves, speed, and power.\n\nIn the player select screen in the arcade version, each player has a color to select the fighters with: for player one it\'s blue, for player two it\'s red and for player three it\'s yellow. As many as three people can play at a time, but there will be extra opponents to fight during any of this game\'s 15 different matches.\n\nEvery third fight is a bonus round known as a Grudge Match.[1] In a Grudge Match, the player must fight against a CPU controlled clone of his or her fighter (if playing alone) or the other players in a multiplayer game. Getting knocked down three times eliminates a player from the Grudge Match, the winner is the last man standing. Losing the Grudge Match does not eliminate a player, but the winner gets bonus money.\n\nThe final battle, the "Championship Match", is between the player and the mysterious entity that taunts between matches every once in a while, the Masked Warrior. If more than one person is playing the game before this match, they must fight each other to the death until only one becomes victorious and can fight him.\n\nSometimes during matches the player will come across foreign objects such as knives, crates, sticks, motorcycles, and bar stools that can be thrown at you or your opponent. The player may also come across a power-up known as the "power pill". If the player or the opponent grab this item, one will become temporarily stronger and take less damage from hits.\n\nAt times even the crowd will interfere in the fights. Two characters, known as Knife Man (Milt Loper) and Knife Woman (Dianne Bertucci), will come out of the crowd and stab the player with their daggers. The player can take these nuisances out with one hit. Sometimes there is also a fat bearded man with a stick. If the player knocks him down, the player can take the stick and use it against the current opponent.\n\nThe audience will also push any fighter that ends up among them, and stays there more than a few seconds. They will be forced back into the fighting area.',
    total_rating: 50.22665365936091,
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: "Hack and slash/Beat 'em up"
      },
      {
        name: 'Arcade'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/pl3u5epvwi67ebmljnix.jpg'
      }
    ],
    videos: [
      {
        name: 'Gameplay video',
        video_id: 'o2Nq9JzWzMM'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/kmquxkdkhlwiajw2fwdx.jpg'
    }
  },
  {
    name: 'The Heian Fuuunden',
    slug: 'the-heian-fuuunden',
    summary:
      'The Heian Fuuunden is a Strategy/RPG game, developed by Natsume and published by KSS, which was released in Japan in 1995.',
    genres: [
      {
        name: 'Role-playing (RPG)'
      },
      {
        name: 'Simulator'
      },
      {
        name: 'Strategy'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/quffgprx2kmuvbibwank.jpg'
    }
  },
  {
    name: 'Super Final Match Tennis',
    slug: 'super-final-match-tennis',
    summary:
      'Super Final Match Tennis is a multiplayer tennis game for the Super Famicom. It features 28 different tennis professionals (fourteen male, fourteen female) and can support up to four players with the multi-tap peripheral. Various modes, such as exhibition and tournament, are available to play through. \n \nSuper Final Match Tennis is a sequel to the highly regarded Final Match Tennis, released on the PC Engine in 1991. Another follow-up for the PlayStation, Hyper Final Match Tennis, would be released in 1996.',
    genres: [
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/vl2y3zgelluio4klakdk.jpg'
    }
  },
  {
    name: 'The Addams Family',
    slug: 'the-addams-family',
    summary:
      "Creepy, Kooky, Ooky, Spooky! Morticia has been kidnapped!\n\nUncle Fester has lost his memory and has fallen under the spell of Abigail Craven, a conniving character who is anxious to lay her greedy hands on the Addams' hidden fortune. Having recruited a misled Uncle Faster, and assisted by her cohorts, Tully and The Judge, she managers to capture and imprison the other members of the Addams Family within the huge Addams Mansion! Only Gomez can save the day by freeing his son Pugsley, his daughter Wednesday, and Granny- and by restoring Uncle Fester's memory. Accomplishing these tasks is daunting enough, but then Gomez must seek out Morticia in the underground vaults of the Addams Mansion and confront the evil Judge in a kooky and spooky climax!",
    total_rating: 69.1683150394927,
    genres: [
      {
        name: 'Platform'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/vjane0uwan5jbm6waz1l.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/ndgrr0mugxv9pq1tczik.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/nbpmmukhsej8tbwgzxyo.jpg'
    }
  },
  {
    name: '3 Ninjas Kick Back',
    slug: '3-ninjas-kick-back',
    summary:
      'You first saw Rocky, Colt and Tum Tum on the silver screen when their martial arts skills and extreme exploits saved the honor of Grandfather Mori and defeated an evil arms dealer. Now, it’s up to you! In this action-packed adventure, you become any one of the 3 Ninjas. And that’s when the fun begins. Wild animals and even wilder ninjas attack! A trio of spaced-out heavy metal rockers join forces with the evil Koga in an all-out effort to do you dirty. But if you rescue Grandfather Mori and his ceremonial dagger, you’ll have the last laugh… and unlock a secret room filled with more gold than Fort Knox!',
    genres: [
      {
        name: "Hack and slash/Beat 'em up"
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/xig7kmleag1zukemckjr.jpg'
    }
  },
  {
    name: 'Lennus II: Fuuin no Shito',
    slug: 'lennus-ii-fuuin-no-shito',
    summary: 'Japan only',
    genres: [
      {
        name: 'Role-playing (RPG)'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/duvmu1zpcxwadgw1qfop.jpg'
    }
  },
  {
    name: 'Mega lo Mania',
    slug: 'mega-lo-mania',
    summary:
      "First you choose one out of four different characters to represent you, Scarlet (red army), Oberon (yellow army), Caesar (green army), or Madcap (blue army). The game is split into 10 levels - the first 9 are groups of 3 territories which can be completed in any order, while the final 'Mother of All Battles' has its own surprises. \nLand is mostly of sand, grass or ice. You start with 100 men and you can use whatever quantity you find necessary on each island. The rest men left will go to another level with another new 100. In the second half of the game you can freeze men to save them for the Mother of All Battles. Once you select your island and place for your HQ, you must do some research for better weapons and defences. On the roof of your buildings you can put protectors like archers, gunmen, boiling oil men, and later on even laser turrets. If you send a team of unarmed men into an unoccupied square, they will build an additional base there, with larger armies completing this more quickly. \nLater on higher levels, you'll also build mines and factories, as you'll need to dig a certain material for higher level weapons, depending on whether the area you're on is rich with a certain material or not. With each next level, you'll start from a higher technology level and be able to progress to one higher level up than at the previous level",
    total_rating: 79.9863524702029,
    genres: [
      {
        name: 'Real Time Strategy (RTS)'
      },
      {
        name: 'Simulator'
      },
      {
        name: 'Strategy'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/hrg37vf4vypeontnhcyx.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/xhw5subj6nydgkudf4id.jpg'
    }
  },
  {
    name: 'Cybernator',
    slug: 'cybernator',
    summary:
      'Cybernator is a run and gun game released in 1992 for the Super Nintendo Entertainment System. It is the indirect prequel to Target Earth as part of the Assault Suits series by NCS Corp. The game was localized and published overseas by Konami. A remake of Cybernator was released in 2004 for the PlayStation 2.',
    total_rating: 84,
    genres: [
      {
        name: 'Shooter'
      },
      {
        name: 'Platform'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/napmwaatysvxxv0hjouq.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/tuozu566mgzfouvyq2vu.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/rtt4mrzlto4s0zcueeaf.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/uztjhrnciy8gqg570wqw.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cg0hba0lxnrdlpam4kxy.jpg'
      },
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/cbtzygcougkounyudycf.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/pauzljnav6qdihvzeopq.jpg'
    }
  },
  {
    name: 'Top Management II',
    slug: 'top-management-ii',
    summary:
      'Top Management II is a Strategy game, published by Koei, which was released in Japan in 1994. \n \nPlayers must keep their corporation profitable by any means possible as a corporate executive. This entire video game is in Japanese; making it mandatory to be able to read the language. Frequent corporate meetings keep players aware of what is happening within the company. It is a sequel to Top Management for the Family Computer and NEC PC-9801. A typical game of Top Management begins in the year 1980. \n \nStarting in the first week of April, players must participate in strategic corporate meetings in order to guide the focus of the company into certain Japanese prefectures. Buying and selling is done on the Tokyo Stock Exchange in order to improve profits for the entire corporation. Employees can be hired, fired, or laid-off during these important meetings.',
    genres: [
      {
        name: 'Simulator'
      },
      {
        name: 'Strategy'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/y3usbmeozwzkgk0ht8oq.jpg'
    }
  },
  {
    name: 'Cliffhanger',
    slug: 'cliffhanger',
    summary:
      'Standard side-scrolling fighter based off of the Stallone film of the same name. Sly must fight thugs and the elements as he tracks down suitcases of stolen cash dropped around the peaks of the Rockies. Combat follows the Final Fight standard, broken up by some mountain climbing and running (or 3-D snowboarding on the Sega CD) from avalanches. \n \nEnemies are the standard brawler crooks, occasionally carrying guns and knives the player can pick up. The game tends to follow a pattern of having you deal with a natural hazard (scaling a cliff, leaping over gaps), then locking the screen down for a fighting segment, nature again, fighting again, etc. The available fighting moves is limited, compared to other games of this type, and the ability to hit an enemy character is noticeably less accurate. \n \nThe plot is identical to the film, with levels based off of, or inspired by, scenes in the movie. Animated cutscenes move the story along on the cartridge systems, while brief clips from the film play between levels on the Sega CD.',
    genres: [
      {
        name: 'Fighting'
      },
      {
        name: 'Platform'
      },
      {
        name: "Hack and slash/Beat 'em up"
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/vt4a1gwgvt88td3atuvb.jpg'
    }
  },
  {
    name: 'Lethal Enforcers',
    slug: 'lethal-enforcers',
    summary:
      'Pick up your pistol and be the cop you need to be in order to rid the streets of the criminals out to make your day hell. Aim wisely and quickly, otherwise your lives will be lost quickly in this 1st person arcade shooter, cleaning up the streets. The higher the difficulty level, the more crimes there will be to eliminate, but watch out for the other weapons that can help you along the way. \n \nGo straight into the mayhem, practice in the targeting range or have a friend back you up in two player mode. Use a gun accessory or play with the gamepad.',
    genres: [
      {
        name: 'Shooter'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/g2mupjq6ox9egbeb2upo.jpg'
    }
  },
  {
    name: 'FIFA Soccer 96',
    slug: 'fifa-soccer-96',
    summary:
      "\"Aiming to be the first football simulation that is realistic in the true sense of the word, FIFA Soccer 96 was extremely popular at the time of release. It was hailed as the first really successful FIFA release, and opened the way for yearly revisions of the concept. \n \nThere were a number of factors that made FIFA96 stand out from the crowd of other football sims. Firstly, the game's commentary was revolutionary at the time -- the renowned British commentator John Motson comments all the incidents and happenings on the pitch in real-time. The ambient commentary is varied, and systems with more than the minimum memory level get extra commentary phrases. \n \nThe Virtual Stadium technology has numerous pre-defined camera angles. The game even has a SVGA mode for better-than-minimum system \n \nFIFA96 boasts eleven leagues from all around the world, ranging from the unknown players of the Malaysian league to the celebrated stars of the English and Italian leagues. 59 International teams are also featured, and it's possible to match the teams you want to against each other through friendlies, or you can also choose to play domestic tournaments or International ones such as the World Cup. If you're not satisfied with the composition of the various teams, you can create your own dream team through the custom team creator.",
    total_rating: 76.68533740720975,
    genres: [
      {
        name: 'Simulator'
      },
      {
        name: 'Sport'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/gix9mmt3fume4yfinh81.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/fupcrv1ispybstrgestl.jpg'
    }
  },
  {
    name: 'Tenshi no Uta: Shiroki Tsubasa no Inori',
    slug: 'tenshi-no-uta-shiroki-tsubasa-no-inori',
    summary:
      'Tenshi No Uta: Shiroki Tsubasa no Inori (天使の詩 〜白き翼の祈り is a video game published by Nippon Telenet Japan for the Super Famicom in 1994. It is the third episode in the Tenshi no Uta RPG series, but is not a true sequel to the first and second episodes previously released on the PC Engine.',
    genres: [
      {
        name: 'Role-playing (RPG)'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/sddyowfvvbj72catiinh.jpg'
    }
  },
  {
    name: 'Phalanx',
    slug: 'phalanx',
    summary:
      'A futuristic shooter, Phalanx is the name of the prototype starfighter flown by Wink Baufield, a genetically enhanced pilot. It is sent to protect and reclaim Delia IV, a planet in the Andromeda galaxy, which has been colonized by humans for interstellar research purposes. However, an unknown and powerful alien force has overtaken the planet, the military defenses have been completely overwhelmed, and all hope rests on the Phalanx. \n \nYou fly through eight levels, first through various locations in Delia IV, and then you invade the aliens themselves. Like most shooters, you can upgrade your weapons by picking up bonus items dropped by enemy craft.',
    genres: [
      {
        name: 'Shooter'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/omg2gstccr0xkojzmkpt.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/vfkizc9su8rblo0wfb4p.jpg'
    }
  },
  {
    name: 'Albert Odyssey 2',
    slug: 'albert-odyssey-2',
    genres: [
      {
        name: 'Role-playing (RPG)'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    screenshots: [
      {
        url:
          '//images.igdb.com/igdb/image/upload/t_screenshot_big/zofp0ujxyzhuez6zati0.jpg'
      }
    ],
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/bczgxktesd16gdj2izu9.jpg'
    }
  },
  {
    name: 'MechWarrior',
    slug: 'mechwarrior--1',
    summary:
      "In 3017, when Herras Ragen was 12, his father Colonel Joseph T. Ragen, a soldier in the House Davion army, was working to infiltrate and destroy a renegade mercenary cartel called the Dark Wing Lance. However, he was discovered, and the Dark Wing took their revenge: somehow, they had learned the location of the Ragen family's residence. Under cover of night they attacked, killing everyone. Only young Herras, who was at a friend's house at the time of the massacre, survived. Unbeknownst to him, the Dark Wing made an agreement that after the strike, they would separate for ten years and maintain an absolute code of secrecy before regrouping again to continue their nefarious operations. Now, in 3027, that time is up. Herras, who has become a young man, has waited the last decade for his chance to take revenge. As a mercenary MechWarrior operating from the planet Galatea, with a light 'Mech in the hangar and 50.000 C-Bills in the bank, he will accept any mission that will lead him closer to finding the murderers of his family.",
    genres: [
      {
        name: 'Shooter'
      }
    ],
    price: Math.floor(Math.random() * 60) + 0.99,
    inventory: Math.floor(Math.random() * 100),
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_screenshot_big/cb6yvkzgamafifb9etq9.jpg'
    }
  }
]

const productSeed = async () => {
  try {
    console.log('syncing product db')
    console.log('product db synced')
    const createdProducts = await Product.bulkCreate(products, {
      returning: true
    })
    await Promise.all([
      createdProducts[0].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[1].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[2].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[3].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[4].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[5].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[6].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[7].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[8].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[9].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[10].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[11].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[12].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[13].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[14].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[15].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[16].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[17].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[18].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      ),
      createdProducts[19].setGenres(
        await Genre.findById(Math.floor(Math.random() * 20) + 1)
      )
    ])
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Shutting product connection')
    console.log('product db close')
  }
}

module.exports = productSeed
