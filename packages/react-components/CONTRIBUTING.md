# Contributing to Puppet React Components

Thanks for your interest in contributing! This document outlines how to submit a
bug or request an enhancement, set up your development environment, open a pull
request, deploying new versions, and reviewing code.

## Filing a bug or enhancement

We currently track bugs and enhancements in the "Puppet Design System" Jira
project: <https://tickets.puppetlabs.com/browse/PDS>

You're encouraged to open a ticket before you begin developing. This helps us
avoid duplicated work and often serves as a chance for others to weigh in.

## Setting up your development environment

We use Node.js and npm scripts for our build tooling. Our CI server runs Node
LTS, which we recommend you do as well. You can install versions of Node
using [nvm](https://github.com/creationix/nvm).

Once you've installed Node, install the dependencies for this project with:

```
npm install
```

UI Components includes a styleguide that allows us to test components in
isolation. It's built with [React Styleguidist](https://github.com/styleguidist/react-styleguidist),
and content is sourced from a Markdown file living next to each respective
component.

**To start the styleguide for local development:**

1. Run `npm start`.
2. Open the [styleguide](http://localhost:6060) at http://localhost:6060.

**To build the library as a module and watch for changes:**

1. If you haven't already done so, run `npm link` in this directory.
2. Run `npm run watch` to build the module and rebuild on any change.
3. For any project in which UI Components is a dependency, you can link UI
   Components to see your changes reflected in the parent. In the parent project,
   run `npm link @puppet/react-components`. Make sure you're using the same
   version of Node.js in both projects.

## Testing and linting

We use Mocha, Chai, and Enzyme for testing this project. We use ESLint for
linting our javascript, which has a configuration based of [Airbnb's](https://www.npmjs.com/package/eslint-config-airbnb).
Additionally, we lint our SCSS using StyleLint.

We've written up some of our best practices we use while testing our React
projects [here](https://reflect.io/blog/js-testing-mocha-chai-enzyme/).

To run tests:

```
npm test
```

To lint Javascript:

```
npm run js-lint
```

To lint Scss:

```
npm run scss-lint
```

## Commits

![](https://imgs.xkcd.com/comics/git_commit.png)

- The commit summary (first line) should:
    - Be no more than 72 characters,
    - Use imperative present tense ("fix", not "fixed" or "fixes"), and
    - Include Jira ticket if applicable (e.g. "(PDS-XXX) Rest of message")
- A commit body may be added when the commit is sufficiently complex (to include motivation for the change, contrast with the previous behavior, etc.)
- Commits should be of appropriate granularity (and keep formatting and refactoring in separate commits)

## Rebasing vs merging

When you are the sole contributor on a branch it is prefered that you rebase the parent branch to keep
a clean git history. However, when working on a branch with multiple people it's recommended that you
always merge the parent into the child. This prevents the other engineers from having to blow out their
local branch and reduces the risk of losing commits.

## Opening a pull request

You've built a new feature, fixed a bug, or maybe you fixed a typo in this
document. Whatever you're planning on contributing, the next step is to open a
pull request and have your changes changes reviewed.

Before doing so, here's a small checklist to run through:

- [ ] Have I written tests where appropriate?
- [ ] Have my tests and linter passed locally?
- [ ] Have I added my change to CHANGELOG.md?

If the answer to these is "yes", you're ready to go! Once you've pushed your
branch up to Github, you're ready to open a pull request.

- Open your Pull Request against the development branch.
- You may be asked to make stylistic changes to align your contribution with
  existing code, add tests, or any other requests.
- The reviewer will merge your pull request and delete your branch once it has
  been approved. You're more than welcome to merge as well.

If you have any questions about this process, please reach out to the
maintainers. Again, thank you for the contribution!

## Releasing a new version

New versions are currently released by maintainers using `lerna publish`. Please collaborate with the team in [#team-design-system](https://puppet.slack.com/messages/CFFECRQAY) to release a new version. (Note: This process will likely be replaced with automated releases on push to master.)

<!--
## Releasing a new version

New versions of UI Components are built and published to Artifactory using
[Puppet Pipelines](http://pipelines.puppet.com/). This happens whenever a commit
is pushed to the master branch. Ideally, the only commits to master happen via a
merge from development. That process is outlined below.

### Bumping the minor or major version

By default, pushing to master will release a new version with a bumped patch. As
we follow [semver](https://semver.org/), it's often necessary to bump the minor
or even major version. This can be done by modifying the `version` field in
[package.json](./package.json). For example, if the version is currently
"12.10.6" and you wish to bump to "12.11.0", change the version in the file to
"12.11.0".

## Opening a deployment pull request

Much like contributions, deployments happen via the merging of a pull request
from the development branch to the master branch. The following steps outline
that process:

1. Open a Pull Request from development to master.
2. Title it with `Development (vx.x.x)` indicating that it's a PR from
   Development, and which version will be released.
3. Take a look at the "Files changed", and make sure the CHANGELOG.md file
   contains a summary of the changes.
4. Assign the maintainers. (See "Opening a pull request" above)
5. Upon approval your pull request will be merged by the reviewer. The reviewer
   is responsible for making sure the deployment goes out smoothly, and for
   rolling back otherwise.
-->

## Reviewing pull requests

Here's some things to look for when reviewing pull requests:

- Is the code readable? Does it make sense? Can you decipher the intent?
- Are there an appropriate amount of tests? Can you decipher the intent of the
  tests?
- Is the code style in line with the rest of the file? The project? The team?
- Are there inline comments where necessary?

Good reviewers are respectful and try to understand the intent of the
contributor.

Thanks!
