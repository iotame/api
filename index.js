module.exports = {
    Extension: class Extension {},

    Hook: require('./Hooks/Hook'),
    Filter: require('./Hooks/Filter'),
    Action: require('./Hooks/Action'),
    Mutator: require('./Hooks/Mutator'),
}