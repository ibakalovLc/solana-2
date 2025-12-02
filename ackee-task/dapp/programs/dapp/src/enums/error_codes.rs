use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    #[msg("The auction has already ended")]
    AuctionEnded,
    #[msg("Bid amount is too low")]
    BidTooLow,
    #[msg("Bid is below the starting price")]
    BidBelowStartingPrice,
    #[msg("Invalid highest bidder")]
    InvalidHighestBidder,
    #[msg("Auction is not active")]
    AuctionNotActive,
    #[msg("Auction time has expired")]
    AuctionTimeExpired,
    #[msg("Auction is still active")]
    AuctionStillActive,
    #[msg("Time set is not valid")]
    TimeSetIsNotValid,
    #[msg("Library account not found")]
    LibraryAccountNotFound,
    #[msg("Invalid account data")]
    InvalidAccountData,
    #[msg("Bidder account not found")]
    BidderAccountNotFound,
    #[msg("Bidder account not initialized")]
    BidderAccountNotInitialized,
    #[msg("Arithmetic overflow")]
    ArithmeticOverflow,
    #[msg("Insufficient funds")]
    InsufficientFunds,
    #[msg("Unauthorized transfer")]
    UnauthorizedTransfer,
    #[msg("Invalid price")]
    InvalidPrice,
    #[msg("Invalid bid step")]
    InvalidBidStep,
    #[msg("Invalid library name")]
    InvalidLibraryName,
    #[msg("Invalid nft name")]
    InvalidNftName,
}
