import React from 'react';
import Matrix from './matrix';
let { withStyles } = require('@material-ui/styles')

const classes = {
    fullWindow: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    },
    matrix: {
        position: 'fixed',
        zIndex: '-1',
        transform: 'scale(1.2)',
        transition: 'margin scale 500ms cubic-bezier(.19,1,.06,.99) 0s'
    },
    moveableChildren: {
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        zIndex: '2',
        transition: 'margin scale 500ms cubic-bezier(.19,1,.06,.99) 0s',
        fontFamily: 'monospace'
    }
}

class MatrixBackground extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            boxMarginTop: window.innerHeight / 2,
            boxMarginLeft: window.innerWidth / 2
        }

        this.forgroundMatrixParalaxFactor = this.props.parallaxRate
        this.boxChildrenParallaxRate = this.props.parallaxRate * 2
        this.backgroundParallaxRate = this.props.parallaxRate * 4

        
        
    }

    componentWillUnmount() {
        // clean up by removing the listener
        document.body.removeEventListener('mousemove', this.bodyMouseListener)
        document.body.removeEventListener('touchmove', this.bodyTouchListener)
    }

    render() {
        return React.createElement('div', {
            className:this.props.classes.fullWindow,
        },
            React.createElement(Matrix, {
                style: {
                    ...classes.matrix,
                    left: -this.state.boxMarginLeft / this.backgroundParallaxRate,
                    top: -this.state.boxMarginTop / this.backgroundParallaxRate,
                },
                color: this.props.color,
                backgroundColor: this.props.backgroundColor,
                fontSize: 11,
                frequency: 0.001,
                fullscreen: true,
                ...this.props.backMatrixProps
            }),
            React.createElement('div',{
                className: this.props.classes.moveableChildren,
                style: {
                    color: this.props.color,
                    transform: this.props.zoomEffect ? `scale(${0.8 + ((window.innerHeight / (window.innerHeight - this.state.boxMarginTop))/8)})` : "",
                    marginLeft: this.state.boxMarginLeft / this.boxChildrenParallaxRate,
                    marginTop: this.state.boxMarginTop / this.boxChildrenParallaxRate,
                },
            },
                this.props.children
            ),
            React.createElement('div',{
                style: {
                    ...classes.fullWindow,
                    backgroundColor: this.props.overlay,
                    zIndex: 9,
                }
            }),
            React.createElement(Matrix, {
                style: {
                    ...classes.matrix,
                    left: -this.state.boxMarginLeft / this.forgroundMatrixParalaxFactor,
                    top: -this.state.boxMarginTop / this.forgroundMatrixParalaxFactor,
                },
                color: this.props.color,
                backgroundColor: 'rgba(0,0,0,0)',
                fontSize: 11,
                frequency: 0.001,
                fullscreen: true,
                zIndex: 10,
                ...this.props.frontMatrixProps
            })
        )
    }
}

MatrixBackground.defaultProps = {
    parallaxRate: 2,
    color: 'rgba(122, 229, 114, 0.87)',
    overlay: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(0,0,0,1)',
    zoomEffect: false,
    frontMatrixProps: {},
    backMatrixProps: {}
}


export default withStyles(classes)(MatrixBackground)