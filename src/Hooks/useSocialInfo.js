import { useAccount, useWeb3 } from "@react-dapp/wallet";
import { useEffect, useState } from "react";
import {
  getComments,
  getReactions,
  postReaction as _postReaction,
  postComment as _postComment,
} from "src/Api/socialInfo";
import { useUser } from "src/State/hooks";

export const useReactions = (address, tokenId) => {
  const [reactions, setReactions] = useState({});
  const [loadingReactions, setLoadingReactions] = useState(false);

  const fetchReactions = async () => {
    setLoadingReactions(true);
    const _reactions = await getReactions(address, tokenId);
    setReactions(_reactions);
    setLoadingReactions(false);
  };
  useEffect(() => {
    if (address && tokenId) fetchReactions();
  }, [address, tokenId]);

  return { reactions, loadingReactions, fetchReactions };
};

export const useComments = (address, tokenId) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  const fetchComments = async () => {
    setLoadingComments(true);
    const _comments = await getComments(address, tokenId);
    console.log(_comments);
    setComments(_comments);
    setLoadingComments(false);
  };

  useEffect(() => {
    if (address && tokenId) fetchComments();
  }, [address, tokenId]);

  return { comments, loadingComments, fetchComments };
};

export const usePostComment = (address, tokenId) => {
  const [postingComment, setPostingComment] = useState(false);
  const { account } = useWeb3();
  const { user } = useUser();

  const postComment = async (comment) => {
    setPostingComment(true);
    await _postComment(address, tokenId, {
      userName: user ? user.name : account,
      useAddress: account,
      comment,
    });
    setPostingComment(false);
  };

  return { postComment, postingComment };
};

export const usePostReaction = (address, tokenId) => {
  const [postingReaction, setPostingReaction] = useState(false);
  const { account } = useWeb3();

  const postReaction = async (reactionType) => {
    setPostingReaction(true);
    await _postReaction(address, tokenId, {
      userAddress: account,
      reactionType,
    });
    setPostingReaction(false);
  };

  return { postReaction, postingReaction };
};
