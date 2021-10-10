import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

   const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        props.addUser(data);
    }

        return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre:</label>
                <input type="text" name="name"
                {...register("name", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="number" name="precio" step="0.01" min="0" max="1000" //placeholder="1.00" 
                {...register("precio",  { required: true})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}

                <label>Descipcion:</label>
                <input type="text" name="descripcion"
                {...register("descripcion", { required: true, maxLength: 10000})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 10000"}

                <label>Stock:</label>
                <input type="number" name="stock" step="0.01" min="0" max="1000"
                {...register("stock", { required: true})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}

                <br/>
                <button class="btn btn-primary btn-block">Añadir Nuevo Producto</button>
                
            </form>
        </Fragment> 
     );
}
export default AddUserForm;