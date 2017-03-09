require('./PageTest.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
const Airmask = require('components/airmask');
class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="test">
                page test
                <Airmask />
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(Test, Reflux.connect(Store, 'Test'));

module.exports = Test;
