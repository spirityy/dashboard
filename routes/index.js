module.exports = {
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Index'))
    })
  }
}
