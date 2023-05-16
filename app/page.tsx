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
  const data: {id: number, name:string}[] = await getClients()
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/addClient">Προσθήκη Πελάτη</Link>      
      <div className="container mx-auto">
      {data.map(client => (
        <Client 
          user = {client}
        />
      ))}
      </div>
    </main>
  )
}
