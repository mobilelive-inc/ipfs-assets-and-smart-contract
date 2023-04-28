
const Moralis = require("moralis").default;
const fs = require("fs"); 

const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "tdcDTXXFKNH5u3dABMZtBFECs1f5ouoM7RLyBgnHy5l68haJSMT1nbGppyEXCHeD",
  });

  const abi = [
    {
      path: "test.png",
      content: fs.readFileSync('./test.png', {encoding: 'base64'}),
    },
  ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

  console.log(response.toJSON());
};

runApp();