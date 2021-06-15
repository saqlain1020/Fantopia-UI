import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import paymentTokens from "src/Config/paymentTokens.json";
import { ZERO_ADDRESS } from "src/Config/contracts";

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

export const convertToLowerValue = (
  value,
  decimals = "18",
  bignumber = false
) => {
  let ans = new BigNumber("0");
  if (value)
    ans = new BigNumber(value.toString()).div(
      new BigNumber(10).exponentiatedBy(decimals)
    );
  if (bignumber) return ans;
  else return ans.toNumber();
};

export const convertToHigherValue = (
  value,
  bignumber = false,
  decimals = "18"
) => {
  let ans = new BigNumber("0");
  if (value) {
    ans = new BigNumber(value.toString()).times(
      new BigNumber(10).exponentiatedBy(decimals)
    );
  }
  if (bignumber) return ans;
  else return ans.toNumber();
};

export const splitSignature = (signature) => {
  return ethers.utils.splitSignature(signature);
};

export const getAuctionEndTime = (endTime) => {
  const now = new Date(Date.now()).getTime() / 1000;
  const end = parseInt(endTime);
  if (now > end) return "AUCTION ENDED";
  return getTimeLeft(now - end);
};

export const getTimeLeft = (delta) => {
  if (!delta) return "";
  if (delta && delta === "0") return null;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  days = parseInt(days);

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  hours = parseInt(hours);

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  minutes = parseInt(minutes);

  // what's left is seconds
  var seconds = delta % 60;
  seconds = parseInt(seconds);

  return { days, hours, minutes, seconds };
};

export const getTokenSymbol = (address) => {
  if (!address || address === "BNB" || address === ZERO_ADDRESS) return "BNB";
  return paymentTokens.find((e) => e.address == address)?.symbol;
};

export const getHighestBid = (orders) => {
  if (!orders) return null;

  if (orders.length === 0) return null;

  const max = orders.reduce((prev, cur) =>
    BigNumber(prev.order.basePrice).gt(BigNumber(cur.order.basePrice))
      ? prev
      : cur
  );
  return convertToLowerValue(max.order.basePrice);
};
