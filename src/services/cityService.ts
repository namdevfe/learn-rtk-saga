import { City, ListResponse } from '../models'
import axiosClient from './axiosClient'

const cityService = {
  getAll(): Promise<ListResponse<City>> {
    return axiosClient.get('/cities')
  }
}

export default cityService
