import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useWalletModal, useWeb3 } from "@react-dapp/wallet"

const CustomButton = ({ loading, wallet, ...props }) => {
  const { setOpen } = useWalletModal()
  const { connected } = useWeb3()
  
  const useWallet = !connected && wallet;
  props.onClick = useWallet ? () => setOpen(true) : props.onClick
  if (useWallet) delete props.type
  return (
    <div>
      <Button {...props}>
        {
          useWallet ?
            'Connect Wallet' :
            <>
              {loading && <CircularProgress color="inherit" />}
              {!loading && props.children}
            </>
        }

      </Button>
    </div>
  );
};

export default CustomButton;
