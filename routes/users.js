module.exports = {
  path: 'users',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Users'))
    })
  }
}
