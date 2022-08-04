// Render Prop
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { BooksService } from '../api/BooksService';


const BookForm = () => {

  return (
    <div>
      <Formik
        initialValues={{ name: '', author: '', comment: '', signature:''}}
        onSubmit={(values, { setSubmitting }) => {
          BooksService.postBook(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field id="name" name="name" placeholder="Título del libro"/>
            <Field id="author" name="author" placeholder="Escrito por:"/>
            <Field id="comment" name="comment" placeholder="¿Por qué lo recomendarías?"/>
            <Field type="signature" name="signature" placeholder="Tu firma"/>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default BookForm;