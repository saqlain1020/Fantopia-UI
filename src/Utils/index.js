import { useState } from "react";
import { useWeb3 } from "@react-dapp/wallet";
import { useERC721 } from "src/Hooks/useContract";
import { ethers } from "ethers";

export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
};

export const splitSignature = (signature) => {
  return ethers.utils.splitSignature(signature);
  // signature = signature.split("x")[1];

  // var r = Buffer.from(signature.substring(0, 64), "hex");
  // var s = Buffer.from(signature.substring(64, 128), "hex");
  // var v = Buffer.from(
  //   (parseInt(signature.substring(128, 130)) + 27).toString()
  // );
  // return { r, s, v };
};
