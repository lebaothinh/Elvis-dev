export type Skill =
  | "SVG"
  | "D3js"
  | "Docker"
  | "AWS"
  | "Accessibility"
  | "Inertiajs"
  | "I18n"
  | "Google Cloud"
  | "Webpack"
  | "Google Analytics"
  | "Web Performance"
  | "SEO"
  | "Redux"
  | "VueX"
  | "Vuetify"
  | "Apex Chart"
  | "ChartJS"
  | "Leaflet Map"
  | "VueJs"
  | "ReactJs"
  | "NextJs"
  | "NuxtJs"
  | "Angular8"
  | "Angular Material"
  | "Tiny-MCE Editor"
  | "X-spreadsheet"
  | "CKEditor"
  | "Unit test"
  | "Angular4"
  | "Canjs"
  | "UWP"
  | "Storybook"
  | "Quill Editor"
  | "Slate Editor"
  | "KYC (Verisoul)"
  | "Google map api"
  | "Firebase"
  | "Setup project";

export type Project = {
  id: string;
  name: string;
  bgImageUrl: string;
  bgImageAlt: string;
  from: Date;
  to: Date;
  description: string;
  skills: Array<Skill>;
  private?: boolean;
  present?: boolean;
  color?: string;
  link?: string;
  team?: {
    fe: number;
    be?: number;
    sqa?: number;
    full?: number;
    comtor?: number;
  };
  responsibities?: string;
};
export type Company = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  color: string;
  url: string;
  projects: Project[];
};
export const COMPANIES: Company[] = [
  {
    name: "TMA SOLUTION",
    url: "https://www.tmasolutions.com/",
    imageUrl:
      "https://www.tmasolutions.com/_next/image?url=%2Flogo-menu.webp&w=384&q=100",
    imageAlt: "tma-solution",
    color: "#0095FF",
    projects: [
      {
        id: "coding-env",
        name: "A coding environment project",
        bgImageUrl: "",
        bgImageAlt: "",
        from: new Date("2018/08/01"),
        to: new Date("2018/09/01"),
        description: `A web application, provide contest so that users to join in and solve mathematical problems to find out the fastest and the most accurate coder`,
        skills: ["Angular4", "Angular Material", "CKEditor"],
        private: true,
        color: "#ED778D",
        team: {
          fe: 2,
          be: 3,
          sqa: 2,
        },
        responsibities: `Web front-end developer: Design, build and implement UI elements`,
      },
      {
        id: "calling-app",
        name: "A call center application",
        bgImageUrl: "",
        bgImageAlt: "",
        from: new Date("2018/10/01"),
        to: new Date("2018/12/01"),
        description: `A universal app for meeting`,
        skills: ["UWP"],
        private: true,
        color: "#B1DED2",
        team: {
          fe: 2,
          be: 2,
          sqa: 1,
        },
        responsibities: `Front-end developer: Build and implement UI elements`,
      },
      {
        id: "bio",
        name: "Clinical Research Services platform",
        bgImageUrl: "/bio-logo.svg",
        bgImageAlt: "",
        from: new Date("2019/01/01"),
        to: new Date("2020/01/01"),
        description: `A web application that allows users to detect, edit, store and extract raw materials into highly completed documents for product research and development with aim of increasing productivity and reducing research time, cost savings, based on artificial intelligence`,
        skills: [
          "Angular8",
          "Angular Material",
          "Tiny-MCE Editor",
          "X-spreadsheet",
        ],
        private: true,
        color: "#008579",
        team: {
          fe: 2,
          be: 3,
          sqa: 2,
        },
        responsibities: `Full-stack developer: Build and implement UI elements, build API BE`,
      },
      {
        id: "e-health",
        name: "E-health",
        bgImageUrl: "https://www.suckhoevang.vn/media/home/main_img.webp",
        bgImageAlt: "",
        from: new Date("2020/02/01"),
        to: new Date("2020/08/01"),
        description: `A health management and tracking application. A tracking system builds on web and mobile application that allows users to manage, track health condition and locate the patient by devices`,
        skills: [
          "VueJs",
          "VueX",
          "Vuetify",
          "Apex Chart",
          "ChartJS",
          "Leaflet Map",
        ],
        color: "#15A5DE",
        link: "https://www.suckhoevang.vn/",
        team: {
          fe: 2,
          be: 3,
          sqa: 2,
        },
        responsibities: `Web front-end developer. Build and implement UI elements`,
      },
      {
        id: "sensolus",
        name: "Sensolus",
        bgImageUrl:
          "https://www.sensolus.com/wp-content/uploads/2022/01/Application-interface.png",
        bgImageAlt: "sensolus",
        from: new Date("2020/09/01"),
        to: new Date("2021/02/01"),
        description: `A supply chain management. A tracking system builds on the web that allows users to manage, track device conditions`,
        skills: ["ReactJs", "Redux", "Google Analytics", "Canjs"],
        color: "#202851",
        link: "https://www.sensolus.com/",
        team: {
          fe: 1,
          full: 6,
          sqa: 2,
        },
        responsibities: `Web front-end developer. Build and implement new UI elements, convert old UI of CanJS to ReactJS`,
      },
    ],
  },
  {
    name: "ANYSES",
    url: "https://anyses.vn/",
    imageUrl:
      "https://storage.googleapis.com/studio-design-asset-files/projects/G3qbEBlBOJ/s-1555x848_v-fms_webp_7d455758-90c3-4780-95f8-d6b8d9a39cf5_small.webp",
    imageAlt: "anyses",
    color: "#07AEBA",
    projects: [
      {
        id: "dcm-online",
        name: "DCM Online",
        bgImageUrl:
          "https://www.dcm-ekurashi.com/images/parts/rpsv2018/common/hd_logo.svg",
        bgImageAlt: "dcm-online",
        from: new Date("2021/03/01"),
        to: new Date("2021/11/01"),
        description: `E-commerce for Japanese`,
        skills: [
          "ReactJs",
          "Redux",
          "Google Analytics",
          "Web Performance",
          "SEO",
        ],
        color: "#7E0B1E",
        link: "https://www.dcm-ekurashi.com/",
        team: {
          fe: 3,
          be: 3,
          comtor: 1,
        },
        responsibities: `Web front-end developer. Build and implement UI elements`,
      },
      {
        id: "party-girl",
        name: "Party Girl",
        bgImageUrl: "",
        bgImageAlt: "",
        from: new Date("2021/12/01"),
        to: new Date("2022/03/01"),
        description: `Connect people who want dating`,
        skills: ["ReactJs", "Redux", "Webpack", "Setup project"],
        color: "#FDCA5E",
        private: true,
        team: {
          fe: 3,
          be: 3,
          comtor: 1,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "fika",
        name: "Fika Shift Request",
        bgImageUrl: "",
        bgImageAlt: "",
        from: new Date("2022/04/01"),
        to: new Date("2022/07/01"),
        description: `Shift management for workers`,
        skills: ["NextJs", "Google Cloud", "I18n"],
        color: "#0D2F3F",
        private: true,
        team: {
          fe: 2,
          be: 2,
        },
        responsibities: `Web front-end developer. Build and implement UI elements`,
      },
      {
        id: "hapilogi",
        name: "Hapilogi",
        bgImageUrl:
          "https://www.hapilogi.co.jp/general_23/wp-content/uploads/brizy/imgs/logiec_%E7%94%BB%E5%83%8F%E7%B4%A0%E6%9D%90-3276x2620x378x416x2520x738x1693063603.png",
        bgImageAlt: "",
        from: new Date("2022/08/01"),
        to: new Date(),
        present: true,
        description: `Logistics: Customize any order, shipment, or inventory data with logiec to reduce logistics costs! logiec offers a wide range of shipping solutions, from automating data transfer to handling shipments ranging from 100 to 150,000 per month. It accommodates various products and management methods, including goods, cosmetics, contact lenses, refrigerated and frozen items, and large appliances.`,
        skills: ["ReactJs", "Docker", "I18n"],
        color: "#2E9688",
        link: "https://www.hapilogi.co.jp/",
        team: {
          fe: 3,
          be: 3,
          comtor: 2,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "service-connect",
        name: "Service Connect",
        bgImageUrl:
          "https://www.hapilogi.co.jp/general_23/wp-content/uploads/brizy/imgs/%E7%89%A9%E6%B5%81%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0-1340x626x0x0x1340x626x1693200625.jpg",
        bgImageAlt: "",
        from: new Date("2022/12/01"),
        to: new Date("2023/02/01"),
        description: `Logistics matching service: This is a logistics matching service that helps you find the perfect logistics warehouse.`,
        skills: ["VueJs", "Inertiajs", "Docker"],
        color: "#E66C2B",
        link: "https://service-connect.hapilogi.co.jp/logistics/shipper/search-partner",
        team: {
          fe: 3,
          be: 2,
          comtor: 1,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "myuchi",
        name: "MyUchi",
        bgImageUrl: "/myuchi-bg.png",
        bgImageAlt: "",
        from: new Date("2023/03/01"),
        to: new Date("2023/05/01"),
        description: `Finding apartment for Japanese in VietNam. This application provides an easy-to-use platform for searching, comparing, and selecting apartments that match individual needs`,
        skills: ["NextJs", "Accessibility", "I18n", "AWS", "Setup project"],
        color: "#FFC107",
        private: true,
        present: true,
        team: {
          fe: 3,
          be: 3,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "maclogi",
        name: "Maclogi CSS",
        bgImageUrl: "maclogi-bg.png",
        bgImageAlt: "",
        from: new Date("2023/05/01"),
        to: new Date("2023/12/8"),
        description: `Display business indexes in a visual manner. Predict sales, analyze revenue, and provide suitable marketing strategies. Automate management operations.`,
        skills: ["NextJs", "SVG", "D3js", "Docker", "AWS", "Setup project"],
        color: "#46BDF8",
        private: true,
        team: {
          fe: 2,
          be: 2,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "FPNET",
        name: "FPNET",
        bgImageUrl: "fpnet.png",
        bgImageAlt: "fpnet",
        from: new Date("2023/12/08"),
        to: new Date("2024/04/01"),
        present: true,
        description: `A platform for buying and selling books and documents, which includes a forum for discussing topics related to books.`,
        skills: ["NextJs", "Storybook", "Setup project"],
        color: "#7D0012",
        private: true,
        team: {
          fe: 2,
          be: 2,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
      {
        id: "MSOX",
        name: "MSOX",
        bgImageUrl: "msox.png",
        bgImageAlt: "msox",
        from: new Date("2024/04/01"),
        to: new Date(),
        present: true,
        description: `A web application for managing construction workers: CRUD operations for worker information, importing and exporting CSV data, and scheduling shifts.`,
        skills: ["NextJs", "Google map api", "Setup project"],
        color: "#2C6F57",
        private: true,
        team: {
          fe: 2,
          be: 2,
        },
        responsibities: `Web front-end tech lead. Build and implement UI elements`,
      },
    ],
  },
  {
    name: "Fluxion (side project)",
    imageUrl: "/fluxion.png",
    imageAlt: "fluxion",
    color: "#4856A6",
    url: "",
    projects: [
      {
        id: "rep",
        name: "Rep",
        bgImageUrl: "https://rep.run/_next/static/media/pc_sp.6c08bbf7.png",
        bgImageAlt: "rep",
        from: new Date("2023/11/01"),
        to: new Date(),
        present: true,
        description: `A trusted on-chain gamified social network`,
        skills: [
          "NextJs",
          "KYC (Verisoul)",
          "Google map api",
          "Quill Editor",
          "Slate Editor",
          "Firebase",
        ],
        color: "#462e67",
        link: "https://rep.run",
        team: {
          fe: 1,
          be: 3,
          sqa: 2,
        },
        responsibities: `Web front-end developer. Build and implement UI elements`,
      },
      {
        id: "offerit",
        name: "Offerit",
        bgImageUrl:
          "https://dev.offerit.org/_next/static/media/house-pc.dd294740.png",
        bgImageAlt: "offerit",
        from: new Date("2024/04/01"),
        to: new Date(),
        present: true,
        description: `A trusted on-chain real estate social network`,
        skills: [
          "NextJs",
          "Google map api",
          "Quill Editor",
          "KYC (Verisoul)",
          "Firebase",
          "Slate Editor",
        ],
        color: "#47C1CA",
        link: "https://dev.offerit.org",
        team: {
          fe: 1,
          be: 3,
          sqa: 2,
        },
        responsibities: `Web front-end developer. Build and implement UI elements`,
      },
    ],
  },
];

export const getYearsOfWorkingBySkill = (...skill: Skill[]) => {
  const getHourRange = (from: Date, to: Date) => {
    return (to.valueOf() - from.valueOf()) / 3600000;
  };
  const projects = COMPANIES.reduce(
    (pre, cur) => [...pre, ...cur?.projects],
    [] as Project[]
  );

  const projectsBySkill: Project[] = [];
  let presentMaxTime = 0;
  let presentMaxTimeProject = null;

  projects.forEach((p) => {
    if (p.skills.some((s) => skill.includes(s))) {
      if (p.present) {
        // console.log(p)
        const range = getHourRange(p.from, p.to);
        if (range > presentMaxTime) {
          presentMaxTime = range;
          presentMaxTimeProject = p;
        }
      } else {
        projectsBySkill.push(p);
      }
    }
  });

  if (presentMaxTimeProject) {
    projectsBySkill.push(presentMaxTimeProject);
  }

  const hourOfWorking = projectsBySkill.reduce((pre, cur) => {
    return getHourRange(cur?.from as Date, cur?.to as Date) + pre;
  }, 0);

  return hourOfWorking / 24 / 365;
};
