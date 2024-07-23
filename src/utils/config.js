// import { createWalletClient, custom } from "viem";
// import { bsc, bscTestnet } from "viem/chains";

// export const walletClient = createWalletClient({
//   chain: [bsc, bscTestnet],
//   transport: custom(window.ethereum),
// });


'use client'
import { useEffect, useState } from 'react';
import { createWalletClient } from 'viem'; // replace with your actual library
import { bsc, sepolia } from 'viem/chains';

export default function WalletComponent() {
  const [walletClient, setWalletClient] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const client = createWalletClient({
        chain: [bsc, sepolia],
        transport: custom(window.ethereum),
      });
      setWalletClient(client);
    } else {
      console.error('window.ethereum is not available');
    }
  }, []);

  if (!walletClient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Your wallet client dependent code here */}
    </div>
  );
}