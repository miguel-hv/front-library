// Render Prop
import { Formik, Form, Field } from 'formik';
import { BooksService } from '../api/BooksService';


const BookForm = () => {

  return (
    <>
      <Formik
        initialValues={{ name: '', author: '', comment: '', signature:''}}
        onSubmit={(values, { setSubmitting }) => {
          BooksService.postBook(values);
          console.log(BooksService.postBook(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field id="name" name="name" placeholder="Título del libro"
              className="w-full border border-gray-400 rounded py-1 px-2 mb-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Field id="author" name="author" placeholder="Escrito por:"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Field id="comment" name="comment" placeholder="¿Por qué lo recomendarías?"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Field type="signature" name="signature" placeholder="Tu firma"
              className="w-full border border-gray-400 rounded py-1 px-2 my-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <button type="submit" disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 my-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus: ring-blue-600"
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