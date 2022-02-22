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
    let [name, setName] = useState('');
    let [rating, setRating] = useState('');
    let [time, setTime] = useState(''); 

    const handleChangeInputName = (event) => {
        const n = event.target.value
        setName(n);
    };

    const handleChangeInputRating = (event) => {
        const r = event.target.validity.valid
            ? event.target.value
            : rating

        setRating(r);
    }

    const handleChangeInputTime = (event) => {
        const t = event.target.value
        setTime(t);
    }

    const handleUpdateHorse = async () => {
        // const { id, name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await api.updateHorseById(id, payload).then(res => {
            window.alert(`Horse updated successfully`)
            setName('');
            setRating('');
            setTime('');
        })
    }

    useEffect(() => {
        (async () => {
            const horse = await api.getHorseById(id)

            setName(horse.data.data.name);
            setRating(horse.data.data.rating);
            setTime(horse.data.data.time.join('/'));
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

            <Label>Rating: </Label>
            <InputText
                type="number"
                step="0.1"
                lang="en-US"
                min="0"
                max="10"
                pattern="[0-9]+([,\.][0-9]+)?"
                value={rating}
                onChange={handleChangeInputRating}
            />

            <Label>Time: </Label>
            <InputText
                type="text"
                value={time}
                onChange={handleChangeInputTime}
            />

            <Button onClick={handleUpdateHorse}>Update Horse</Button>
            <CancelButton href={'/horses/list'}>Cancel</CancelButton>
        </Wrapper>
    )

}

// class HorsesUpdate extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             name: '',
//             rating: '',
//             time: '',
//         }
//     }

//     handleChangeInputName = async event => {
//         const name = event.target.value
//         this.setState({ name })
//     }

//     handleChangeInputRating = async event => {
//         const rating = event.target.validity.valid
//             ? event.target.value
//             : this.state.rating

//         this.setState({ rating })
//     }

//     handleChangeInputTime = async event => {
//         const time = event.target.value
//         this.setState({ time })
//     }

//     handleUpdateHorse = async () => {
//         const { id, name, rating, time } = this.state
//         const arrayTime = time.split('/')
//         const payload = { name, rating, time: arrayTime }

//         await api.updateHorseById(id, payload).then(res => {
//             window.alert(`Horse updated successfully`)
//             this.setState({
//                 name: '',
//                 rating: '',
//                 time: '',
//             })
//         })
//     }

//     componentDidMount = async () => {
//         const { id } = this.state
//         const horse = await api.getHorseById(id)

//         this.setState({
//             name: horse.data.data.name,
//             rating: horse.data.data.rating,
//             time: horse.data.data.time.join('/'),
//         })
//     }

//     render() {
//         const { name, rating, time } = this.state
//         return (
//             <Wrapper>
//                 <Title>Create Horse</Title>

//                 <Label>Name: </Label>
//                 <InputText
//                     type="text"
//                     value={name}
//                     onChange={this.handleChangeInputName}
//                 />

//                 <Label>Rating: </Label>
//                 <InputText
//                     type="number"
//                     step="0.1"
//                     lang="en-US"
//                     min="0"
//                     max="10"
//                     pattern="[0-9]+([,\.][0-9]+)?"
//                     value={rating}
//                     onChange={this.handleChangeInputRating}
//                 />

//                 <Label>Time: </Label>
//                 <InputText
//                     type="text"
//                     value={time}
//                     onChange={this.handleChangeInputTime}
//                 />

//                 <Button onClick={this.handleUpdateHorse}>Update Horse</Button>
//                 <CancelButton href={'/horses/list'}>Cancel</CancelButton>
//             </Wrapper>
//         )
//     }
// }

export default HorsesUpdate