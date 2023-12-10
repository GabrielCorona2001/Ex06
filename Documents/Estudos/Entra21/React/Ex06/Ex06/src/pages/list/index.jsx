import { UlUsers, LiUsers } from "./styles"
import React, { useContext } from 'react';
import { usersContext } from '../../context/context';

export function List() {
    const { users } = useContext(usersContext);

    const listUsers = users.map((user, index) => (
        <LiUsers key={index}> Nome: {user.nome}, Email: {user.email}</LiUsers>
    ));

    return (
        <UlUsers>
            {listUsers}
        </UlUsers>
    );
}
