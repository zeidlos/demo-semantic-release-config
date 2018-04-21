# Semantic Release for SiH Projects.

This readme guides you trough setting up the tooling for an SiH PD Project.

## Global requirements
Make sure to install those requirements into the node version you plan on using in the project.
```
npm install -g commitizen
npm install -g cz-conventional-changelog
```
## Installing Requirements into a fresh project
* Create a `package.json` if there is none yet.
* Initialize commitizen `commitizen init cz-conventional-changelog --save-dev --save-exact`
* Install the semantic-release-config `npm i --save-dev zeidlos/demo-semantic-release-config`
* Add the following lines to your `package.json` scripts section: 
```
"semantic-release": "semantic-release -e sih-semantic-release-config",
"travis-deploy-once": "travis-deploy-once"
```
* Add the `.travis.yml` from this project to your project.
* Add the `.editorconfig` from this project to your project.

* Now you have to generate a `GH_Token` and add it to the Travis project.
* Most likley you'd have to enable the Travis Project as well.

In the future we might automate most of these steps. ;)
