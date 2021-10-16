import React, { Component } from 'react';

const WithCalcComponent = (WrappedComponent) => {
    class NewComponent extends Component {

        // ================= constructor ==========
            constructor(props) {
                super(props)
            
                this.state = {
                    screenInput: ''
                }
            }
        
        // ================= btn clickHandler ===========
            handleBtnClick = (e) => {
                // clear,c,=
                if (e.target.name === 'Clear' || e.target.name === 'c' || e.target.name === '=') {
                    // clear btn
                    if (e.target.name === 'Clear') {
                        this.setState({
                            screenInput: ''
                        })
                    // c btn
                    } else if (e.target.name === 'c'){
                        this.setState((prevInput)=>{
                            return {
                                screenInput: prevInput.screenInput.slice(0, prevInput.screenInput.length - 1)
                            }
                        })
                    // = btn
                    }else if (e.target.name === '='){
                        if (this.state.screenInput === '' || this.state.screenInput === '00' || this.state.screenInput === '.') {
                            this.setState({
                                screenInput: ''
                            })
                        } else {
                            this.setState((prevInput)=>{
                                return {
                                    screenInput: eval(prevInput.screenInput).toString()
                                }
                            })
                        }
                    }else{

                    }
                // other btn
                } else {
                    // operators
                    if (e.target.name === '/' || e.target.name === '*' || e.target.name === '+' || e.target.name === '-') {
                        if (this.state.screenInput === '') {
                            this.setState({
                                screenInput: ''
                            })
                        } else {
                            this.setState((prevInput)=>{
                                return {
                                    screenInput: prevInput.screenInput.concat(e.target.name)
                                }
                            })
                        }
                    // numbers btn
                    }else{
                        this.setState((prevInput)=>{
                            return {
                                screenInput: prevInput.screenInput.concat(e.target.name)
                            }
                        })
                    }
                }
            }

        // ============== render function ===========
            render() {
                return (
                    <WrappedComponent screenInput={this.state.screenInput} handleBtnClick={this.handleBtnClick}  { ...this.props }/>
                );
            }
    }
    return NewComponent
}

export default WithCalcComponent
