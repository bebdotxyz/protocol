---
sidebar_position: 3
---

# The BΞB Community Protocol

Once BΞB NFT Communities are operational are functional inside our first client ([beb.xyz](https://beb.xyz)), we want to decentralize community operations in a permissionless fashion through the BΞB Community Protocol. The core elements of the BΞB Community Protocol is the Indexer.

## The BΞB Indexer

The BΞB Indexer (Off-chain) is responsible for the indexing of roles and community members, providing BΞB clients data interfaces to query the data necessary to function. It interacts with decentralized block indexers such as the Graph or a hosted node to query the data necessary to arbitrage community roles, permissions, and members depending on a set of rules.

The BΞB indexer is self-hostable and compatible with different node providers.

```js
/** The following API methods are initially available */

// paginated call to get all members of a community
/** @params uint256 communityId, the tokenId of the community in the name registrar*/
"GET /[communityId]/members",
  // paginated call to get all roles of a community
  /** @params uint256 communityId, the tokenId of the community in the name registrar*/
  "GET /[communityId]/roles",
  // get information for a community role
  /** @params uint256 communityId, the tokenId of the community in the name registrar*/
  /** @params uint256 roleId, the roleId to query */
  /** @require the roleId to be registered by the community */
  "GET /[communityId]/roles/[roleId]",
  // get permissions information for a role in the communityId
  /** @params uint256 communityId, the tokenId of the community in the name registrar*/
  /** @params uint256 roleId, the roleId to query */
  /** @require the roleId to be registered by the community */
  "GET /[communityId]/roles/[roleId]/permissions";

// Register a new role for a community
/** @params uint256 communityId, the tokenId of the community in the name registrar*/
("POST /[communityId]/roles");

// Register a new rule for a role
/** @params uint256 communityId, the tokenId of the community in the name registrar*/
/** @params uint256 roleId, the roleId to register a rule */
/** @require the roleId to be registered by the community */
("POST /[communityId]/roles/[roleId]/rules");

// Modify a role
/** @params uint256 communityId, the tokenId of the community in the name registrar*/
/** @params uint256 roleId, the roleId to register a rule */
/** @require the roleId to be registered by the community */
("PUT /[communityId]/roles/[roleId]");

// Delete a rule for a role
/** @params uint256 communityId, the tokenId of the community in the name registrar*/
/** @params uint256 roleId, the roleId to register a rule */
/** @require the roleId to be registered by the community */
/** @require the ruleId to be registered by the role */
("DEL /[communityId]/roles/[roleId]/rules/[ruleId]");
```
