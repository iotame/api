module.exports = {
    Extension: require('./src/Extension'),
    Device: require('./src/Device'),
    Protocol: require('./src/Protocol'),

    Hook: require('./src/Hooks/Hook'),
    Filter: require('./src/Hooks/Filter'),
    Action: require('./src/Hooks/Action'),
    Mutator: require('./src/Hooks/Mutator')
}
