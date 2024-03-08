import {Component} from "react";
import axios from "axios";


class ItemList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.show();
    }

    show() {
        axios.get('http://localhost:3000/students').then(x => {
            this.setState({list: x.data})
        })
    }

    render() {
        return (
            <>
                {this.state.list.map(i => (
                    <h2>{i.name}</h2>
                ))}
                <input type="text" id={'x'}/>

                <button onClick={() => {
                    let a = document.getElementById("x").value
                    this.setState(state => ({
                        list: [...state.list, {name: a}]
                    }), () => {
                        axios.post('http://localhost:3000/students', {name: a}).then(x => {
                            this.show()
                        });
                    });
                }}>Add
                </button>
            </>
        )
    }
}
export default ItemList;