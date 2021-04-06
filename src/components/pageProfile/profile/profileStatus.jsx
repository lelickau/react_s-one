import React from 'react';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({editMode: true});
        
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value});
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
        <div>
            {!this.state.editMode && <div><h3 onClick={this.activateEditMode}>{this.props.status || 'My status...'}</h3></div>}
            {this.state.editMode && <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/></div>}
            
        </div>
        )
    }
    
}

export default ProfileStatus;