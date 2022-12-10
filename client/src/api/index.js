import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://ec2-18-166-154-126.ap-east-1.compute.amazonaws.com:3000/api',
    baseURL: '/.netlify/functions/api',
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