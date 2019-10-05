import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

let validationScheme = Yup.object().shape({
    name: Yup.string().required("Field Required").max(255, "Field should be shorter than 255 characters"),
    email: Yup.string()
        .email("Must be a valid email address")
        .max(255, "Field should be shorter than 255 characters")
        .required("Field Required")
})

export default () => (
    <Formik>
        {({ values, errors, touched }) => (

            <form className="book_table_form row" action="#">
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group col-md-12">
                    <input type="email" className="form-control" name="email" placeholder="Enter email address" />
                </div>
                <div className="form-group col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Phone Number" />
                </div>
                <div className="form-group col-md-12">
                    <textarea className="form-control" name="text" rows="5" placeholder="Note"></textarea>
                </div>
                <div className="form-group col-md-12">
                    <button type="submit" value="submit" className="primary-btn dark">Submit</button>
                </div>
            </form>

        )
        }
    </Formik>
)