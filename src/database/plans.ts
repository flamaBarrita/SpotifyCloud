import { IPlan } from "@/dtos";

export const plans = <IPlan[]>[
  {
    id: 1,
    bagde: [
      {
        id: 1,
        text: "One-time plans available",
        isMounth: false,
      },
    ],
    title: "Mini",
    perMounth: "From $0.23/day",
    totalCounts: "1 account on mobile only",
    checkList: [
      "Ad-free music listening on mobile",
      "Group Session",
      "Download 30 songs on 1 mobile device",
    ],
    isPay: false,
  },
  {
    id: 2,
    bagde: [
      {
        id: 1,
        text: "1 month free",
        isMounth: false,
      },
      {
        id: 2,
        text: "One-time plans available",
        isMounth: false,
      },
    ],
    title: "Individual",
    perMounth: "$4.90/month after offer period",
    totalCounts: "1 account",
    checkList: [
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
    isPay: true,
  },
  {
    id: 3,
    bagde: [
      {
        id: 1,
        text: "1 month free",
        isMounth: false,
      },
      {
        id: 2,
        text: "One-time plans available",
        isMounth: false,
      },
    ],
    title: "Duo",
    perMounth: "$7.90/month after offer period",
    totalCounts: "2 accounts",
    checkList: [
      "For couples who live together",
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
    isPay: true,
  },
  {
    id: 4,
    bagde: [
      {
        id: 1,
        text: "1 month free",
        isMounth: false,
      },
      {
        id: 2,
        text: "One-time plans available",
        isMounth: false,
      },
    ],
    title: "Family",
    perMounth: "$9.90/month after offer period",
    totalCounts: "Up to 6 accounts",
    checkList: [
      "For family who live together",
      "Block explicit music",
      "Ad-free music listening",
      "Group Session",
      "Download 10k songs/device on 5 devices",
    ],
    isPay: true,
  },
];
