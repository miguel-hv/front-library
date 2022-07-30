// Render Prop
import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { usePostBooks } from '../hooks/useBooks';

const BookForm = () => {

    const testBook = {
      name : "test name",
      author: "test author",
      comment: "test comment",
      signature: "test signature",
  }

  const postBook = usePostBooks();

  return (
    <div>
      <Formik
        initialValues={{ name: '', author: '', comment: '', signature:''}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          postBook(values);
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
      {/* <button onClick={()=>{postBook()}}>
        POST
      </button> */}
    </div>
  )
};

export default BookForm;