import React, { useState, useEffect, Component } from 'react';
import API from "../utils/API";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import { Input, TextArea, FormBtn } from "../components/Form";

function CreateUser() {
    const [users, setUser] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username) {
            API.saveUser({
                username: formObject.username
            })
            .then(//redirect to dashboard)
        }
    }
}