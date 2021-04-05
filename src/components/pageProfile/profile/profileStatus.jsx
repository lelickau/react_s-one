import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode() {
        this.setState({editMode: true});
        
    }

    deactivateEditMode() {
        this.setState({editMode: false});
        
    }

    render() {
        return (
        <div>
            {!this.state.editMode && <div><h3 onClick={this.activateEditMode.bind(this)}>{this.props.status}</h3></div>}
            {this.state.editMode && <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/></div>}
            
        </div>
        )
    }
    
}

export default ProfileStatus;