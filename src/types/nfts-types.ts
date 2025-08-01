interface NFTMetadata {
  name?: string;
  description?: string;
  image?: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

interface NFT {
  token_address: string;
  chain: string;
  token_id: string;
  owner_of: string;
  current_usd_value: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri?: string;
  floor_price: string;
  floor_price_currency: string;
  floor_price_usd: string;
  last_sale?: {
    price: string;
    price_formatted: string;
    current_usd_value: string;
    usd_price_at_sale: string;
    payment_token: {
      token_address: string;
      token_symbol: string;
      token_decimals: number;
    };
    transaction_hash: string;
  };
  list_price?: {
    price: string;
    price_currency: string;
    price_usd: string;
  };
  metadata?: NFTMetadata;
  rarity_label?: string;
  rarity_percentage?: number;
  rarity_rank?: number;
  last_token_uri_sync?: string;
  last_metadata_sync?: string;
  minter_address?: string;
  normalized_metadata?: {
    name?: string;
    image?: string;
  };
}

interface NFTResponse {
  total: number;
  page: number;
  page_size: number;
  cursor?: string;
  result: NFT[];
}

interface UseWalletNFTsProps {
  address: string;
  chain?: string;
  limit?: number;
  cursor?: string;
  normalizeMetadata?: boolean;
  mediaItems?: boolean;
  includePrices?: boolean;
  excludeSpam?: boolean;
}

interface UseWalletNFTsReturn {
  nfts: NFT[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  cursor: string | null;
  refetch: () => void;
  loadMore: () => void;
}

type FavoriteNFT = {
  token_address: string;
  token_id: string;
  chain: string;
};

export type {
  NFT,
  NFTMetadata,
  NFTResponse,
  FavoriteNFT,
  UseWalletNFTsProps,
  UseWalletNFTsReturn,
};
