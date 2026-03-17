import { Router, Request, Response } from 'express'
import { Todo } from '../models/todo'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const todos = await Todo.find()
  res.json(todos)
})

router.post('/', async (req: Request, res: Response) => {
  const todo = await Todo.create(req.body)
  res.status(201).json(todo)
})

export default router