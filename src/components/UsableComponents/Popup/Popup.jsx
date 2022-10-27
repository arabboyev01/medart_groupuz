import React, {useEffect, useState} from 'react'
import './Popup.scss'
import {ReactComponent as Logo} from "../../../assets/icons/Logo.svg";
import {useTranslation} from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {usePostContactMutation} from "../../../redux";


function Popup() {
    const [addContact, {isError}] = usePostContactMutation()

    const {t} = useTranslation();
    const dispatch = `${t("dispatch")}`
    const [open, setOpen] = useState(false);
    const [send, setSend] = useState(dispatch);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState("");
    const [succesO, setSuccesO] = useState(true);
    const [getValue, setValue] = useState("");
    const [inputColor, setInputColor] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const postContact = async () => {
        HandleInputValue();
        if (name && number && getValue) {
            setSend(<BeatLoader color="#fff" size={10}/>)
            setTimeout(() => {
                setSend(t("dispached"));
                setLoading(!loading);
            }, 2000)
            setTimeout(() => {
                setOpen(false);
                setSuccess(murkup)
            }, 3500)
            await addContact({full_name: name, phone_number: number}).unwrap();
            setNumber('')
            setName('')
        } else {
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 15000)
    }, []);

    const murkup = <Alert severity="success" action={
        <IconButton aria-label="close" color="inherit" size="small" onClick={() => {
            setSuccesO(false)
        }}>
            <CloseIcon fontSize="inherit"/>
        </IconButton>
    }
                          sx={{mb: 2}}
    >{t("success")}</Alert>

    const HandleInputValue = function () {
        if (getValue === "") {
            setInputColor(true);
            setDisabledBtn(true);
        } else {
            setInputColor(false);
            setDisabledBtn(false);
        }
    }

    return (
        <>
            <Stack className={succesO ? "succesOpen" : "succesClose"}>
                {success}
            </Stack>
            <div className='modal' onClose={() => setOpen(false)} style={{display: open !== false ? 'flex' : 'none'}}>
                <div className='modal__logo'>
                    <Logo/>
                </div>
                <h1 className='modal__title'>{t("contactus")}</h1>
                <p className='modal__descr'>{t("popupHeader")}</p>
                <label className='modal__label' htmlFor="name">{t("yourname")} <span>*</span> </label>
                <input value={name} type="text" className={inputColor ? "modal__danger" : "modal__input"}
                       onChange={(e) => {
                           setValue(e.target.value);
                           setName(e.target.value);
                       }} placeholder={t("enteryourname")}/>
                <label className='modal__label' htmlFor="name">{t("yourphone")} <span>*</span> </label>
                <input value={number} type="tel" className={inputColor ? "modal__danger" : "modal__input"}
                       onChange={(e) => {
                           setValue(e.target.value);
                           setNumber(e.target.value);
                       }} placeholder='+998 99 888-77-66'/>
                <div className='modal__btns'>
                    <button className='btn reject' onClick={() => setOpen(false)}>{t("reject")}</button>
                    <button className='btn dispatch' disable={disabledBtn} onClick={postContact}>{send}</button>
                </div>
            </div>
        </>
    )
}

export default Popup