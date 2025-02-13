import {useState} from 'react';
import axios from 'axios';
import {Snackbar,LinearProgress} from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const Contact = () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const formData = {'full_name':'','email':'','subject':'','message':''}
    const [open, setOpen] = useState(false);
    const [failed, setFailed] = useState(null);
    const [errormsg, setErrorMsg] = useState('');
    const handleClose = (event, reason)=>{
        if(reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    const submitSchema = yup.object().shape({
        name: yup.string().required("please enter your name"),
        email: yup.string().email("invalid email").required("please enter a valid email here"),
        message: yup.string().required("please enter your message"),
    });

  const sendEmail = async (values,{setSubmitting,resetForm})=> {
    setSubmitting(true);
    await sleep(7000);
    try {
        await axios.post("https://yaspi-be.vercel.app/api/v1/feedback/", values)
        .then((res)=>{setSubmitting(false);setFailed(false);setOpen(true); resetForm() })
    
   } catch (error) {
    setSubmitting(false);
    setFailed(true);
    setOpen(true);
    setErrorMsg(`${error.response ? error.response.statusText : error.message}`)
   }
}

    return ( 
        <section id="contact" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="title-box text-center white">
                        <h2 className="title">Contact</h2>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2 contact-form">
                    
                    <div className="contact-info text-center">
                    <p><i className="fa fa-phone"></i>   +254712 725912</p>
                    <p><i className="fa fa-place"></i>   25 Silhouette Silk, Limuru Road</p>
                    </div>
                    <Formik onSubmit={sendEmail} initialValues={formData} validationSchema={submitSchema}>
                        {({ isSubmitting }) => (
                        <Form>
                            {isSubmitting && <LinearProgress color='inherit' />}

                            {failed === true && <Snackbar message={`Something went wrong. ${errormsg}`}
                            autoHideDuration={4500} open={open}
                            onClose={handleClose}
                            anchorOrigin={{horizontal:'center',vertical:'bottom'}} sx={{marginBottom: '250px',color: 'white'}} />}
                            
                            {failed === false && <Snackbar message="Sent Successfully"
                            autoHideDuration={4000} open={open} onClose={handleClose}
                            anchorOrigin={{horizontal:'center',vertical:'bottom'}} sx={{marginBottom: '250px',color: 'white'}} />}

                            <div className="row">
                                
                                                                
                                <div className="col-md-4">
                                    <Field name='full_name' autoComplete='given-name' className="form-control" id="name" placeholder="Full Name" type="text" />
                                    <ErrorMessage name="full_name" />
                                </div>
                                <div className="col-md-4">
                                    <Field name='email' autoComplete='off' className="form-control" id="email" placeholder="Your Email" type="email" />
                                    <ErrorMessage name="email" />
                                </div>
                                <div className="col-md-4">
                                    <Field name='subject' className="form-control" id="subject" placeholder="Subject" type="text" />
                                </div>
                                <div className="col-md-12">
                                    <Field name='message' as="textarea" className="form-control" id="message" rows="7" placeholder="Your Message"/>
                                    <ErrorMessage name="message" />
                                </div>

                                {/* <div className="col-md-12">
                                {loading ? <LoadingSpinner /> : 
                                    <textarea name='message' required value={formData.message} onChange={handleChange} className="form-control" id="message" rows="7" placeholder="Your Message"></textarea>}
                                </div> */}

                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-red-cst" disabled={isSubmitting}>SEND MESSAGE</button>
                                </div>
                                    
                            </div>
                        </Form>
                        )}
                    </Formik>
                        
                </div>
                    
            </div>
        </section>
     );
}
 
export default Contact;