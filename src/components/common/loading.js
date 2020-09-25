import React from 'react';
import '../../styles/loading.css';

class Loading extends React.Component {
    render () {
        document.body.classList.add('loading')

        return (
            <div id="loading-component">
                <div className="loading">
                    <div className="lds-roller">
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;
