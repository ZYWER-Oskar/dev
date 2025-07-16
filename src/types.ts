export enum LinkImageSource {
  Github = "/images/logos/discord.png",
  ItchIo = "/images/logos/itch.io.png",
  newitch = "/images/logos/itch.ioTEST.png",
  newbut = "/images/logos/testbut.png",
  OpenDocumentation = "/images/logos/B_ViewDocs.png",
  OpenSteam = "/images/logos/B_Steam.png",
  OpenOsu = "/images/logos/B_osu.png",
  OpenItchio = "/images/logos/B_Itch.io.png",
  OpenDownload = "/images/logos/B_Download.png",
  OpenArticle = "/images/logos/B_OpenArticle.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    linkedIn: string;
    Linktree: string;
  };
}

export interface Game {
  name: string;
  description: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
}

export interface Project {
  name: string;
  description: string;
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
}