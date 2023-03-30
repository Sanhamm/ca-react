import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./formUtils/schema";
import { FormBtn, FormStyled } from "./style";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <input {...register("fName")} placeholder='Full name'></input>
      <span>{errors.fName?.message}</span>
      <input {...register("subject")} placeholder='Subject'></input>
      <span>{errors.subject?.message}</span>
      <input {...register("email")} placeholder='Email'></input>
      <span>{errors.email?.message}</span>
      <textarea {...register("body")} placeholder='Message'></textarea>
      <span>{errors.body?.message}</span>
      <FormBtn>Submit</FormBtn>
    </FormStyled>
  );
};

export default FormContact;
