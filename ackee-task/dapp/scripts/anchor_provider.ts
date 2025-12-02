import { AnchorProvider, setProvider } from "@coral-xyz/anchor";

const provider = AnchorProvider.env();
setProvider(AnchorProvider.env());

export { provider };
