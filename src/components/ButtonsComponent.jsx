import React from 'react'

const ButtonsComponent = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="Clear" className="shadow-sm bg-warning">
                            Clear
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="c" className="shadow-sm bg-warning">
                            C
                        </button>
                    </div>
                    <div className="col-3 p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="/" className="shadow-sm bg-warning">
                            /
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="7" className="shadow-sm">
                            7
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="8" className="shadow-sm">
                            8
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="9" className="shadow-sm">
                            9
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="*" className="shadow-sm bg-warning">
                            *
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="4" className="shadow-sm">
                            4
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="5" className="shadow-sm">
                            5
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="6" className="shadow-sm">
                            6
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="-" className="shadow-sm bg-warning">
                            -
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="1" className="shadow-sm">
                            1
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="2" className="shadow-sm">
                            2
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="3" className="shadow-sm">
                            3
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="+" className="shadow-sm bg-warning">
                            +
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="0" className="shadow-sm">
                            0
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="00" className="shadow-sm">
                            00
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="." className="shadow-sm">
                            .
                        </button>
                    </div>
                    <div className="col-3  p-0 d-grid">
                        <button onClick={props.handleBtnClick} name="=" className="shadow-sm bg-warning">
                            =
                        </button>
                    </div>
                </div>
            </div>     
        </>
    )   
}

export default ButtonsComponent
