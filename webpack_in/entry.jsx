//  This file 'entry.jsx' is part of an example for building a multi-widget React front-end app
//  step by step as outlined in the tutorial blog at
//  http://maratbn.com/blogs/2018/07/02/react-multi-widget/


console.log("JSX entry logic.");


import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';


const objStyleCommon = {
    margin:     '1em',
    border:     'solid 2px green',
    textAlign:  'center'
  };

const objStyleContent = {
    padding:    '1em'
  };


class ButtonWidget extends React.Component {
    render() {
        return (
            <button style={{ margin: '1em'}}
                    onClick={ this.props.onClick }>{ this.props.caption }</button>
          );
      }
}

ButtonWidget.propTypes = {
    caption:                    PropTypes.string.isRequired,
    onClick:                    PropTypes.func
  };

class HelloWidget extends React.Component {
    render() {
        return (
            <div style={{ ...objStyleCommon, ...objStyleContent }}>
              Hello!  I'm a React app!!
            </div>
          );
      }
}

class TextWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Some text here...."
          };
      }

    render() {
        return (
            <div style={ objStyleCommon }>
              <div style={ objStyleContent }>{ this.state.text }</div>
              <ButtonWidget caption="Change text..."
                            onClick={() => {
                                const strTextNew = prompt("Please enter text to display:",
                                                          this.state.text);
                                if (strTextNew === null) {
                                    return;
                                }

                                this.setState({...this.state, text: strTextNew});
                              }}/>
            </div>
          );
      }
}

class ListWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                "Item 1",
                "Item 2",
                "Item 3"
              ]
          };
      }

    render() {
        return (
            <div style={ objStyleCommon }>
              <div style={ objStyleContent }>
                <ul style={{ display: 'inline-block' }}>
                  { this.state.items.map((strItem, index) => (<li>
                                                                { strItem }
                                                              </li>)) }
                </ul>
              </div>
              <div>
                <ButtonWidget caption="Add new item..." />
                <ButtonWidget caption="Edit item..." />
                <ButtonWidget caption="Remove item..." />
              </div>
            </div>
          );
      }
}


ReactDOM.render(
    <div>
      <HelloWidget />
      <TextWidget />
      <ListWidget />
    </div>,
    document.getElementById('react-app'));
