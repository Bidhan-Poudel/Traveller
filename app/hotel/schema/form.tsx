// import React from "react";
// import { Input, Button } from "@mantine/core";
// import * as yup from "yup";
// import { useForm } from "@mantine/form";

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(6).required(),
// });

// const MyForm = () => {
//   const { formValues, errors, handleChange, handleBlur } = useForm({}, schema, {
//     validateOnChange: true,
//     validateOnMount: true,
//   });

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (Object.keys(errors).length === 0) {
//       // Form submission logic
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input
//         id="email"
//         placeholder="Email"
//         value={formValues.email || ""}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         error={errors.email}
//       />
//       <Input
//         id="password"
//         type="password"
//         placeholder="Password"
//         value={formValues.password || ""}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         error={errors.password}
//       />
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default MyForm;
