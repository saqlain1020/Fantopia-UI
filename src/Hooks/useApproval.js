import {
  useExchange,
  useERC721,
  useERC1155,
  useFantopiaCollection,
  useERC20,
} from "./useContract";
import { useState, useEffect } from "react";
import { useWeb3 } from "@react-dapp/wallet";
import BigNumber from "bignumber.js";
import { ZERO_ADDRESS, EXCHANGE } from "../Config/contracts";
import { STATE } from "../Config/enums";

export const ZERO_BALANCE = new BigNumber(0);
export const MAX_UINT =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";

export const useERC20Approval = (address, balance) => {
  const [approvedBalance, setApprovedBalance] = useState(ZERO_BALANCE);
  const [approveState, setApproveState] = useState(STATE.IDLE);
  const [isApproved, setIsApproved] = useState(false);

  const { account } = useWeb3();
  const token = useERC20(address);

  const fetchApprovedBalance = async () => {
    if (address === ZERO_ADDRESS) {
      setIsApproved(true);
      return;
    }
    try {
      const bal = await token.methods.allowance(account, EXCHANGE).call();
      const approveBal = new BigNumber(bal);
      setApprovedBalance(approveBal);
      setIsApproved(approveBal.gte(new BigNumber(balance ? balance : 0)));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (account && token) {
      fetchApprovedBalance();
    }
  }, [account, token]);

  const approve = async () => {
    try {
      setApproveState(STATE.BUSY);

      await token.methods.approve(EXCHANGE, MAX_UINT).send({ from: account });
      await fetchApprovedBalance();

      setApproveState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setApproveState(STATE.FAILED);
    }
  };

  return { approvedBalance, isApproved, approveState, approve };
};

export const useERC721Approval = (address) => {
  const [isApproved, setIsApproved] = useState(false);
  const [approveState, setApproveState] = useState(STATE.BUSY);
  const { account } = useWeb3();
  const contract = useERC721(address);

  const fetchApproved = async () => {
    setApproveState(STATE.BUSY);
    const _isApproved = await contract.methods
      .isApprovedForAll(account, EXCHANGE)
      .call();
    setIsApproved(_isApproved);
    setApproveState(STATE.SUCCEED);
  };

  useEffect(() => {
    if (account && contract) {
      fetchApproved();
    }
  }, [account, contract]);

  const approve = async () => {
    try {
      setApproveState(STATE.BUSY);
      await contract.methods
        .setApprovalForAll(EXCHANGE, true)
        .send({ from: account });
      await fetchApproved();
      setApproveState(STATE.SUCCEED);
    } catch (e) {
      console.log(e);
      setApproveState(STATE.FAILED);
    }
  };

  return { isApproved, approveState, approve };
};
