import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './RequestAirdrop';
import './App.css'; // Import CSS
import { ShowSolBalance } from './ShowSolBalance';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';
import { SignMessage } from './SignMessage';
import { SendTokens } from './SendTokens';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/g2l-aQGio7Uk6ahk1jcdJOelN9BGao-U"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="container">
            <h1>Solana Wallet Actions</h1>
            <div className="wallet-buttons">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <RequestAirdrop />
            <ShowSolBalance />
            <SendTokens />
            <SignMessage />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
