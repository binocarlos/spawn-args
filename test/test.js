var parse = require('../');

describe('spawn-args', function(){

  it('should be a function', function() {
    parse.should.be.a('function');
  })

  it('should parse some arguments', function() {
    var arr = parse('--host hello.com --port 80 --title "Apple Pie With Spaces" --num 20')    

    arr.length.should.equal(8);
    arr[5].should.equal('"Apple Pie With Spaces"');
  })

})
