module.exports = {
  name: 'tree',

  'should render all items': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(1000)
      .assert.numberOfElements('[data-ut="default"] li', 242, 'all tree element render')
    .done();
  },

  'should only display the first level of items': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(1000)
      .assert.numberOfVisibleElements('[data-ut="default"] li', 66, 'first level is visible')
    .done();
  },

  'should expand item when clicked on': function(test) {
    test.open('http://localhost:3000/home')
    //angular - need to wait for angular to render this container
    .wait(1000)
    .click('[data-ut="default"] > ul > li:nth-child(2)')
      .assert.visible('[data-ut="default"] > ul > li:nth-child(2) > ul > li', 'sub-tree is visible')
    .done();
  }
}