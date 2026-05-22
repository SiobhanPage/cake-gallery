export interface Cake {
  id: number;
  name: string;
  imagePath: string;
  category: string;
}

export const categories = [
  "Harry Potter",
  "Mario",
  "Shadow and Bone",
  "Looshkin",
  "Sonic",
  "Worst Witch",
  "Easter",
  "Other",
];

export const cakes: Cake[] = [
  { id: 1,  name: "Harry Potter",                imagePath: "/photos/harry_potter.jpg",                category: "Harry Potter" },
  { id: 2,  name: "Harry Potter Close Up",        imagePath: "/photos/harry_potter_close_up.jpg",        category: "Harry Potter" },
  { id: 3,  name: "Harry Potter Glasses",         imagePath: "/photos/harry_potter_glasses.jpg",         category: "Harry Potter" },
  { id: 4,  name: "Harry Potter Ravenclaw",       imagePath: "/photos/harry_potter_ravenclaw.jpg",       category: "Harry Potter" },
  { id: 5,  name: "Harry Potter Snitch",          imagePath: "/photos/harry_potter_snitch.jpg",          category: "Harry Potter" },
  { id: 6,  name: "Mario",                        imagePath: "/photos/mario.jpg",                        category: "Mario" },
  { id: 7,  name: "Mario Head",                   imagePath: "/photos/mario_head.jpg",                   category: "Mario" },
  { id: 8,  name: "Super Mario",                  imagePath: "/photos/mario_mario.jpg",                  category: "Mario" },
  { id: 9,  name: "Mario Odyssey",                imagePath: "/photos/mario_odyssey.jpg",                category: "Mario" },
  { id: 10, name: "Mario Odyssey Broodle",        imagePath: "/photos/mario_odyssey_broodle.jpg",        category: "Mario" },
  { id: 11, name: "Mario & Yoshi",                imagePath: "/photos/mario_yoshi.jpg",                  category: "Mario" },
  { id: 12, name: "Shadow and Bone",              imagePath: "/photos/shadow_and_bone.jpg",              category: "Shadow and Bone" },
  { id: 13, name: "Shadow and Bone 2",            imagePath: "/photos/shadow_and_bone_1.jpg",            category: "Shadow and Bone" },
  { id: 14, name: "Shadow and Bone Phoenix",      imagePath: "/photos/shadow_and_bone_phoenix.jpg",      category: "Shadow and Bone" },
  { id: 15, name: "Shadow and Bone Stage",        imagePath: "/photos/shadow_and_bone_stage.jpg",        category: "Shadow and Bone" },
  { id: 16, name: "Shadow",                       imagePath: "/photos/shadow.jpg",                       category: "Shadow and Bone" },
  { id: 17, name: "Looshkin",                     imagePath: "/photos/looshkin.jpg",                     category: "Looshkin" },
  { id: 18, name: "Looshkin Bear",                imagePath: "/photos/looshkin_bear.jpg",                category: "Looshkin" },
  { id: 19, name: "Looshkin Close Up",            imagePath: "/photos/looshkin_close_up.jpg",            category: "Looshkin" },
  { id: 20, name: "Looshkin Pig",                 imagePath: "/photos/looshkin_pig.jpg",                 category: "Looshkin" },
  { id: 21, name: "Sonic",                        imagePath: "/photos/sonic.jpg",                        category: "Sonic" },
  { id: 22, name: "Sonic Close Up",               imagePath: "/photos/sonic_close_up.jpg",               category: "Sonic" },
  { id: 23, name: "Sonic & Eggman",               imagePath: "/photos/sonic_eggman.jpg",                 category: "Sonic" },
  { id: 24, name: "Worst Witch",                  imagePath: "/photos/worst_witch.jpg",                  category: "Worst Witch" },
  { id: 25, name: "Worst Witch Cat",              imagePath: "/photos/worst_witch_cat.jpg",              category: "Worst Witch" },
  { id: 26, name: "Worst Witch Witch",            imagePath: "/photos/worst_witch_witch.jpg",            category: "Worst Witch" },
  { id: 27, name: "Easter Bunnies",               imagePath: "/photos/easter_bunnies.jpg",               category: "Easter" },
  { id: 28, name: "Easter Chicks",                imagePath: "/photos/easter_chicks.jpg",                category: "Easter" },
  { id: 29, name: "Captain Underpants",           imagePath: "/photos/captain_underpants.jpg",           category: "Other" },
  { id: 30, name: "Captain Underpants Poopy Pants", imagePath: "/photos/captain_underpants_poopy_pants.jpg", category: "Other" },
  { id: 31, name: "Danger Mouse",                 imagePath: "/photos/danger_mouse.jpg",                 category: "Other" },
  { id: 32, name: "Danger Mouse Close Up",        imagePath: "/photos/danger_mouse_close_up.jpg",        category: "Other" },
  { id: 33, name: "Emojis",                       imagePath: "/photos/emojis.jpg",                       category: "Other" },
  { id: 34, name: "Emojis Star Glasses",          imagePath: "/photos/emojis_star_glasses.jpg",          category: "Other" },
  { id: 35, name: "Hello Kitty",                  imagePath: "/photos/hello_kitty.jpg",                  category: "Other" },
  { id: 36, name: "Kirby",                        imagePath: "/photos/kirby.jpg",                        category: "Other" },
  { id: 37, name: "Kittens",                      imagePath: "/photos/kittens.jpg",                      category: "Other" },
  { id: 38, name: "Kitty Cupcakes",               imagePath: "/photos/kitty_cupcakes.jpg",               category: "Other" },
  { id: 39, name: "Party Emoji",                  imagePath: "/photos/party_emoji.jpg",                  category: "Other" },
  { id: 40, name: "Pokémon",                      imagePath: "/photos/pokemon.jpg",                      category: "Other" },
  { id: 41, name: "Yoshi",                        imagePath: "/photos/yoshi.jpg",                        category: "Other" },
];
