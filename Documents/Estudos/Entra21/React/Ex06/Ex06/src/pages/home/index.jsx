import React, { useContext, useState } from 'react';
import { Input, Form, SubmitCancelDiv, CancelButton, SubmitInput, StyledLink } from './styles';
import { usersContext } from '../../context/context';

export function Home() {
    const { users, setUsers } = useContext(usersContext);

    const [formData, setFormData] = useState({
        nome: '',
        dataNascimento: '',
        email: '',
        cpf: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsers([...users, formData]);

        setFormData({
            nome: '',
            dataNascimento: '',
            email: '',
            cpf: '',
        });

        console.log(users)
    };

    return (
        <>
            <h1>home</h1>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                />
                <Input
                    type="date"
                    placeholder="Data de Nascimento"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                />

                <SubmitCancelDiv>
                    <CancelButton>Cancelar</CancelButton>
                    <SubmitInput type="submit"></SubmitInput>
                </SubmitCancelDiv>
            </Form>

            <StyledLink to="/list">Visualizar usuários cadastrados</StyledLink>
        </>
    );
}
