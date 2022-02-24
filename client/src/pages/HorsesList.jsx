import React, { Component, useEffect, useState } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const HorsesList = (props) => {
    let [horses, setHorses] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    console.log('props', props);

    useEffect(()=> {
        async function fetchData() {
            setIsLoading(true);

            await api.getAllHorses().then(horses => {
                setHorses(horses.data.data);
                setIsLoading(false);
            })
        }
        fetchData();
    }, []);
    

    console.log('TCL: HorsesList -> render -> horses', horses)

    const columns = [
        {
            Header: 'ID',
            accessor: 'horseId',
            filterable: true,
        },
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
        },
        {
            Header: 'Description',
            accessor: 'description',
            filterable: true,
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <Delete onClick={(e) => {
                            e.preventDefault()

                            if (
                                window.confirm(
                                    `Do tou want to delete the horse ${props.original._id} permanently?`,
                                )
                            ) {
                                api.deleteHorseById(props.original._id)
                                window.location.reload()
                            }
                        }}>Delete</Delete>
                    </span>
                )
            },
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <Update id={props.original._id} onClick={(e) => {
                            e.preventDefault()

                            window.location.href = `/horses/update/${props.original._id}`
                        }}>Update</Update>
                    </span>
                )
            },
        },
    ]

    let showTable = true
    if (!horses.length) {
        showTable = false
    }

    return (
        <Wrapper>
            {showTable && (
                <ReactTable
                    data={horses}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            )}
        </Wrapper>
    )
}

export default HorsesList;