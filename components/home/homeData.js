import business from "/public/images/icon/business.png";
import checking from "/public/images/icon/checking.png";
import savings from "/public/images/icon/savings.png";

import blog_1 from "/public/images/blog-1.png";
import blog_2 from "/public/images/blog-2.png";
import blog_3 from "/public/images/blog-3.png";



import qr_code from "/public/images/svg/qr-code.svg";
import bg1 from "/public/images/bg/bg01.jpg";
import bg2 from "/public/images/bg/bg02.jpg";
import bg3 from "/public/images/bg/bg03.jpg";
import bg4 from "/public/images/bg/bg04.jpg";

export const card_data = [
  {
    id: 1,
    img1: bg1,
    img2: qr_code,
    bg_color: "rgba(61, 140, 200, 0.9)",
    heading_text: "Loyalty Membership",
    sub_title: "Save on Subscriptions",
    sub_text: "Join our loyalty program and Save on every membership renewal!",
    balance: 200,
    membershipID: "342-527-026-415",
    issue_date: "Aug 31, 2023",
    expiry_date: "May 23, 2026",
    link: "/cards/Membership",
  },
  {
    id: 2,
    img1: bg2,
    img2: qr_code,
    bg_color: "rgba(111, 8, 24, 0.9)",
    heading_text: "Film Fanatics Club",
    sub_title: "View and Save",
    sub_text: "Dive into cinematic experiences and enjoy special perks!",
    balance: 300,
    membershipID: "221-737-686-338",
    issue_date: "Aug 18,2023",
    expiry_date: "Mar 24, 2030",
    link: "/cards/FilmClub",
  },
  {
    id: 3,
    img1: bg3,
    img2: qr_code,
    bg_color: "rgba(37, 162, 90, 0.9)",
    heading_text: "Style Card",
    sub_title: "Earn as You Style",
    sub_text: "Accumulate points every time you visit our salon!",
    balance: 300,
    membershipID: "180-879-966-499",
    issue_date: "Aug 08, 2023",
    expiry_date: "Jan 08, 2027",
    link: "/cards/StyleCard",
  },
  {
    id: 4,
    img1: bg4,
    img2: qr_code,
    bg_color: "rgba(220, 87, 59, 0.9)",
    heading_text: "Loyalty Card",
    sub_title: "Save Now",
    sub_text: "Join our loyalty program and save on every purchase!",
    balance: 400,
    membershipID: "521-179-219-730",
    issue_date: "Aug 05, 2023",
    expiry_date: "Oct 30, 2025",
    link: "/cards/LoyaltyCard",
  },
];

export const business_solutions_data = [
  {
    id: 1,
    title: "Checking Account",
    icon: checking,
    desc: "Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account.",
    link: "/register",
  },
  {
    id: 2,
    title: "Savings Accounts",
    icon: savings,
    desc: "Save for your goals and watch your money grow with a CD, a money market account, a savings account.Your future starts now.",
    link: "/register",
  },
  {
    id: 3,
    title: "Business Account",
    icon: business,
    desc: "Take charge of your business banking with a business bank account. Services including virtual cards, team management and more.",
    link: "/register",
  },
];

export const articles_data = [
  {
    id: 1,
    title: "The future of fraud protection.",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_1,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 2,
    title: "Digital Banking Services",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_2,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 3,
    title: "Mobile Banking at a Glance",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_3,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
];
