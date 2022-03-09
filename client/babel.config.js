module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          corejs: 3,
          modules: false,
          useBuiltIns: "usage",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "relay",
        {
          schema: "./data/schema.graphql",
        },
      ],
    ],
  };
};
