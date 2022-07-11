import {Router} from 'express'

const router = Router()

router.get('/draw', (req, res) => res.send('I') ) 



export default router