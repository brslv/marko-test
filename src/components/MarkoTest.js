const defineComponent = require('../../node_modules/marko/components/defineComponent');
const templ = require('../templates/MarkoTest.marko');

class MarkoTest {
    onCreate() {
        this.state = {
            name: 'm'
        }
        console.log('created...');
    }
}

module.exports = defineComponent(MarkoTest);