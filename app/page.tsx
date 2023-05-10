import Link from "next/link"
import Client from "./Client"

async function getClients(){
  const res = await fetch(`${process.env.BASE_URL}/api/getClients`)
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: {id: number, name:string}[] = await getClients()
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/addClient">Προσθήκη Πελάτη</Link>      
      {data.map(client => (
        <Client 
          key={client.id}
          id={client.id}
          name={client.name}
        />
      ))}
    </main>
  )
}
