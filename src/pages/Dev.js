import React from 'react';
import Technologies from '../components/Technologies';
import securianLogo from '../images/securianLogo.png';
import { Image } from 'react-bootstrap';

class Dev extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1>Development Experience</h1>
                    <Technologies />
                    <Image src={ securianLogo } style={{ width: 400}} rounded alt="securian logo" />
                </div>
            </>
        );
    }
}

export default Dev;