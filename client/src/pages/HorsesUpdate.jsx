import React, { Component, useEffect, useState } from 'react'
import api from '../api'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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
const HorsesUpdate = (props) => {
    let { id } = useParams();
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
        const r = event.target.validity.valid
            ? event.target.value
            : rating

        setRating(r);
    }

    const handleUpdateHorse = async () => {
        const payload = { name, description }

        await api.updateHorseById(id, payload).then(res => {
            window.alert(`Horse updated successfully`)
            setName('');
            setDescription('');
        })
    }

    useEffect(() => {
        (async () => {
            const horse = await api.getHorseById(id)

            setName(horse.data.data.name);
            setHorseId(horse.data.data.horseId);
            setDescription(horse.data.data.description);
        })();
    },[])

    return (
        <Wrapper>
            <Title>Update Horse</Title>

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

            <Button onClick={handleUpdateHorse}>Update Horse</Button>
            <CancelButton href={'/horses/list'}>Cancel</CancelButton>
        </Wrapper>
    )

}


export default HorsesUpdate