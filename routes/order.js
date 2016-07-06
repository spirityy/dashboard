module.exports = {
  path: 'order',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Order'))
    })
  }
}
