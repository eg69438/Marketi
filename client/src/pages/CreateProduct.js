import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";


function CreateProduct() {

    const initialValues = {
        emri: "",
        cmimi: "",
        lloji: "",
        pershkrimi: "",
    };

    const validationSchema = Yup.object().shape({
        emri: Yup.string().required(),
        cmimi: Yup.number().required(),
        lloji: Yup.string().required(),
        pershkrimi: Yup.string().required(),

    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/Produktet", data).then((response) => {
            console.log("It worked");
        }).catch((error) => {
            console.error("Error fetching data:", error);
        })
    };

    return (
        <div className='createProductPage'> 
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
            >
                <Form className='formContainer'>
                    <label>Emri: </label>
                    <ErrorMessage name="emri" component="span" ></ErrorMessage>
                    <Field 
                    id="inputCreateProduct" 
                    name="emri"
                    placeholder="Emri produktit" 
                    />
                    <label>Cmimi: </label>
                    <Field 
                    id="inputCreateProduct" 
                    name="cmimi"
                    placeholder="Cmimi" 
                    />
                    <label>Lloji: </label>
                    <Field 
                    id="inputCreateProduct" 
                    name="lloji"
                    placeholder="Lloji" 
                    />
                    <label>Pershkrimi: </label>
                    <Field 
                    id="inputCreateProduct" 
                    name="pershkrimi"
                    placeholder="Pershkrimi..." 
                    />

                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateProduct;
