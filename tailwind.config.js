const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const COLORS = {
  brand: {
    100: "#410E0B",
    200: "#651218",
    300: "#91121C",
    400: "#B03030",
    500: "#D44343",
    600: "#EF5151",
    700: "#F86F6F",
    800: "#FF9298",
    900: "#FFC3CE",
    950: "#FFE8F3",
    990: "#FEF7F9",
  },
  red: {
    100: "#410E0B",
    150: "#800000",
    200: "#841A1A",
    300: "#BB3030",
    400: "#DB2828",
    500: "#FD1414",
    600: "#FF4242",
    700: "#FF6262",
    800: "#FF9797",
    900: "#FFD2D2",
    950: "#FFE5E5",
    990: "#FFF8F8",
  },
  green: {
    100: "#1C3A24",
    200: "#235531",
    300: "#2E8646",
    400: "#25A549",
    500: "#29B550",
    600: "#34C85E",
    700: "#46D96F",
    800: "#66E58A",
    900: "#87F2A6",
    950: "#ACFFC4",
    990: "#E5FEEC",
  },
  purple: {
    100: "#5D1C63",
    200: "#8E2098",
    300: "#A822B5",
    400: "#C826D7",
    500: "#DC20EC",
    600: "#E940F8",
    700: "#F365FF",
    800: "#F68FFF",
    900: "#F9BAFF",
    950: "#FDE1FF",
    990: "#FEF5FF",
  },
  blue: {
    100: "#084558",
    200: "#095F7B",
    300: "#0B83AA",
    400: "#1097C3",
    500: "#13ACDE",
    600: "#29BEEF",
    700: "#40CBF9",
    800: "#6FDBFF",
    900: "#ACEBFF",
    950: "#D3F4FF",
    990: "#EEFBFF",
  },
  yellow: {
    100: "#755414",
    200: "#AD7E21",
    300: "#DC9C1E",
    400: "#F0A614",
    500: "#FFAD0D",
    600: "#FFBA32",
    700: "#FFC960",
    800: "#FFD98E",
    900: "#FFE6B7",
    950: "#FFF3DC",
    990: "#FFFBF3",
  },
  gray: {
    100: "#141313",
    200: "#242527",
    300: "#333333",
    350: "#3A3A3C",
    400: "#48484A",
    500: "#555555",
    600: "#6C6D6D",
    700: "#84868A",
    750: "#858585",
    800: "#9DA0A6",
    900: "#C4C4CD",
    950: "#E4E4EC",
    990: "#F5F5F5",
    1000: "#FFFFFF",
  },
  divider: "#0000000D",
};

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "../../libs/ui/src/**/*.tsx",
    "../../libs/ui/src/*.tsx",
  ],
  safelist: [
    "bg-[#E7F9EC]",
    "text-[#E7F9EC]",
    "bg-[#FFF3EA]",
    "text-[#FFF3EA]",
    "bg-[#FCE6E6]",
    "text-[#FCE6E6]",
    "bg-[#ECF2FD]",
    "text-[#ECF2FD]",
  ],
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        encap: "0 4px 16px rgba(0, 0, 0, 0.12)",
        longShort: "0px 8.36107px 25.0832px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      gridTemplateColumns: {
        // Simple 13 column grid
        13: "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        encap: "#91121C",
        price: {
          bid: "#34C759",
          ask: "#FF3B30",
          up: "#25A549",
          down: "#FD1414",
          base: "#FFAD0E",
          ceiling: "#BF5AFF",
          floor: "#40c8e0",
        },
        semantic: {
          dark: {
            gray: {
              100: "#1C1C1E",
              200: "#2C2C2C",
              300: "#3A3A3B",
              400: "#48484A",
              500: "#636366",
              600: "#8E8E93",
              700: "#848E9C",
            },
          },
          light: {
            gray: {
              100: "#858585",
              200: "#b8b8b8",
              300: "#cccccc",
              400: "#d4d4d4",
              500: "#ebebeb",
              600: "#f5f5f5",
              700: "#FAFAFA",
            },
          },
        },
        background: {
          light: "#F2F2F2",
        },
        primary: {
          DEFAULT: "#333333",
        },
        secondary: {
          DEFAULT: "#858585",
        },
        success: {
          DEFAULT: "#36AE51",
        },
        purple: {
          500: "#DC20EC",
        },
        ...COLORS,
      },
      width: {
        "237px": "237px",
        "260px": "260px",
        "334px": "334px",
        "660px": "660px",
        "80vw": "80vw",
        "80%": "80%",
        "300vw": "300vw",
        "90vw": "90vw",
        videoWidth: "260px",
        "33vw": "33vw",
        "350px": "350px",
      },
      height: {
        "6/7": "85.7142857%",
        "70vh": "70vh",
        15: "60px",
        50: "200px",
        "704px": "704px",
        "260px": "260px",
        "500px": "500px",
        videoHeight: "526px",
      },
      borderRadius: {
        "25px": "25px",
      },
      minHeight: {
        "600px": "600px",
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in forwards",
        heartBeat: "pulseSize 1s ease-in-out infinite",
        collapsibleSlideDown: "collapsible-slide-down 300ms ease-out",
        collapsibleSlideUp: "collapsible-slide-up 300ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseSize: {
          "50%": { transform: "scale(1)" },
          "0% , 100%": { transform: "scale(1.1)" },
        },
        "collapsible-slide-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-slide-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      listStyleType: {
        check: "✓",
      },
      translate: {
        "2full": "200%",
        "arrow-down": "transform(-50%, calc(100% + 5px))",
      },
      inset: {
        "2full": "200%",
      },
      dropShadow: {
        2: "drop-shadow(0px 4px 20px #DCDCDC)",
      },
    },
    bgGradientDeg: {
      10: "10",
      15: "15",
      20: "20",
      25: "25",
      30: "30",
      45: "45",
      60: "60",
      90: "90",
      100: "100",
      120: "120",
      135: "135",
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            10: "10deg",
            15: "15deg",
            20: "20deg",
            25: "25deg",
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            100: "100deg",
            120: "120deg",
            135: "135deg",
          }),
        }
      );
    }),
  ],
};
