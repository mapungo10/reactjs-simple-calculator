import React from 'react'
import ScreenComponent from './ScreenComponent'
import ButtonsComponent from './ButtonsComponent'
import WithCalcComponent from './HOC/WithCalcComponent'

function CalcComponent(props) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex" style={{ height: '100vh' }}>
                    <div className="col-sm-4">
                        <div className="calc-con bg-info p-2">
                            <ScreenComponent screenInput={props.screenInput} />
                            <ButtonsComponent handleBtnClick={props.handleBtnClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithCalcComponent(CalcComponent)
