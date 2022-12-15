import React from "react";

class Change extends React.Component {
    state = {
        name: "",
        age: "",
        department:""
    }
    render() {
        return (
            <>
                <label>Name:</label>
                <input type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({name: e.target.value});
                    }}
                />

                <label>Age:</label>
                <input type="text"
                    value={this.state.age}
                    onChange={(e) => {
                        this.setState({age: e.target.value});
                    }}
                />

                <label>Department:</label>
                <input type="text"
                    value={this.state.department}
                    onChange={(e) => {
                        this.setState({department: e.target.value});
                    }}
                />
                <h1>Name:{this.state.name}</h1>
                <h1>Age:{this.state.age}</h1>
                <h1>Department:{this.state.department}</h1>

            </>
        );
    }
}

export default Change;