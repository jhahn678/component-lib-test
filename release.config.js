module.exports = {
    branches: ['semantic-release'],
    debug: true,
	plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    {breaking: true, release: 'major'},
                    {type: "feat", release: "minor"},
                    {type: "fix", release: "patch"},
                    {type: "docs", release: "patch"},
                    {type: 'revert', release: 'patch'},
                    {type: "perf", release: "patch"},
                    {type: 'build', release: 'patch'},
                    {type: "revert", release: "patch"},
                    {type: 'ci', release: false},
                    {type: "test", release: false},
                    {type: "chore", release: false},
                    {type: "style", release: false},
                    {type: "refactor", release: false},
                ]
            }
        ],
    ]
};