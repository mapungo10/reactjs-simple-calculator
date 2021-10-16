import React from 'react'

const ScreenComponent = (props) => {
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12  p-1">
                        <h1 style={{fontSize: '1.3em', fontWeight: 'bold', color: '#fff'}}>Simple Calculator</h1>
                    </div>
                    <div className="col-sm-12  p-1">
                        <div>
                            <input type="text" id="calc-screen" className="form-control shadow-sm" autoFocus value={props.screenInput} readOnly/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreenComponent
