'use client'
import { useState } from "react"
import { getType } from "@/app/actions/action"
import Card from "@/app/components/card"
export default function Submit({data}) {
    const [loading, setLoading] = useState(false);
    const onCompleted = async function (result) {
        setLoading(true);
        await getType(result);
    }
    return loading ? (<div></div>) : (<Card data={data} onCompleted={onCompleted} />);
}