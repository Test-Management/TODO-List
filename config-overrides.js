module.exports = {
  jest: function (config) {
    config.reporters = [
      "default",
      [
        "jest-qase-reporter",
        {
          apiToken: "EXAMPLE",
          projectCode: "EXAMPLE",
          logging: true,
          runComplete: true,
        },
      ],
    ];

    return config;
  },
};
