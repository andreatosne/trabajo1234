import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const URI =' http://localhost:8000/blogs/'
function CompVale() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstName',{ required: true})} />
      {errors.firstName && <p>firstName is required.</p>}
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
export default CompVale