module.exports = {
  path: 'user',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/User'))
    })
  }
}
