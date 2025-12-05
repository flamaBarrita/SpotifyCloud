import { ICardDaily } from "@/dtos";

const podcastsBests = <ICardDaily[]>[
  {
    id: 1,
    urlImage: "/ImageDaily1.png",
    title: `Every Parent's Nightmare`,
    description: "Sep 2022 · 36 min",
  },
  {
    id: 2,
    urlImage: "/ImageDaily2.png",
    title: "How the Pell Grant helped POCs go to college",
    description: "Sep 2022 · 29 min",
  },
  {
    id: 3,
    urlImage: "/ImageDaily3.png",
    title: "After 10 Years",
    description: "Jul 2022 · 62 min",
  },
  {
    id: 4,
    urlImage: "/ImageDaily4.png",
    title: "Book Exploder: Min Jin Lee - Pachinko",
    description: "Aug 2022 · 20 min",
  },
  {
    id: 5,
    urlImage: "/ImageDaily5.png",
    title: "Healing Through Music with TOKiMONSTA",
    description: "Aug 2022 · 26 min",
  },
  {
    id: 6,
    urlImage: "/ImageDaily8.png",
    title: "Conversations with Tyler",
    description: "Set 2023 · 55 min",
  },
];

const podcastsBestsByAuthor = <ICardDaily[]>[
  {
    id: 1,
    urlImage: "/ImageDaily6.png",
    title: `Brown Bag Ep.01`,
    description: "Out 2023 · 48 min",
  },
  {
    id: 2,
    urlImage: "/ImageDaily7.png",
    title: "Brown Bag Ep.02",
    description: "Out 2023 · 51 min",
  },
  {
    id: 3,
    urlImage: "/ImageDaily7.png",
    title: "Brown Bag Ep.03",
    description: "Out 20223 · 67 min",
  },
  {
    id: 4,
    urlImage: "/ImageDaily7.png",
    title: "Brown Bag Ep.04",
    description: "Nov 2023 · 80 min",
  },
  {
    id: 5,
    urlImage: "/ImageDaily7.png",
    title: "Brown Bag Ep.08",
    description: "Nov 2023 · 73 min",
  },
  {
    id: 6,
    urlImage: "/ImageDaily7.png",
    title: "Brown Bag Ep.13",
    description: "Dez 2023 · 78 min",
  },
];

export { podcastsBests, podcastsBestsByAuthor };
