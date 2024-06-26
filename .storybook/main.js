import { mergeConfig } from "vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
export default process.env.STORYBOOK_VUE
  ? {
      stories: ["../stories/vue/**/*.stories.@(js|jsx|ts|tsx)"],
      addons: ["@storybook/addon-storysource"],
      framework: {
        name: "@storybook/vue3-vite",
        options: {},
      },
      viteFinal: async (config) => {
        const { default: vue } = await import("@vitejs/plugin-vue");
        const { default: vueJsx } = await import("@vitejs/plugin-vue-jsx");

        return mergeConfig(config, {
          plugins: [vue(), vueJsx({ optimize: true })],
        });
      },
    }
  : process.env.STORYBOOK_SOLID
    ? {
        stories: ["../stories/solid/**/*.stories.@(js|jsx|ts|tsx)"],
        addons: ["@storybook/addon-storysource"],
        framework: {
          name: "storybook-solidjs-vite",
          options: {},
        },
      }
    : process.env.STORYBOOK_SVELTE
      ? {
          stories: ["../stories/svelte/**/*.stories.@(js|jsx|ts|tsx)"],
          addons: ["@storybook/addon-storysource"],
          framework: {
            name: "@storybook/svelte-vite",
            options: {},
          },
          viteFinal: async (config) => {
            const { svelte, vitePreprocess } = await import(
              "@sveltejs/vite-plugin-svelte"
            );

            return mergeConfig(config, {
              plugins: [svelte({ preprocess: vitePreprocess() })],
            });
          },
        }
      : {
          stories: ["../stories/react/**/*.stories.@(js|jsx|ts|tsx)"],
          addons: ["@storybook/addon-storysource"],
          framework: {
            name: "@storybook/react-vite",
            options: {},
          },
          viteFinal: async (config) => {
            const { default: react } = await import("@vitejs/plugin-react");

            return mergeConfig(config, {
              plugins: [react()],
            });
          },
          ...(process.env.STORYBOOK_DEPLOY && {
            refs: {
              vue: {
                title: "Vue",
                url: "/virtua/vue",
              },
              solid: {
                title: "Solid",
                url: "/virtua/solid",
              },
              svelte: {
                title: "Svelte",
                url: "/virtua/svelte",
              },
            },
          }),
        };
