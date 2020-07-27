import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './SimpleForm.css'


const SimpleForm = () => {
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phoneno, setPhoneno] = useState();
    const letters = /^[A-Za-z]+$/;
    const [show, setShow] = useState(false)
    const [ButtonName, setButtonName] = useState('Hide')
    useEffect (()=> {
        show  ? setButtonName("Show") : setButtonName("Hide");
    },[setButtonName,show])

    const toggleButtonHandler = (e) => { e.preventDefault(); return setShow(!show);}

    const handleNameChange = (e) => {

        const target = e.target;
             if (target.value.match(letters)) {
            setName(e.target.value)
        }
        else {
            alert("Please provide valid name")
        }


    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleCityChange = (e) => {
        if (e.target.value.match(letters)) {
            setCity(e.target.value)

        }
        else {
            alert("Please provide letters")
        }
    }
    const handlePhoneNoChange = (e) => {
        setPhoneno(e.target.value)
    }

    const validatePhoneNo = () => {
        const pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(phoneno)) {
            alert("Please enter only number.");
        } else if (phoneno.length !== 10) {
            alert("Please enter 10 digit phone number.");
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:9000/testAPI',      
            data: {
                name:name,
                address:address,
                city:city,
                phoneNo:phoneno
           },
            headers: {
                'Content-Type': 'application/json'                
            },
        })
          .then(function (response) {
             
              setName('');
              setAddress('');
              setCity('');
              setPhoneno('');
              alert("Submitted Successfully")

          })
          .catch(function (error) {
              alert(error);
          }) 
         

    }
    return (
        <>
        <div className="header">
        <button onClick={toggleButtonHandler}>{ButtonName}</button>
    </div>
        {!show && <form onSubmit={handleSubmit}>

            <div>
                <label> Name </label>
                <input type='text' name='Name' value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label> Address </label>
                <textarea name='Address' value={address} onChange={handleAddressChange} />

            </div>
            <div>
                <label> City </label>
                <input type="text" name='city' value={city} onChange={handleCityChange}
                />
            </div>

            <div>
                <label> Phone </label>
                <input type="number" name='phone' value={phoneno} placeholder="Please enter 10 digit number"
                    onChange={handlePhoneNoChange}
                    onBlur={validatePhoneNo} />
            </div>
              <input type='submit' value="SUBMIT" className="submit"/> 
        </form>}
        </>

    )
};
export default SimpleForm;