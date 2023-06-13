import Link from "next/link"
import Client from "./Client"

async function getClients(){
  const res = await fetch(`${process.env.BASE_URL}/api/getClients`, { cache: "no-store" })
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: {id: number, name:string, dueDate:string}[] = await getClients()
  console.log(data)
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Link href="/addClient">Προσθήκη Πελάτη</Link>  
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4">Όνομα</th>
              <th className="py-2 px-4">Τηλέφωνο</th>
              <th className="py-2 px-4">Εταιρεία</th>
              <th className="py-2 px-4">Τιμή</th>
              <th className="py-2 px-4">Λήξη</th>
            </tr>
          </thead>
          <tbody>
            {data.map(client => {
              return (
              
              <Client 
                user = {client}
                key = {client.id}
              />
            )})}
          </tbody>
        </table>
      </div>   
    </main>
  )
}
