---
sidebar_position: 4
---

# Data Models

The `Role` model defines a set of properties listed below.

| Property         | Description                                                                               | Value                                                      | Type       |
| ---------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------- |
| id               | The unique id of the role                                                                 | "1"                                                        | String     |
| emoji            | Role unicode emoji                                                                        | U+1F600                                                    | String     |
| color            | The hex color of the role                                                                 | "ff1100"                                                   | String     |
| name             | The name of the role                                                                      | "whales"                                                   | String     |
| description      | The role description                                                                      | "role assigned to the members holding more than one token" | String     |
| permissions      | The role permissions as bits                                                              | 0x45                                                       | Integer    |
| rules            | The automatic rules applied to the role. As for now, the maximum RoleRule supported is 3. |                                                            | [RoleRule] |
| rulesUnionPolicy | The union policy for different rules in the rules array. Possible values are "OR", "AND". | "AND"                                                      | String     |

The `RoleRule` model defines a set of rules to automatically add members to a role.

| Property    | Description                                               | Value                                                             | Type   |
| ----------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ------ |
| id          | The unique id of the RoleRule                             | "rule1"                                                           | String |
| type        | The rule type. Currently, the only valid value is "TOKEN" | "TOKEN"                                                           | String |
| name        | The hex color of the role                                 | "Add BoredKitten"                                                 | String |
| description | The role description                                      | "Automatically add addresses with at least one BoredKitten token" | String |

The `RoleRuleToken` model defines a set of rules for a "TOKEN" rule type.

| Property        | Description                                                                                             | Value    | Type       |
| --------------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| id              | The unique id of the RoleRuleToken                                                                      | "1"      | String     |
| address         | The token address to subscribe                                                                          |          | String     |
| updateFrequency | The frequency to fetch the token to validate the rule. Valid values include "HOURLY", "DAILY", "WEEKLY" | "DAILY"  | String     |
| standard        | The standard for the underlying token contract. Valid values include "ERC20", "ERC721", "ERC1155"       | "ERC721" | String     |
| rule            | The id of the parent rule                                                                               | "rule1"  | String     |
| minToken        | The minimum amount of token to hold                                                                     | 1        | String     |
| maxToken        | The maximum amount of token to hold. -1 for unlimited.                                                  | -1       | [RoleRule] |
