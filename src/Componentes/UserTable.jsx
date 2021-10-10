import React, {Fragment} from 'react';

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <table className="table table-bordered table-striped table-lg">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center text-warning">ID</th>
                    <th className="text-center text-warning">Nombre</th>
                    <th className="text-center text-warning">Precio</th>
                    <th className="text-center text-warning">Descripcion</th>
                    <th className="text-center text-warning">Stock</th>
                    <th className="text-center text-warning">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td className="border-light">{user.id}</td>
                            <td>{user.name}</td>
                            <td>${user.precio}</td>
                            <td>{user.descripcion}</td>
                            <td>{user.stock}pz</td>
                            <td>
                                <button className="button muted-button" class="btn btn-info btn-sm"  
                                onClick={() => {props.editRow(user)}}><i className="fas fa-edit"></i></button> 

                                <button className="button muted-button" class="btn btn-danger btn-sm"
                                onClick={() => {props.deleteUser(user.id)}}><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={5}>No Existen Registros</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        </Fragment>
             );
}
 
export default UserTable;