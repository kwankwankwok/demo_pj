import React, { Component, useState } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const HorsesInsert = (props) => {
    let [horseId, setHorseId] = useState(undefined);
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');

    const handleChangeInputName = (event) => {
        const n = event.target.value
        setName(n);
    };

    const handleChangeInputHorseId = (event) => {
        const r = event.target.value;

        setHorseId(r);
    }

    const handleChangeInputDescr = (event) => {
        const r = event.target.value

        setDescription(r);
    }

    const handleInsertHorse = async () => {
        const payload = { horseId, name, description }

        await api.insertHorse(payload).then(res => {
            window.alert(`Horse inserted successfully`)
            setHorseId('');
            setName('');
            setDescription('');
        })
    }

    return (
        <Wrapper>
            <Title>Create Horse</Title>

            <Label>Name: </Label>
            <InputText
                type="text"
                value={name}
                onChange={handleChangeInputName}
            />

            <Label>Horse ID: </Label>
            <InputText
                type="number"
                value={horseId}
                onChange={handleChangeInputHorseId}
            />

            <Label>Description: </Label>
            <InputText
                type="text"
                value={description}
                onChange={handleChangeInputDescr}
            />

            <Button onClick={handleInsertHorse}>Add Horse</Button>
            <CancelButton href={'/horses/list'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default HorsesInsert