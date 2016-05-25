module.exports = {
  path: 'orders',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Orders'))
    })
  }
}
