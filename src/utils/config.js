import { http, createConfig } from "@wagmi/core";
import { bsc, bscTestnet } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [bscTestnet, bsc],
  transports: {
    [bscTestnet.id]: http(),
    [bsc.id]: http(),
  },
});
