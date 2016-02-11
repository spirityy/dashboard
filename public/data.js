const sideItems = [
  {
    name: 'One',
    url:'one',
    description: 'This is One'
  },
  {
    name: 'Two',
    url:'two',
    description: 'This is Two'
  },
  {
    name: 'Three',
    url:'three',
    description: 'This is Three'
  }
]

exports.getAll = function () {
  return sideItems
}

exports.get = function (index) {
  return sideItems[index]
}
