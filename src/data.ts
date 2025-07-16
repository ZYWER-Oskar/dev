import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform, Project } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Oskar Zywer",
  role: "Game Developer & Technical Specialist",
  introduction: "A Game Developer and Technical Specialist who enjoys exchanging knowledge with peers and strives to always push boundaries, eager to discover and learn about several aspects of life with the intention to work in an environment with people who share positive moral beliefs and a desire to create emotional and touching forms of art.",
  description: "e-mail: oskarapple12@gmail.com\nCV and Phone Number can be provided upon request",
  image: `${process.env.PUBLIC_URL}/images/profile.png`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    linkedIn: "https://www.linkedin.com/in/oskar-zywer/",
    Linktree: "https://linktr.ee/oskarzywer",
  }
};

export const games: Game[] = [
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/wSetRE-4X4U?si=fN4ZQYAQifKzBGHE", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];

export const OtherProjects: Project[] = [
  //{
  //  name: "This is a test project",
  //  description: "Vi sitter här i Venten och spelar lite Dota (I hear you, mon)\n Vi sitter här i Venten och spelar lite Dota (I feel you, mon)\n Vi sitter här i Venten och spelar lite Dota\n Och pushar på och smeker, med motståndet vi leker\n Vi sitter här i Venten och spelar lite Dota\n Och springer runt och creepar, och motståndet vi sleepar\n Let's get it on",
  //  links: [
  //   { source: LinkImageSource.OpenDocumentation, url: "https://github.com/YOUR_REPO" },
  //    { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
  //    { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
  //    { source: LinkImageSource.OpenDocumentation, url: "https://github.com/YOUR_REPO" },
  //    { source: LinkImageSource.newitch, url: "https://github.com/YOUR_REPO" },
  //    { source: LinkImageSource.newbut, url: "https://github.com/YOUR_REPO" },
  //  ],
  //  media: [
  //    { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
  //    { source: "/images/games/GAME_NAME/1.png", type: MediaType.Image },
  //    { source: "/images/games/GAME_NAME/iako.png", type: MediaType.Image },
  //    { source: "https://www.youtube.com/embed/wSetRE-4X4U?si=fN4ZQYAQifKzBGHE", type: MediaType.YouTube },
  //    { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
  //    { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
  //    { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
  //  ],
  //},
  {
    name: "University Technical Specialist Internship",
    description: "At University I managed to obtain an Internship Position, under which I did many things. Under my own supervision, I worked closely with staff to maintain, expand upon and document all of the Equipment and Systems in the University Esports Arena, these systems I then used myself to run and assist in events on campus, both internal events and external venue hire. Around the campus I would develop upon all sorts of things, like restoring and documenting the University Cafe Arcade Cabinets, and I fully planned, developed and delivered a Training Workshop covering all of the systems in the Arena to students.",
    links: [
    ],
    media: [
      { source: "/images/projects/1_UniIntern/2.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/3.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/4.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/5.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/6.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/7.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/8.png", type: MediaType.Image },
      { source: "/images/projects/1_UniIntern/9.png", type: MediaType.Image },
    ],
  },
  {
    name: "University Virtual Reality Student Museum",
    description: "With my Internship position, I had the opportunity to develop a University Student Work Museum in Virtual Reality. This was done in Unreal Engine, before migrating to Unity, where I fully developed a Modular Museum Stand System, made to showcase all sorts of student work and to be used on University Open and Offer Holder Days for potential students and parents to look at.",
    links: [
    ],
    media: [
      { source: "/images/projects/2_VRMuseum/1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/spCiXQDroT0?si=lxDVvphmiHyvARxt", type: MediaType.YouTube },
    ],
  },
  {
    name: "Student News Presenter & Management Team Member",
    description: "As an extra-curricular activity, I voluntarily worked as a Presenter and member of the Management Team for the University Student News team, I developed a lot of presentation skills and contributed to the News Project through attending meetings and having discussions with team members. I ended up winning a Student Choice Award in a yearly ceremony, where students voted on their favourite members of the team.",
    links: [
      { source: LinkImageSource.OpenArticle, url: "https://www.staffs.ac.uk/news/2023/12/student-news-awards-spotlight-talented-presenters-and-editors-at-staffordshire-university-london" },
    ],
    media: [
      { source: "/images/projects/3_StudentNews/1.png", type: MediaType.Image },
      { source: "/images/projects/3_StudentNews/2.png", type: MediaType.Image },
      { source: "/images/projects/3_StudentNews/3.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/MrYETdWlEqA?si=Jpi6wB5aYfeKxYYv", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/ErEdEh6tNm8?si=UJF4lelFG-AsoogE", type: MediaType.YouTube },
    ],
  },
  {
    name: "University Event Organizer & Society Manager",
    description: "Throughout my time at University, I ran a society titled 'Rhythm Revolution' focused around Rhythm games, maintaining an active community through planned events and meetups. Outside of society activity, I would run several events on campus in several roles, including Graphic Design, Live Video Mixing, Logistical planning through Questionnaire and Information Forms, Testing Sessions for Equipment, etc. Majority of events being Video Game Tournaments on small and large scales.",
    links: [
      { source: LinkImageSource.OpenArticle, url: "https://www.staffsunion.com/news/article/staffsunion/Oskar-Zywer-London-Campus/" },
    ],
    media: [
      { source: "/images/projects/4_UniEvents/1.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/2.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/3.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/4.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/5.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/6.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/7.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/8.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/9.png", type: MediaType.Image },
      { source: "/images/projects/4_UniEvents/10.png", type: MediaType.Image },
    ],
  },
];

export const GameProjects: Project[] = [
  {
    name: "Untitled Touhou Project Megaman Fangame",
    description: "A 2D Oldschool Sidescroller made in Unreal Engine 5 themed after the Touhou Project and inspired by the classic Megaman Gameplay Formula, staying faithful to classic Video Game Design trends and made using free-use assets. This is a prototype that features a level that plays from start to finish, with two difficulty modes, lots of enemy types, platforming, and a fully fledged bossfight, all made with complete menus, sound effects & music, and controller support.\n \nDownload it now on Itch.io.",
    links: [
      { source: LinkImageSource.OpenDocumentation, url: "https://1drv.ms/b/c/f21daf84cb9eb4ce/EXrvkPyzAjVFuqUSu0Z8iW4BhDlk5e1GBh29_YLKlKMxOg?e=ytzM6v" },
      { source: LinkImageSource.OpenItchio, url: "https://oskartm.itch.io/untitled-touhou-megaman-fangame" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/IN0haf0yFb4?si=daaXLac6STcaMuhl", type: MediaType.YouTube },
      { source: "/images/games/1_Touhou/1.png", type: MediaType.Image },
      { source: "/images/games/1_Touhou/2.png", type: MediaType.Image },
      { source: "/images/games/1_Touhou/3.png", type: MediaType.Image },
      { source: "/images/games/1_Touhou/4.png", type: MediaType.Image },
      { source: "/images/games/1_Touhou/5.png", type: MediaType.Image },
    ],
  },
    {
    name: "'The Ghost of Mt.Akina' Short Initial D Anime Cinematic made using Unreal Engine 5 Sequencer",
    description: "This is a short cinematic made in Unreal Engine 5's Sequencer, using pre-made assets themed after the Japanese Street Racing Manga Series 'Initial D', This is an application of a plethora of cinematography techniques, and has had post-editing applied to it using Sony Vegas",
    links: [
    ],
    media: [
      { source: "https://www.youtube.com/embed/9hadDQB_0H4?si=W0UqjQ9d0h9udYSm", type: MediaType.YouTube },
      { source: "/images/games/2_Cinematic/1.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/2.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/3.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/4.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/5.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/6.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/7.png", type: MediaType.Image },
      { source: "/images/games/2_Cinematic/8.png", type: MediaType.Image },
    ],
  },
  {
    name: "Team Fortress 2 Custom Hammer Engine King of the Hill Map 'Piwnica'",
    description: "A King of the Hill map made for Team Fortress 2 using the Hammer engine, intended for 6v6+ matches. Includes a Level Design Document covering an analysis of Multiplayer Shooter games, their level design, character design, etc. All with a fully documented and explained process behind the maps creation in every aspect.",
    links: [
      { source: LinkImageSource.OpenDocumentation, url: "https://1drv.ms/w/c/f21daf84cb9eb4ce/ERsfhrU8ouRIljsB7BoPUd8BEAShOF79qvOla1SZEyIOyA?e=yfcY9e" },
      { source: LinkImageSource.OpenSteam, url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3372442452" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/TpdcIRmeLVk?si=wFA_z2SoHN80EeVR", type: MediaType.YouTube },
      { source: "/images/games/3_tf2/1.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/8.gif", type: MediaType.Image },
      { source: "/images/games/3_tf2/2.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/3.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/4.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/5.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/6.png", type: MediaType.Image },
      { source: "/images/games/3_tf2/7.png", type: MediaType.Image },
    ],
  },
  {
    name: "'LeaF - Calamity Fortune' - osu! Beatmap",
    description: "This is an osu! Beatmap mapped to the song 'Calamity Fortune' by Japanese Doujin Music Artist LeaF. Including a Level Design Document with in depth analysis into the Rhythm Game Genre, a full breakdown of Basic Music Theory, controllers in rhythm games, music genres, all aspects of Rhythm Game Level Design theory, etc. Also containing a full level breakdown and demonstration YouTube Video.",
    links: [
      { source: LinkImageSource.OpenDocumentation, url: "https://1drv.ms/b/c/f21daf84cb9eb4ce/Efs8_BqSUeRAuPI1qmcefVABx_pl01IRqSKqDGK7utNz5A?e=J6GHKL" },
      { source: LinkImageSource.OpenOsu, url: "https://osu.ppy.sh/beatmapsets/2317889#osu/4964051" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/Hb685muqYQE?si=viKa5w51dDmAmdYt", type: MediaType.YouTube },
      { source: "/images/games/4_osu/1.png", type: MediaType.Image },
      { source: "/images/games/4_osu/2.png", type: MediaType.Image },
      { source: "/images/games/4_osu/3.png", type: MediaType.Image },
      { source: "/images/games/4_osu/4.png", type: MediaType.Image },
    ],
  },
  {
    name: "AC Project",
    description: "A Camera Manager for Assetto Corsa for use with OBS, this is a project combining the use of OBS and Assetto Corsa plugins, along with LUA scripting and a fancy combination of OBS settings, in order to let users see multiple camera feeds on screen and toggle recording outputs for multiple cameras at once within OBS studio. Made to be modular and customizable, can be downloaded below and I have made a YouTube Showcase Video documenting my process behind it's development.",
    links: [
      { source: LinkImageSource.OpenDownload, url: "https://1drv.ms/u/c/f21daf84cb9eb4ce/EW5j-j8STt5JuwQSJ65HOUkBHJCurrJJtzHaeromp-A3VQ?e=yowUVS" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/ZPBaI9W_6qQ?si=-ZGYl9YpZbsHtAh0", type: MediaType.YouTube },
      { source: "/images/games/5_ACPROJECT/1.png", type: MediaType.Image },
      { source: "/images/games/5_ACPROJECT/2.png", type: MediaType.Image },
      { source: "/images/games/5_ACPROJECT/3.png", type: MediaType.Image },
    ],
  },
  {
    name: "UI Design",
    description: "A UI Design Project in Unreal Engine 5 where I developed UI assets and blueprint around a pre-made UI framework, themed around the Frutiger aesthetic.",
    links: [
    ],
    media: [
      { source: "https://www.youtube.com/embed/uYMhyE4LekA?si=a5XUstboHnMqtYDF", type: MediaType.YouTube },
      { source: "/images/games/6_UIDesign/1.png", type: MediaType.Image },
      { source: "/images/games/6_UIDesign/2.png", type: MediaType.Image },
      { source: "/images/games/6_UIDesign/3.png", type: MediaType.Image },
    ],
  },
  {
    name: "University Senior Collaborative Development - 'Zoomies'",
    description: "A Cat Kart game that I worked on in a Lead Producer and Tech role in a team of around 30 students, I took on the responsibilities of organizning the Team Microsoft Teams Group, maintaining a Work Schedules Sheet, planning Team Meetings, maintaining the Project Github Repository, and implementing the technical UI functionality into the game. Download and play the game through the Itch.io link below.",
    links: [
      { source: LinkImageSource.OpenItchio, url: "https://kieran-oneill.itch.io/zoomies" },
    ],
    media: [
      { source: "/images/games/7_Collab/1.png", type: MediaType.Image },
    ],
  },
  {
    name: "Synthwave Music Projects",
    description: "Over my University journey I have tried to pursue my hobby of Music Composition in any projects I worked on, here are two synthwave tracks I have produced for two different Game Projects using FL Studio, with the 'SynthVST1' plugin being used in major capacity. I am pursuing Music Composition further, and plan to learn to compose a plethora of genres in near future.",
    links: [
    ],
    media: [
      { source: "/images/games/8_Music/1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/WNg3TZBJyH0?si=yjg50quAzeI327-3", type: MediaType.YouTube },
      { source: "https://www.youtube.com/embed/U_4v3X-dyKs?si=Iphz_8lFwx4Xe0UQ", type: MediaType.YouTube },
    ],
  },
];

export const MeSection: Project[] = [
  {
    name: "Hey there!",
    description: "I am a 20-year-old Polish man born and raised in the UK, I stay physically active through playing Arcade Dance Games; I frequently visit local Arcades playing games and engage in communities around them, attending events and meetups with people who share my interest and love for Music Games. I love Japanese media, particularly Video games in the JRPG and Visual Novel genres. I am extremely passionate around Music as a whole, especially Video Game Music, Eurobeat and Hardstyle genres, with Music Composition in general being a hobby of mine, I frequently go to live music shows and gigs. I tinker a lot with electronics and software, constantly learning and trying new things. Check out my Linktree for my Backloggd and Last.fm links if you want to see my taste in Games and Music!!",
    links: [
    ],
    media: [
      { source: "/images/me/1.gif", type: MediaType.Image },
      { source: "/images/me/2.png", type: MediaType.Image },
      { source: "/images/me/3.png", type: MediaType.Image },
      { source: "/images/me/4.png", type: MediaType.Image },
      { source: "/images/me/5.png", type: MediaType.Image },
      { source: "/images/me/6.png", type: MediaType.Image },
      { source: "/images/me/7.png", type: MediaType.Image },
      { source: "/images/me/8.png", type: MediaType.Image },
      { source: "/images/me/9.png", type: MediaType.Image },
      { source: "/images/me/10.png", type: MediaType.Image },
    ],
  },
]