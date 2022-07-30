// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = () => (
  <div>
    <Formik
      initialValues={{ title: '', author: '', comment: '', signature:''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field id="title" name="title" placeholder="Título del libro"/>
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
);

export default BookForm;