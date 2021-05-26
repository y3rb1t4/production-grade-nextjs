import nc from 'next-connect'
import middleware from '../../../middleware/all'
import onError from '../../../middleware/error'
import { doc } from '../../../db'
import { Request } from '../../../types'

const handler = nc({
  onError,
})

handler.post(async (req: Request, res) => {
  const newDoc = await doc.createDoc(req.db, {
    ...req.body,
    createBy: req.user.id,
  })
  res.send({ data: newDoc })
})

export default handler
