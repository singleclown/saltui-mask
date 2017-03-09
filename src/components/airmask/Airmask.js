require('./Airmask.styl');
const { Mask } = SaltUI;
class Airmask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maskVisiable: false
        };
    }
    showMask() {
        this.setState({
            maskVisiable: true
        });
    }
    handleWillHide() {
        const{maskVisiable}=this.state;
        console.log("2"+maskVisiable);
        console.log('mask will hide');
        // 如果返回false 则Mask是不能关闭的
        //return false;
    }
     handleDidHide() {
         const{maskVisiable}=this.state;
        console.log("3"+maskVisiable);
        console.log('mask did hide');
    }
    render() {
        let t = this;
        const{maskVisiable}=this.state;
        console.log("1"+maskVisiable);
        return (
            <div>
                <h3 onClick={t.showMask.bind(this)}>点击打开mask</h3>           
                <Mask visiable={t.state.maskVisiable}
                      onWillHide={t.handleWillHide.bind(t)}
                      onDidHide={t.handleDidHide.bind(t)}/>
            </div>
        );

    }
}

module.exports = Airmask;
