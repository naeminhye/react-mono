const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
  {
    option: "Mono Component",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: "./tools/templates/component/",
    },
    stringReplacers: ["__name__"],
    output: {
      path: "./src/components/__name__(pascalCase)",
      pathAndFileNameDefaultCase: "(pascalCase)",
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);
