/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Test your own functions with edge cases', () => {

    it('An url will be parsed an return all the parts in an object.', function(){
        let analysis = analyseUrl('https://it-club-oberland.ch#section');
        
        analysis.schema.should.be.equal('https');
        analysis.host.should.be.equal('it-club-oberland.ch');
        analysis.fragment.should.be.equal('section');
    });
      
    
    it('An url will be parsed an return all the parts in an object.', function(){
        let analysis = analyseUrl('http://localhost:8080/api?sort=ASC');
        
        analysis.schema.should.be.equal('http');
        analysis.host.should.be.equal('localhost');
        analysis.port.should.be.equal('8080');
        analysis.path.should.be.equal('api');
        analysis.query.should.be.equal('sort=ASC');
    });
});