import { Client } from 'pg'
const createClient = () => new Client({
  database: 'hackjobgames'
})

 
export const query = async (sql) => {
  const client = createClient()
  client.connect()
  const rows = (await client.query(sql)).rows
  await client.end()
  return rows
}
