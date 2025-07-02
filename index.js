const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { z } = require("zod");
const { ethers } = require("ethers");

// Create an MCP server instance
const server = new McpServer({
  name: "WalletGenerator",
  version: "1.0.0",
});

// Define a tool for batch-generating Ethereum wallets
server.tool(
  "generateWallets",
  "Batch-generating ethereum wallets",
  z.object({
    count: z.number().min(1).max(100).default(1), // Limit the number of wallets to generate (1-100)
  }),
  async ({ count }) => {
    try {
      const wallets = [];
      // Generate the specified number of random wallets
      for (let i = 0; i < count; i++) {
        const wallet = ethers.Wallet.createRandom();
        wallets.push({
          address: wallet.address,
          privateKey: wallet.privateKey,
          mnemonic: wallet.mnemonic.phrase,
        });
      }

      // Return the generated wallets in JSON format
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              wallets,
              null,
              2
            ),
          },
        ],
        isError: false,
      };
    } catch (error) {
      // Return an error message if wallet generation fails
      return {
        content: [
          {
            type: "text",
            text: `Error generating wallets: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);


// Start the server using stdio transport
async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// Run the server
startServer().catch((error) => {
  console.error("Failed to start server:", error);
});