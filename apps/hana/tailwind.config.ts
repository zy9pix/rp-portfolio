import type { Config } from "tailwindcss";
import sharedConfig from "../../packages/config/tailwind.config";

const config: Config = {
    ...sharedConfig,
    content: [
        ...(sharedConfig.content as string[]),
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        ...sharedConfig.theme,
        extend: {
            ...sharedConfig.theme?.extend,
            colors: {
                ...sharedConfig.theme?.extend?.colors,
                background: "#0a0a0a",
                primary: "#bd93f9", // Nebula Purple
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', "monospace"],
                sans: ['"Inter"', "sans-serif"],
            }
        },
    },
};
export default config;
