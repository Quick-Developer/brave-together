import React, { useState, useCallback, useEffect } from 'react';
import { Submit, Input, DivForm, Input2, Label2, Header, Label, LogoImg, Body } from './Design/styledComponents';
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.jpg';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css";
import validator from 'validator'


const theme = createTheme({
    palette: {
        primary: {
            main: '#616161',
            dark: '#373737',
        },
        secondary: {
            main: '#ff6900',
            dark: '#ba000d',
        },
    },
});

export default function LoginSignup({ isSignup }) {
    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        emailError: '',
        firstName: '',
        lastName: '',
        phone: ''
    });

    useEffect(() => {
        // const token = localStorage.getItem('token');
        // if(token) history.push("/");
        setValues({ ...values, emailError: '' })
    }, [isSignup])

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "email") {
            var email = event.target.value
            if (validator.isEmail(email)) {
                setValues({ ...values, email, emailError: '' })
            } else {
                setValues({ ...values, emailError: 'כתובת האימייל חייבת להיות חוקית.' })
            }
        }
    };

    const handleMoveBtn = () => {
        const page = isSignup ? '/login' : '/signup'
        history.push(page)
    }

    const onLoginSignup = async () => {
        if (isSignup) {
            const { email, password, firstName, lastName, phone } = values
            const creds = {
                email,
                password,
                first_name: firstName,
                last_name: lastName,
                cellphone: phone
            }
            var config = {
                method: 'post',
                url: 'http://localhost:5000/user',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: creds
            };

            try {
                await axios(config)
                doLogin(email, password)
            } catch (err) {
                let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                setValues({ ...values, emailError: message })
            }

        } else {
            const { email, password } = values
            doLogin(email, password)
        }
    }



    const doLogin = async (email, password) => {
        try {
            const { data } = await axios.get("http://localhost:5000/token", {
                auth: {
                    username: email,
                    password: password
                },
            })
            localStorage.setItem('token', data.token);
            alert("logged in successfully!");
            history.push("/");
        } catch (err) {
            let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
            setValues({ ...values, emailError: message })
        }
    }


    let data = {
        "header": {
            "content": ['על מנת ליצור ולשמור השראות יש להירשם למערכת'],
            "color": "black",
        },
    }

    document.body.style.background = "rgba(255, 255, 255, 0.1) url('https://brave-together.com/wp-content/uploads/2020/04/IMG_3198-2-1.jpg')";
    document.body.style.backgroundSize = "100vw 100vh"

    return (
        <div className='login'>
            <div className="pcComponent">
                <DivForm>
                    <LogoImg src="https://brave-together.com/wp-content/uploads/2021/05/%D7%9C%D7%95%D7%92%D7%95-%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99-%D7%A9%D7%A7%D7%95%D7%A3-300x300.png" width="128" height="128"></LogoImg>
                    <Header>התחברות</Header>
                    <form>
                        <Label htmlFor="emailBox">כתובת אימייל </Label>
                        <Input id="emailBox" type="email" name="email" value={values.email} onChange={handleChange('email')} required style={{ marginRight: "auto", marginLeft: "auto" }}></Input>
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{values.emailError}</span>
                        <Label htmlFor="passwordBox">סיסמא </Label>
                        <Input id="passwordBox"
                            type="password"
                            name="password"
                            value={values.password}
                            required
                            onChange={handleChange('password')}></Input>
                        <br></br>
                        <Submit type="submit" value="הרשמה"></Submit>
                    </form>
                    <div style={{ height: "50px", color: "white" }}>
                        <Link to="/">פתיחת חשבון חדש</Link>
                    </div>
                    <br></br>
                </DivForm>
            </div>

            <div className="phoneComponent">
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            mx: 'auto',
                            px: 2,
                            pt: 3,
                            textAlign: 'center',
                            fontWeight: 'medium',
                            backgroundColor: 'white',
                        }}
                        dir="rtl"
                    >

                        <form>
                            <Box sx={{ fontSize: 20 }}>{data.header.content.join('\n')}</Box>
                            <h2>הרשמה</h2>
                            {/* <img src="/logo1.png" alt="logo" width="220px" height="90px" /> */}
                            {
                                isSignup && <>

                                    <div className='name-container'>
                                        <TextField required fullWidth className="first-name" id="firstName" label="שם פרטי" variant="outlined" margin="normal" onChange={handleChange('firstName')} />
                                        <TextField required fullWidth id="lastName" label="שם משפחה" variant="outlined" margin="normal" onChange={handleChange('lastName')} />
                                    </div>
                                        <TextField fullWidth id="phone" type="phone" label="פלאפון" variant="outlined" margin="normal" onChange={handleChange('phone')} />

                                </>

                            }
                            <TextField required fullWidth id="email" label="אימייל" variant="outlined" margin="normal" onChange={handleChange('email')} />
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{values.emailError}</span>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel required htmlFor="outlined-adornment-password">סיסמה</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="סיסמה"
                                />
                            </FormControl>


                            <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <FormControlLabel control={<Checkbox style={{ marginTop: "-1" }} />} label="זכור אותי" />
                                <NavLink to={"/"} style={{ margin: "9px", color: "#c53d13", textDecoration: "none" }}>שכחת סיסמה?</NavLink>
                            </FormGroup>
                            <Button variant="contained" color="secondary" onClick={onLoginSignup} className="button">{isSignup ? 'הירשם' : 'התחבר'}</Button>
                        </form>

                        <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                            <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                            <br />או באמצעות
                            <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
                            <img src="/google icon.png" alt="google" style={{ width: "75px" }} />
                            <img src="/facebook icon.png" alt="facebook" style={{ width: "75px" }} />
                        </FormGroup>
                        <Button variant="contained" color="primary" onClick={handleMoveBtn} className="button">{isSignup ? 'התחבר' : 'הירשם'}</Button>
                        {/* <div style={{ margin: "10px" }}> */}
                        <Box sx={{ height: 50, padding: 1.5 }}>
                            <NavLink to={"/"} style={{ fontSize: "17px", color: "black", textDecoration: "none" }}>דלג לבינתיים</NavLink>
                            {/* </div> */}

                        </Box>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
}
