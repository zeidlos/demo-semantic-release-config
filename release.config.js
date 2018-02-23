module.exports = {
  "verifyConditions": [
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  "prepare": [
    "@semantic-release/changelog",
    "@semantic-release/git"
  ],
  "publish": [
    {
      "path": "@semantic-release/git",
      "assets": [
        "package.json",
        "npm-shrinkwrap.json"
      ]
    },
    {
      "path": "@semantic-release/github"
    }
  ]
};