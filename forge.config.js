module.exports = {
  packagerConfig: {
    name: "DeepSeek",
    executableName: "DeepSeek",
    icon: "images/icon",
    appBundleId: "com.nicclassy.deepseekmac",
    extendInfo: {
      LSUIElement: "true",
    },
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "Nicclassy",
          name: "deepseek-mac",
        },
        prerelease: true,
      },
    },
  ],

  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
