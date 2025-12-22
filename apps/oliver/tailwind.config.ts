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
                background: "#0d0d0d",
                primary: "#ff4d4d", // Facebrowser Red
            },
            fontFamily: {
                mono: ['"Fira Code"', "monospace"],
            }
        },
    },
};
export default config;
