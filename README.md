# Wallet Generator MCP

An MCP server for batch-generating wallets compatible with Ethereum and all EVM-compatible chains.

## Features

- **Batch Wallet Generation**: Generate 1 to 100 EVM-compatible wallets in a single request.
- **EVM Compatibility**: Supports all EVM-compatible chains, including but not limited to Ethereum, Binance Smart Chain (BSC), Base, Polygon, Arbitrum, and Optimism.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **npm**: For installing dependencies.
- **MCP Client**: An MCP-compatible client (e.g., [MCP Inspector](https://github.com/modelcontextprotocol/inspector)) for testing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kukapay/wallet-generator-mcp.git
   cd wallet-generator-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

The `generateWallets` tool allows you to generate multiple EVM-compatible wallets, each including an address, private key, and mnemonic phrase. 
It accepts the following parameter:

- **count**: The number of wallets to generate (integer, 1 to 100, default is 1).

The generated wallets are compatible with any EVM-based chain, such as Ethereum, Binance Smart Chain, Base, Polygon, Arbitrum, Optimism, and more.

#### Example

You can interact with the server using an MCP-compatible client. Below is an example of a natural language prompt to generate wallets:

**Prompt**:  
```
Generate 2 wallets for use on EVM-compatible chains like Ethereum or Binance Smart Chain.
```

**Response**:  
```
Here are your 2 generated wallets for EVM-compatible chains:  
1. Address: 0x1234...abcd, Private Key: 0x5678...efgh, Mnemonic: word1 word2 word3 ...  
2. Address: 0x9abc...def0, Private Key: 0x1a2b...3c4d, Mnemonic: word4 word5 word6 ...
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


