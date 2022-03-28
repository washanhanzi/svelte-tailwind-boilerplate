const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.svelte"
  ],
}
