import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Flags = () => {
    const [value, setValue] = useState()
    return (
        <PhoneInput
            international
            defaultCountry="US"
            value={value}
            onChange={setValue} 
        />
    )
}

export default Flags;