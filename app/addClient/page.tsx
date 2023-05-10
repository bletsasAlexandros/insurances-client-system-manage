import FormPost from "./Form";
import Link from 'next/link';

export default function AddClient() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/">Πίσω</Link>
        <h1>Εισαγωγή Πελάτη</h1>
        <FormPost />
        </main>
    )
}