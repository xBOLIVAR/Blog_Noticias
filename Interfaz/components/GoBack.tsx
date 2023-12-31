"use client";
import { useRouter } from "next/navigation";

function GoBack() {
    const router = useRouter();

    return <button className="buttonAnimation" onClick={() => router.push("/")}>Volver</button>
}

export default GoBack;