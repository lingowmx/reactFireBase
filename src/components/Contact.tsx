import { useForm } from "react-hook-form";

// interface ContactProps{
//   name:string
//   email:string
// }

export const Contact = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const [valores, setValores] = useState({
  //   name:"",
  //   email:""
  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("ENVIADO", {valores})
  // }

  // const handleValores = (e) => {
  //   setValores({
  //     ...valores,
  //     [e.target.name]: e.target.value
  //   })
  // }
  const enviar = (data) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm();
  return (
    <div className="w-80 mx-auto mt-12">
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit(enviar)}
      >
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("name")}
          className="border border-gray-400"
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email")}
          className="border border-gray-400"
        />
        <button
          type="submit"
          className="border border-green-800 w-12 rounded-lg cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

// nivel 3 para uso de formularios en react
