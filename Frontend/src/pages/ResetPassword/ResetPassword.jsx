import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import styles from "./resetPassword.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Introduce una dirección de correo electrónico válida").required("Campo obligatorio"),
});

function ResetPassword() {
  const buttonRef = useRef();
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (values) => {
    console.log(values);

    buttonRef.current.disabled = true;
    setTimeout(() => {
      if (values.email !== "pepe@gmail.com") setEmailError("No existe una cuenta con ese email");
      else setEmailError("");
      buttonRef.current.disabled = false;
    }, 1000);
  };

  return (
    <div className={`d-flex flex-column p-3 ${styles.container}`}>
      <h2>Recuperar tu contraseña</h2>
      <p>Ingrese su correo registrado para generar una nueva contraseña</p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className={styles.form}>
            <div className="mb-3">
              <Field
                className={`form-control ${errors.email && styles.inputError}`}
                id="email"
                name="email"
                placeholder="nombre@gmail.com"
              />
              {errors.email ? (
                <p className={styles.textError}>{errors.email}</p>
              ) : emailError ? (
                <p className={styles.textError}>{emailError}</p>
              ) : null}
            </div>

            <button ref={buttonRef} type="submit" className={`btn w-100 text-white  ${styles.button}`}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default ResetPassword;
