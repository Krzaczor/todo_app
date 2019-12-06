import React, { Component } from 'react';
import Modal from 'rodal';
import { connect } from 'react-redux';
import modesActions from '../store/modes/actions';

import 'rodal/lib/rodal.css';

class PopupShowTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            !this.props.modes.show ? null : <Modal
                visible={this.props.modes.show}
                // onClose={this.hide}
                showCloseButton={false}
                // closeMaskOnClick={true}
                customStyles={{
                    width: '85vw',
                    height: '85vh',
                    borderRadius: '15px',
                    padding: '30px'
                }}
                customMaskStyles={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            >
                <div>
                    <p>jestem w modalu wyświetlającym konkretne zadanie</p>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    modes: state.modes.list
});

const mapDispatchToProps = (dispatch) => ({
    toggleOnShow: () => dispatch(modesActions.toggleOnShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupShowTask);
