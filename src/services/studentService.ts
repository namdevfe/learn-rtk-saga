import { ListParams, ListResponse, Student } from '../models'
import axiosClient from './axiosClient'

const studentService = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students'
    return axiosClient.get(url, { params })
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`
    return axiosClient.get(url)
  },
  add(payload: Student): Promise<Student> {
    const url = '/students'
    return axiosClient.post(url, payload)
  },
  update(id: string, payload: Partial<Student>): Promise<Student> {
    const url = `/students/${id}`
    return axiosClient.patch(url, payload)
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`
    return axiosClient.delete(url)
  }
}

export default studentService
