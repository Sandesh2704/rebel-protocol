import { createWalletClient, custom } from "viem";
import { bsc, bscTestnet } from "viem/chains";

export const walletClient = createWalletClient({
  chain: [bsc, bscTestnet],
  transport: custom(window.ethereum),
});
