// Render Prop
import { Formik, Form, Field } from 'formik';


const validate = values => {

  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.author) {
    errors.author = 'Required';
  }

  return errors;
};

const BookForm = ({  returnPromesa }) => {


  return (
    <>
      <Formik
        initialValues={{ name: '', author: '', comment: '', signature:''}}
        validate={validate}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          returnPromesa(values);
          setSubmitting(false);
          resetForm({values: ''});
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field id="name" name="name" placeholder="Título del libro"
              className="w-full border border-gray-400 rounded py-1 px-2 mb-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            {errors.name && touched.name ? (
              <div className='w-full text-red-700 font-light text-sm -mt-3'>{errors.name}</div>
            ) : null}
            <Field id="author" name="author" placeholder="Escrito por:"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            {errors.author && touched.author ? (
              <div className='w-full text-red-700 font-light text-sm -mt-3'>{errors.author}</div>
            ) : null}
            <Field id="comment" name="comment" placeholder="¿Por qué lo recomendarías?"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Field type="signature" name="signature" placeholder="Tu firma"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <button type="submit" disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 my-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-blue-600"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
};

export default BookForm;