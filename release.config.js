module.exports = {
  "verifyConditions": [
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  "prepare": [
    {
      "path": "@semantic-release/changelog",
      "changelogFile": "CHANGELOG.md"
    },
    {
      "path": "@semantic-release/npm",
      "npmPublish": false
    },
    "@semantic-release/git"
  ],
  "publish": [
    {
      "path": "@semantic-release/github"
    }
  ]
};