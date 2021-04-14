import React, { useEffect, useState } from 'react';

const HookProfileStatus = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
        
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

        return (
        <div>
            {!editMode && <div><h3 onDoubleClick={activateEditMode}>{props.status || 'My status...'}</h3></div>}
            {editMode && <div><input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} /></div>}
            
        </div>
        )
    
    
}

export default HookProfileStatus;