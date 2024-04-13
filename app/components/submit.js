'use client'
import { useState } from "react"
import { getType } from "@/app/actions/action"
import Card from "@/app/components/card"
import Data from "@/app/components/data"
export default function Submit() {
    const [loading, setLoading] = useState(false);
    const onCompleted = async function (result) {
        setLoading(true);
        await getType(result);
    }
    return loading ? (<div></div>) : (<Card data={Data} onCompleted={onCompleted} />);
}