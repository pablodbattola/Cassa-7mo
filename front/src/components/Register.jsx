import { api } from "../api/axiosConfig"
import { useState } from "react"

function Register() {
    const [form, setForm] = useState({name: "", lastname: "", email: "", password:"", confirmPassword:""})

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev, [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(form.password !== form.confirmPassword){
            alert("las contraseñas no coinciden")
        return;
    }

        try{
            const payload = {
                name:form.name,
                lastname:form.lastname,
                email:form.email,
                password:form.password,
                confirmPassword:form.confirmPassword
            }
            await api.post("/user", payload
            )
            alert("Usuario Registrado correctamente")
            setForm({name: "", lastname: "", email: "", password:"", confirmPassword:""})

        }catch(error){
            alert("Error al registrar el usuario", error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>REGISTRO DE USUARIOS</h2>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
            <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Apellido"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
            <input name="password" value={form.password} onChange={handleChange} placeholder="Password"/>
            <input name= "confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password"/>
            <button type="submit">REGISTRAR</button>
        </form>
    )

}


export default Register