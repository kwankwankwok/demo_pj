import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertHorse = payload => api.post(`/horse`, payload)
export const getAllHorses = () => api.get(`/horses`)
export const updateHorseById = (id, payload) => api.put(`/horse/${id}`, payload)
export const deleteHorseById = id => api.delete(`/horse/${id}`)
export const getHorseById = id => api.get(`/horse/${id}`)

const apis = {
    insertHorse,
    getAllHorses,
    updateHorseById,
    deleteHorseById,
    getHorseById,
}

export default apis