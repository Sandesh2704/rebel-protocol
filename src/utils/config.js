import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [sepolia],
  transports: {
    // [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
