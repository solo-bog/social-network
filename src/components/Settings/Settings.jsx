import React from 'react'

const Settings = () => {
    let file = React.createRef();
    return(
        <div>
            <img src="" alt=""/>
            <form>
                <input type="file" ref={file}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Settings;